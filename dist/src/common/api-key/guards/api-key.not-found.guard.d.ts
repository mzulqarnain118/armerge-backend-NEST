import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class ApiKeyNotFoundGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
