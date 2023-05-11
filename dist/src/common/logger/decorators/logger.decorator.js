"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const common_1 = require("@nestjs/common");
const logger_constant_1 = require("../constants/logger.constant");
const logger_interceptor_1 = require("../interceptors/logger.interceptor");
function Logger(action, options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(logger_interceptor_1.LoggerInterceptor), (0, common_1.SetMetadata)(logger_constant_1.LOGGER_ACTION_META_KEY, action), (0, common_1.SetMetadata)(logger_constant_1.LOGGER_OPTIONS_META_KEY, options ?? {}));
}
exports.Logger = Logger;
//# sourceMappingURL=logger.decorator.js.map