"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocParamsGet = exports.UserDocQueryBlocked = exports.UserDocQueryIsActive = void 0;
const faker_1 = require("@faker-js/faker");
exports.UserDocQueryIsActive = [
    {
        name: 'isActive',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: 'true,false',
        description: "boolean value with ',' delimiter",
    },
];
exports.UserDocQueryBlocked = [
    {
        name: 'blocked',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: 'true,false',
        description: "boolean value with ',' delimiter",
    },
];
exports.UserDocParamsGet = [
    {
        name: 'user',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.datatype.uuid(),
    },
];
//# sourceMappingURL=user.doc.constant.js.map