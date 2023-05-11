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
exports.UserUpdateGoogleSSODto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserUpdateGoogleSSODto {
    static _OPENAPI_METADATA_FACTORY() {
        return { accessToken: { required: true, type: () => String }, refreshToken: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.random.alphaNumeric(30),
        description: 'Will be valid SSO Token Encode string from google API',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserUpdateGoogleSSODto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.random.alphaNumeric(30),
        description: 'Will be valid SSO Secret Token Encode string from google API',
        required: true,
    }),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserUpdateGoogleSSODto.prototype, "refreshToken", void 0);
exports.UserUpdateGoogleSSODto = UserUpdateGoogleSSODto;
//# sourceMappingURL=user.update-google-sso.dto.js.map