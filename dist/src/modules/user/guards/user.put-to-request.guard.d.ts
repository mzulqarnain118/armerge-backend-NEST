import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UserService } from 'src/modules/user/services/user.service';
export declare class UserPutToRequestGuard implements CanActivate {
    private readonly userService;
    constructor(userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
