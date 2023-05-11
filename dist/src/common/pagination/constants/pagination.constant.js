"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGINATION_AVAILABLE_ORDER_DIRECTION = exports.PAGINATION_AVAILABLE_ORDER_BY = exports.PAGINATION_ORDER_DIRECTION = exports.PAGINATION_ORDER_BY = exports.PAGINATION_MAX_PAGE = exports.PAGINATION_PAGE = exports.PAGINATION_MAX_PER_PAGE = exports.PAGINATION_PER_PAGE = void 0;
const pagination_enum_constant_1 = require("./pagination.enum.constant");
exports.PAGINATION_PER_PAGE = 20;
exports.PAGINATION_MAX_PER_PAGE = 100;
exports.PAGINATION_PAGE = 1;
exports.PAGINATION_MAX_PAGE = 20;
exports.PAGINATION_ORDER_BY = 'createdAt';
exports.PAGINATION_ORDER_DIRECTION = pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC;
exports.PAGINATION_AVAILABLE_ORDER_BY = ['createdAt'];
exports.PAGINATION_AVAILABLE_ORDER_DIRECTION = Object.values(pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE);
//# sourceMappingURL=pagination.constant.js.map