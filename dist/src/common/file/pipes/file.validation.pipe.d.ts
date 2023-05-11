import { PipeTransform } from '@nestjs/common/interfaces';
import { ClassConstructor } from 'class-transformer';
import { IFileExtract } from 'src/common/file/interfaces/file.interface';
export declare class FileValidationPipe<T> implements PipeTransform {
    private readonly dto;
    constructor(dto: ClassConstructor<T>);
    transform(value: IFileExtract<T> | IFileExtract<T>[]): Promise<IFileExtract<T> | IFileExtract<T>[]>;
    transformMerge(value: IFileExtract, classTransform: T[]): Promise<IFileExtract<T>>;
    transformExtract(classDtos: ClassConstructor<T>, extract: Record<string, any>[]): Promise<T[]>;
    validate(value: IFileExtract): Promise<void>;
    validateExtract(classTransform: T[], filename: string): Promise<void>;
}
