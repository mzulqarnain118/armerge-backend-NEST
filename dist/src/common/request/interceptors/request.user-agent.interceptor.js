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
exports.RequestUserAgentInterceptor = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const request_status_code_constant_1 = require("../constants/request.status-code.constant");
let RequestUserAgentInterceptor = class RequestUserAgentInterceptor {
    constructor(configService) {
        this.configService = configService;
        this.userAgentBrowser = this.configService.get('request.userAgent.browser');
        this.userAgentOs = this.configService.get('request.userAgent.os');
    }
    async intercept(context, next) {
        if (context.getType() === 'http') {
            const request = context
                .switchToHttp()
                .getRequest();
            const userAgent = request.__userAgent;
            if (!this.userAgentOs.some((val) => val.match(new RegExp(userAgent.os.name)))) {
                throw new common_1.ForbiddenException({
                    statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_OS_INVALID_ERROR,
                    message: 'request.error.userAgentOsInvalid',
                });
            }
            if (!this.userAgentBrowser.some((val) => val.match(new RegExp(userAgent.browser.name)))) {
                throw new common_1.ForbiddenException({
                    statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_BROWSER_INVALID_ERROR,
                    message: 'request.error.userAgentBrowserInvalid',
                });
            }
        }
        return next.handle();
    }
};
RequestUserAgentInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RequestUserAgentInterceptor);
exports.RequestUserAgentInterceptor = RequestUserAgentInterceptor;
//# sourceMappingURL=request.user-agent.interceptor.js.map