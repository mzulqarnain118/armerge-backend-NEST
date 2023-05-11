"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingPublicGetDoc = exports.SettingPublicListDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../doc/decorators/doc.decorator");
const setting_doc_constant_1 = require("../constants/setting.doc.constant");
const setting_get_serialization_1 = require("../serializations/setting.get.serialization");
const setting_list_serialization_1 = require("../serializations/setting.list.serialization");
function SettingPublicListDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.DocPaging)('setting.list', {
        auth: {
            jwtAccessToken: false,
        },
        response: {
            serialization: setting_list_serialization_1.SettingListSerialization,
        },
    }));
}
exports.SettingPublicListDoc = SettingPublicListDoc;
function SettingPublicGetDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('setting.get', {
        auth: {
            jwtAccessToken: false,
        },
        request: {
            params: setting_doc_constant_1.SettingDocParamsGet,
        },
        response: { serialization: setting_get_serialization_1.SettingGetSerialization },
    }));
}
exports.SettingPublicGetDoc = SettingPublicGetDoc;
//# sourceMappingURL=setting.public.doc.js.map