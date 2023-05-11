"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyDocParamsGet = exports.ApiKeyDocQueryIsActive = void 0;
const faker_1 = require("@faker-js/faker");
exports.ApiKeyDocQueryIsActive = [
    {
        name: 'isActive',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: 'true,false',
        description: "boolean value with ',' delimiter",
    },
];
exports.ApiKeyDocParamsGet = [
    {
        name: 'apiKey',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.datatype.uuid(),
    },
];
//# sourceMappingURL=api-key.doc.js.map