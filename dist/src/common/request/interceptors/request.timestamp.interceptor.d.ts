import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
export declare class RequestTimestampInterceptor implements NestInterceptor<Promise<any>> {
    private readonly configService;
    private readonly helperDateService;
    private readonly maxRequestTimestampInMs;
    constructor(configService: ConfigService, helperDateService: HelperDateService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<Promise<any> | string>>;
}
