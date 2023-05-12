import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import sgMail from '@sendgrid/mail';
import { UserService } from './user.service';
import { UserDoc } from '../repository/entities/user.entity';
import { HelperEncryptionService } from '~src/common/helper/services/helper.encryption.service';
import { ENUM_USER_STATUS_CODE_ERROR } from '../constants/user.status-code.constant';
import { MailerService } from '~common/mail/mailer.service';
import { ISendMailOptions } from '@nestjs-modules/mailer';

@Injectable()
export class UserAuthService {
    constructor(
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

            await this.passwordResetMail(user.email, token);

            return true;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async validatePasswordResetToken(token: string) {
        const isValid = this.encryptionService.jwtVerify(token, {
            secretKey: process.env.JWT_PASSWORD_RESET_SECRET,
            audience: '',
            issuer: 'armerge',
            subject: 'forgot password',
        });

        if (!isValid)
            throw new BadRequestException({
                statusCode:
                    ENUM_USER_STATUS_CODE_ERROR.USER_INVALID_PASSWORD_RESET_TOKEN,
                message: 'user.error.badRequest',
            });

        const user = await this.userService.findOne<UserDoc>({
            'passwordReset.token': token,
            expiresAt: { $gt: new Date() },
        });

        if (!user) throw new BadRequestException('Invalid Token');

        const isEqual = token === user.passwordReset.token;

        if (!isEqual) throw new BadRequestException('Invalid Token');

        return isValid;
    }

    async passwordResetMail(email: string, token: string) {
        sgMail.setApiKey(process.env.API_KEY_SENDGRID);
        const clientURL = process.env.CLIENT_URL;
        const resetPassURL = `${clientURL}/reset-password/${token}`;

        const mailData: ISendMailOptions = {
            to: email,
            from: 'noreply@em4793.devcrew.io',
            subject: 'Reset Password',
            template: "resetPassword",
            context: {
                resetPassURL
            }
        };

        try {
            await this.mailer.sendMail(mailData);
            console.log('Reset Mail Sent to: ', email);
        } catch (err) {
            console.log("Error: ", JSON.stringify(err));
        }
    }
}
