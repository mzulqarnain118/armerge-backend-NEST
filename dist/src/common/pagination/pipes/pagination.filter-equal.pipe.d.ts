import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
import { IPaginationFilterStringEqualOptions } from 'src/common/pagination/interfaces/pagination.interface';
export declare function PaginationFilterEqualPipe(field: string, options?: IPaginationFilterStringEqualOptions): Type<PipeTransform>;
