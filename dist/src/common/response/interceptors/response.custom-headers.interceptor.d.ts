import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class ResponseCustomHeadersInterceptor implements NestInterceptor<Promise<any>> {
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<Promise<any> | string>>;
}
