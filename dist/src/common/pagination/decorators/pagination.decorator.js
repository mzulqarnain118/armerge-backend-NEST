"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationQueryFilterEqualObjectId = exports.PaginationQueryFilterDate = exports.PaginationQueryFilterContain = exports.PaginationQueryFilterEqual = exports.PaginationQueryFilterInEnum = exports.PaginationQueryFilterInBoolean = exports.PaginationQuerySearch = exports.PaginationQuery = void 0;
const common_1 = require("@nestjs/common");
const pagination_filter_contain_pipe_1 = require("../pipes/pagination.filter-contain.pipe");
const pagination_filter_date_pipe_1 = require("../pipes/pagination.filter-date.pipe");
const pagination_filter_equal_object_id_pipe_1 = require("../pipes/pagination.filter-equal-object-id.pipe");
const pagination_filter_equal_pipe_1 = require("../pipes/pagination.filter-equal.pipe");
const pagination_filter_in_boolean_pipe_1 = require("../pipes/pagination.filter-in-boolean.pipe");
const pagination_filter_in_enum_pipe_1 = require("../pipes/pagination.filter-in-enum.pipe");
const pagination_order_pipe_1 = require("../pipes/pagination.order.pipe");
const pagination_paging_pipe_1 = require("../pipes/pagination.paging.pipe");
const pagination_search_pipe_1 = require("../pipes/pagination.search.pipe");
function PaginationQuery(defaultPerPage, defaultOrderBy, defaultOrderDirection, availableSearch, availableOrderBy) {
    return (0, common_1.Query)((0, pagination_search_pipe_1.PaginationSearchPipe)(availableSearch), (0, pagination_paging_pipe_1.PaginationPagingPipe)(defaultPerPage), (0, pagination_order_pipe_1.PaginationOrderPipe)(defaultOrderBy, defaultOrderDirection, availableOrderBy));
}
exports.PaginationQuery = PaginationQuery;
function PaginationQuerySearch(availableSearch) {
    return (0, common_1.Query)((0, pagination_search_pipe_1.PaginationSearchPipe)(availableSearch));
}
exports.PaginationQuerySearch = PaginationQuerySearch;
function PaginationQueryFilterInBoolean(field, defaultValue, queryField) {
    return (0, common_1.Query)(queryField ?? field, (0, pagination_filter_in_boolean_pipe_1.PaginationFilterInBooleanPipe)(field, defaultValue));
}
exports.PaginationQueryFilterInBoolean = PaginationQueryFilterInBoolean;
function PaginationQueryFilterInEnum(field, defaultValue, defaultEnum, queryField) {
    return (0, common_1.Query)(queryField ?? field, (0, pagination_filter_in_enum_pipe_1.PaginationFilterInEnumPipe)(field, defaultValue, defaultEnum));
}
exports.PaginationQueryFilterInEnum = PaginationQueryFilterInEnum;
function PaginationQueryFilterEqual(field, queryField, options) {
    return (0, common_1.Query)(queryField ?? field, (0, pagination_filter_equal_pipe_1.PaginationFilterEqualPipe)(field, options));
}
exports.PaginationQueryFilterEqual = PaginationQueryFilterEqual;
function PaginationQueryFilterContain(field, queryField, options) {
    return (0, common_1.Query)(queryField ?? field, (0, pagination_filter_contain_pipe_1.PaginationFilterContainPipe)(field, options));
}
exports.PaginationQueryFilterContain = PaginationQueryFilterContain;
function PaginationQueryFilterDate(field, queryField, options) {
    return (0, common_1.Query)(queryField ?? field, (0, pagination_filter_date_pipe_1.PaginationFilterDatePipe)(field, options));
}
exports.PaginationQueryFilterDate = PaginationQueryFilterDate;
function PaginationQueryFilterEqualObjectId(field, queryField) {
    return (0, common_1.Query)(queryField ?? field, (0, pagination_filter_equal_object_id_pipe_1.PaginationFilterEqualObjectIdPipe)(field));
}
exports.PaginationQueryFilterEqualObjectId = PaginationQueryFilterEqualObjectId;
//# sourceMappingURL=pagination.decorator.js.map