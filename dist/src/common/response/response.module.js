"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const response_middleware_module_1 = require("./middleware/response.middleware.module");
const response_custom_headers_interceptor_1 = require("./interceptors/response.custom-headers.interceptor");
let ResponseModule = class ResponseModule {
};
ResponseModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: response_custom_headers_interceptor_1.ResponseCustomHeadersInterceptor,
            },
        ],
        imports: [response_middleware_module_1.ResponseMiddlewareModule],
    })
], ResponseModule);
exports.ResponseModule = ResponseModule;
//# sourceMappingURL=response.module.js.map