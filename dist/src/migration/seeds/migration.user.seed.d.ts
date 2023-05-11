import { AuthService } from 'src/common/auth/services/auth.service';
import { UserService } from 'src/modules/user/services/user.service';
import { RoleService } from 'src/modules/role/services/role.service';
export declare class MigrationUserSeed {
    private readonly authService;
    private readonly userService;
    private readonly roleService;
    constructor(authService: AuthService, userService: UserService, roleService: RoleService);
    seeds(): Promise<void>;
    remove(): Promise<void>;
}
