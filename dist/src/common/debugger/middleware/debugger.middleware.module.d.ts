import { NestModule, MiddlewareConsumer } from '@nestjs/common';
export declare class DebuggerMiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
