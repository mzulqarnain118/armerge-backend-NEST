"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthChangePasswordDoc = exports.UserAuthInfoDoc = exports.UserAuthUploadProfileDoc = exports.UserAuthProfileDoc = exports.UserAuthRefreshDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_enum_constant_1 = require("../../../common/doc/constants/doc.enum.constant");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const user_login_serialization_1 = require("../serializations/user.login.serialization");
const user_payload_serialization_1 = require("../serializations/user.payload.serialization");
const user_profile_serialization_1 = require("../serializations/user.profile.serialization");
function UserAuthRefreshDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.refresh', {
        auth: {
            jwtRefreshToken: true,
        },
        response: {
            serialization: user_login_serialization_1.UserLoginSerialization,
        },
    }));
}
exports.UserAuthRefreshDoc = UserAuthRefreshDoc;
function UserAuthProfileDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.profile', {
        auth: {
            jwtAccessToken: true,
        },
        response: {
            serialization: user_profile_serialization_1.UserProfileSerialization,
        },
    }));
}
exports.UserAuthProfileDoc = UserAuthProfileDoc;
function UserAuthUploadProfileDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.upload', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            bodyType: doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.FORM_DATA,
            file: {
                multiple: false,
            },
        },
    }));
}
exports.UserAuthUploadProfileDoc = UserAuthUploadProfileDoc;
function UserAuthInfoDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.info', {
        auth: {
            jwtAccessToken: true,
        },
        response: {
            serialization: user_payload_serialization_1.UserPayloadSerialization,
        },
    }));
}
exports.UserAuthInfoDoc = UserAuthInfoDoc;
function UserAuthChangePasswordDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.changePassword', {
        auth: {
            jwtAccessToken: true,
        },
    }));
}
exports.UserAuthChangePasswordDoc = UserAuthChangePasswordDoc;
//# sourceMappingURL=user.auth.doc.js.map