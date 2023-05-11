"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const helper_function_constant_1 = require("../common/helper/constants/helper.function.constant");
exports.default = (0, config_1.registerAs)('auth', () => ({
    accessToken: {
        secretKey: process.env.AUTH_JWT_ACCESS_TOKEN_SECRET_KEY ?? '123456',
        expirationTime: (0, helper_function_constant_1.seconds)(process.env.AUTH_JWT_ACCESS_TOKEN_EXPIRED ?? '1h'),
        notBeforeExpirationTime: (0, helper_function_constant_1.seconds)('0'),
        encryptKey: process.env.AUTH_JWT_PAYLOAD_ACCESS_TOKEN_ENCRYPT_KEY,
        encryptIv: process.env.AUTH_JWT_PAYLOAD_ACCESS_TOKEN_ENCRYPT_IV,
    },
    refreshToken: {
        secretKey: process.env.AUTH_JWT_REFRESH_TOKEN_SECRET_KEY ?? '123456000',
        expirationTime: (0, helper_function_constant_1.seconds)(process.env.AUTH_JWT_REFRESH_TOKEN_EXPIRED ?? '14d'),
        notBeforeExpirationTime: (0, helper_function_constant_1.seconds)(process.env.AUTH_JWT_REFRESH_TOKEN_NOT_BEFORE_EXPIRATION ?? '1h'),
        encryptKey: process.env.AUTH_JWT_PAYLOAD_REFRESH_TOKEN_ENCRYPT_KEY,
        encryptIv: process.env.AUTH_JWT_PAYLOAD_REFRESH_TOKEN_ENCRYPT_IV,
    },
    subject: process.env.AUTH_JWT_SUBJECT ?? 'ackDevelopment',
    audience: process.env.AUTH_JWT_AUDIENCE ?? 'https://example.com',
    issuer: process.env.AUTH_JWT_ISSUER ?? 'ack',
    prefixAuthorization: 'Bearer',
    payloadEncryption: process.env.AUTH_JWT_PAYLOAD_ENCRYPT === 'true' ? true : false,
    password: {
        attempt: true,
        maxAttempt: 5,
        saltLength: 8,
        expiredIn: (0, helper_function_constant_1.seconds)('182d'),
    },
    googleOAuth2: {
        clientId: process.env.SSO_GOOGLE_CLIENT_ID,
        clientSecret: process.env.SSO_GOOGLE_CLIENT_SECRET,
        callbackUrlLogin: process.env.SSO_GOOGLE_CALLBACK_URL_LOGIN,
        callbackUrlSignUp: process.env.SSO_GOOGLE_CALLBACK_URL_SIGN_UP,
    },
}));
//# sourceMappingURL=auth.config.js.map