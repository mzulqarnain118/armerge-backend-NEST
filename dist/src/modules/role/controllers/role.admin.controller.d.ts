import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { RoleCreateDto } from 'src/modules/role/dtos/role.create.dto';
import { RoleUpdatePermissionDto } from 'src/modules/role/dtos/role.update-permission.dto';
import { RoleUpdateDto } from 'src/modules/role/dtos/role.update.dto';
import { RoleDoc, RoleEntity } from 'src/modules/role/repository/entities/role.entity';
import { RoleService } from 'src/modules/role/services/role.service';
import { UserService } from 'src/modules/user/services/user.service';
export declare class RoleAdminController {
    private readonly paginationService;
    private readonly roleService;
    private readonly userService;
    constructor(paginationService: PaginationService, roleService: RoleService, userService: UserService);
    list({ _search, _limit, _offset, _order }: PaginationListDto, isActive: Record<string, any>, type: Record<string, any>): Promise<IResponsePaging>;
    get(role: RoleEntity): Promise<IResponse>;
    create({ name, description, type, permissions }: RoleCreateDto): Promise<IResponse>;
    update(role: RoleDoc, { description }: RoleUpdateDto): Promise<IResponse>;
    updatePermission(role: RoleDoc, { permissions, type }: RoleUpdatePermissionDto): Promise<IResponse>;
    delete(role: RoleDoc): Promise<void>;
    inactive(role: RoleDoc): Promise<void>;
    active(role: RoleDoc): Promise<void>;
}
