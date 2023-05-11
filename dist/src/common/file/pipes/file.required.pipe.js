"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRequiredPipe = void 0;
const common_1 = require("@nestjs/common");
const file_status_code_constant_1 = require("../constants/file.status-code.constant");
let FileRequiredPipe = class FileRequiredPipe {
    async transform(value) {
        await this.validate(value);
        return value;
    }
    async validate(value) {
        if (!value || (Array.isArray(value) && value.length === 0)) {
            throw new common_1.UnprocessableEntityException({
                statusCode: file_status_code_constant_1.ENUM_FILE_STATUS_CODE_ERROR.FILE_NEEDED_ERROR,
                message: 'file.error.notFound',
            });
        }
        return;
    }
};
FileRequiredPipe = __decorate([
    (0, common_1.Injectable)()
], FileRequiredPipe);
exports.FileRequiredPipe = FileRequiredPipe;
//# sourceMappingURL=file.required.pipe.js.map