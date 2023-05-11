import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MessageService } from 'src/common/message/services/message.service';
import { Reflector } from '@nestjs/core';
import { ResponsePagingSerialization } from 'src/common/response/serializations/response.paging.serialization';
import { HelperArrayService } from 'src/common/helper/services/helper.array.service';
export declare class ResponsePagingInterceptor<T> implements NestInterceptor<Promise<T>> {
    private readonly reflector;
    private readonly messageService;
    private readonly helperArrayService;
    constructor(reflector: Reflector, messageService: MessageService, helperArrayService: HelperArrayService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<Promise<ResponsePagingSerialization>>>;
}
