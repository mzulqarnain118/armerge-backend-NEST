import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
import { ENUM_PAGINATION_ORDER_DIRECTION_TYPE } from 'src/common/pagination/constants/pagination.enum.constant';
export declare function PaginationOrderPipe(defaultOrderBy: string, defaultOrderDirection: ENUM_PAGINATION_ORDER_DIRECTION_TYPE, availableOrderBy: string[]): Type<PipeTransform>;
