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
var ErrorHttpFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHttpFilter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_function_constant_1 = require("../../database/constants/database.function.constant");
const debugger_service_1 = require("../../debugger/services/debugger.service");
const error_enum_constant_1 = require("../constants/error.enum.constant");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const message_service_1 = require("../../message/services/message.service");
let ErrorHttpFilter = ErrorHttpFilter_1 = class ErrorHttpFilter {
    constructor(debuggerService, configService, messageService, helperDateService) {
        this.debuggerService = debuggerService;
        this.configService = configService;
        this.messageService = messageService;
        this.helperDateService = helperDateService;
    }
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const __customLang = request.__customLang ?? [
            this.messageService.getLanguage(),
        ];
        const __class = request.__class ?? ErrorHttpFilter_1.name;
        const __function = request.__function ?? this.catch.name;
        const __requestId = request.__id ?? (0, database_function_constant_1.DatabaseDefaultUUID)();
        const __path = request.path;
        const __timestamp = request.__xTimestamp ??
            request.__timestamp ??
            this.helperDateService.timestamp();
        const __timezone = request.__timezone ??
            Intl.DateTimeFormat().resolvedOptions().timeZone;
        const __version = request.__version ??
            this.configService.get('app.versioning.version');
        const __repoVersion = request.__repoVersion ??
            this.configService.get('app.repoVersion');
        try {
            this.debuggerService.error(request?.__id ? request.__id : ErrorHttpFilter_1.name, {
                description: exception instanceof Error
                    ? exception.message
                    : exception.toString(),
                class: __class ?? ErrorHttpFilter_1.name,
                function: __function ?? this.catch.name,
                path: __path,
            }, exception);
        }
        catch (err) { }
        let statusHttp = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let messagePath = `http.${statusHttp}`;
        let statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let _error = undefined;
        let errors = undefined;
        let messageProperties = undefined;
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
        if (exception instanceof common_1.HttpException) {
            const responseException = exception.getResponse();
            statusHttp = exception.getStatus();
            messagePath = `http.${statusHttp}`;
            statusCode = exception.getStatus();
            if (this.isErrorException(responseException)) {
                const { _metadata } = responseException;
                statusCode = responseException.statusCode;
                messagePath = responseException.message;
                data = responseException.data;
                messageProperties =
                    _metadata?.customProperty?.messageProperties;
                delete _metadata?.customProperty;
                metadata = {
                    ...metadata,
                    ..._metadata,
                };
                if (responseException.errors?.length > 0) {
                    errors =
                        responseException._errorType === error_enum_constant_1.ERROR_TYPE.IMPORT
                            ? this.messageService.getImportErrorsMessage(responseException.errors, { customLanguages: __customLang })
                            : this.messageService.getRequestErrorsMessage(responseException.errors, { customLanguages: __customLang });
                }
                if (!responseException._error) {
                    _error =
                        typeof responseException._error !== 'string'
                            ? JSON.stringify(responseException._error)
                            : responseException._error;
                }
            }
        }
        const message = await this.messageService.get(messagePath, {
            customLanguages: __customLang,
            properties: messageProperties,
        });
        const responseBody = {
            statusCode,
            message,
            errors,
            _error,
            _metadata: metadata,
            data,
        };
        response
            .setHeader('x-custom-lang', __customLang)
            .setHeader('x-timestamp', __timestamp)
            .setHeader('x-timezone', __timezone)
            .setHeader('x-request-id', __requestId)
            .setHeader('x-version', __version)
            .setHeader('x-repo-version', __repoVersion)
            .status(statusHttp)
            .json(responseBody);
        return;
    }
    isErrorException(obj) {
        return typeof obj === 'object'
            ? 'statusCode' in obj && 'message' in obj
            : false;
    }
};
ErrorHttpFilter = ErrorHttpFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __param(0, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [debugger_service_1.DebuggerService,
        config_1.ConfigService,
        message_service_1.MessageService,
        helper_date_service_1.HelperDateService])
], ErrorHttpFilter);
exports.ErrorHttpFilter = ErrorHttpFilter;
//# sourceMappingURL=error.http.filter.js.map