import { AuthService } from 'src/common/auth/services/auth.service';
import { IFileExtract } from 'src/common/file/interfaces/file.interface';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { UserCreateDto } from 'src/modules/user/dtos/user.create.dto';
import { UserImportDto } from 'src/modules/user/dtos/user.import.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { UserUpdateNameDto } from 'src/modules/user/dtos/user.update-name.dto';
import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
import { RoleService } from 'src/modules/role/services/role.service';
export declare class UserAdminController {
    private readonly authService;
    private readonly paginationService;
    private readonly userService;
    private readonly roleService;
    constructor(authService: AuthService, paginationService: PaginationService, userService: UserService, roleService: RoleService);
    list({ _search, _limit, _offset, _order }: PaginationListDto, isActive: Record<string, any>, blocked: Record<string, any>, inactivePermanent: Record<string, any>, role: Record<string, any>): Promise<IResponsePaging>;
    get(user: UserDoc): Promise<IResponse>;
    create({ email, mobileNumber, role, ...body }: UserCreateDto): Promise<IResponse>;
    delete(user: UserDoc): Promise<void>;
    update(user: UserDoc, body: UserUpdateNameDto): Promise<IResponse>;
    inactive(user: UserDoc): Promise<void>;
    active(user: UserDoc): Promise<void>;
    import(file: IFileExtract<UserImportDto>): Promise<IResponse>;
    export(): Promise<IResponse>;
    blocked(user: UserDoc): Promise<void>;
}
