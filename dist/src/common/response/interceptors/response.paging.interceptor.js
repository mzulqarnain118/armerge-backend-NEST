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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsePagingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const message_service_1 = require("../../message/services/message.service");
const core_1 = require("@nestjs/core");
const class_transformer_1 = require("class-transformer");
const qs_1 = __importDefault(require("qs"));
const response_constant_1 = require("../constants/response.constant");
const helper_array_service_1 = require("../../helper/services/helper.array.service");
let ResponsePagingInterceptor = class ResponsePagingInterceptor {
    constructor(reflector, messageService, helperArrayService) {
        this.reflector = reflector;
        this.messageService = messageService;
        this.helperArrayService = helperArrayService;
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
                const __path = request.path;
                const __requestId = request.__id;
                const __timestamp = request.__xTimestamp ?? request.__timestamp;
                const __timezone = request.__timezone;
                const __version = request.__version;
                const __repoVersion = request.__repoVersion;
                const __pagination = request.__pagination;
                let httpStatus = response.statusCode;
                let statusCode = response.statusCode;
                let data = [];
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
                if (!responseData) {
                    throw new Error('Paging must have response');
                }
                const { _metadata } = responseData;
                data = responseData.data;
                if (classSerialization) {
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
                const { query } = request;
                delete query.perPage;
                delete query.page;
                const total = responseData._pagination.total;
                const totalPage = responseData._pagination.totalPage;
                const perPage = __pagination.perPage;
                const page = __pagination.page;
                const queryString = qs_1.default.stringify(query, {
                    encode: false,
                });
                const cursorPaginationMetadata = {
                    nextPage: page < totalPage
                        ? `${__path}?perPage=${perPage}&page=${page + 1}&${queryString}`
                        : undefined,
                    previousPage: page > 1
                        ? `${__path}?perPage=${perPage}&page=${page - 1}&${queryString}`
                        : undefined,
                    firstPage: totalPage > 1
                        ? `${__path}?perPage=${perPage}&page=${1}&${queryString}`
                        : undefined,
                    lastPage: totalPage > 1
                        ? `${__path}?perPage=${perPage}&page=${totalPage}&${queryString}`
                        : undefined,
                };
                metadata = {
                    ...metadata,
                    ..._metadata,
                    pagination: {
                        ...__pagination,
                        ...metadata._pagination,
                        total,
                        totalPage,
                    },
                };
                if (!this.helperArrayService.includes(Object.values(cursorPaginationMetadata), undefined)) {
                    metadata.cursor = cursorPaginationMetadata;
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
ResponsePagingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        message_service_1.MessageService,
        helper_array_service_1.HelperArrayService])
], ResponsePagingInterceptor);
exports.ResponsePagingInterceptor = ResponsePagingInterceptor;
//# sourceMappingURL=response.paging.interceptor.js.map