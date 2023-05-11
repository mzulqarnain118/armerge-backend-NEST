"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUserDeleteSelfDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../../common/doc/decorators/doc.decorator");
function UserUserDeleteSelfDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('user.deleteSelf', {
        auth: {
            jwtAccessToken: true,
        },
    }));
}
exports.UserUserDeleteSelfDoc = UserUserDeleteSelfDoc;
//# sourceMappingURL=user.user.doc.js.map