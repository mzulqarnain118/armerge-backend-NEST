import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class UserCanNotOurSelfGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
