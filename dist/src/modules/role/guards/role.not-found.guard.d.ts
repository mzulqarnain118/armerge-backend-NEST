import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class RoleNotFoundGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
