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
exports.RoleCreateDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const policy_enum_constant_1 = require("../../../common/policy/constants/policy.enum.constant");
const role_enum_constant_1 = require("../constants/role.enum.constant");
const role_update_dto_1 = require("./role.update.dto");
class RolePermissionsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { subject: { required: true, enum: require("../../../common/policy/constants/policy.enum.constant").ENUM_POLICY_SUBJECT }, action: { required: true, enum: require("../../../common/policy/constants/policy.enum.constant").ENUM_POLICY_ACTION, isArray: true } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Permission subject',
        enum: policy_enum_constant_1.ENUM_POLICY_SUBJECT,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(policy_enum_constant_1.ENUM_POLICY_SUBJECT),
    __metadata("design:type", String)
], RolePermissionsDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Permission action base on subject',
        isArray: true,
        default: [],
        enum: policy_enum_constant_1.ENUM_POLICY_ACTION,
    }),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsEnum)(policy_enum_constant_1.ENUM_POLICY_ACTION, { each: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], RolePermissionsDto.prototype, "action", void 0);
class RoleCreateDto extends (0, swagger_1.PartialType)(role_update_dto_1.RoleUpdateDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 3, maxLength: 30 }, type: { required: true, enum: require("../constants/role.enum.constant").ENUM_ROLE_TYPE }, permissions: { required: true, type: () => [RolePermissionsDto] } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of role',
        example: faker_1.faker.name.jobTitle(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], RoleCreateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Representative for role type',
        example: 'ADMIN',
        required: true,
    }),
    (0, class_validator_1.IsEnum)(role_enum_constant_1.ENUM_ROLE_TYPE),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RoleCreateDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Permission list of role',
        isArray: true,
        default: [],
        type: () => RolePermissionsDto,
    }),
    (0, class_transformer_1.Type)(() => RolePermissionsDto),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateIf)((e) => e.type === role_enum_constant_1.ENUM_ROLE_TYPE.ADMIN),
    (0, class_transformer_1.Transform)(({ value, obj }) => obj.type !== role_enum_constant_1.ENUM_ROLE_TYPE.ADMIN ? [] : value),
    __metadata("design:type", Array)
], RoleCreateDto.prototype, "permissions", void 0);
exports.RoleCreateDto = RoleCreateDto;
//# sourceMappingURL=role.create.dto.js.map