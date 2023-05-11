"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyNotFoundGuard = void 0;
const common_1 = require("@nestjs/common");
const api_key_status_code_constant_1 = require("../constants/api-key.status-code.constant");
let ApiKeyNotFoundGuard = class ApiKeyNotFoundGuard {
    async canActivate(context) {
        const { __apiKey } = context.switchToHttp().getRequest();
        if (!__apiKey) {
            throw new common_1.NotFoundException({
                statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_NOT_FOUND_ERROR,
                message: 'apiKey.error.notFound',
            });
        }
        return true;
    }
};
ApiKeyNotFoundGuard = __decorate([
    (0, common_1.Injectable)()
], ApiKeyNotFoundGuard);
exports.ApiKeyNotFoundGuard = ApiKeyNotFoundGuard;
//# sourceMappingURL=api-key.not-found.guard.js.map