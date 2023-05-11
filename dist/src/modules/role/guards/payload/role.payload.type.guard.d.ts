import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { HelperArrayService } from 'src/common/helper/services/helper.array.service';
export declare class RolePayloadTypeGuard implements CanActivate {
    private readonly reflector;
    private readonly helperArrayService;
    constructor(reflector: Reflector, helperArrayService: HelperArrayService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
