"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyAdminDeleteDoc = exports.ApiKeyAdminUpdateDoc = exports.ApiKeyAdminResetDoc = exports.ApiKeyAdminInactiveDoc = exports.ApiKeyAdminActiveDoc = exports.ApiKeyAdminCreateDoc = exports.ApiKeyAdminGetDoc = exports.ApiKeyAdminListDoc = void 0;
const common_1 = require("@nestjs/common");
const api_key_doc_1 = require("../constants/api-key.doc");
const api_key_create_serialization_1 = require("../serializations/api-key.create.serialization");
const api_key_get_serialization_1 = require("../serializations/api-key.get.serialization");
const api_key_list_serialization_1 = require("../serializations/api-key.list.serialization");
const doc_decorator_1 = require("../../doc/decorators/doc.decorator");
const response_id_serialization_1 = require("../../response/serializations/response.id.serialization");
function ApiKeyAdminListDoc() {
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
exports.ApiKeyAdminListDoc = ApiKeyAdminListDoc;
function ApiKeyAdminGetDoc() {
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
exports.ApiKeyAdminGetDoc = ApiKeyAdminGetDoc;
function ApiKeyAdminCreateDoc() {
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
exports.ApiKeyAdminCreateDoc = ApiKeyAdminCreateDoc;
function ApiKeyAdminActiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('apiKey.active', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: api_key_doc_1.ApiKeyDocParamsGet,
        },
    }));
}
exports.ApiKeyAdminActiveDoc = ApiKeyAdminActiveDoc;
function ApiKeyAdminInactiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('apiKey.inactive', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: api_key_doc_1.ApiKeyDocParamsGet,
        },
    }));
}
exports.ApiKeyAdminInactiveDoc = ApiKeyAdminInactiveDoc;
function ApiKeyAdminResetDoc() {
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
exports.ApiKeyAdminResetDoc = ApiKeyAdminResetDoc;
function ApiKeyAdminUpdateDoc() {
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
exports.ApiKeyAdminUpdateDoc = ApiKeyAdminUpdateDoc;
function ApiKeyAdminDeleteDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('apiKey.delete', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: api_key_doc_1.ApiKeyDocParamsGet,
        },
    }));
}
exports.ApiKeyAdminDeleteDoc = ApiKeyAdminDeleteDoc;
//# sourceMappingURL=api-key.admin.doc.js.map