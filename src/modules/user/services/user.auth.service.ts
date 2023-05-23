import { ISendMailOptions } from '@nestjs-modules/mailer';
import {
    BadRequestException,
    Injectable,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import sgMail from '@sendgrid/mail';

import { AuthService } from '~common/auth/services/auth.service';
import { HelperEncryptionService } from '~common/helper/services/helper.encryption.service';
import { MailerService } from '~common/mail/mailer.service';

import { ENUM_USER_STATUS_CODE_ERROR } from '../constants/user.status-code.constant';
import { UserDoc } from '../repository/entities/user.entity';
import { UserService } from './user.service';

@Injectable()
export class UserAuthService {
    private readonly logger = new Logger('user.auth.service');

    constructor(
        private readonly authService: AuthService,
        private readonly encryptionService: HelperEncryptionService,
        private readonly mailer: MailerService,
        private readonly userService: UserService
    ) {}
    async createResetPasswordToken(user: UserDoc): Promise<string> {
        const token = this.encryptionService.jwtEncrypt(
            { email: user.email },
            {
                secretKey: process.env.JWT_PASSWORD_RESET_SECRET,
                expiredIn: '1h',
                audience: '',
                issuer: 'armerge',
                subject: 'forgot password',
            }
        );
        return token;
    }

    async resetPassword(email: string) {
        try {
            const user = await this.userService.findOneByEmail<UserDoc>(email);

            if (!user) {
                throw new NotFoundException({
                    statusCode:
                        ENUM_USER_STATUS_CODE_ERROR.USER_NOT_FOUND_ERROR,
                    message: 'user.error.notFound',
                });
            }

            const token = await this.createResetPasswordToken(user);

            const expiresAt = new Date();
            expiresAt.setMinutes(expiresAt.getMinutes() + 15); // Token expires after 15 minutes

            user.passwordReset = { token, expiresAt };

            await user.save();

            await this.sendPasswordResetMail(user.email, token);

            return true;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async validateTokenAndResetPassword(token: string, newPassword: string) {
        const isValid = this.encryptionService.jwtVerify(token, {
            secretKey: process.env.JWT_PASSWORD_RESET_SECRET,
            audience: '',
            issuer: 'armerge',
            subject: 'forgot password',
        });

        if (!isValid)
            throw new BadRequestException({
                statusCode:
                    ENUM_USER_STATUS_CODE_ERROR.INVALID_PASSWORD_RESET_TOKEN,
                message: 'user.error.badRequest',
            });

        const user = await this.userService.findOne<UserDoc>({
            'passwordReset.token': token,
            'passwordReset.expiresAt': { $gt: new Date() },
        });

        if (!user)
            throw new BadRequestException({
                statusCode:
                    ENUM_USER_STATUS_CODE_ERROR.INVALID_PASSWORD_RESET_TOKEN,
                message: 'user.error.badRequest',
            });

        const isEqual = token === user.passwordReset.token;

        if (!isEqual)
            throw new BadRequestException({
                statusCode:
                    ENUM_USER_STATUS_CODE_ERROR.INVALID_PASSWORD_RESET_TOKEN,
                message: 'user.error.badRequest',
            });

        const { passwordHash, passwordExpired, salt, passwordCreated } =
            await this.authService.createPassword(newPassword);

        user.password = passwordHash;
        user.passwordExpired = passwordExpired;
        user.passwordCreated = passwordCreated;
        user.salt = salt;
        user.passwordReset.token = "null";

        await user.save();

        return true;
    }

    async sendPasswordResetMail(email: string, token: string) {
        sgMail.setApiKey(process.env.API_KEY_SENDGRID);

        const clientURL = process.env.CLIENT_URL;
        const resetPassURL = `${clientURL}/reset-password/${token}`;
        const mailData: ISendMailOptions = {
            to: email,
            from: process.env.MAIL_FROM_ADDRESS,
            subject: 'Reset Password',
            template: 'resetPassword',
            context: {
                resetPassURL,
            },
        };

        try {
            await this.mailer.sendMail(mailData);
            console.log('Reset Mail Sent to: ', email);
        } catch (err) {
            console.log('Error: ', JSON.stringify(err));
        }
    }

    async createEmailVerificationToken(email: string): Promise<string> {
        const token = this.encryptionService.jwtEncrypt(
            { email },
            {
                secretKey: process.env.JWT_EMAIL_VERIFICATION_SECRET,
                expiredIn: '1h',
                audience: '',
                issuer: 'armerge',
                subject: 'verify email',
            }
        );
        return token;
    }

    async verifyEmail(email: string) {
        const user = await this.userService.findOneByEmail<UserDoc>(email);
        if (!user) {
            throw new NotFoundException({
                statusCode: ENUM_USER_STATUS_CODE_ERROR.USER_NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }

        const token = await this.createEmailVerificationToken(email);

        user.emailVerificationToken = token;
        await user.save();

        await this.sendVerificationEmail(email, token);

        this.logger.log(`Email verification mail sent to ${email}`);

        return;
    }

    async verifyEmailVerificationToken(token: string) {
        const isValid = this.encryptionService.jwtVerify(token, {
            secretKey: process.env.JWT_EMAIL_VERIFICATION_SECRET,
            audience: '',
            issuer: 'armerge',
            subject: 'verify email',
        });

        if (!isValid)
            throw new BadRequestException({
                statusCode:
                    ENUM_USER_STATUS_CODE_ERROR.INVALID_EMAIL_VERIFICATION_TOKEN,
                message: 'user.error.invalidEmailVerificationToken',
            });

        const { email } = this.encryptionService.jwtDecrypt(token);

        const user = await this.userService.findOneByEmail<UserDoc>(email);
        if (!user) {
            throw new NotFoundException({
                statusCode: ENUM_USER_STATUS_CODE_ERROR.USER_NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }

        if (user.emailVerificationToken !== token) {
            throw new BadRequestException({
                statusCode:
                    ENUM_USER_STATUS_CODE_ERROR.INVALID_EMAIL_VERIFICATION_TOKEN,
                message: 'user.error.invalidEmailVerificationToken',
            });
        }

        user.isEmailVerified = true;
        user.emailVerificationToken = undefined;
        await user.save();
    }

    async sendVerificationEmail(to: string, token: string) {
        const verificationUrl = `${process.env.CLIENT_VERIFY_EMAIL_URL}?token=${token}`;
        try {
            await this.mailer.sendMail({
                from: process.env.MAIL_FROM_ADDRESS,
                to: 'iamsohaib@protonmail.com',
                subject: 'Verify your email address',
                html: `<p>Please click <a href="${verificationUrl}">here</a> to verify your email address.</p>`,
            });
        } catch (error) {
            console.log(
                'Error sending verification email:\n ',
                JSON.stringify(error)
            );
        }
    }
}
