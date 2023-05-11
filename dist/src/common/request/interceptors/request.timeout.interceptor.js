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
exports.RequestTimeoutInterceptor = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const ms_1 = __importDefault(require("ms"));
const error_status_code_constant_1 = require("../../error/constants/error.status-code.constant");
const request_constant_1 = require("../constants/request.constant");
let RequestTimeoutInterceptor = class RequestTimeoutInterceptor {
    constructor(configService, reflector) {
        this.configService = configService;
        this.reflector = reflector;
        this.maxTimeoutInSecond =
            this.configService.get('request.timeout');
    }
    async intercept(context, next) {
        if (context.getType() === 'http') {
            const customTimeout = this.reflector.get(request_constant_1.REQUEST_CUSTOM_TIMEOUT_META_KEY, context.getHandler());
            if (customTimeout) {
                const seconds = this.reflector.get(request_constant_1.REQUEST_CUSTOM_TIMEOUT_VALUE_META_KEY, context.getHandler());
                return next.handle().pipe((0, operators_1.timeout)((0, ms_1.default)(seconds)), (0, operators_1.catchError)((err) => {
                    if (err instanceof rxjs_1.TimeoutError) {
                        throw new common_1.RequestTimeoutException({
                            statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_REQUEST_TIMEOUT,
                            message: 'http.clientError.requestTimeOut',
                        });
                    }
                    return (0, rxjs_1.throwError)(() => err);
                }));
            }
            else {
                return next.handle().pipe((0, operators_1.timeout)(this.maxTimeoutInSecond), (0, operators_1.catchError)((err) => {
                    if (err instanceof rxjs_1.TimeoutError) {
                        throw new common_1.RequestTimeoutException({
                            statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_REQUEST_TIMEOUT,
                            message: 'http.clientError.requestTimeOut',
                        });
                    }
                    return (0, rxjs_1.throwError)(() => err);
                }));
            }
        }
        return next.handle();
    }
};
RequestTimeoutInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        core_1.Reflector])
], RequestTimeoutInterceptor);
exports.RequestTimeoutInterceptor = RequestTimeoutInterceptor;
//# sourceMappingURL=request.timeout.interceptor.js.map