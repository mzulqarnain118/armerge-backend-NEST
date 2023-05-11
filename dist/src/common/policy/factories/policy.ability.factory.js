"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyAbilityFactory = void 0;
const ability_1 = require("@casl/ability");
const common_1 = require("@nestjs/common");
const policy_enum_constant_1 = require("../constants/policy.enum.constant");
const policy_enum_constant_2 = require("../constants/policy.enum.constant");
const role_enum_constant_1 = require("../../../modules/role/constants/role.enum.constant");
let PolicyAbilityFactory = class PolicyAbilityFactory {
    defineAbilityFromRole({ type, permissions }) {
        const { can, build } = new ability_1.AbilityBuilder(ability_1.createMongoAbility);
        if (type === role_enum_constant_1.ENUM_ROLE_TYPE.SUPER_ADMIN) {
            can(policy_enum_constant_2.ENUM_POLICY_ACTION.MANAGE, 'all');
        }
        else {
            for (const permission of permissions) {
                const abilities = this.mappingAbility(permission);
                for (const ability of abilities) {
                    can(ability.action, ability.subject);
                }
            }
        }
        return build();
    }
    mappingAbility({ subject, action, }) {
        return action
            .split(',')
            .map((val) => ({
            action: this.mappingRequestRule(policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION[val]),
            subject,
        }))
            .flat(1);
    }
    mappingRequestRule(action) {
        switch (action) {
            case policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.MANAGE:
                return policy_enum_constant_2.ENUM_POLICY_ACTION.MANAGE;
            case policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.CREATE:
                return policy_enum_constant_2.ENUM_POLICY_ACTION.CREATE;
            case policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.UPDATE:
                return policy_enum_constant_2.ENUM_POLICY_ACTION.UPDATE;
            case policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.DELETE:
                return policy_enum_constant_2.ENUM_POLICY_ACTION.DELETE;
            case policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.EXPORT:
                return policy_enum_constant_2.ENUM_POLICY_ACTION.EXPORT;
            case policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.IMPORT:
                return policy_enum_constant_2.ENUM_POLICY_ACTION.IMPORT;
            case policy_enum_constant_1.ENUM_POLICY_REQUEST_ACTION.READ:
            default:
                return policy_enum_constant_2.ENUM_POLICY_ACTION.READ;
        }
    }
    handlerRules(rules) {
        return rules
            .map(({ subject, action }) => {
            return action
                .map((val) => (ability) => ability.can(val, subject))
                .flat(1);
        })
            .flat(1);
    }
};
PolicyAbilityFactory = __decorate([
    (0, common_1.Injectable)()
], PolicyAbilityFactory);
exports.PolicyAbilityFactory = PolicyAbilityFactory;
//# sourceMappingURL=policy.ability.factory.js.map