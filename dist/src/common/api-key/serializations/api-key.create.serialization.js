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
exports.ApiKeyCreateSerialization = void 0;
const swagger_1 = require("@nestjs/swagger");
const api_key_get_serialization_1 = require("./api-key.get.serialization");
class ApiKeyCreateSerialization extends (0, swagger_1.PickType)(api_key_get_serialization_1.ApiKeyGetSerialization, ['key', '_id']) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Secret key of ApiKey, only show at once',
        example: true,
        required: true,
    }),
    __metadata("design:type", String)
], ApiKeyCreateSerialization.prototype, "secret", void 0);
exports.ApiKeyCreateSerialization = ApiKeyCreateSerialization;
//# sourceMappingURL=api-key.create.serialization.js.map