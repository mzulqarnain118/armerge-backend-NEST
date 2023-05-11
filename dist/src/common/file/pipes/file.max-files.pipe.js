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
exports.FileMaxFilesAudioPipe = exports.FileMaxFilesVideoPipe = exports.FileMaxFilesExcelPipe = exports.FileMaxFilesImagePipe = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const file_status_code_constant_1 = require("../constants/file.status-code.constant");
let FileMaxFilesImagePipe = class FileMaxFilesImagePipe {
    constructor(request, configService) {
        this.request = request;
        this.configService = configService;
        this.maxFile = this.configService.get('file.image.maxFiles');
    }
    async transform(value) {
        if (!value) {
            return value;
        }
        await this.validate(value);
        return value;
    }
    async validate(value) {
        const maxFiles = this.request.__customMaxFiles ?? this.maxFile;
        if (value.length > maxFiles) {
            throw new common_1.UnprocessableEntityException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_MAX_FILES_ERROR,
                message: 'file.error.maxFiles',
            });
        }
        return;
    }
};
FileMaxFilesImagePipe = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService])
], FileMaxFilesImagePipe);
exports.FileMaxFilesImagePipe = FileMaxFilesImagePipe;
let FileMaxFilesExcelPipe = class FileMaxFilesExcelPipe {
    constructor(request, configService) {
        this.request = request;
        this.configService = configService;
        this.maxFile = this.configService.get('file.excel.maxFiles');
    }
    async transform(value) {
        await this.validate(value);
        return value;
    }
    async validate(value) {
        const maxFiles = this.request.__customMaxFiles ?? this.maxFile;
        if (value.length > maxFiles) {
            throw new common_1.UnprocessableEntityException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_MAX_FILES_ERROR,
                message: 'file.error.maxFiles',
            });
        }
        return;
    }
};
FileMaxFilesExcelPipe = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService])
], FileMaxFilesExcelPipe);
exports.FileMaxFilesExcelPipe = FileMaxFilesExcelPipe;
let FileMaxFilesVideoPipe = class FileMaxFilesVideoPipe {
    constructor(request, configService) {
        this.request = request;
        this.configService = configService;
        this.maxFile = this.configService.get('file.video.maxFiles');
    }
    async transform(value) {
        await this.validate(value);
        return value;
    }
    async validate(value) {
        const maxFiles = this.request.__customMaxFiles ?? this.maxFile;
        if (value.length > maxFiles) {
            throw new common_1.UnprocessableEntityException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_MAX_FILES_ERROR,
                message: 'file.error.maxFiles',
            });
        }
        return;
    }
};
FileMaxFilesVideoPipe = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService])
], FileMaxFilesVideoPipe);
exports.FileMaxFilesVideoPipe = FileMaxFilesVideoPipe;
let FileMaxFilesAudioPipe = class FileMaxFilesAudioPipe {
    constructor(request, configService) {
        this.request = request;
        this.configService = configService;
        this.maxFile = this.configService.get('file.audio.maxFiles');
    }
    async transform(value) {
        await this.validate(value);
        return value;
    }
    async validate(value) {
        const maxFiles = this.request.__customMaxFiles ?? this.maxFile;
        if (value.length > maxFiles) {
            throw new common_1.UnprocessableEntityException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_MAX_FILES_ERROR,
                message: 'file.error.maxFiles',
            });
        }
        return;
    }
};
FileMaxFilesAudioPipe = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService])
], FileMaxFilesAudioPipe);
exports.FileMaxFilesAudioPipe = FileMaxFilesAudioPipe;
//# sourceMappingURL=file.max-files.pipe.js.map