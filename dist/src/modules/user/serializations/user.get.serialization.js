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
exports.UserGetSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const aws_s3_serialization_1 = require("../../../common/aws/serializations/aws.s3.serialization");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const role_get_serialization_1 = require("../../role/serializations/role.get.serialization");
const user_enum_constant_1 = require("../constants/user.enum.constant");
class UserGetSerialization extends response_id_serialization_1.ResponseIdSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => role_get_serialization_1.RoleGetSerialization,
    }),
    (0, class_transformer_1.Type)(() => role_get_serialization_1.RoleGetSerialization),
    __metadata("design:type", role_get_serialization_1.RoleGetSerialization)
], UserGetSerialization.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.internet.userName(),
        nullable: true,
        required: false,
    }),
    __metadata("design:type", String)
], UserGetSerialization.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.internet.email(),
    }),
    __metadata("design:type", String)
], UserGetSerialization.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.internet.email(),
    }),
    __metadata("design:type", String)
], UserGetSerialization.prototype, "mobileNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
    }),
    __metadata("design:type", Boolean)
], UserGetSerialization.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
    }),
    __metadata("design:type", Boolean)
], UserGetSerialization.prototype, "inactivePermanent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        nullable: true,
        example: faker_1.faker.date.recent(),
    }),
    __metadata("design:type", Date)
], UserGetSerialization.prototype, "inactiveDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
    }),
    __metadata("design:type", Boolean)
], UserGetSerialization.prototype, "blocked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        nullable: true,
        example: faker_1.faker.date.recent(),
    }),
    __metadata("design:type", Date)
], UserGetSerialization.prototype, "blockedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.name.firstName(),
    }),
    __metadata("design:type", String)
], UserGetSerialization.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.name.lastName(),
    }),
    __metadata("design:type", String)
], UserGetSerialization.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        allOf: [{ $ref: (0, swagger_1.getSchemaPath)(aws_s3_serialization_1.AwsS3Serialization) }],
    }),
    __metadata("design:type", aws_s3_serialization_1.AwsS3Serialization)
], UserGetSerialization.prototype, "photo", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserGetSerialization.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.date.future(),
    }),
    __metadata("design:type", Date)
], UserGetSerialization.prototype, "passwordExpired", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.date.past(),
    }),
    __metadata("design:type", Date)
], UserGetSerialization.prototype, "passwordCreated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [1, 0],
    }),
    __metadata("design:type", Number)
], UserGetSerialization.prototype, "passwordAttempt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.date.recent(),
    }),
    __metadata("design:type", Date)
], UserGetSerialization.prototype, "signUpDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: user_enum_constant_1.ENUM_USER_SIGN_UP_FROM.LOCAL,
    }),
    __metadata("design:type", String)
], UserGetSerialization.prototype, "signUpFrom", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserGetSerialization.prototype, "salt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
    }),
    __metadata("design:type", Date)
], UserGetSerialization.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date updated at',
        example: faker_1.faker.date.recent(),
        required: false,
    }),
    __metadata("design:type", Date)
], UserGetSerialization.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserGetSerialization.prototype, "deletedAt", void 0);
exports.UserGetSerialization = UserGetSerialization;
//# sourceMappingURL=user.get.serialization.js.map