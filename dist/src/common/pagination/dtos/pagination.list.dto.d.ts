import { ENUM_PAGINATION_ORDER_DIRECTION_TYPE } from 'src/common/pagination/constants/pagination.enum.constant';
import { IPaginationOrder } from 'src/common/pagination/interfaces/pagination.interface';
export declare class PaginationListDto {
    _search: Record<string, any>;
    _limit: number;
    _offset: number;
    _order: IPaginationOrder;
    _availableOrderBy: string[];
    _availableOrderDirection: ENUM_PAGINATION_ORDER_DIRECTION_TYPE[];
}
