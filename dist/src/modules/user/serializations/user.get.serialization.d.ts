import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
import { RoleGetSerialization } from 'src/modules/role/serializations/role.get.serialization';
import { ENUM_USER_SIGN_UP_FROM } from 'src/modules/user/constants/user.enum.constant';
export declare class UserGetSerialization extends ResponseIdSerialization {
    readonly role: RoleGetSerialization;
    readonly username?: string;
    readonly email: string;
    readonly mobileNumber?: string;
    readonly isActive: boolean;
    readonly inactivePermanent: boolean;
    readonly inactiveDate?: Date;
    readonly blocked: boolean;
    readonly blockedDate?: Date;
    readonly firstName: string;
    readonly lastName: string;
    readonly photo?: AwsS3Serialization;
    readonly password: string;
    readonly passwordExpired: Date;
    readonly passwordCreated: Date;
    readonly passwordAttempt: number;
    readonly signUpDate: Date;
    readonly signUpFrom: ENUM_USER_SIGN_UP_FROM;
    readonly salt: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
