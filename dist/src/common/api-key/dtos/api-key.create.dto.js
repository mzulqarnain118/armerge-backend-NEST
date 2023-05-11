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
exports.ApiKeyCreateRawDto = exports.ApiKeyCreateDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const api_key_enum_constant_1 = require("../constants/api-key.enum.constant");
const api_key_update_date_dto_1 = require("./api-key.update-date.dto");
class ApiKeyCreateDto extends (0, swagger_1.PartialType)(api_key_update_date_dto_1.ApiKeyUpdateDateDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, maxLength: 50 }, type: { required: true, enum: require("../constants/api-key.enum.constant").ENUM_API_KEY_TYPE } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Api Key name',
        example: `testapiname`,
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], ApiKeyCreateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Api Key name',
        example: api_key_enum_constant_1.ENUM_API_KEY_TYPE.PUBLIC,
        required: true,
        enum: api_key_enum_constant_1.ENUM_API_KEY_TYPE,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(api_key_enum_constant_1.ENUM_API_KEY_TYPE),
    __metadata("design:type", String)
], ApiKeyCreateDto.prototype, "type", void 0);
exports.ApiKeyCreateDto = ApiKeyCreateDto;
class ApiKeyCreateRawDto extends ApiKeyCreateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { key: { required: true, type: () => String, maxLength: 50 }, secret: { required: true, type: () => String, maxLength: 100 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'key',
        example: faker_1.faker.random.alphaNumeric(10),
        required: true,
        nullable: false,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], ApiKeyCreateRawDto.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'secret',
        example: faker_1.faker.random.alphaNumeric(20),
        required: true,
        nullable: false,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], ApiKeyCreateRawDto.prototype, "secret", void 0);
exports.ApiKeyCreateRawDto = ApiKeyCreateRawDto;
//# sourceMappingURL=api-key.create.dto.js.map