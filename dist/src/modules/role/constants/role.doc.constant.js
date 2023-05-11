"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleDocParamsGet = exports.RoleDocQueryType = exports.RoleDocQueryIsActive = void 0;
const faker_1 = require("@faker-js/faker");
const role_enum_constant_1 = require("./role.enum.constant");
exports.RoleDocQueryIsActive = [
    {
        name: 'isActive',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: 'true,false',
        description: "boolean value with ',' delimiter",
    },
];
exports.RoleDocQueryType = [
    {
        name: 'type',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: Object.values(role_enum_constant_1.ENUM_ROLE_TYPE).join(','),
        description: "enum value with ',' delimiter",
    },
];
exports.RoleDocParamsGet = [
    {
        name: 'role',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.datatype.uuid(),
    },
];
//# sourceMappingURL=role.doc.constant.js.map