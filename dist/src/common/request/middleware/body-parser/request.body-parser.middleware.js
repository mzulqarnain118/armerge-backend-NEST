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
exports.RequestTextBodyParserMiddleware = exports.RequestRawBodyParserMiddleware = exports.RequestJsonBodyParserMiddleware = exports.RequestUrlencodedBodyParserMiddleware = void 0;
const common_1 = require("@nestjs/common");
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = require("@nestjs/config");
let RequestUrlencodedBodyParserMiddleware = class RequestUrlencodedBodyParserMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.maxFile = this.configService.get('request.body.urlencoded.maxFileSize');
    }
    use(req, res, next) {
        body_parser_1.default.urlencoded({
            extended: false,
            limit: this.maxFile,
        })(req, res, next);
    }
};
RequestUrlencodedBodyParserMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RequestUrlencodedBodyParserMiddleware);
exports.RequestUrlencodedBodyParserMiddleware = RequestUrlencodedBodyParserMiddleware;
let RequestJsonBodyParserMiddleware = class RequestJsonBodyParserMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.maxFile = this.configService.get('request.body.json.maxFileSize');
    }
    use(req, res, next) {
        body_parser_1.default.json({
            limit: this.maxFile,
        })(req, res, next);
    }
};
RequestJsonBodyParserMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RequestJsonBodyParserMiddleware);
exports.RequestJsonBodyParserMiddleware = RequestJsonBodyParserMiddleware;
let RequestRawBodyParserMiddleware = class RequestRawBodyParserMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.maxFile = this.configService.get('request.body.raw.maxFileSize');
    }
    use(req, res, next) {
        body_parser_1.default.raw({
            limit: this.maxFile,
        })(req, res, next);
    }
};
RequestRawBodyParserMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RequestRawBodyParserMiddleware);
exports.RequestRawBodyParserMiddleware = RequestRawBodyParserMiddleware;
let RequestTextBodyParserMiddleware = class RequestTextBodyParserMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.maxFile = this.configService.get('request.body.text.maxFileSize');
    }
    use(req, res, next) {
        body_parser_1.default.text({
            limit: this.maxFile,
        })(req, res, next);
    }
};
RequestTextBodyParserMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RequestTextBodyParserMiddleware);
exports.RequestTextBodyParserMiddleware = RequestTextBodyParserMiddleware;
//# sourceMappingURL=request.body-parser.middleware.js.map