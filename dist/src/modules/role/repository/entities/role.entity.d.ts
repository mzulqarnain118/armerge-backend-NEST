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
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { IPolicyRule } from 'src/common/policy/interfaces/policy.interface';
import { ENUM_ROLE_TYPE } from 'src/modules/role/constants/role.enum.constant';
export declare const RoleDatabaseName = "roles";
export declare class RoleEntity extends DatabaseMongoUUIDEntityAbstract {
    name: string;
    description?: string;
    isActive: boolean;
    type: ENUM_ROLE_TYPE;
    permissions: IPolicyRule[];
}
export declare const RoleSchema: import("mongoose").Schema<RoleEntity, import("mongoose").Model<RoleEntity, any, any, any, Document<unknown, any, RoleEntity> & Omit<RoleEntity & Required<{
    _id: string;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoleEntity, Document<unknown, {}, import("mongoose").FlatRecord<RoleEntity>> & Omit<import("mongoose").FlatRecord<RoleEntity> & Required<{
    _id: string;
}>, never>>;
export type RoleDoc = RoleEntity & Document;
