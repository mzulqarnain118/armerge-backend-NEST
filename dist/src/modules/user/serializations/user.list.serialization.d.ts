import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
import { RoleListSerialization } from 'src/modules/role/serializations/role.list.serialization';
import { UserProfileSerialization } from 'src/modules/user/serializations/user.profile.serialization';
declare const UserListSerialization_base: import("@nestjs/common").Type<Omit<UserProfileSerialization, "role" | "photo" | "signUpDate" | "signUpFrom">>;
export declare class UserListSerialization extends UserListSerialization_base {
    readonly role: RoleListSerialization;
    readonly photo?: AwsS3Serialization;
    readonly signUpDate: Date;
}
export {};
