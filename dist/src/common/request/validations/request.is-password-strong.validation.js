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
exports.IsPasswordStrong = exports.IsPasswordStrongConstraint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const helper_string_service_1 = require("../../helper/services/helper.string.service");
let IsPasswordStrongConstraint = class IsPasswordStrongConstraint {
    constructor(helperStringService) {
        this.helperStringService = helperStringService;
    }
    validate(value, args) {
        const [length] = args.constraints;
        return value
            ? this.helperStringService.checkPasswordStrong(value, length)
            : false;
    }
};
IsPasswordStrongConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_string_service_1.HelperStringService])
], IsPasswordStrongConstraint);
exports.IsPasswordStrongConstraint = IsPasswordStrongConstraint;
function IsPasswordStrong(minLength = 8, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsPasswordStrong',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [minLength],
            validator: IsPasswordStrongConstraint,
        });
    };
}
exports.IsPasswordStrong = IsPasswordStrong;
//# sourceMappingURL=request.is-password-strong.validation.js.map