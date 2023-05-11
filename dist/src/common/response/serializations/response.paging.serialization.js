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
exports.ResponsePagingSerialization = exports.ResponsePaginationSerialization = exports.ResponsePaginationCursorSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const pagination_constant_1 = require("../../pagination/constants/pagination.constant");
const pagination_enum_constant_1 = require("../../pagination/constants/pagination.enum.constant");
const request_pagination_serialization_1 = require("../../request/serializations/request.pagination.serialization");
const response_default_serialization_1 = require("./response.default.serialization");
class ResponsePaginationCursorSerialization {
}
exports.ResponsePaginationCursorSerialization = ResponsePaginationCursorSerialization;
class ResponsePaginationSerialization extends request_pagination_serialization_1.RequestPaginationSerialization {
}
exports.ResponsePaginationSerialization = ResponsePaginationSerialization;
class ResponsePagingSerialization extends (0, swagger_1.PickType)(response_default_serialization_1.ResponseDefaultSerialization, [
    'statusCode',
    'message',
]) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        name: '_metadata',
        nullable: false,
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
            pagination: {
                search: faker_1.faker.name.firstName(),
                page: 1,
                perPage: 20,
                orderBy: 'createdAt',
                orderDirection: pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC,
                availableSearch: ['name'],
                availableOrderBy: ['createdAt'],
                availableOrderDirection: pagination_constant_1.PAGINATION_AVAILABLE_ORDER_DIRECTION,
                total: 100,
                totalPage: 5,
            },
            cursor: {
                nextPage: `http://217.0.0.1/__path?perPage=10&page=3&search=abc`,
                previousPage: `http://217.0.0.1/__path?perPage=10&page=1&search=abc`,
                firstPage: `http://217.0.0.1/__path?perPage=10&page=1&search=abc`,
                lastPage: `http://217.0.0.1/__path?perPage=10&page=20&search=abc`,
            },
        },
    }),
    __metadata("design:type", Object)
], ResponsePagingSerialization.prototype, "_metadata", void 0);
exports.ResponsePagingSerialization = ResponsePagingSerialization;
//# sourceMappingURL=response.paging.serialization.js.map