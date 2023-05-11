import { NestModule, MiddlewareConsumer } from '@nestjs/common';
export declare class ResponseMiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
