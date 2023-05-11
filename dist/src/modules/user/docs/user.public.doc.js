"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPublicSignUpDoc = exports.UserPublicLoginDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const user_login_serialization_1 = require("../serializations/user.login.serialization");
function UserPublicLoginDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.login', {
        auth: {
            jwtAccessToken: true,
        },
        response: {
            serialization: user_login_serialization_1.UserLoginSerialization,
        },
    }));
}
exports.UserPublicLoginDoc = UserPublicLoginDoc;
function UserPublicSignUpDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.signUp', {
        auth: {
            jwtAccessToken: false,
        },
        response: {
            httpStatus: common_1.HttpStatus.CREATED,
        },
    }));
}
exports.UserPublicSignUpDoc = UserPublicSignUpDoc;
//# sourceMappingURL=user.public.doc.js.map