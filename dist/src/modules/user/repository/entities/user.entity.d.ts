/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { ENUM_USER_SIGN_UP_FROM } from 'src/modules/user/constants/user.enum.constant';
import { IUserGoogleEntity } from 'src/modules/user/interfaces/user.interface';
export declare const UserDatabaseName = "users";
export declare class UserEntity extends DatabaseMongoUUIDEntityAbstract {
    username?: string;
    firstName: string;
    lastName: string;
    mobileNumber?: string;
    email: string;
    role: string;
    password: string;
    passwordExpired: Date;
    passwordCreated: Date;
    passwordAttempt: number;
    signUpDate: Date;
    signUpFrom: ENUM_USER_SIGN_UP_FROM;
    salt: string;
    isActive: boolean;
    inactivePermanent: boolean;
    inactiveDate?: Date;
    blocked: boolean;
    blockedDate?: Date;
    photo?: AwsS3Serialization;
    google?: IUserGoogleEntity;
}
export declare const UserSchema: import("mongoose").Schema<UserEntity, import("mongoose").Model<UserEntity, any, any, any, Document<unknown, any, UserEntity> & Omit<UserEntity & Required<{
    _id: string;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserEntity, Document<unknown, {}, import("mongoose").FlatRecord<UserEntity>> & Omit<import("mongoose").FlatRecord<UserEntity> & Required<{
    _id: string;
}>, never>>;
export type UserDoc = UserEntity & Document;
