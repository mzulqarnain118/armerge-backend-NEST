"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCustomHeadersInterceptor = void 0;
const common_1 = require("@nestjs/common");
let ResponseCustomHeadersInterceptor = class ResponseCustomHeadersInterceptor {
    async intercept(context, next) {
        if (context.getType() === 'http') {
            const ctx = context.switchToHttp();
            const responseExpress = ctx.getResponse();
            const request = ctx.getRequest();
            responseExpress.setHeader('x-custom-lang', request.__xCustomLang);
            responseExpress.setHeader('x-timestamp', request.__xTimestamp ?? request.__timestamp);
            responseExpress.setHeader('x-timezone', request.__timezone);
            responseExpress.setHeader('x-request-id', request.__id);
            responseExpress.setHeader('x-version', request.__version);
            responseExpress.setHeader('x-repo-version', request.__repoVersion);
            return next.handle();
        }
        return next.handle();
    }
};
ResponseCustomHeadersInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseCustomHeadersInterceptor);
exports.ResponseCustomHeadersInterceptor = ResponseCustomHeadersInterceptor;
//# sourceMappingURL=response.custom-headers.interceptor.js.map