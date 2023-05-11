import { Type } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common/interfaces';
export declare function PaginationFilterInEnumPipe<T>(field: string, defaultValue: T, defaultEnum: Record<string, any>): Type<PipeTransform>;
