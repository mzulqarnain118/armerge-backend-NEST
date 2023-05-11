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
exports.RequestTimestampMiddleware = void 0;
const common_1 = require("@nestjs/common");
const helper_date_service_1 = require("../../../helper/services/helper.date.service");
const helper_number_service_1 = require("../../../helper/services/helper.number.service");
let RequestTimestampMiddleware = class RequestTimestampMiddleware {
    constructor(helperNumberService, helperDateService) {
        this.helperNumberService = helperNumberService;
        this.helperDateService = helperDateService;
    }
    async use(req, res, next) {
        req.__xTimestamp = req['x-timestamp']
            ? this.helperNumberService.create(req['x-timestamp'])
            : undefined;
        req.__timestamp = this.helperDateService.timestamp();
        next();
    }
};
RequestTimestampMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_number_service_1.HelperNumberService,
        helper_date_service_1.HelperDateService])
], RequestTimestampMiddleware);
exports.RequestTimestampMiddleware = RequestTimestampMiddleware;
//# sourceMappingURL=request.timestamp.middleware.js.map