"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_KEY_DEFAULT_TYPE = exports.API_KEY_DEFAULT_IS_ACTIVE = exports.API_KEY_DEFAULT_AVAILABLE_SEARCH = exports.API_KEY_DEFAULT_AVAILABLE_ORDER_BY = exports.API_KEY_DEFAULT_ORDER_DIRECTION = exports.API_KEY_DEFAULT_ORDER_BY = exports.API_KEY_DEFAULT_PER_PAGE = void 0;
const api_key_enum_constant_1 = require("./api-key.enum.constant");
const pagination_enum_constant_1 = require("../../pagination/constants/pagination.enum.constant");
exports.API_KEY_DEFAULT_PER_PAGE = 20;
exports.API_KEY_DEFAULT_ORDER_BY = 'createdAt';
exports.API_KEY_DEFAULT_ORDER_DIRECTION = pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC;
exports.API_KEY_DEFAULT_AVAILABLE_ORDER_BY = ['name', 'key', 'createdAt'];
exports.API_KEY_DEFAULT_AVAILABLE_SEARCH = ['name', 'key'];
exports.API_KEY_DEFAULT_IS_ACTIVE = [true, false];
exports.API_KEY_DEFAULT_TYPE = Object.values(api_key_enum_constant_1.ENUM_API_KEY_TYPE);
//# sourceMappingURL=api-key.list.constant.js.map