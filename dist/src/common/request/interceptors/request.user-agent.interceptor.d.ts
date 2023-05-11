import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
export declare class RequestUserAgentInterceptor implements NestInterceptor<Promise<any>> {
    private readonly configService;
    private readonly userAgentOs;
    private readonly userAgentBrowser;
    constructor(configService: ConfigService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<Promise<any> | string>>;
}
