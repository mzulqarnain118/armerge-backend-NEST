import { ENUM_POLICY_REQUEST_ACTION } from 'src/common/policy/constants/policy.enum.constant';
import { ENUM_POLICY_ACTION } from 'src/common/policy/constants/policy.enum.constant';
import { IPolicyAbility, IPolicyRequest, IPolicyRule, IPolicyRuleAbility, PolicyHandler } from 'src/common/policy/interfaces/policy.interface';
import { UserPayloadPermissionSerialization } from 'src/modules/user/serializations/user.payload.serialization';
export declare class PolicyAbilityFactory {
    defineAbilityFromRole({ type, permissions }: IPolicyRequest): IPolicyAbility;
    mappingAbility({ subject, action, }: UserPayloadPermissionSerialization): IPolicyRuleAbility[];
    mappingRequestRule(action: ENUM_POLICY_REQUEST_ACTION): ENUM_POLICY_ACTION;
    handlerRules(rules: IPolicyRule[]): PolicyHandler[];
}
