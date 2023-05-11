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
exports.UserCreateDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const request_is_password_strong_validation_1 = require("../../../common/request/validations/request.is-password-strong.validation");
const request_mobile_number_allowed_validation_1 = require("../../../common/request/validations/request.mobile-number-allowed.validation");
const user_enum_constant_1 = require("../constants/user.enum.constant");
class UserCreateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, maxLength: 100 }, firstName: { required: true, type: () => String, minLength: 1, maxLength: 30 }, lastName: { required: true, type: () => String, minLength: 1, maxLength: 30 }, mobileNumber: { required: false, type: () => String, minLength: 10, maxLength: 14 }, role: { required: true, type: () => String }, password: { required: true, type: () => String, maxLength: 50 }, signUpFrom: { required: true, enum: require("../constants/user.enum.constant").ENUM_USER_SIGN_UP_FROM } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.internet.email(),
        required: true,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserCreateDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.name.firstName(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(30),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserCreateDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.name.lastName(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(30),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], UserCreateDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.phone.number('62812#########'),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.MaxLength)(14),
    (0, class_validator_1.ValidateIf)((e) => e.mobileNumber !== ''),
    (0, class_transformer_1.Type)(() => String),
    (0, request_mobile_number_allowed_validation_1.MobileNumberAllowed)(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "mobileNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.datatype.uuid(),
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], UserCreateDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'string password',
        example: `${faker_1.faker.random.alphaNumeric(5).toLowerCase()}${faker_1.faker.random
            .alphaNumeric(5)
            .toUpperCase()}@@!123`,
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, request_is_password_strong_validation_1.IsPasswordStrong)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UserCreateDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(user_enum_constant_1.ENUM_USER_SIGN_UP_FROM),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "signUpFrom", void 0);
exports.UserCreateDto = UserCreateDto;
//# sourceMappingURL=user.create.dto.js.map