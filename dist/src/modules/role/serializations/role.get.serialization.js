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
exports.RoleGetSerialization = exports.RoleGetPermissionSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const policy_enum_constant_1 = require("../../../common/policy/constants/policy.enum.constant");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const role_enum_constant_1 = require("../constants/role.enum.constant");
class RoleGetPermissionSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Permission subject',
        enum: policy_enum_constant_1.ENUM_POLICY_SUBJECT,
    }),
    __metadata("design:type", String)
], RoleGetPermissionSerialization.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Permission action base on subject',
        isArray: true,
        enum: policy_enum_constant_1.ENUM_POLICY_ACTION,
        default: [],
    }),
    __metadata("design:type", Array)
], RoleGetPermissionSerialization.prototype, "action", void 0);
exports.RoleGetPermissionSerialization = RoleGetPermissionSerialization;
class RoleGetSerialization extends response_id_serialization_1.ResponseIdSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of role',
        example: faker_1.faker.name.jobTitle(),
        required: true,
    }),
    __metadata("design:type", String)
], RoleGetSerialization.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of role',
        example: faker_1.faker.lorem.sentence(),
        required: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], RoleGetSerialization.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active flag of role',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], RoleGetSerialization.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Representative for role type',
        example: role_enum_constant_1.ENUM_ROLE_TYPE.ADMIN,
        required: true,
    }),
    __metadata("design:type", String)
], RoleGetSerialization.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: RoleGetPermissionSerialization,
        required: true,
        default: [],
    }),
    __metadata("design:type", RoleGetPermissionSerialization)
], RoleGetSerialization.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
    }),
    __metadata("design:type", Date)
], RoleGetSerialization.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date updated at',
        example: faker_1.faker.date.recent(),
        required: false,
    }),
    __metadata("design:type", Date)
], RoleGetSerialization.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], RoleGetSerialization.prototype, "deletedAt", void 0);
exports.RoleGetSerialization = RoleGetSerialization;
//# sourceMappingURL=role.get.serialization.js.map