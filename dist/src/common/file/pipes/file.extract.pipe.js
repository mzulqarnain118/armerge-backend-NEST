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
exports.FileExtractPipe = void 0;
const common_1 = require("@nestjs/common");
const file_enum_constant_1 = require("../constants/file.enum.constant");
const file_status_code_constant_1 = require("../constants/file.status-code.constant");
const helper_file_service_1 = require("../../helper/services/helper.file.service");
let FileExtractPipe = class FileExtractPipe {
    constructor(helperFileService) {
        this.helperFileService = helperFileService;
    }
    async transform(value) {
        if (!value) {
            return;
        }
        if (Array.isArray(value)) {
            const extracts = [];
            for (const val of value) {
                await this.validate(val.mimetype);
                const extract = await this.extract(val);
                extracts.push(extract);
            }
            return extracts;
        }
        const file = value;
        await this.validate(file.mimetype);
        return this.extract(file);
    }
    async validate(mimetype) {
        if (!Object.values(file_enum_constant_1.ENUM_FILE_EXCEL_MIME).find((val) => val === mimetype.toLowerCase())) {
            throw new common_1.UnsupportedMediaTypeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_EXTENSION_ERROR,
                message: 'file.error.mimeInvalid',
            });
        }
    }
    async extract(value) {
        const extract = this.helperFileService.readExcelFromBuffer(value.buffer);
        return {
            ...value,
            extract,
        };
    }
};
FileExtractPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_file_service_1.HelperFileService])
], FileExtractPipe);
exports.FileExtractPipe = FileExtractPipe;
//# sourceMappingURL=file.extract.pipe.js.map