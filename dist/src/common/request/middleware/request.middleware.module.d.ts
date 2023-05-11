import { NestModule, MiddlewareConsumer } from '@nestjs/common';
export declare class RequestMiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
