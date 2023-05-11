import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
import { ENUM_POLICY_SUBJECT } from 'src/common/policy/constants/policy.enum.constant';
import { ENUM_ROLE_TYPE } from 'src/modules/role/constants/role.enum.constant';
import { ENUM_USER_SIGN_UP_FROM } from 'src/modules/user/constants/user.enum.constant';
import { UserProfileSerialization } from 'src/modules/user/serializations/user.profile.serialization';
export declare class UserPayloadPermissionSerialization {
    subject: ENUM_POLICY_SUBJECT;
    action: string;
}
declare const UserPayloadSerialization_base: import("@nestjs/common").Type<Omit<UserProfileSerialization, "updatedAt" | "createdAt" | "role" | "photo" | "signUpDate">>;
export declare class UserPayloadSerialization extends UserPayloadSerialization_base {
    readonly photo?: AwsS3Serialization;
    readonly role: string;
    readonly type: ENUM_ROLE_TYPE;
    readonly permissions: UserPayloadPermissionSerialization[];
    readonly signUpDate: Date;
    readonly signUpFrom: ENUM_USER_SIGN_UP_FROM;
    readonly loginDate: Date;
    readonly createdAt: number;
    readonly updatedAt: number;
}
export {};
