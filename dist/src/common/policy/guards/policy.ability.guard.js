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
exports.PolicyGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const policy_constant_1 = require("../constants/policy.constant");
const policy_status_code_constant_1 = require("../constants/policy.status-code.constant");
const policy_ability_factory_1 = require("../factories/policy.ability.factory");
let PolicyGuard = class PolicyGuard {
    constructor(reflector, policyAbilityFactory) {
        this.reflector = reflector;
        this.policyAbilityFactory = policyAbilityFactory;
    }
    async canActivate(context) {
        const policyRule = this.reflector.get(policy_constant_1.POLICY_RULE_META_KEY, context.getHandler()) || [];
        const { user } = context.switchToHttp().getRequest();
        const { type, permissions } = user;
        const ability = this.policyAbilityFactory.defineAbilityFromRole({
            type,
            permissions,
        });
        const policyHandler = this.policyAbilityFactory.handlerRules(policyRule);
        const check = policyHandler.every((handler) => {
            return this.execPolicyHandler(handler, ability);
        });
        if (!check) {
            throw new common_1.ForbiddenException({
                statusCode: policy_status_code_constant_1.ENUM_POLICY_STATUS_CODE_ERROR.POLICY_ABILITY_FORBIDDEN_ERROR,
                message: 'policy.error.abilityForbidden',
            });
        }
        return true;
    }
    execPolicyHandler(handler, ability) {
        if (typeof handler === 'function') {
            return handler(ability);
        }
        return handler.handle(ability);
    }
};
PolicyGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        policy_ability_factory_1.PolicyAbilityFactory])
], PolicyGuard);
exports.PolicyGuard = PolicyGuard;
//# sourceMappingURL=policy.ability.guard.js.map