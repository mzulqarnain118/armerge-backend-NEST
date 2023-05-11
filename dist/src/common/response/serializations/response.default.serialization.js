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
exports.ResponseDefaultSerialization = exports.ResponseMetadataSerialization = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResponseMetadataSerialization {
}
exports.ResponseMetadataSerialization = ResponseMetadataSerialization;
class ResponseDefaultSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'statusCode',
        type: Number,
        nullable: false,
        description: 'return specific status code for every endpoints',
        example: 200,
    }),
    __metadata("design:type", Number)
], ResponseDefaultSerialization.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'message',
        nullable: false,
        description: 'Message base on language',
        oneOf: [
            {
                type: 'string',
                example: 'message endpoint',
            },
            {
                type: 'object',
                example: {
                    en: 'This is test endpoint.',
                    id: 'Ini adalah endpoint test',
                },
            },
        ],
    }),
    __metadata("design:type", Object)
], ResponseDefaultSerialization.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: '_metadata',
        nullable: true,
        description: 'Contain metadata about API',
        type: 'object',
        required: true,
        example: {
            languages: ['en'],
            timestamp: 1660190937231,
            timezone: 'Asia/Jakarta',
            requestId: '40c2f734-7247-472b-bc26-8eff6e669781',
            path: '/api/v1/test/hello',
            version: '1',
            repoVersion: '1.0.0',
        },
    }),
    __metadata("design:type", ResponseMetadataSerialization)
], ResponseDefaultSerialization.prototype, "_metadata", void 0);
exports.ResponseDefaultSerialization = ResponseDefaultSerialization;
//# sourceMappingURL=response.default.serialization.js.map