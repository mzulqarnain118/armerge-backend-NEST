import { ExecutionContext } from '@nestjs/common';
import { HelperNumberService } from 'src/common/helper/services/helper.number.service';
declare const ApiKeyXApiKeyGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class ApiKeyXApiKeyGuard extends ApiKeyXApiKeyGuard_base {
    private readonly helperNumberService;
    constructor(helperNumberService: HelperNumberService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest<IApiKeyPayload = any>(err: Record<string, any>, apiKey: IApiKeyPayload, info: Error | string): IApiKeyPayload;
}
export {};
