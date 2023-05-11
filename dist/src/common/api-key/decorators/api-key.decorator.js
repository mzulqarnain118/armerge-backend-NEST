"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetApiKey = exports.ApiKeyPublicProtected = exports.ApiKeyServiceProtected = exports.ApiKeyPayload = void 0;
const common_1 = require("@nestjs/common");
const api_key_constant_1 = require("../constants/api-key.constant");
const api_key_enum_constant_1 = require("../constants/api-key.enum.constant");
const api_key_payload_type_guard_1 = require("../guards/payload/api-key.payload.type.guard");
const api_key_x_api_key_guard_1 = require("../guards/x-api-key/api-key.x-api-key.guard");
exports.ApiKeyPayload = (0, common_1.createParamDecorator)((data, ctx) => {
    const { apiKey } = ctx
        .switchToHttp()
        .getRequest();
    return data ? apiKey[data] : apiKey;
});
function ApiKeyServiceProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(api_key_x_api_key_guard_1.ApiKeyXApiKeyGuard, api_key_payload_type_guard_1.ApiKeyPayloadTypeGuard), (0, common_1.SetMetadata)(api_key_constant_1.API_KEY_TYPE_META_KEY, [api_key_enum_constant_1.ENUM_API_KEY_TYPE.SERVICE]));
}
exports.ApiKeyServiceProtected = ApiKeyServiceProtected;
function ApiKeyPublicProtected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(api_key_x_api_key_guard_1.ApiKeyXApiKeyGuard, api_key_payload_type_guard_1.ApiKeyPayloadTypeGuard), (0, common_1.SetMetadata)(api_key_constant_1.API_KEY_TYPE_META_KEY, [api_key_enum_constant_1.ENUM_API_KEY_TYPE.PUBLIC]));
}
exports.ApiKeyPublicProtected = ApiKeyPublicProtected;
exports.GetApiKey = (0, common_1.createParamDecorator)((returnPlain, ctx) => {
    const { __apiKey } = ctx
        .switchToHttp()
        .getRequest();
    return returnPlain ? __apiKey.toObject() : __apiKey;
});
//# sourceMappingURL=api-key.decorator.js.map