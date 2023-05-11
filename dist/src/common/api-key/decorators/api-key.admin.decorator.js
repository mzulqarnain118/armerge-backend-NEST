"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyAdminDeleteGuard = exports.ApiKeyAdminUpdateInactiveGuard = exports.ApiKeyAdminUpdateActiveGuard = exports.ApiKeyAdminUpdateResetGuard = exports.ApiKeyAdminUpdateGuard = exports.ApiKeyAdminGetGuard = void 0;
const common_1 = require("@nestjs/common");
const api_key_constant_1 = require("../constants/api-key.constant");
const api_key_active_guard_1 = require("../guards/api-key.active.guard");
const api_key_expired_guard_1 = require("../guards/api-key.expired.guard");
const api_key_not_found_guard_1 = require("../guards/api-key.not-found.guard");
const api_key_put_to_request_guard_1 = require("../guards/api-key.put-to-request.guard");
function ApiKeyAdminGetGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(api_key_put_to_request_guard_1.ApiKeyPutToRequestGuard, api_key_not_found_guard_1.ApiKeyNotFoundGuard));
}
exports.ApiKeyAdminGetGuard = ApiKeyAdminGetGuard;
function ApiKeyAdminUpdateGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(api_key_put_to_request_guard_1.ApiKeyPutToRequestGuard, api_key_not_found_guard_1.ApiKeyNotFoundGuard, api_key_active_guard_1.ApiKeyActiveGuard, api_key_expired_guard_1.ApiKeyExpiredGuard), (0, common_1.SetMetadata)(api_key_constant_1.API_KEY_ACTIVE_META_KEY, [true]));
}
exports.ApiKeyAdminUpdateGuard = ApiKeyAdminUpdateGuard;
function ApiKeyAdminUpdateResetGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(api_key_put_to_request_guard_1.ApiKeyPutToRequestGuard, api_key_not_found_guard_1.ApiKeyNotFoundGuard, api_key_active_guard_1.ApiKeyActiveGuard, api_key_expired_guard_1.ApiKeyExpiredGuard), (0, common_1.SetMetadata)(api_key_constant_1.API_KEY_ACTIVE_META_KEY, [true]));
}
exports.ApiKeyAdminUpdateResetGuard = ApiKeyAdminUpdateResetGuard;
function ApiKeyAdminUpdateActiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(api_key_put_to_request_guard_1.ApiKeyPutToRequestGuard, api_key_not_found_guard_1.ApiKeyNotFoundGuard, api_key_active_guard_1.ApiKeyActiveGuard, api_key_expired_guard_1.ApiKeyExpiredGuard), (0, common_1.SetMetadata)(api_key_constant_1.API_KEY_ACTIVE_META_KEY, [false]));
}
exports.ApiKeyAdminUpdateActiveGuard = ApiKeyAdminUpdateActiveGuard;
function ApiKeyAdminUpdateInactiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(api_key_put_to_request_guard_1.ApiKeyPutToRequestGuard, api_key_not_found_guard_1.ApiKeyNotFoundGuard, api_key_active_guard_1.ApiKeyActiveGuard, api_key_expired_guard_1.ApiKeyExpiredGuard), (0, common_1.SetMetadata)(api_key_constant_1.API_KEY_ACTIVE_META_KEY, [true]));
}
exports.ApiKeyAdminUpdateInactiveGuard = ApiKeyAdminUpdateInactiveGuard;
function ApiKeyAdminDeleteGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(api_key_put_to_request_guard_1.ApiKeyPutToRequestGuard, api_key_not_found_guard_1.ApiKeyNotFoundGuard));
}
exports.ApiKeyAdminDeleteGuard = ApiKeyAdminDeleteGuard;
//# sourceMappingURL=api-key.admin.decorator.js.map