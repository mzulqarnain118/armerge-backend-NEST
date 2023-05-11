import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class UserNotFoundGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
