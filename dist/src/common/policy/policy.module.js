"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyModule = void 0;
const common_1 = require("@nestjs/common");
const policy_ability_factory_1 = require("./factories/policy.ability.factory");
let PolicyModule = class PolicyModule {
};
PolicyModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [policy_ability_factory_1.PolicyAbilityFactory],
        exports: [policy_ability_factory_1.PolicyAbilityFactory],
        imports: [],
    })
], PolicyModule);
exports.PolicyModule = PolicyModule;
//# sourceMappingURL=policy.module.js.map