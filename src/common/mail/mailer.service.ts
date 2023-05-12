import { Injectable } from '@nestjs/common';
import { ISendMailOptions, MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';

@Injectable()
export class MailerService {
    constructor(private readonly mailerService: NestMailerService) {}

    async sendMail(options: ISendMailOptions): Promise<SentMessageInfo> {
        return await this.mailerService.sendMail(options);
    }
}
