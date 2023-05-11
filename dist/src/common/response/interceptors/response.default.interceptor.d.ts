import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MessageService } from 'src/common/message/services/message.service';
import { Reflector } from '@nestjs/core';
import { ResponseDefaultSerialization } from 'src/common/response/serializations/response.default.serialization';
export declare class ResponseDefaultInterceptor<T> implements NestInterceptor<Promise<T>> {
    private readonly reflector;
    private readonly messageService;
    constructor(reflector: Reflector, messageService: MessageService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<Promise<ResponseDefaultSerialization>>>;
}
