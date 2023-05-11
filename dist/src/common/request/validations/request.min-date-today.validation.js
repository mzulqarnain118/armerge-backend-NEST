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
exports.MinDateToday = exports.MinDateTodayConstraint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
let MinDateTodayConstraint = class MinDateTodayConstraint {
    constructor(helperDateService) {
        this.helperDateService = helperDateService;
    }
    validate(value) {
        const todayDate = this.helperDateService.startOfDay();
        const valueDate = this.helperDateService.create(value);
        return valueDate >= todayDate;
    }
};
MinDateTodayConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_date_service_1.HelperDateService])
], MinDateTodayConstraint);
exports.MinDateTodayConstraint = MinDateTodayConstraint;
function MinDateToday(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'MinDateTodayEqual',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: MinDateTodayConstraint,
        });
    };
}
exports.MinDateToday = MinDateToday;
//# sourceMappingURL=request.min-date-today.validation.js.map