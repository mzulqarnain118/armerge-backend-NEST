"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMeta = void 0;
const common_1 = require("@nestjs/common");
const error_constant_1 = require("../constants/error.constant");
function ErrorMeta(cls, func) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(error_constant_1.ERROR_CLASS_META_KEY, cls), (0, common_1.SetMetadata)(error_constant_1.ERROR_FUNCTION_META_KEY, func));
}
exports.ErrorMeta = ErrorMeta;
//# sourceMappingURL=error.decorator.js.map