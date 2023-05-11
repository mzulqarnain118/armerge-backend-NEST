"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyUserDeleteDoc = exports.ApiKeyUserUpdateDoc = exports.ApiKeyUserResetDoc = exports.ApiKeyUserInactiveDoc = exports.ApiKeyUserActiveDoc = exports.ApiKeyUserCreateDoc = exports.ApiKeyUserGetDoc = exports.ApiKeyUserListDoc = void 0;
const common_1 = require("@nestjs/common");
const api_key_doc_1 = require("../constants/api-key.doc");
const api_key_create_serialization_1 = require("../serializations/api-key.create.serialization");
const api_key_get_serialization_1 = require("../serializations/api-key.get.serialization");
const api_key_list_serialization_1 = require("../serializations/api-key.list.serialization");
const doc_decorator_1 = require("../../doc/decorators/doc.decorator");
const response_id_serialization_1 = require("../../response/serializations/response.id.serialization");
function ApiKeyUserListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.DocPaging)('apiKey.list', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            queries: api_key_doc_1.ApiKeyDocQueryIsActive,
        },
        response: {
            serialization: api_key_list_serialization_1.ApiKeyListSerialization,
        },
    }));
}
exports.ApiKeyUserListDoc = ApiKeyUserListDoc;
function ApiKeyUserGetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('apiKey.get', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: api_key_doc_1.ApiKeyDocParamsGet,
        },
        response: { serialization: api_key_get_serialization_1.ApiKeyGetSerialization },
    }));
}
exports.ApiKeyUserGetDoc = ApiKeyUserGetDoc;
function ApiKeyUserCreateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('apiKey.create', {
        auth: {
            jwtAccessToken: true,
        },
        response: {
            httpStatus: common_1.HttpStatus.CREATED,
            serialization: api_key_create_serialization_1.ApiKeyCreateSerialization,
        },
    }));
}
exports.ApiKeyUserCreateDoc = ApiKeyUserCreateDoc;
function ApiKeyUserActiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('apiKey.active', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: api_key_doc_1.ApiKeyDocParamsGet,
        },
    }));
}
exports.ApiKeyUserActiveDoc = ApiKeyUserActiveDoc;
function ApiKeyUserInactiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('apiKey.inactive', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: api_key_doc_1.ApiKeyDocParamsGet,
        },
    }));
}
exports.ApiKeyUserInactiveDoc = ApiKeyUserInactiveDoc;
function ApiKeyUserResetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('apiKey.reset', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: api_key_doc_1.ApiKeyDocParamsGet,
        },
        response: {
            serialization: api_key_create_serialization_1.ApiKeyCreateSerialization,
        },
    }));
}
exports.ApiKeyUserResetDoc = ApiKeyUserResetDoc;
function ApiKeyUserUpdateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('apiKey.update', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: api_key_doc_1.ApiKeyDocParamsGet,
        },
        response: {
            serialization: response_id_serialization_1.ResponseIdSerialization,
        },
    }));
}
exports.ApiKeyUserUpdateDoc = ApiKeyUserUpdateDoc;
function ApiKeyUserDeleteDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('apiKey.delete', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: api_key_doc_1.ApiKeyDocParamsGet,
        },
    }));
}
exports.ApiKeyUserDeleteDoc = ApiKeyUserDeleteDoc;
//# sourceMappingURL=api-key.user.doc.js.map