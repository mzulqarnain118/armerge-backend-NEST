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
exports.FileValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const file_enum_constant_1 = require("../constants/file.enum.constant");
const file_status_code_constant_1 = require("../constants/file.status-code.constant");
let FileValidationPipe = class FileValidationPipe {
    constructor(dto) {
        this.dto = dto;
    }
    async transform(value) {
        if (!value) {
            return;
        }
        if (Array.isArray(value)) {
            const classTransforms = [];
            for (const val of value) {
                await this.validate(val);
                const classTransform = await this.transformExtract(this.dto, val.extract);
                await this.validateExtract(classTransform, val.filename);
                const classTransformMerge = await this.transformMerge(val, classTransform);
                classTransforms.push(classTransformMerge);
            }
            return classTransforms;
        }
        const file = value;
        await this.validate(file);
        const classTransform = await this.transformExtract(this.dto, file.extract);
        await this.validateExtract(classTransform, file.filename);
        return this.transformMerge(value, classTransform);
    }
    async transformMerge(value, classTransform) {
        return {
            ...value,
            dto: classTransform,
        };
    }
    async transformExtract(classDtos, extract) {
        return (0, class_transformer_1.plainToInstance)(classDtos, extract);
    }
    async validate(value) {
        if (!Object.values(file_enum_constant_1.ENUM_FILE_EXCEL_MIME).find((val) => val === value.mimetype.toLowerCase())) {
            throw new common_1.UnsupportedMediaTypeException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_EXTENSION_ERROR,
                message: 'file.error.mimeInvalid',
            });
        }
        else if (!value.extract) {
            throw new common_1.UnprocessableEntityException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_NEED_EXTRACT_FIRST_ERROR,
                message: 'file.error.needExtractFirst',
            });
        }
        return;
    }
    async validateExtract(classTransform, filename) {
        const errors = [];
        for (const [index, clsTransform] of classTransform.entries()) {
            const validator = await (0, class_validator_1.validate)(clsTransform);
            if (validator.length > 0) {
                errors.push({
                    row: index,
                    file: filename,
                    errors: validator,
                });
            }
        }
        if (errors.length > 0) {
            throw new common_1.UnprocessableEntityException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_VALIDATION_DTO_ERROR,
                message: 'file.error.validationDto',
                errors,
                _errorType: 'import',
            });
        }
        return;
    }
};
FileValidationPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], FileValidationPipe);
exports.FileValidationPipe = FileValidationPipe;
//# sourceMappingURL=file.validation.pipe.js.map