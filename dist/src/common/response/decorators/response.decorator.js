"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSerializationOptions = exports.ResponsePaging = exports.ResponseExcel = exports.Response = void 0;
const common_1 = require("@nestjs/common");
const helper_enum_constant_1 = require("../../helper/constants/helper.enum.constant");
const response_constant_1 = require("../constants/response.constant");
const response_default_interceptor_1 = require("../interceptors/response.default.interceptor");
const response_excel_interceptor_1 = require("../interceptors/response.excel.interceptor");
const response_paging_interceptor_1 = require("../interceptors/response.paging.interceptor");
function Response(messagePath, options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((response_default_interceptor_1.ResponseDefaultInterceptor)), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PATH_META_KEY, messagePath), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_SERIALIZATION_META_KEY, options ? options.serialization : undefined), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, options ? options.messageProperties : undefined));
}
exports.Response = Response;
function ResponseExcel(options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(response_excel_interceptor_1.ResponseExcelInterceptor), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_SERIALIZATION_META_KEY, options ? options.serialization : undefined), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_EXCEL_TYPE_META_KEY, options ? options.fileType : helper_enum_constant_1.ENUM_HELPER_FILE_TYPE.CSV), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, options ? options.messageProperties : undefined));
}
exports.ResponseExcel = ResponseExcel;
function ResponsePaging(messagePath, options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((response_paging_interceptor_1.ResponsePagingInterceptor)), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PATH_META_KEY, messagePath), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_SERIALIZATION_META_KEY, options ? options.serialization : undefined), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, options ? options.messageProperties : undefined));
}
exports.ResponsePaging = ResponsePaging;
exports.ResponseSerializationOptions = common_1.SerializeOptions;
//# sourceMappingURL=response.decorator.js.map