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
exports.LoggerInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const core_1 = require("@nestjs/core");
const logger_service_1 = require("../services/logger.service");
const logger_enum_constant_1 = require("../constants/logger.enum.constant");
const logger_constant_1 = require("../constants/logger.constant");
let LoggerInterceptor = class LoggerInterceptor {
    constructor(reflector, loggerService) {
        this.reflector = reflector;
        this.loggerService = loggerService;
    }
    async intercept(context, next) {
        if (context.getType() === 'http') {
            const ctx = context.switchToHttp();
            const { apiKey, method, originalUrl, user, __id, body, params, path, } = ctx.getRequest();
            const responseExpress = ctx.getResponse();
            return next.handle().pipe((0, rxjs_1.tap)(async (response) => {
                const responseData = await response;
                const responseStatus = responseExpress.statusCode;
                const statusCode = responseData?.statusCode ?? responseStatus;
                const loggerAction = this.reflector.get(logger_constant_1.LOGGER_ACTION_META_KEY, context.getHandler());
                const loggerOptions = this.reflector.get(logger_constant_1.LOGGER_OPTIONS_META_KEY, context.getHandler());
                await this.loggerService.raw({
                    level: loggerOptions?.level ?? logger_enum_constant_1.ENUM_LOGGER_LEVEL.INFO,
                    action: loggerAction,
                    description: loggerOptions?.description ??
                        `Request ${method} called, url ${originalUrl}, and action ${loggerAction}`,
                    apiKey: apiKey?._id,
                    user: user?._id,
                    requestId: __id,
                    method: method,
                    role: user?.role,
                    type: user?.type,
                    params,
                    bodies: body,
                    path,
                    statusCode,
                    tags: loggerOptions?.tags ?? [],
                });
            }));
        }
        return next.handle();
    }
};
LoggerInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        logger_service_1.LoggerService])
], LoggerInterceptor);
exports.LoggerInterceptor = LoggerInterceptor;
//# sourceMappingURL=logger.interceptor.js.map