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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestCorsMiddleware = void 0;
const common_1 = require("@nestjs/common");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("@nestjs/config");
const app_enum_constant_1 = require("../../../../app/constants/app.enum.constant");
let RequestCorsMiddleware = class RequestCorsMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.appEnv = this.configService.get('app.env');
        this.allowOrigin = this.configService.get('request.cors.allowOrigin');
        this.allowMethod = this.configService.get('request.cors.allowMethod');
        this.allowHeader = this.configService.get('request.cors.allowHeader');
    }
    use(req, res, next) {
        const allowOrigin = this.appEnv === app_enum_constant_1.ENUM_APP_ENVIRONMENT.PRODUCTION
            ? this.allowOrigin
            : '*';
        const corsOptions = {
            origin: allowOrigin,
            methods: this.allowMethod,
            allowedHeaders: this.allowHeader,
            preflightContinue: false,
            credentials: true,
            optionsSuccessStatus: common_1.HttpStatus.NO_CONTENT,
        };
        (0, cors_1.default)(corsOptions)(req, res, next);
    }
};
RequestCorsMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RequestCorsMiddleware);
exports.RequestCorsMiddleware = RequestCorsMiddleware;
//# sourceMappingURL=request.cors.middleware.js.map