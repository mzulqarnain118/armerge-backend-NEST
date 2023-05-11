import { IDatabaseCreateOptions, IDatabaseExistOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseGetTotalOptions, IDatabaseManyOptions, IDatabaseCreateManyOptions, IDatabaseSaveOptions } from 'src/common/database/interfaces/database.interface';
import { RoleCreateDto } from 'src/modules/role/dtos/role.create.dto';
import { RoleUpdatePermissionDto } from 'src/modules/role/dtos/role.update-permission.dto';
import { RoleUpdateDto } from 'src/modules/role/dtos/role.update.dto';
import { IRoleService } from 'src/modules/role/interfaces/role.service.interface';
import { RoleDoc, RoleEntity } from 'src/modules/role/repository/entities/role.entity';
import { RoleRepository } from 'src/modules/role/repository/repositories/role.repository';
export declare class RoleService implements IRoleService {
    private readonly roleRepository;
    constructor(roleRepository: RoleRepository);
    findAll(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<RoleEntity[]>;
    findOneById(_id: string, options?: IDatabaseFindOneOptions): Promise<RoleDoc>;
    findOne(find: Record<string, any>, options?: IDatabaseFindOneOptions): Promise<RoleDoc>;
    findOneByName(name: string, options?: IDatabaseFindOneOptions): Promise<RoleDoc>;
    getTotal(find?: Record<string, any>, options?: IDatabaseGetTotalOptions): Promise<number>;
    existByName(name: string, options?: IDatabaseExistOptions): Promise<boolean>;
    create({ name, description, type, permissions }: RoleCreateDto, options?: IDatabaseCreateOptions): Promise<RoleDoc>;
    update(repository: RoleDoc, { description }: RoleUpdateDto, options?: IDatabaseSaveOptions): Promise<RoleDoc>;
    updatePermissions(repository: RoleDoc, { permissions, type }: RoleUpdatePermissionDto, options?: IDatabaseSaveOptions): Promise<RoleDoc>;
    active(repository: RoleDoc, options?: IDatabaseSaveOptions): Promise<RoleDoc>;
    inactive(repository: RoleDoc, options?: IDatabaseSaveOptions): Promise<RoleDoc>;
    delete(repository: RoleDoc, options?: IDatabaseSaveOptions): Promise<RoleDoc>;
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
    createMany(data: RoleCreateDto[], options?: IDatabaseCreateManyOptions): Promise<boolean>;
}
