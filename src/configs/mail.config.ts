import { registerAs } from '@nestjs/config';

export default registerAs(
    'mail',
    (): Record<string, any> => ({
        host: process.env.SMTP_HOST ?? 'smtp.sendgrid.net',
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        username: process.env.SMTP_USERNAME,
        password: process.env.SMTP_PASSWORD,
        mailFromName: process.env.MAIL_FROM_NAME,
        mailFromAddress: process.env.MAIL_FROM_ADDRESS,
    })
);
