"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdminBlockedDoc = exports.UserAdminInactiveDoc = exports.UserAdminActiveDoc = exports.UserAdminExportDoc = exports.UserAdminImportDoc = exports.UserAdminDeleteDoc = exports.UserAdminUpdateDoc = exports.UserAdminCreateDoc = exports.UserAdminGetDoc = exports.UserAdminListDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const user_doc_constant_1 = require("../constants/user.doc.constant");
const user_get_serialization_1 = require("../serializations/user.get.serialization");
const user_list_serialization_1 = require("../serializations/user.list.serialization");
function UserAdminListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.DocPaging)('user.list', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            queries: [...user_doc_constant_1.UserDocQueryIsActive, ...user_doc_constant_1.UserDocQueryBlocked],
        },
        response: {
            serialization: user_list_serialization_1.UserListSerialization,
        },
    }));
}
exports.UserAdminListDoc = UserAdminListDoc;
function UserAdminGetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.get', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: user_doc_constant_1.UserDocParamsGet,
        },
        response: { serialization: user_get_serialization_1.UserGetSerialization },
    }));
}
exports.UserAdminGetDoc = UserAdminGetDoc;
function UserAdminCreateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.create', {
        auth: {
            jwtAccessToken: true,
        },
        response: {
            httpStatus: common_1.HttpStatus.CREATED,
            serialization: response_id_serialization_1.ResponseIdSerialization,
        },
    }));
}
exports.UserAdminCreateDoc = UserAdminCreateDoc;
function UserAdminUpdateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.update', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: user_doc_constant_1.UserDocParamsGet,
        },
        response: { serialization: response_id_serialization_1.ResponseIdSerialization },
    }));
}
exports.UserAdminUpdateDoc = UserAdminUpdateDoc;
function UserAdminDeleteDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.delete', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: user_doc_constant_1.UserDocParamsGet,
        },
    }));
}
exports.UserAdminDeleteDoc = UserAdminDeleteDoc;
function UserAdminImportDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.import', {
        auth: {
            jwtAccessToken: true,
        },
        response: {
            httpStatus: common_1.HttpStatus.CREATED,
        },
    }));
}
exports.UserAdminImportDoc = UserAdminImportDoc;
function UserAdminExportDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.export', {
        auth: {
            jwtAccessToken: true,
        },
        response: {
            httpStatus: common_1.HttpStatus.OK,
        },
    }));
}
exports.UserAdminExportDoc = UserAdminExportDoc;
function UserAdminActiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.active', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: user_doc_constant_1.UserDocParamsGet,
        },
    }));
}
exports.UserAdminActiveDoc = UserAdminActiveDoc;
function UserAdminInactiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.inactive', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: user_doc_constant_1.UserDocParamsGet,
        },
    }));
}
exports.UserAdminInactiveDoc = UserAdminInactiveDoc;
function UserAdminBlockedDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.blocked', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: user_doc_constant_1.UserDocParamsGet,
        },
    }));
}
exports.UserAdminBlockedDoc = UserAdminBlockedDoc;
//# sourceMappingURL=user.admin.doc.js.map