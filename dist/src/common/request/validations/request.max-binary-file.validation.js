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
exports.MaxBinaryFile = exports.MaxBinaryFileConstraint = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const class_validator_1 = require("class-validator");
const file_enum_constant_1 = require("../../file/constants/file.enum.constant");
let MaxBinaryFileConstraint = class MaxBinaryFileConstraint {
    constructor(configService) {
        this.configService = configService;
    }
    validate(value, args) {
        const [type] = args.constraints;
        let fileSize = 0;
        switch (type) {
            case file_enum_constant_1.ENUM_FILE_TYPE.AUDIO:
                fileSize = this.configService.get('file.audio.maxFileSize');
                break;
            case file_enum_constant_1.ENUM_FILE_TYPE.EXCEL:
                fileSize = this.configService.get('file.excel.maxFileSize');
                break;
            case file_enum_constant_1.ENUM_FILE_TYPE.IMAGE:
                fileSize = this.configService.get('file.image.maxFileSize');
                break;
            case file_enum_constant_1.ENUM_FILE_TYPE.VIDEO:
                fileSize = this.configService.get('file.video.maxFileSize');
                break;
            default:
                break;
        }
        return fileSize <= value.length;
    }
};
MaxBinaryFileConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MaxBinaryFileConstraint);
exports.MaxBinaryFileConstraint = MaxBinaryFileConstraint;
function MaxBinaryFile(type, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'MaxBinaryFile',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [type],
            validator: MaxBinaryFileConstraint,
        });
    };
}
exports.MaxBinaryFile = MaxBinaryFile;
//# sourceMappingURL=request.max-binary-file.validation.js.map