import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/modules/user/repository/user.repository.module';
import { UserService } from './services/user.service';
import { UserAuthService } from './services/user.auth.service';

@Module({
    imports: [UserRepositoryModule],
    exports: [UserService, UserAuthService],
    providers: [UserService, UserAuthService],
})
export class UserModule {}
