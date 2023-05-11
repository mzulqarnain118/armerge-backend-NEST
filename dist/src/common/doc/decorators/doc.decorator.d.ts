import { HttpStatus } from '@nestjs/common';
import { IDocDefaultOptions, IDocOfOptions, IDocOptions, IDocPagingOptions } from 'src/common/doc/interfaces/doc.interface';
export declare function Doc<T>(messagePath: string, options?: IDocOptions<T>): MethodDecorator;
export declare function DocPaging<T>(messagePath: string, options: IDocPagingOptions<T>): MethodDecorator;
export declare function DocDefault<T>(options: IDocDefaultOptions): MethodDecorator;
export declare function DocOneOf<T>(httpStatus: HttpStatus, ...documents: IDocOfOptions[]): MethodDecorator;
export declare function DocAnyOf<T>(httpStatus: HttpStatus, ...documents: IDocOfOptions[]): MethodDecorator;
export declare function DocAllOf<T>(httpStatus: HttpStatus, ...documents: IDocOfOptions[]): MethodDecorator;
