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
exports.IsOnlyDigits = exports.IsOnlyDigitsConstraint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const helper_number_service_1 = require("../../helper/services/helper.number.service");
let IsOnlyDigitsConstraint = class IsOnlyDigitsConstraint {
    constructor(helperNumberService) {
        this.helperNumberService = helperNumberService;
    }
    validate(value) {
        return value ? this.helperNumberService.check(value) : false;
    }
};
IsOnlyDigitsConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_number_service_1.HelperNumberService])
], IsOnlyDigitsConstraint);
exports.IsOnlyDigitsConstraint = IsOnlyDigitsConstraint;
function IsOnlyDigits(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsOnlyDigits',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsOnlyDigitsConstraint,
        });
    };
}
exports.IsOnlyDigits = IsOnlyDigits;
//# sourceMappingURL=request.only-digits.validation.js.map