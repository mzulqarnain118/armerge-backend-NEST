"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTypeExcelPipe = exports.FileTypeAudioPipe = exports.FileTypeVideoPipe = exports.FileTypeImagePipe = void 0;
const common_1 = require("@nestjs/common");
const file_enum_constant_1 = require("../constants/file.enum.constant");
const file_status_code_constant_1 = require("../constants/file.status-code.constant");
let FileTypeImagePipe = class FileTypeImagePipe {
    async transform(value) {
        if (!value) {
            return;
        }
        if (Array.isArray(value)) {
            for (const val of value) {
                await this.validate(val.mimetype);
            }
            return value;
        }
        const file = value;
        await this.validate(file.mimetype);
        return value;
    }
    async validate(mimetype) {
        if (!Object.values(file_enum_constant_1.ENUM_FILE_IMAGE_MIME).find((val) => val === mimetype.toLowerCase())) {
            throw new common_1.UnsupportedMediaTypeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_EXTENSION_ERROR,
                message: 'file.error.mimeInvalid',
            });
        }
        return;
    }
};
FileTypeImagePipe = __decorate([
    (0, common_1.Injectable)()
], FileTypeImagePipe);
exports.FileTypeImagePipe = FileTypeImagePipe;
let FileTypeVideoPipe = class FileTypeVideoPipe {
    async transform(value) {
        if (Array.isArray(value)) {
            for (const val of value) {
                await this.validate(val.mimetype);
            }
            return value;
        }
        const file = value;
        await this.validate(file.mimetype);
        return value;
    }
    async validate(mimetype) {
        if (!Object.values(file_enum_constant_1.ENUM_FILE_VIDEO_MIME).find((val) => val === mimetype.toLowerCase())) {
            throw new common_1.UnsupportedMediaTypeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_EXTENSION_ERROR,
                message: 'file.error.mimeInvalid',
            });
        }
        return;
    }
};
FileTypeVideoPipe = __decorate([
    (0, common_1.Injectable)()
], FileTypeVideoPipe);
exports.FileTypeVideoPipe = FileTypeVideoPipe;
let FileTypeAudioPipe = class FileTypeAudioPipe {
    async transform(value) {
        if (Array.isArray(value)) {
            for (const val of value) {
                await this.validate(val.mimetype);
            }
            return value;
        }
        const file = value;
        await this.validate(file.mimetype);
        return value;
    }
    async validate(mimetype) {
        if (!Object.values(file_enum_constant_1.ENUM_FILE_AUDIO_MIME).find((val) => val === mimetype.toLowerCase())) {
            throw new common_1.UnsupportedMediaTypeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_EXTENSION_ERROR,
                message: 'file.error.mimeInvalid',
            });
        }
        return;
    }
};
FileTypeAudioPipe = __decorate([
    (0, common_1.Injectable)()
], FileTypeAudioPipe);
exports.FileTypeAudioPipe = FileTypeAudioPipe;
let FileTypeExcelPipe = class FileTypeExcelPipe {
    async transform(value) {
        if (Array.isArray(value)) {
            for (const val of value) {
                await this.validate(val.mimetype);
            }
            return value;
        }
        const file = value;
        await this.validate(file.mimetype);
        return value;
    }
    async validate(mimetype) {
        if (!Object.values(file_enum_constant_1.ENUM_FILE_EXCEL_MIME).find((val) => val === mimetype.toLowerCase())) {
            throw new common_1.UnsupportedMediaTypeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_EXTENSION_ERROR,
                message: 'file.error.mimeInvalid',
            });
        }
        return;
    }
};
FileTypeExcelPipe = __decorate([
    (0, common_1.Injectable)()
], FileTypeExcelPipe);
exports.FileTypeExcelPipe = FileTypeExcelPipe;
//# sourceMappingURL=file.type.pipe.js.map