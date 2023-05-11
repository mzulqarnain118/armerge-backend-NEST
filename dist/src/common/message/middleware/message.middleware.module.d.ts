import { NestModule, MiddlewareConsumer } from '@nestjs/common';
export declare class MessageMiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
