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
exports.ApiKeyGetSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const api_key_enum_constant_1 = require("../constants/api-key.enum.constant");
const response_id_serialization_1 = require("../../response/serializations/response.id.serialization");
class ApiKeyGetSerialization extends response_id_serialization_1.ResponseIdSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Alias name of api key',
        example: faker_1.faker.name.jobTitle(),
        required: true,
    }),
    __metadata("design:type", String)
], ApiKeyGetSerialization.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Type of api key',
        example: api_key_enum_constant_1.ENUM_API_KEY_TYPE.PUBLIC,
        required: true,
    }),
    __metadata("design:type", String)
], ApiKeyGetSerialization.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique key of api key',
        example: faker_1.faker.random.alpha(115),
        required: true,
    }),
    __metadata("design:type", String)
], ApiKeyGetSerialization.prototype, "key", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], ApiKeyGetSerialization.prototype, "hash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active flag of api key',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], ApiKeyGetSerialization.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Api Key start date',
        example: faker_1.faker.date.recent(),
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Date)
], ApiKeyGetSerialization.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Api Key end date',
        example: faker_1.faker.date.recent(),
        required: false,
        nullable: true,
    }),
    __metadata("design:type", Date)
], ApiKeyGetSerialization.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: false,
    }),
    __metadata("design:type", Date)
], ApiKeyGetSerialization.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date updated at',
        example: faker_1.faker.date.recent(),
        required: false,
    }),
    __metadata("design:type", Date)
], ApiKeyGetSerialization.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], ApiKeyGetSerialization.prototype, "deletedAt", void 0);
exports.ApiKeyGetSerialization = ApiKeyGetSerialization;
//# sourceMappingURL=api-key.get.serialization.js.map