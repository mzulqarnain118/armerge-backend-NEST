import { RoleService } from 'src/modules/role/services/role.service';
export declare class MigrationRoleSeed {
    private readonly roleService;
    constructor(roleService: RoleService);
    seeds(): Promise<void>;
    remove(): Promise<void>;
}
