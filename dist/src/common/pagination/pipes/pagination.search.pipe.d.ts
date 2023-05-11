import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
export declare function PaginationSearchPipe(availableSearch: string[]): Type<PipeTransform>;
