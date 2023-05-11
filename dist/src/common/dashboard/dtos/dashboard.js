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
exports.DashboardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const request_min_greater_than_validation_1 = require("../../request/validations/request.min-greater-than.validation");
class DashboardDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'startDate',
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.ValidateIf)((e) => e.startDate !== '' || e.endDate !== ''),
    __metadata("design:type", Date)
], DashboardDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'endDate',
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    (0, request_min_greater_than_validation_1.MinGreaterThan)('startDate'),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.ValidateIf)((e) => e.startDate !== '' || e.endDate !== ''),
    __metadata("design:type", Date)
], DashboardDto.prototype, "endDate", void 0);
exports.DashboardDto = DashboardDto;
//# sourceMappingURL=dashboard.js.map