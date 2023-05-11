"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const request_timeout_interceptor_1 = require("./interceptors/request.timeout.interceptor");
const request_middleware_module_1 = require("./middleware/request.middleware.module");
const request_max_date_today_validation_1 = require("./validations/request.max-date-today.validation");
const request_min_date_today_validation_1 = require("./validations/request.min-date-today.validation");
const request_mobile_number_allowed_validation_1 = require("./validations/request.mobile-number-allowed.validation");
const request_status_code_constant_1 = require("./constants/request.status-code.constant");
const request_is_password_medium_validation_1 = require("./validations/request.is-password-medium.validation");
const request_is_password_strong_validation_1 = require("./validations/request.is-password-strong.validation");
const request_is_password_weak_validation_1 = require("./validations/request.is-password-weak.validation");
const request_is_start_with_validation_1 = require("./validations/request.is-start-with.validation");
const request_max_greater_than_equal_validation_1 = require("./validations/request.max-greater-than-equal.validation");
const request_max_greater_than_validation_1 = require("./validations/request.max-greater-than.validation");
const request_min_greater_than_equal_validation_1 = require("./validations/request.min-greater-than-equal.validation");
const request_min_greater_than_validation_1 = require("./validations/request.min-greater-than.validation");
const request_only_digits_validation_1 = require("./validations/request.only-digits.validation");
const request_safe_string_validation_1 = require("./validations/request.safe-string.validation");
const request_skip_validation_1 = require("./validations/request.skip.validation");
const request_max_binary_file_validation_1 = require("./validations/request.max-binary-file.validation");
const throttler_1 = require("@nestjs/throttler");
const config_1 = require("@nestjs/config");
let RequestModule = class RequestModule {
};
RequestModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: request_timeout_interceptor_1.RequestTimeoutInterceptor,
            },
            {
                provide: core_1.APP_PIPE,
                useFactory: () => new common_1.ValidationPipe({
                    transform: true,
                    skipNullProperties: false,
                    skipUndefinedProperties: false,
                    skipMissingProperties: false,
                    forbidUnknownValues: false,
                    errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                    exceptionFactory: async (errors) => new common_1.UnprocessableEntityException({
                        statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_VALIDATION_ERROR,
                        message: 'request.validation',
                        errors,
                    }),
                }),
            },
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
            request_is_password_strong_validation_1.IsPasswordStrongConstraint,
            request_is_password_medium_validation_1.IsPasswordMediumConstraint,
            request_is_password_weak_validation_1.IsPasswordWeakConstraint,
            request_is_start_with_validation_1.IsStartWithConstraint,
            request_max_greater_than_equal_validation_1.MaxGreaterThanEqualConstraint,
            request_max_greater_than_validation_1.MaxGreaterThanConstraint,
            request_min_greater_than_equal_validation_1.MinGreaterThanEqualConstraint,
            request_min_greater_than_validation_1.MinGreaterThanConstraint,
            request_skip_validation_1.SkipConstraint,
            request_safe_string_validation_1.SafeStringConstraint,
            request_only_digits_validation_1.IsOnlyDigitsConstraint,
            request_min_date_today_validation_1.MinDateTodayConstraint,
            request_mobile_number_allowed_validation_1.MobileNumberAllowedConstraint,
            request_max_date_today_validation_1.MaxDateTodayConstraint,
            request_max_binary_file_validation_1.MaxBinaryFileConstraint,
        ],
        imports: [
            request_middleware_module_1.RequestMiddlewareModule,
            throttler_1.ThrottlerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    ttl: config.get('request.throttle.ttl'),
                    limit: config.get('request.throttle.limit'),
                }),
            }),
        ],
    })
], RequestModule);
exports.RequestModule = RequestModule;
//# sourceMappingURL=request.module.js.map