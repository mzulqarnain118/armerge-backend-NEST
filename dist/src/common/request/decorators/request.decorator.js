"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestTimeout = exports.RequestValidateTimestamp = exports.RequestValidateUserAgent = exports.RequestParamGuard = exports.RequestCustomLang = exports.RequestTimestamp = exports.RequestXTimestamp = exports.RequestId = exports.RequestUserAgent = void 0;
const common_1 = require("@nestjs/common");
const request_constant_1 = require("../constants/request.constant");
const request_param_guard_1 = require("../guards/request.param.guard");
const request_timestamp_interceptor_1 = require("../interceptors/request.timestamp.interceptor");
const request_user_agent_interceptor_1 = require("../interceptors/request.user-agent.interceptor");
exports.RequestUserAgent = (0, common_1.createParamDecorator)((data, ctx) => {
    const { __userAgent } = ctx.switchToHttp().getRequest();
    return __userAgent;
});
exports.RequestId = (0, common_1.createParamDecorator)((data, ctx) => {
    const { __id } = ctx.switchToHttp().getRequest();
    return __id;
});
exports.RequestXTimestamp = (0, common_1.createParamDecorator)((data, ctx) => {
    const { __xTimestamp } = ctx.switchToHttp().getRequest();
    return __xTimestamp;
});
exports.RequestTimestamp = (0, common_1.createParamDecorator)((data, ctx) => {
    const { __timestamp } = ctx.switchToHttp().getRequest();
    return __timestamp;
});
exports.RequestCustomLang = (0, common_1.createParamDecorator)((data, ctx) => {
    const { __customLang } = ctx.switchToHttp().getRequest();
    return __customLang;
});
function RequestParamGuard(...classValidation) {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(request_param_guard_1.RequestParamRawGuard), (0, common_1.SetMetadata)(request_constant_1.REQUEST_PARAM_CLASS_DTOS_META_KEY, classValidation));
}
exports.RequestParamGuard = RequestParamGuard;
function RequestValidateUserAgent() {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(request_user_agent_interceptor_1.RequestUserAgentInterceptor));
}
exports.RequestValidateUserAgent = RequestValidateUserAgent;
function RequestValidateTimestamp() {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(request_timestamp_interceptor_1.RequestTimestampInterceptor));
}
exports.RequestValidateTimestamp = RequestValidateTimestamp;
function RequestTimeout(seconds) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(request_constant_1.REQUEST_CUSTOM_TIMEOUT_META_KEY, true), (0, common_1.SetMetadata)(request_constant_1.REQUEST_CUSTOM_TIMEOUT_VALUE_META_KEY, seconds));
}
exports.RequestTimeout = RequestTimeout;
//# sourceMappingURL=request.decorator.js.map