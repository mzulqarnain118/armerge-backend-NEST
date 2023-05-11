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
exports.UserPayloadSerialization = exports.UserPayloadPermissionSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const aws_s3_serialization_1 = require("../../../common/aws/serializations/aws.s3.serialization");
const policy_enum_constant_1 = require("../../../common/policy/constants/policy.enum.constant");
const role_enum_constant_1 = require("../../role/constants/role.enum.constant");
const user_enum_constant_1 = require("../constants/user.enum.constant");
const user_profile_serialization_1 = require("./user.profile.serialization");
class UserPayloadPermissionSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: policy_enum_constant_1.ENUM_POLICY_SUBJECT }),
    __metadata("design:type", String)
], UserPayloadPermissionSerialization.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserPayloadPermissionSerialization.prototype, "action", void 0);
exports.UserPayloadPermissionSerialization = UserPayloadPermissionSerialization;
class UserPayloadSerialization extends (0, swagger_1.OmitType)(user_profile_serialization_1.UserProfileSerialization, ['photo', 'role', 'signUpDate', 'createdAt', 'updatedAt']) {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", aws_s3_serialization_1.AwsS3Serialization)
], UserPayloadSerialization.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.datatype.uuid(),
        type: 'string',
    }),
    (0, class_transformer_1.Transform)(({ obj }) => `${obj.role._id}`),
    __metadata("design:type", String)
], UserPayloadSerialization.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: role_enum_constant_1.ENUM_ROLE_TYPE.ADMIN,
        type: 'string',
        enum: role_enum_constant_1.ENUM_ROLE_TYPE,
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ obj }) => obj.role.type),
    __metadata("design:type", String)
], UserPayloadSerialization.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => UserPayloadPermissionSerialization,
        isArray: true,
    }),
    (0, class_transformer_1.Transform)(({ obj }) => {
        return obj.role.permissions.map(({ action, subject }) => {
            const ac = action.map((l) => policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION[l]);
            return {
                subject,
                action: ac.join(','),
            };
        });
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserPayloadSerialization.prototype, "permissions", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserPayloadSerialization.prototype, "signUpDate", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserPayloadSerialization.prototype, "signUpFrom", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], UserPayloadSerialization.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], UserPayloadSerialization.prototype, "updatedAt", void 0);
exports.UserPayloadSerialization = UserPayloadSerialization;
//# sourceMappingURL=user.payload.serialization.js.map