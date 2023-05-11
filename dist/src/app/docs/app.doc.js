"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppHelloApiKeyDoc = exports.AppHelloDoc = void 0;
const common_1 = require("@nestjs/common");
const app_hello_serialization_1 = require("../serializations/app.hello.serialization");
const doc_decorator_1 = require("../../common/doc/decorators/doc.decorator");
function AppHelloDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('app.hello', {
        response: {
            serialization: app_hello_serialization_1.AppHelloSerialization,
        },
    }));
}
exports.AppHelloDoc = AppHelloDoc;
function AppHelloApiKeyDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('app.helloApiKey', {
        auth: {
            apiKey: true,
        },
        requestHeader: {
            timestamp: true,
            userAgent: true,
        },
        response: {
            serialization: app_hello_serialization_1.AppHelloSerialization,
        },
    }));
}
exports.AppHelloApiKeyDoc = AppHelloApiKeyDoc;
//# sourceMappingURL=app.doc.js.map