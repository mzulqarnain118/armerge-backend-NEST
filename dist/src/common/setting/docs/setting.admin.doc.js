"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingAdminUpdateDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../doc/decorators/doc.decorator");
const response_id_serialization_1 = require("../../response/serializations/response.id.serialization");
const setting_doc_constant_1 = require("../constants/setting.doc.constant");
function SettingAdminUpdateDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('setting.update', {
        auth: {
            jwtAccessToken: true,
        },
        request: {
            params: setting_doc_constant_1.SettingDocParamsGet,
        },
        response: { serialization: response_id_serialization_1.ResponseIdSerialization },
    }));
}
exports.SettingAdminUpdateDoc = SettingAdminUpdateDoc;
//# sourceMappingURL=setting.admin.doc.js.map