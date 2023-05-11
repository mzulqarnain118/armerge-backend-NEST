import { ENUM_POLICY_ACTION, ENUM_POLICY_SUBJECT } from 'src/common/policy/constants/policy.enum.constant';
import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
import { ENUM_ROLE_TYPE } from 'src/modules/role/constants/role.enum.constant';
export declare class RoleGetPermissionSerialization {
    subject: ENUM_POLICY_SUBJECT;
    action: ENUM_POLICY_ACTION[];
}
export declare class RoleGetSerialization extends ResponseIdSerialization {
    readonly name: string;
    readonly description?: string;
    readonly isActive: boolean;
    readonly type: ENUM_ROLE_TYPE;
    readonly permissions: RoleGetPermissionSerialization;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
