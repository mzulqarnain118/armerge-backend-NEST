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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const helper_encryption_service_1 = require("../../helper/services/helper.encryption.service");
const helper_hash_service_1 = require("../../helper/services/helper.hash.service");
const helper_string_service_1 = require("../../helper/services/helper.string.service");
let AuthService = class AuthService {
    constructor(helperHashService, helperDateService, helperStringService, helperEncryptionService, configService) {
        this.helperHashService = helperHashService;
        this.helperDateService = helperDateService;
        this.helperStringService = helperStringService;
        this.helperEncryptionService = helperEncryptionService;
        this.configService = configService;
        this.accessTokenSecretKey = this.configService.get('auth.accessToken.secretKey');
        this.accessTokenExpirationTime = this.configService.get('auth.accessToken.expirationTime');
        this.accessTokenNotBeforeExpirationTime =
            this.configService.get('auth.accessToken.notBeforeExpirationTime');
        this.accessTokenEncryptKey = this.configService.get('auth.accessToken.encryptKey');
        this.accessTokenEncryptIv = this.configService.get('auth.accessToken.encryptIv');
        this.refreshTokenSecretKey = this.configService.get('auth.refreshToken.secretKey');
        this.refreshTokenExpirationTime = this.configService.get('auth.refreshToken.expirationTime');
        this.refreshTokenNotBeforeExpirationTime =
            this.configService.get('auth.refreshToken.notBeforeExpirationTime');
        this.refreshTokenEncryptKey = this.configService.get('auth.refreshToken.encryptKey');
        this.refreshTokenEncryptIv = this.configService.get('auth.refreshToken.encryptIv');
        this.payloadEncryption = this.configService.get('auth.payloadEncryption');
        this.prefixAuthorization = this.configService.get('auth.prefixAuthorization');
        this.subject = this.configService.get('auth.subject');
        this.audience = this.configService.get('auth.audience');
        this.issuer = this.configService.get('auth.issuer');
        this.passwordExpiredIn = this.configService.get('auth.password.expiredIn');
        this.passwordSaltLength = this.configService.get('auth.password.saltLength');
    }
    async encryptAccessToken(payload) {
        return this.helperEncryptionService.aes256Encrypt(payload, this.accessTokenEncryptKey, this.accessTokenEncryptIv);
    }
    async decryptAccessToken({ data, }) {
        return this.helperEncryptionService.aes256Decrypt(data, this.accessTokenEncryptKey, this.accessTokenEncryptIv);
    }
    async createAccessToken(payloadHashed) {
        return this.helperEncryptionService.jwtEncrypt({ data: payloadHashed }, {
            secretKey: this.accessTokenSecretKey,
            expiredIn: this.accessTokenExpirationTime,
            notBefore: this.accessTokenNotBeforeExpirationTime,
            audience: this.audience,
            issuer: this.issuer,
            subject: this.subject,
        });
    }
    async validateAccessToken(token) {
        return this.helperEncryptionService.jwtVerify(token, {
            secretKey: this.accessTokenSecretKey,
            audience: this.audience,
            issuer: this.issuer,
            subject: this.subject,
        });
    }
    async payloadAccessToken(token) {
        return this.helperEncryptionService.jwtDecrypt(token);
    }
    async encryptRefreshToken(payload) {
        return this.helperEncryptionService.aes256Encrypt(payload, this.refreshTokenEncryptKey, this.refreshTokenEncryptIv);
    }
    async decryptRefreshToken({ data, }) {
        return this.helperEncryptionService.aes256Decrypt(data, this.refreshTokenEncryptKey, this.refreshTokenEncryptIv);
    }
    async createRefreshToken(payloadHashed, options) {
        return this.helperEncryptionService.jwtEncrypt({ data: payloadHashed }, {
            secretKey: this.refreshTokenSecretKey,
            expiredIn: this.refreshTokenExpirationTime,
            notBefore: options?.notBeforeExpirationTime ??
                this.refreshTokenNotBeforeExpirationTime,
            audience: this.audience,
            issuer: this.issuer,
            subject: this.subject,
        });
    }
    async validateRefreshToken(token) {
        return this.helperEncryptionService.jwtVerify(token, {
            secretKey: this.refreshTokenSecretKey,
            audience: this.audience,
            issuer: this.issuer,
            subject: this.subject,
        });
    }
    async payloadRefreshToken(token) {
        return this.helperEncryptionService.jwtDecrypt(token);
    }
    async validateUser(passwordString, passwordHash) {
        return this.helperHashService.bcryptCompare(passwordString, passwordHash);
    }
    async createPayloadAccessToken(data) {
        return data;
    }
    async createPayloadRefreshToken(_id, options) {
        return {
            _id,
            loginDate: this.helperDateService.create(),
            loginWith: options.loginWith,
        };
    }
    async createSalt(length) {
        return this.helperHashService.randomSalt(length);
    }
    async createPassword(password) {
        const salt = await this.createSalt(this.passwordSaltLength);
        const passwordExpired = this.helperDateService.forwardInSeconds(this.passwordExpiredIn);
        const passwordCreated = this.helperDateService.create();
        const passwordHash = this.helperHashService.bcrypt(password, salt);
        return {
            passwordHash,
            passwordExpired,
            passwordCreated,
            salt,
        };
    }
    async createPasswordRandom() {
        return this.helperStringService.random(15);
    }
    async checkPasswordExpired(passwordExpired) {
        const today = this.helperDateService.create();
        const passwordExpiredConvert = this.helperDateService.create(passwordExpired);
        return today > passwordExpiredConvert;
    }
    async getTokenType() {
        return this.prefixAuthorization;
    }
    async getAccessTokenExpirationTime() {
        return this.accessTokenExpirationTime;
    }
    async getRefreshTokenExpirationTime() {
        return this.refreshTokenExpirationTime;
    }
    async getIssuer() {
        return this.issuer;
    }
    async getAudience() {
        return this.audience;
    }
    async getSubject() {
        return this.subject;
    }
    async getPayloadEncryption() {
        return this.payloadEncryption;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_hash_service_1.HelperHashService,
        helper_date_service_1.HelperDateService,
        helper_string_service_1.HelperStringService,
        helper_encryption_service_1.HelperEncryptionService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map