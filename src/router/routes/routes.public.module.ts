import morgan from "morgan";
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";

import { AuthModule } from "~common/auth/auth.module";
// import { HealthModule } from 'src/health/health.module';
// import { HealthPublicController } from 'src/health/controllers/health.public.controller';
import { MessagePublicController } from "~common/message/controllers/message.public.controller";
import { SettingPublicController } from "~common/setting/controllers/setting.public.controller";
import { RoleModule } from "~modules/role/role.module";
import { StoreController } from "~modules/store/store.controller";
import { StoreModule } from "~modules/store/store.module";
import { UserPublicController } from "~modules/user/controllers/user.public.controller";
import { UserModule } from "~modules/user/user.module";


@Module({
    controllers: [
        // HealthPublicController,
        MessagePublicController,
        SettingPublicController,
        UserPublicController,
        StoreController
    ],
    imports: [
        TerminusModule, // HealthModule,
        UserModule,
        AuthModule,
        RoleModule,
        StoreModule,
    ],
})
export class RoutesPublicModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(morgan('common')).forRoutes('*');
    }
}
