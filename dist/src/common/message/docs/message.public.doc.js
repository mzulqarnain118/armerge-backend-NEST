"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagePublicLanguageDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../doc/decorators/doc.decorator");
const message_language_serialization_1 = require("../serializations/message.language.serialization");
function MessagePublicLanguageDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('message.languages', {
        response: { serialization: message_language_serialization_1.MessageLanguageSerialization },
    }));
}
exports.MessagePublicLanguageDoc = MessagePublicLanguageDoc;
//# sourceMappingURL=message.public.doc.js.map