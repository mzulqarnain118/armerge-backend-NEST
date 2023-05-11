import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
export declare function PaginationFilterInBooleanPipe(field: string, defaultValue: boolean[]): Type<PipeTransform>;
