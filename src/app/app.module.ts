import { Module, MiddlewareConsumer } from '@nestjs/common';
// import { JobsModule } from 'src/jobs/jobs.module';
import { AppController } from './controllers/app.controller';
import { RouterModule } from 'src/router/router.module';
import { CommonModule } from 'src/common/common.module';
import { LoggerMiddleware } from 'src/middlewares/requestLogger.middleware';
import morgan from 'morgan';

@Module({
    controllers: [AppController],
    providers: [],
    imports: [
        CommonModule,

        // Jobs
        // JobsModule.forRoot(),

        // Routes
        RouterModule.forRoot(),
    ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
        consumer.apply(morgan('dev')).forRoutes('*');
    }
}
