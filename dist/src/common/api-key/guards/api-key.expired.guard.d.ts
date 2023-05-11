import { CanActivate, ExecutionContext } from '@nestjs/common';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
export declare class ApiKeyExpiredGuard implements CanActivate {
    private readonly helperDateService;
    constructor(helperDateService: HelperDateService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
