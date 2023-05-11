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
exports.AppHelloSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class AppHelloSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            ua: 'PostmanRuntime/7.29.0',
            browser: {},
            engine: {},
            os: {},
            device: {},
            cpu: {},
        },
    }),
    __metadata("design:type", Object)
], AppHelloSerialization.prototype, "userAgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.date.recent() }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", Date)
], AppHelloSerialization.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.date.recent() }),
    __metadata("design:type", String)
], AppHelloSerialization.prototype, "format", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1660190937231,
    }),
    __metadata("design:type", Number)
], AppHelloSerialization.prototype, "timestamp", void 0);
exports.AppHelloSerialization = AppHelloSerialization;
//# sourceMappingURL=app.hello.serialization.js.map