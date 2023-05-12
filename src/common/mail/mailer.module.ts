import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Module({
    // imports: [
    //     NestMailerModule.forRoot({
    //         transport: {
    //             host: 'smtp.sendgrid.net',
    //             port: Number(process.env.SMTP_PORT),
    //             auth: {
    //                 user: 'apikey',
    //                 pass: process.env.API_KEY_SENDGRID,
    //             },       
    //         },
    //         defaults: {
    //             from: '"No Reply" <noreply@em4793.devcrew.io>',
    //         },
    //     }),
    // ],
    providers: [MailerService],
    exports: [MailerService],
})
export class MailerModule {}
