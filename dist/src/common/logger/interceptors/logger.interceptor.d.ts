import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { LoggerService } from 'src/common/logger/services/logger.service';
export declare class LoggerInterceptor implements NestInterceptor<any> {
    private readonly reflector;
    private readonly loggerService;
    constructor(reflector: Reflector, loggerService: LoggerService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<Promise<any> | string>>;
}
