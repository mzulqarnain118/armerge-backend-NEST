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
exports.ApiKeyPayloadTypeGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const api_key_constant_1 = require("../../constants/api-key.constant");
const api_key_status_code_constant_1 = require("../../constants/api-key.status-code.constant");
let ApiKeyPayloadTypeGuard = class ApiKeyPayloadTypeGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const required = this.reflector.getAllAndOverride(api_key_constant_1.API_KEY_TYPE_META_KEY, [context.getHandler(), context.getClass()]);
        if (!required) {
            return true;
        }
        const { apiKey } = context.switchToHttp().getRequest();
        if (!required.includes(apiKey.type)) {
            throw new common_1.BadRequestException({
                statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_TYPE_INVALID_ERROR,
                message: 'apiKey.error.typeInvalid',
            });
        }
        return true;
    }
};
ApiKeyPayloadTypeGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], ApiKeyPayloadTypeGuard);
exports.ApiKeyPayloadTypeGuard = ApiKeyPayloadTypeGuard;
//# sourceMappingURL=api-key.payload.type.guard.js.map