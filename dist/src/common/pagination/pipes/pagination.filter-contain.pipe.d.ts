import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
import { IPaginationFilterStringContainOptions } from 'src/common/pagination/interfaces/pagination.interface';
export declare function PaginationFilterContainPipe(field: string, options?: IPaginationFilterStringContainOptions): Type<PipeTransform>;
