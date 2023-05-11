"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckDoc = void 0;
const common_1 = require("@nestjs/common");
const doc_decorator_1 = require("../../common/doc/decorators/doc.decorator");
const health_serialization_1 = require("../serializations/health.serialization");
function HealthCheckDoc() {
    return (0, common_1.applyDecorators)((0, doc_decorator_1.Doc)('health.check', {
        auth: {
            jwtAccessToken: false,
        },
        response: { serialization: health_serialization_1.HealthSerialization },
    }));
}
exports.HealthCheckDoc = HealthCheckDoc;
//# sourceMappingURL=health.doc.js.map