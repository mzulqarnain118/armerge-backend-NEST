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
exports.ResponseDefaultInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const message_service_1 = require("../../message/services/message.service");
const core_1 = require("@nestjs/core");
const class_transformer_1 = require("class-transformer");
const response_constant_1 = require("../constants/response.constant");
let ResponseDefaultInterceptor = class ResponseDefaultInterceptor {
    constructor(reflector, messageService) {
        this.reflector = reflector;
        this.messageService = messageService;
    }
    async intercept(context, next) {
        if (context.getType() === 'http') {
            return next.handle().pipe((0, operators_1.map)(async (res) => {
                const ctx = context.switchToHttp();
                const response = ctx.getResponse();
                const request = ctx.getRequest();
                let messagePath = this.reflector.get(response_constant_1.RESPONSE_MESSAGE_PATH_META_KEY, context.getHandler());
                const classSerialization = this.reflector.get(response_constant_1.RESPONSE_SERIALIZATION_META_KEY, context.getHandler());
                const classSerializationOptions = this.reflector.get(response_constant_1.RESPONSE_SERIALIZATION_OPTIONS_META_KEY, context.getHandler());
                let messageProperties = this.reflector.get(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, context.getHandler());
                const __customLang = request.__customLang;
                const __requestId = request.__id;
                const __path = request.path;
                const __timestamp = request.__xTimestamp ?? request.__timestamp;
                const __timezone = request.__timezone;
                const __version = request.__version;
                const __repoVersion = request.__repoVersion;
                let httpStatus = response.statusCode;
                let statusCode = response.statusCode;
                let data = undefined;
                let metadata = {
                    languages: __customLang,
                    timestamp: __timestamp,
                    timezone: __timezone,
                    requestId: __requestId,
                    path: __path,
                    version: __version,
                    repoVersion: __repoVersion,
                };
                const responseData = (await res);
                if (responseData) {
                    const { _metadata } = responseData;
                    data = responseData.data;
                    if (data && classSerialization) {
                        data = (0, class_transformer_1.plainToInstance)(classSerialization, data, classSerializationOptions);
                    }
                    httpStatus =
                        _metadata?.customProperty?.httpStatus ?? httpStatus;
                    statusCode =
                        _metadata?.customProperty?.statusCode ?? statusCode;
                    messagePath =
                        _metadata?.customProperty?.message ?? messagePath;
                    messageProperties =
                        _metadata?.customProperty?.messageProperties ??
                            messageProperties;
                    delete _metadata?.customProperty;
                    metadata = {
                        ...metadata,
                        ..._metadata,
                    };
                }
                const message = await this.messageService.get(messagePath, {
                    customLanguages: __customLang,
                    properties: messageProperties,
                });
                response.status(httpStatus);
                return {
                    statusCode,
                    message,
                    _metadata: metadata,
                    data,
                };
            }));
        }
        return next.handle();
    }
};
ResponseDefaultInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        message_service_1.MessageService])
], ResponseDefaultInterceptor);
exports.ResponseDefaultInterceptor = ResponseDefaultInterceptor;
//# sourceMappingURL=response.default.interceptor.js.map