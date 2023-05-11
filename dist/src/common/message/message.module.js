"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const common_1 = require("@nestjs/common");
const path = __importStar(require("path"));
const nestjs_i18n_1 = require("nestjs-i18n");
const config_1 = require("@nestjs/config");
const message_service_1 = require("./services/message.service");
const message_enum_constant_1 = require("./constants/message.enum.constant");
const message_middleware_module_1 = require("./middleware/message.middleware.module");
let MessageModule = class MessageModule {
};
MessageModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [message_service_1.MessageService],
        exports: [message_service_1.MessageService],
        imports: [
            nestjs_i18n_1.I18nModule.forRootAsync({
                useFactory: (configService) => ({
                    fallbackLanguage: configService
                        .get('message.availableLanguage')
                        .join(','),
                    fallbacks: Object.values(message_enum_constant_1.ENUM_MESSAGE_LANGUAGE).reduce((a, v) => ({ ...a, [`${v}-*`]: v }), {}),
                    loaderOptions: {
                        path: path.join(__dirname, '../../languages'),
                        watch: true,
                    },
                }),
                loader: nestjs_i18n_1.I18nJsonLoader,
                inject: [config_1.ConfigService],
                resolvers: [new nestjs_i18n_1.HeaderResolver(['x-custom-lang'])],
            }),
            message_middleware_module_1.MessageMiddlewareModule,
        ],
        controllers: [],
    })
], MessageModule);
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.module.js.map