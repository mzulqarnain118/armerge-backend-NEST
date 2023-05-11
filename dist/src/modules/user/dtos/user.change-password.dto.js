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
exports.UserChangePasswordDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const request_is_password_strong_validation_1 = require("../../../common/request/validations/request.is-password-strong.validation");
class UserChangePasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { newPassword: { required: true, type: () => String, maxLength: 50 }, oldPassword: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "new string password, newPassword can't same with oldPassword",
        example: `${faker_1.faker.random.alphaNumeric(5).toLowerCase()}${faker_1.faker.random
            .alphaNumeric(5)
            .toUpperCase()}@@!123`,
        required: true,
    }),
    (0, request_is_password_strong_validation_1.IsPasswordStrong)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UserChangePasswordDto.prototype, "newPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'old string password',
        example: `${faker_1.faker.random.alphaNumeric(5).toLowerCase()}${faker_1.faker.random
            .alphaNumeric(5)
            .toUpperCase()}@@!123`,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserChangePasswordDto.prototype, "oldPassword", void 0);
exports.UserChangePasswordDto = UserChangePasswordDto;
//# sourceMappingURL=user.change-password.dto.js.map