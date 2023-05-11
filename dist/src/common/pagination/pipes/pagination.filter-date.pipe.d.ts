import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
import { IPaginationFilterDateOptions } from 'src/common/pagination/interfaces/pagination.interface';
export declare function PaginationFilterDatePipe(field: string, options?: IPaginationFilterDateOptions): Type<PipeTransform>;
