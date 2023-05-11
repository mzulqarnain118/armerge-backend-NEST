"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePartNumber = exports.FileCustomMaxSize = exports.FileCustomMaxFile = exports.UploadFileMultiple = exports.UploadFileSingle = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const file_constant_1 = require("../constants/file.constant");
const file_custom_max_files_interceptor_1 = require("../interceptors/file.custom-max-files.interceptor");
const file_custom_max_size_interceptor_1 = require("../interceptors/file.custom-max-size.interceptor");
function UploadFileSingle(field) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)(field)));
}
exports.UploadFileSingle = UploadFileSingle;
function UploadFileMultiple(field) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)(field)));
}
exports.UploadFileMultiple = UploadFileMultiple;
function FileCustomMaxFile(customMaxFiles) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(file_custom_max_files_interceptor_1.FileCustomMaxFilesInterceptor), (0, common_1.SetMetadata)(file_constant_1.FILE_CUSTOM_MAX_FILES_META_KEY, customMaxFiles));
}
exports.FileCustomMaxFile = FileCustomMaxFile;
function FileCustomMaxSize(customMaxSize) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(file_custom_max_size_interceptor_1.FileCustomMaxSizeInterceptor), (0, common_1.SetMetadata)(file_constant_1.FILE_CUSTOM_MAX_SIZE_META_KEY, customMaxSize));
}
exports.FileCustomMaxSize = FileCustomMaxSize;
exports.FilePartNumber = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const { headers } = request;
    return headers['x-part-number'] ? Number(headers['x-part-number']) : 0;
});
//# sourceMappingURL=file.decorator.js.map