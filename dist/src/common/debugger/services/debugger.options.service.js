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
exports.DebuggerOptionService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const debugger_constant_1 = require("../constants/debugger.constant");
let DebuggerOptionService = class DebuggerOptionService {
    constructor(configService) {
        this.configService = configService;
    }
    createLogger() {
        const writeIntoFile = this.configService.get('debugger.system.writeIntoFile');
        const writeIntoConsole = this.configService.get('debugger.system.writeIntoConsole');
        const maxSize = this.configService.get('debugger.system.maxSize');
        const maxFiles = this.configService.get('debugger.system.maxFiles');
        const transports = [];
        if (writeIntoFile) {
            transports.push(new winston_daily_rotate_file_1.default({
                filename: `%DATE%.log`,
                dirname: `logs/${debugger_constant_1.DEBUGGER_NAME}/error`,
                datePattern: 'YYYY-MM-DD',
                zippedArchive: true,
                maxSize: maxSize,
                maxFiles: maxFiles,
                level: 'error',
            }));
            transports.push(new winston_daily_rotate_file_1.default({
                filename: `%DATE%.log`,
                dirname: `logs/${debugger_constant_1.DEBUGGER_NAME}/default`,
                datePattern: 'YYYY-MM-DD',
                zippedArchive: true,
                maxSize: maxSize,
                maxFiles: maxFiles,
                level: 'info',
            }));
            transports.push(new winston_daily_rotate_file_1.default({
                filename: `%DATE%.log`,
                dirname: `logs/${debugger_constant_1.DEBUGGER_NAME}/debug`,
                datePattern: 'YYYY-MM-DD',
                zippedArchive: true,
                maxSize: maxSize,
                maxFiles: maxFiles,
                level: 'debug',
            }));
        }
        if (writeIntoConsole) {
            transports.push(new winston_1.default.transports.Console());
        }
        const loggerOptions = {
            format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.prettyPrint()),
            transports,
        };
        return loggerOptions;
    }
};
DebuggerOptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], DebuggerOptionService);
exports.DebuggerOptionService = DebuggerOptionService;
//# sourceMappingURL=debugger.options.service.js.map