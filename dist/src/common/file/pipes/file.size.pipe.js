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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSizeAudioPipe = exports.FileSizeVideoPipe = exports.FileSizeExcelPipe = exports.FileSizeImagePipe = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const helper_file_service_1 = require("../../helper/services/helper.file.service");
const file_status_code_constant_1 = require("../constants/file.status-code.constant");
let FileSizeImagePipe = class FileSizeImagePipe {
    constructor(request, configService, helperFileService) {
        this.request = request;
        this.configService = configService;
        this.helperFileService = helperFileService;
        this.maxSize = this.configService.get('file.image.maxFileSize');
    }
    async transform(value) {
        if (!value) {
            return;
        }
        if (Array.isArray(value)) {
            for (const val of value) {
                await this.validate(val.size);
            }
            return value;
        }
        const file = value;
        await this.validate(file.size);
        return value;
    }
    async validate(size) {
        const maxSizeInBytes = this.request.__customMaxFileSize
            ? this.helperFileService.convertToBytes(this.request.__customMaxFileSize)
            : this.maxSize;
        if (size > maxSizeInBytes) {
            throw new common_1.PayloadTooLargeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_MAX_SIZE_ERROR,
                message: 'file.error.maxSize',
            });
        }
        return;
    }
};
FileSizeImagePipe = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService,
        helper_file_service_1.HelperFileService])
], FileSizeImagePipe);
exports.FileSizeImagePipe = FileSizeImagePipe;
let FileSizeExcelPipe = class FileSizeExcelPipe {
    constructor(request, configService, helperFileService) {
        this.request = request;
        this.configService = configService;
        this.helperFileService = helperFileService;
        this.maxSize = this.configService.get('file.excel.maxFileSize');
    }
    async transform(value) {
        if (Array.isArray(value)) {
            for (const val of value) {
                await this.validate(val.size);
            }
            return value;
        }
        const file = value;
        await this.validate(file.size);
        return value;
    }
    async validate(size) {
        const maxSizeInBytes = this.request.__customMaxFileSize
            ? this.helperFileService.convertToBytes(this.request.__customMaxFileSize)
            : this.maxSize;
        if (size > maxSizeInBytes) {
            throw new common_1.PayloadTooLargeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_MAX_SIZE_ERROR,
                message: 'file.error.maxSize',
            });
        }
        return;
    }
};
FileSizeExcelPipe = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService,
        helper_file_service_1.HelperFileService])
], FileSizeExcelPipe);
exports.FileSizeExcelPipe = FileSizeExcelPipe;
let FileSizeVideoPipe = class FileSizeVideoPipe {
    constructor(request, configService, helperFileService) {
        this.request = request;
        this.configService = configService;
        this.helperFileService = helperFileService;
        this.maxSize = this.configService.get('file.video.maxFileSize');
    }
    async transform(value) {
        if (Array.isArray(value)) {
            for (const val of value) {
                await this.validate(val.size);
            }
            return value;
        }
        const file = value;
        await this.validate(file.size);
        return value;
    }
    async validate(size) {
        const maxSizeInBytes = this.request.__customMaxFileSize
            ? this.helperFileService.convertToBytes(this.request.__customMaxFileSize)
            : this.maxSize;
        if (size > maxSizeInBytes) {
            throw new common_1.PayloadTooLargeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_MAX_SIZE_ERROR,
                message: 'file.error.maxSize',
            });
        }
        return;
    }
};
FileSizeVideoPipe = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService,
        helper_file_service_1.HelperFileService])
], FileSizeVideoPipe);
exports.FileSizeVideoPipe = FileSizeVideoPipe;
let FileSizeAudioPipe = class FileSizeAudioPipe {
    constructor(request, configService, helperFileService) {
        this.request = request;
        this.configService = configService;
        this.helperFileService = helperFileService;
        this.maxSize = this.configService.get('file.audio.maxFileSize');
    }
    async transform(value) {
        if (Array.isArray(value)) {
            for (const val of value) {
                await this.validate(val.size);
            }
            return value;
        }
        const file = value;
        await this.validate(file.size);
        return value;
    }
    async validate(size) {
        const maxSizeInBytes = this.request.__customMaxFileSize
            ? this.helperFileService.convertToBytes(this.request.__customMaxFileSize)
            : this.maxSize;
        if (size > maxSizeInBytes) {
            throw new common_1.PayloadTooLargeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_MAX_SIZE_ERROR,
                message: 'file.error.maxSize',
            });
        }
        return;
    }
};
FileSizeAudioPipe = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService,
        helper_file_service_1.HelperFileService])
], FileSizeAudioPipe);
exports.FileSizeAudioPipe = FileSizeAudioPipe;
//# sourceMappingURL=file.size.pipe.js.map