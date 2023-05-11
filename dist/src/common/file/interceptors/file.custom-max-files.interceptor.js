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
exports.FileCustomMaxFilesInterceptor = void 0;
const common_1 = require("@nestjs/common");
const file_constant_1 = require("../constants/file.constant");
const core_1 = require("@nestjs/core");
let FileCustomMaxFilesInterceptor = class FileCustomMaxFilesInterceptor {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async intercept(context, next) {
        if (context.getType() === 'http') {
            const ctx = context.switchToHttp();
            const request = ctx.getRequest();
            const maxFiles = this.reflector.get(file_constant_1.FILE_CUSTOM_MAX_FILES_META_KEY, context.getHandler());
            request.__customMaxFiles = maxFiles;
            return next.handle();
        }
        return next.handle();
    }
};
FileCustomMaxFilesInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], FileCustomMaxFilesInterceptor);
exports.FileCustomMaxFilesInterceptor = FileCustomMaxFilesInterceptor;
//# sourceMappingURL=file.custom-max-files.interceptor.js.map