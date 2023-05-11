"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardDocQueryEndDate = exports.DashboardDocQueryStartDate = void 0;
const faker_1 = require("@faker-js/faker");
exports.DashboardDocQueryStartDate = [
    {
        name: 'startDate',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: faker_1.faker.date.recent().toString(),
    },
];
exports.DashboardDocQueryEndDate = [
    {
        name: 'endDate',
        allowEmptyValue: true,
        required: false,
        type: 'string',
        example: faker_1.faker.date.recent().toString(),
    },
];
//# sourceMappingURL=dashboard.doc.constant.js.map