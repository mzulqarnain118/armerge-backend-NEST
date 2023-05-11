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
exports.RequestParamRawGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const request_constant_1 = require("../constants/request.constant");
const request_status_code_constant_1 = require("../constants/request.status-code.constant");
let RequestParamRawGuard = class RequestParamRawGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const { params } = context.switchToHttp().getRequest();
        const classDtos = this.reflector.get(request_constant_1.REQUEST_PARAM_CLASS_DTOS_META_KEY, context.getHandler());
        for (const clsDto of classDtos) {
            const request = (0, class_transformer_1.plainToInstance)(clsDto, params);
            const errors = await (0, class_validator_1.validate)(request);
            if (errors.length > 0) {
                throw new common_1.BadRequestException({
                    statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_VALIDATION_ERROR,
                    message: 'http.clientError.badRequest',
                    errors: errors,
                });
            }
        }
        return true;
    }
};
RequestParamRawGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RequestParamRawGuard);
exports.RequestParamRawGuard = RequestParamRawGuard;
//# sourceMappingURL=request.param.guard.js.map