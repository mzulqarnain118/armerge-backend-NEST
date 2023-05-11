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
exports.HelperEncryptionService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const crypto_js_1 = require("crypto-js");
let HelperEncryptionService = class HelperEncryptionService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    base64Encrypt(data) {
        const buff = Buffer.from(data, 'utf8');
        return buff.toString('base64');
    }
    base64Decrypt(data) {
        const buff = Buffer.from(data, 'base64');
        return buff.toString('utf8');
    }
    base64Compare(clientBasicToken, ourBasicToken) {
        return ourBasicToken === clientBasicToken;
    }
    aes256Encrypt(data, key, iv) {
        const cIv = crypto_js_1.enc.Utf8.parse(iv);
        const cipher = crypto_js_1.AES.encrypt(JSON.stringify(data), key, {
            mode: crypto_js_1.mode.CBC,
            padding: crypto_js_1.pad.Pkcs7,
            iv: cIv,
        });
        return cipher.toString();
    }
    aes256Decrypt(encrypted, key, iv) {
        const cIv = crypto_js_1.enc.Utf8.parse(iv);
        const cipher = crypto_js_1.AES.decrypt(encrypted, key, {
            mode: crypto_js_1.mode.CBC,
            padding: crypto_js_1.pad.Pkcs7,
            iv: cIv,
        });
        return JSON.parse(cipher.toString(crypto_js_1.enc.Utf8));
    }
    jwtEncrypt(payload, options) {
        return this.jwtService.sign(payload, {
            secret: options.secretKey,
            expiresIn: options.expiredIn,
            notBefore: options.notBefore ?? 0,
            audience: options.audience,
            issuer: options.issuer,
            subject: options.subject,
        });
    }
    jwtDecrypt(token) {
        return this.jwtService.decode(token);
    }
    jwtVerify(token, options) {
        try {
            this.jwtService.verify(token, {
                secret: options.secretKey,
                audience: options.audience,
                issuer: options.issuer,
                subject: options.subject,
            });
            return true;
        }
        catch (err) {
            return false;
        }
    }
};
HelperEncryptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], HelperEncryptionService);
exports.HelperEncryptionService = HelperEncryptionService;
//# sourceMappingURL=helper.encryption.service.js.map