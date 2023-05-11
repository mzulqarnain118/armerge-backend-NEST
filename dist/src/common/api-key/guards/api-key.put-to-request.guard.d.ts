import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ApiKeyService } from 'src/common/api-key/services/api-key.service';
export declare class ApiKeyPutToRequestGuard implements CanActivate {
    private readonly apiKeyService;
    constructor(apiKeyService: ApiKeyService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
