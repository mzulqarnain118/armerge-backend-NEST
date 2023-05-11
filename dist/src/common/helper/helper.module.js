"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const helper_array_service_1 = require("./services/helper.array.service");
const helper_date_service_1 = require("./services/helper.date.service");
const helper_encryption_service_1 = require("./services/helper.encryption.service");
const helper_hash_service_1 = require("./services/helper.hash.service");
const helper_number_service_1 = require("./services/helper.number.service");
const helper_string_service_1 = require("./services/helper.string.service");
const helper_file_service_1 = require("./services/helper.file.service");
let HelperModule = class HelperModule {
};
HelperModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            helper_array_service_1.HelperArrayService,
            helper_date_service_1.HelperDateService,
            helper_encryption_service_1.HelperEncryptionService,
            helper_hash_service_1.HelperHashService,
            helper_number_service_1.HelperNumberService,
            helper_string_service_1.HelperStringService,
            helper_file_service_1.HelperFileService,
        ],
        exports: [
            helper_array_service_1.HelperArrayService,
            helper_date_service_1.HelperDateService,
            helper_encryption_service_1.HelperEncryptionService,
            helper_hash_service_1.HelperHashService,
            helper_number_service_1.HelperNumberService,
            helper_string_service_1.HelperStringService,
            helper_file_service_1.HelperFileService,
        ],
        controllers: [],
        imports: [
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    secret: configService.get('helper.jwt.defaultSecretKey'),
                    signOptions: {
                        expiresIn: configService.get('helper.jwt.defaultExpirationTime'),
                    },
                }),
            }),
        ],
    })
], HelperModule);
exports.HelperModule = HelperModule;
//# sourceMappingURL=helper.module.js.map