"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSchema = exports.RoleEntity = exports.RoleDatabaseName = void 0;
const openapi = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const database_mongo_uuid_entity_abstract_1 = require("../../../../common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract");
const database_decorator_1 = require("../../../../common/database/decorators/database.decorator");
const policy_enum_constant_1 = require("../../../../common/policy/constants/policy.enum.constant");
const role_enum_constant_1 = require("../../constants/role.enum.constant");
exports.RoleDatabaseName = 'roles';
let RoleEntity = class RoleEntity extends database_mongo_uuid_entity_abstract_1.DatabaseMongoUUIDEntityAbstract {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: false, type: () => String }, isActive: { required: true, type: () => Boolean }, type: { required: true, enum: require("../../constants/role.enum.constant").ENUM_ROLE_TYPE }, permissions: { required: true, type: () => [Object] } };
    }
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        unique: true,
        lowercase: true,
        trim: true,
        maxlength: 30,
        type: String,
    }),
    __metadata("design:type", String)
], RoleEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        trim: true,
        type: String,
    }),
    __metadata("design:type", String)
], RoleEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: true,
        index: true,
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], RoleEntity.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: role_enum_constant_1.ENUM_ROLE_TYPE,
        index: true,
        type: String,
    }),
    __metadata("design:type", String)
], RoleEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: [],
        type: [
            {
                subject: {
                    type: String,
                    enum: policy_enum_constant_1.ENUM_POLICY_SUBJECT,
                    required: true,
                },
                action: {
                    type: Array,
                    required: true,
                    default: [],
                },
            },
        ],
    }),
    __metadata("design:type", Array)
], RoleEntity.prototype, "permissions", void 0);
RoleEntity = __decorate([
    (0, database_decorator_1.DatabaseEntity)({ collection: exports.RoleDatabaseName })
], RoleEntity);
exports.RoleEntity = RoleEntity;
exports.RoleSchema = mongoose_1.SchemaFactory.createForClass(RoleEntity);
exports.RoleSchema.pre('save', function (next) {
    this.name = this.name.toLowerCase();
    next();
});
//# sourceMappingURL=role.entity.js.map