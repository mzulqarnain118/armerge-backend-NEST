"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAdminInactiveDoc = exports.RoleAdminActiveDoc = exports.RoleAdminDeleteDoc = exports.RoleAdminUpdateDoc = exports.RoleAdminCreateDoc = exports.RoleAdminGetDoc = exports.RoleAdminListDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const role_doc_constant_1 = require("../constants/role.doc.constant");
const role_get_serialization_1 = require("../serializations/role.get.serialization");
const role_list_serialization_1 = require("../serializations/role.list.serialization");
function RoleAdminListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.DocPaging)('role.list', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            queries: [...role_doc_constant_1.RoleDocQueryIsActive, ...role_doc_constant_1.RoleDocQueryType],
        },
        response: {
            serialization: role_list_serialization_1.RoleListSerialization,
        },
    }));
}
exports.RoleAdminListDoc = RoleAdminListDoc;
function RoleAdminGetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('role.get', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: role_doc_constant_1.RoleDocParamsGet,
        },
        response: { serialization: role_get_serialization_1.RoleGetSerialization },
    }));
}
exports.RoleAdminGetDoc = RoleAdminGetDoc;
function RoleAdminCreateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('role.create', {
        auth: {
            jwtAccessToken: true,
        },
        response: {
            httpStatus: common_1.HttpStatus.CREATED,
            serialization: response_id_serialization_1.ResponseIdSerialization,
        },
    }));
}
exports.RoleAdminCreateDoc = RoleAdminCreateDoc;
function RoleAdminUpdateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('role.update', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: role_doc_constant_1.RoleDocParamsGet,
        },
        response: { serialization: response_id_serialization_1.ResponseIdSerialization },
    }));
}
exports.RoleAdminUpdateDoc = RoleAdminUpdateDoc;
function RoleAdminDeleteDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('role.delete', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: role_doc_constant_1.RoleDocParamsGet,
        },
    }));
}
exports.RoleAdminDeleteDoc = RoleAdminDeleteDoc;
function RoleAdminActiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('role.active', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: role_doc_constant_1.RoleDocParamsGet,
        },
    }));
}
exports.RoleAdminActiveDoc = RoleAdminActiveDoc;
function RoleAdminInactiveDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('role.inactive', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: role_doc_constant_1.RoleDocParamsGet,
        },
    }));
}
exports.RoleAdminInactiveDoc = RoleAdminInactiveDoc;
//# sourceMappingURL=role.admin.doc.js.map