import { ENUM_POLICY_ACTION, ENUM_POLICY_SUBJECT } from 'src/common/policy/constants/policy.enum.constant';
import { ENUM_ROLE_TYPE } from 'src/modules/role/constants/role.enum.constant';
import { RoleUpdateDto } from 'src/modules/role/dtos/role.update.dto';
declare class RolePermissionsDto {
    subject: ENUM_POLICY_SUBJECT;
    action: ENUM_POLICY_ACTION[];
}
declare const RoleCreateDto_base: import("@nestjs/common").Type<Partial<RoleUpdateDto>>;
export declare class RoleCreateDto extends RoleCreateDto_base {
    readonly name: string;
    readonly type: ENUM_ROLE_TYPE;
    readonly permissions: RolePermissionsDto[];
}
export {};
