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
exports.UserLoginSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
class UserLoginSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bearer',
        required: true,
    }),
    __metadata("design:type", String)
], UserLoginSerialization.prototype, "tokenType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1660190937231,
        description: 'Expire in timestamp',
        required: true,
    }),
    __metadata("design:type", String)
], UserLoginSerialization.prototype, "expiresIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.random.alphaNumeric(30),
        description: 'Will be valid JWT Encode string',
        required: true,
    }),
    __metadata("design:type", String)
], UserLoginSerialization.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: faker_1.faker.random.alphaNumeric(30),
        description: 'Will be valid JWT Encode string',
        required: true,
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserLoginSerialization.prototype, "refreshToken", void 0);
exports.UserLoginSerialization = UserLoginSerialization;
//# sourceMappingURL=user.login.serialization.js.map