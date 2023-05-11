import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class SettingNotFoundGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
