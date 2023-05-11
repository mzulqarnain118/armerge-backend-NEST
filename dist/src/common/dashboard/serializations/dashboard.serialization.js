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
exports.DashboardSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
class DashboardSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'name',
        nullable: true,
    }),
    __metadata("design:type", String)
], DashboardSerialization.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'month',
        nullable: true,
    }),
    __metadata("design:type", Number)
], DashboardSerialization.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'year',
        nullable: true,
    }),
    __metadata("design:type", Number)
], DashboardSerialization.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'total',
        example: faker_1.faker.random.numeric(4, { allowLeadingZeros: false }),
        description: 'Total user',
        nullable: false,
    }),
    __metadata("design:type", Number)
], DashboardSerialization.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'percent',
        description: 'Percent of target',
        required: true,
        nullable: false,
        example: 15.4,
    }),
    __metadata("design:type", Number)
], DashboardSerialization.prototype, "percent", void 0);
exports.DashboardSerialization = DashboardSerialization;
//# sourceMappingURL=dashboard.serialization.js.map