"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_DEFAULT_INACTIVE_PERMANENT = exports.USER_DEFAULT_BLOCKED = exports.USER_DEFAULT_IS_ACTIVE = exports.USER_DEFAULT_AVAILABLE_SEARCH = exports.USER_DEFAULT_AVAILABLE_ORDER_BY = exports.USER_DEFAULT_ORDER_DIRECTION = exports.USER_DEFAULT_ORDER_BY = exports.USER_DEFAULT_PER_PAGE = void 0;
const pagination_enum_constant_1 = require("../../../common/pagination/constants/pagination.enum.constant");
exports.USER_DEFAULT_PER_PAGE = 20;
exports.USER_DEFAULT_ORDER_BY = 'createdAt';
exports.USER_DEFAULT_ORDER_DIRECTION = pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC;
exports.USER_DEFAULT_AVAILABLE_ORDER_BY = [
    'username',
    'firstName',
    'lastName',
    'email',
    'mobileNumber',
    'createdAt',
];
exports.USER_DEFAULT_AVAILABLE_SEARCH = [
    'username',
    'firstName',
    'lastName',
    'email',
    'mobileNumber',
];
exports.USER_DEFAULT_IS_ACTIVE = [true, false];
exports.USER_DEFAULT_BLOCKED = [true, false];
exports.USER_DEFAULT_INACTIVE_PERMANENT = [true, false];
//# sourceMappingURL=user.list.constant.js.map