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
exports.RequestTimestampInterceptor = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const request_status_code_constant_1 = require("../constants/request.status-code.constant");
let RequestTimestampInterceptor = class RequestTimestampInterceptor {
    constructor(configService, helperDateService) {
        this.configService = configService;
        this.helperDateService = helperDateService;
        this.maxRequestTimestampInMs = this.configService.get('request.timestamp.toleranceTimeInMs');
    }
    async intercept(context, next) {
        if (context.getType() === 'http') {
            const request = context.switchToHttp().getRequest();
            const timestamp = request.__timestamp;
            const checkTimestamp = this.helperDateService.checkTimestamp(timestamp);
            if (!timestamp || !checkTimestamp) {
                throw new common_1.ForbiddenException({
                    statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_TIMESTAMP_INVALID_ERROR,
                    message: 'request.error.timestampInvalid',
                });
            }
            const timestampDate = this.helperDateService.create(timestamp);
            const toleranceMin = this.helperDateService.backwardInMilliseconds(this.maxRequestTimestampInMs);
            const toleranceMax = this.helperDateService.forwardInMilliseconds(this.maxRequestTimestampInMs);
            if (timestampDate < toleranceMin || timestampDate > toleranceMax) {
                throw new common_1.ForbiddenException({
                    statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_TIMESTAMP_INVALID_ERROR,
                    message: 'request.error.timestampInvalid',
                });
            }
        }
        return next.handle();
    }
};
RequestTimestampInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        helper_date_service_1.HelperDateService])
], RequestTimestampInterceptor);
exports.RequestTimestampInterceptor = RequestTimestampInterceptor;
//# sourceMappingURL=request.timestamp.interceptor.js.map