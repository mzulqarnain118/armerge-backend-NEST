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
exports.ApiKeyXApiKeyStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_headerapikey_1 = __importDefault(require("passport-headerapikey"));
const api_key_status_code_constant_1 = require("../../constants/api-key.status-code.constant");
const api_key_service_1 = require("../../services/api-key.service");
const helper_date_service_1 = require("../../../helper/services/helper.date.service");
let ApiKeyXApiKeyStrategy = class ApiKeyXApiKeyStrategy extends (0, passport_1.PassportStrategy)(passport_headerapikey_1.default, 'api-key') {
    constructor(apiKeyService, helperDateService) {
        super({ header: 'X-API-KEY', prefix: '' }, true, async (apiKey, verified, req) => this.validate(apiKey, verified, req));
        this.apiKeyService = apiKeyService;
        this.helperDateService = helperDateService;
    }
    async validate(apiKey, verified, req) {
        const xApiKey = apiKey.split(':');
        if (xApiKey.length !== 2) {
            verified(new Error(`${api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_INVALID_ERROR}`), null, null);
            return;
        }
        const key = xApiKey[0];
        const secret = xApiKey[1];
        const today = this.helperDateService.create();
        const authApi = await this.apiKeyService.findOneByActiveKey(key);
        if (!authApi) {
            verified(new Error(`${api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_NOT_FOUND_ERROR}`), null, null);
            return;
        }
        else if (!authApi.isActive) {
            verified(new Error(`${api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_IS_ACTIVE_ERROR}`), null, null);
            return;
        }
        else if (authApi.startDate && authApi.endDate) {
            if (today < authApi.startDate) {
                verified(new Error(`${api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_NOT_ACTIVE_YET_ERROR}`), null, null);
            }
            else if (today > authApi.endDate) {
                verified(new Error(`${api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_EXPIRED_ERROR}`), null, null);
            }
        }
        const hashed = await this.apiKeyService.createHashApiKey(key, secret);
        const validateApiKey = await this.apiKeyService.validateHashApiKey(hashed, authApi.hash);
        if (!validateApiKey) {
            verified(new Error(`${api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_INVALID_ERROR}`), null, null);
            return;
        }
        req.apiKey = {
            _id: `${authApi._id}`,
            key: authApi.key,
            type: authApi.type,
            name: authApi.name,
        };
        verified(null, authApi);
        return;
    }
};
ApiKeyXApiKeyStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [api_key_service_1.ApiKeyService,
        helper_date_service_1.HelperDateService])
], ApiKeyXApiKeyStrategy);
exports.ApiKeyXApiKeyStrategy = ApiKeyXApiKeyStrategy;
//# sourceMappingURL=api-key.x-api-key.strategy.js.map