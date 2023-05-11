import { CanActivate, ExecutionContext } from '@nestjs/common';
import { RoleService } from 'src/modules/role/services/role.service';
export declare class RolePutToRequestGuard implements CanActivate {
    private readonly roleService;
    constructor(roleService: RoleService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
