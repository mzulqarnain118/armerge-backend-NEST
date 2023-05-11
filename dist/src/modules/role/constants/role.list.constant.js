"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE_DEFAULT_TYPE = exports.ROLE_DEFAULT_IS_ACTIVE = exports.ROLE_DEFAULT_AVAILABLE_SEARCH = exports.ROLE_DEFAULT_AVAILABLE_ORDER_BY = exports.ROLE_DEFAULT_PER_PAGE = exports.ROLE_DEFAULT_ORDER_DIRECTION = exports.ROLE_DEFAULT_ORDER_BY = void 0;
const pagination_enum_constant_1 = require("../../../common/pagination/constants/pagination.enum.constant");
const role_enum_constant_1 = require("./role.enum.constant");
exports.ROLE_DEFAULT_ORDER_BY = 'createdAt';
exports.ROLE_DEFAULT_ORDER_DIRECTION = pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC;
exports.ROLE_DEFAULT_PER_PAGE = 20;
exports.ROLE_DEFAULT_AVAILABLE_ORDER_BY = ['name', 'createdAt'];
exports.ROLE_DEFAULT_AVAILABLE_SEARCH = ['name'];
exports.ROLE_DEFAULT_IS_ACTIVE = [true, false];
exports.ROLE_DEFAULT_TYPE = Object.values(role_enum_constant_1.ENUM_ROLE_TYPE);
//# sourceMappingURL=role.list.constant.js.map