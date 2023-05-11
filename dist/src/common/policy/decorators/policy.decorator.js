"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyAbilityProtected = void 0;
const common_1 = require("@nestjs/common");
const policy_constant_1 = require("../constants/policy.constant");
const policy_ability_guard_1 = require("../guards/policy.ability.guard");
function PolicyAbilityProtected(...handlers) {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(policy_ability_guard_1.PolicyGuard), (0, common_1.SetMetadata)(policy_constant_1.POLICY_RULE_META_KEY, handlers));
}
exports.PolicyAbilityProtected = PolicyAbilityProtected;
//# sourceMappingURL=policy.decorator.js.map