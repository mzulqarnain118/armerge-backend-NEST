"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerCreateRawDto = exports.LoggerCreateDto = void 0;
const openapi = require("@nestjs/swagger");
class LoggerCreateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { action: { required: true, enum: require("../constants/logger.enum.constant").ENUM_LOGGER_ACTION }, description: { required: true, type: () => String }, apiKey: { required: false, type: () => String }, user: { required: false, type: () => String }, requestId: { required: false, type: () => String }, method: { required: true, enum: require("../../request/constants/request.enum.constant").ENUM_REQUEST_METHOD }, path: { required: true, type: () => String }, role: { required: false, type: () => String }, type: { required: false, enum: require("../../../modules/role/constants/role.enum.constant").ENUM_ROLE_TYPE }, tags: { required: false, type: () => [String] }, params: { required: false, type: () => Object }, bodies: { required: false, type: () => Object }, statusCode: { required: false, type: () => Number } };
    }
}
exports.LoggerCreateDto = LoggerCreateDto;
class LoggerCreateRawDto extends LoggerCreateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { level: { required: true, enum: require("../constants/logger.enum.constant").ENUM_LOGGER_LEVEL } };
    }
}
exports.LoggerCreateRawDto = LoggerCreateRawDto;
//# sourceMappingURL=logger.create.dto.js.map