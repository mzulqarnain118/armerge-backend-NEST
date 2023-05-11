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
exports.ApiKeyXApiKeyGuard = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const helper_number_service_1 = require("../../../helper/services/helper.number.service");
const api_key_status_code_constant_1 = require("../../constants/api-key.status-code.constant");
const passport_headerapikey_1 = require("passport-headerapikey");
let ApiKeyXApiKeyGuard = class ApiKeyXApiKeyGuard extends (0, passport_1.AuthGuard)('api-key') {
    constructor(helperNumberService) {
        super();
        this.helperNumberService = helperNumberService;
    }
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, apiKey, info) {
        if (err || !apiKey) {
            if (info instanceof passport_headerapikey_1.BadRequestError &&
                info.message === 'Missing API Key') {
                throw new common_1.UnauthorizedException({
                    statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_NEEDED_ERROR,
                    message: 'apiKey.error.keyNeeded',
                });
            }
            else if (err) {
                const statusCode = this.helperNumberService.create(err.message);
                if (statusCode ===
                    api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_NOT_FOUND_ERROR) {
                    throw new common_1.ForbiddenException({
                        statusCode,
                        message: 'apiKey.error.notFound',
                    });
                }
                else if (statusCode ===
                    api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_IS_ACTIVE_ERROR) {
                    throw new common_1.ForbiddenException({
                        statusCode,
                        message: 'apiKey.error.inactive',
                    });
                }
                else if (statusCode ===
                    api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_NOT_ACTIVE_YET_ERROR) {
                    throw new common_1.ForbiddenException({
                        statusCode,
                        message: 'apiKey.error.notActiveYet',
                    });
                }
                else if (statusCode ===
                    api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_EXPIRED_ERROR) {
                    throw new common_1.ForbiddenException({
                        statusCode,
                        message: 'apiKey.error.expired',
                    });
                }
            }
            throw new common_1.UnauthorizedException({
                statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_INVALID_ERROR,
                message: 'apiKey.error.invalid',
            });
        }
        return apiKey;
    }
};
ApiKeyXApiKeyGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_number_service_1.HelperNumberService])
], ApiKeyXApiKeyGuard);
exports.ApiKeyXApiKeyGuard = ApiKeyXApiKeyGuard;
//# sourceMappingURL=api-key.x-api-key.guard.js.map