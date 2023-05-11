"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const debugger_module_1 = require("./debugger/debugger.module");
const helper_module_1 = require("./helper/helper.module");
const error_module_1 = require("./error/error.module");
const response_module_1 = require("./response/response.module");
const request_module_1 = require("./request/request.module");
const auth_module_1 = require("./auth/auth.module");
const message_module_1 = require("./message/message.module");
const logger_module_1 = require("./logger/logger.module");
const pagination_module_1 = require("./pagination/pagination.module");
const joi_1 = __importDefault(require("joi"));
const message_enum_constant_1 = require("./message/constants/message.enum.constant");
const configs_1 = __importDefault(require("../configs"));
const setting_module_1 = require("./setting/setting.module");
const api_key_module_1 = require("./api-key/api-key.module");
const mongoose_1 = require("@nestjs/mongoose");
const database_options_service_1 = require("./database/services/database.options.service");
const database_options_module_1 = require("./database/database.options.module");
const database_constant_1 = require("./database/constants/database.constant");
const app_enum_constant_1 = require("../app/constants/app.enum.constant");
const app_constant_1 = require("../app/constants/app.constant");
const policy_module_1 = require("./policy/policy.module");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                load: configs_1.default,
                isGlobal: true,
                cache: true,
                envFilePath: ['.env'],
                expandVariables: true,
                validationSchema: joi_1.default.object({
                    APP_NAME: joi_1.default.string().required(),
                    APP_ENV: joi_1.default.string()
                        .valid(...Object.values(app_enum_constant_1.ENUM_APP_ENVIRONMENT))
                        .default('development')
                        .required(),
                    APP_LANGUAGE: joi_1.default.string()
                        .valid(...Object.values(message_enum_constant_1.ENUM_MESSAGE_LANGUAGE))
                        .default(app_constant_1.APP_LANGUAGE)
                        .required(),
                    HTTP_ENABLE: joi_1.default.boolean().default(true).required(),
                    HTTP_HOST: [
                        joi_1.default.string().ip({ version: 'ipv4' }).required(),
                        joi_1.default.valid('localhost').required(),
                    ],
                    HTTP_PORT: joi_1.default.number().default(3000).required(),
                    HTTP_VERSIONING_ENABLE: joi_1.default.boolean().default(true).required(),
                    HTTP_VERSION: joi_1.default.number().required(),
                    DEBUGGER_HTTP_WRITE_INTO_FILE: joi_1.default.boolean()
                        .default(false)
                        .required(),
                    DEBUGGER_HTTP_WRITE_INTO_CONSOLE: joi_1.default.boolean()
                        .default(false)
                        .required(),
                    DEBUGGER_SYSTEM_WRITE_INTO_FILE: joi_1.default.boolean()
                        .default(false)
                        .required(),
                    DEBUGGER_SYSTEM_WRITE_INTO_CONSOLE: joi_1.default.boolean()
                        .default(false)
                        .required(),
                    JOB_ENABLE: joi_1.default.boolean().default(false).required(),
                    DATABASE_HOST: joi_1.default.string()
                        .default('mongodb://localhost:27017')
                        .required(),
                    DATABASE_NAME: joi_1.default.string().default('armerge').required(),
                    DATABASE_USER: joi_1.default.string().allow(null, '').optional(),
                    DATABASE_PASSWORD: joi_1.default.string().allow(null, '').optional(),
                    DATABASE_DEBUG: joi_1.default.boolean().default(false).required(),
                    DATABASE_OPTIONS: joi_1.default.string().allow(null, '').optional(),
                    AUTH_JWT_SUBJECT: joi_1.default.string().required(),
                    AUTH_JWT_AUDIENCE: joi_1.default.string().required(),
                    AUTH_JWT_ISSUER: joi_1.default.string().required(),
                    AUTH_JWT_ACCESS_TOKEN_SECRET_KEY: joi_1.default.string()
                        .alphanum()
                        .min(5)
                        .max(50)
                        .required(),
                    AUTH_JWT_ACCESS_TOKEN_EXPIRED: joi_1.default.string()
                        .default('15m')
                        .required(),
                    AUTH_JWT_REFRESH_TOKEN_SECRET_KEY: joi_1.default.string()
                        .alphanum()
                        .min(5)
                        .max(50)
                        .required(),
                    AUTH_JWT_REFRESH_TOKEN_EXPIRED: joi_1.default.string()
                        .default('7d')
                        .required(),
                    AUTH_JWT_REFRESH_TOKEN_NOT_BEFORE_EXPIRATION: joi_1.default.string()
                        .default('15m')
                        .required(),
                    AUTH_JWT_PAYLOAD_ENCRYPT: joi_1.default.boolean()
                        .default(false)
                        .required(),
                    AUTH_JWT_PAYLOAD_ACCESS_TOKEN_ENCRYPT_KEY: joi_1.default.string()
                        .allow(null, '')
                        .min(20)
                        .max(50)
                        .optional(),
                    AUTH_JWT_PAYLOAD_ACCESS_TOKEN_ENCRYPT_IV: joi_1.default.string()
                        .allow(null, '')
                        .min(16)
                        .max(50)
                        .optional(),
                    AUTH_JWT_PAYLOAD_REFRESH_TOKEN_ENCRYPT_KEY: joi_1.default.string()
                        .allow(null, '')
                        .min(20)
                        .max(50)
                        .optional(),
                    AUTH_JWT_PAYLOAD_REFRESH_TOKEN_ENCRYPT_IV: joi_1.default.string()
                        .allow(null, '')
                        .min(16)
                        .max(50)
                        .optional(),
                    AWS_CREDENTIAL_KEY: joi_1.default.string().allow(null, '').optional(),
                    AWS_CREDENTIAL_SECRET: joi_1.default.string().allow(null, '').optional(),
                    AWS_S3_REGION: joi_1.default.string().allow(null, '').optional(),
                    AWS_S3_BUCKET: joi_1.default.string().allow(null, '').optional(),
                    SSO_GOOGLE_CLIENT_ID: joi_1.default.string().allow(null, '').optional(),
                    SSO_GOOGLE_CLIENT_SECRET: joi_1.default.string()
                        .allow(null, '')
                        .optional(),
                    SSO_GOOGLE_CALLBACK_URL_LOGIN: joi_1.default.string()
                        .allow(null, '')
                        .uri()
                        .optional(),
                    SSO_GOOGLE_CALLBACK_URL_SIGN_UP: joi_1.default.string()
                        .allow(null, '')
                        .uri()
                        .optional(),
                }),
                validationOptions: {
                    allowUnknown: true,
                    abortEarly: true,
                },
            }),
            mongoose_1.MongooseModule.forRootAsync({
                connectionName: database_constant_1.DATABASE_CONNECTION_NAME,
                imports: [database_options_module_1.DatabaseOptionsModule],
                inject: [database_options_service_1.DatabaseOptionsService],
                useFactory: (databaseOptionsService) => databaseOptionsService.createOptions(),
            }),
            message_module_1.MessageModule,
            helper_module_1.HelperModule,
            pagination_module_1.PaginationModule,
            error_module_1.ErrorModule,
            debugger_module_1.DebuggerModule.forRoot(),
            response_module_1.ResponseModule,
            request_module_1.RequestModule,
            policy_module_1.PolicyModule,
            setting_module_1.SettingModule,
            logger_module_1.LoggerModule,
            api_key_module_1.ApiKeyModule,
            auth_module_1.AuthModule.forRoot(),
        ],
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map