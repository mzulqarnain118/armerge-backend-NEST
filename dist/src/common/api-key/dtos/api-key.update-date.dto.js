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
exports.ApiKeyUpdateDateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const request_min_greater_than_equal_validation_1 = require("../../request/validations/request.min-greater-than-equal.validation");
const request_min_date_today_validation_1 = require("../../request/validations/request.min-date-today.validation");
class ApiKeyUpdateDateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { startDate: { required: true, type: () => Date }, endDate: { required: true, type: () => Date } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Api Key start date',
        example: faker_1.faker.date.recent(),
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, request_min_date_today_validation_1.MinDateToday)(),
    __metadata("design:type", Date)
], ApiKeyUpdateDateDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Api Key end date',
        example: faker_1.faker.date.recent(),
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, request_min_greater_than_equal_validation_1.MinGreaterThanEqual)('startDate'),
    __metadata("design:type", Date)
], ApiKeyUpdateDateDto.prototype, "endDate", void 0);
exports.ApiKeyUpdateDateDto = ApiKeyUpdateDateDto;
//# sourceMappingURL=api-key.update-date.dto.js.map