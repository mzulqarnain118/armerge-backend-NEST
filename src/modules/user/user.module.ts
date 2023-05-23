import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/modules/user/repository/user.repository.module';
import { UserService } from './services/user.service';
import { UserAuthService } from './services/user.auth.service';
import { MailerModule } from '~common/mail/mailer.module';
import { AuthModule } from '~src/common/auth/auth.module';

@Module({
    imports: [AuthModule, UserRepositoryModule, MailerModule],
    exports: [UserService, UserAuthService],
    providers: [UserService, UserAuthService],
})
export class UserModule {}
