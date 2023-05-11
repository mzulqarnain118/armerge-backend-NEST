import { PipeTransform } from '@nestjs/common';
import { IFile } from 'src/common/file/interfaces/file.interface';
export declare class FileTypeImagePipe implements PipeTransform {
    transform(value: IFile | IFile[]): Promise<IFile | IFile[]>;
    validate(mimetype: string): Promise<void>;
}
export declare class FileTypeVideoPipe implements PipeTransform {
    transform(value: IFile | IFile[]): Promise<IFile | IFile[]>;
    validate(mimetype: string): Promise<void>;
}
export declare class FileTypeAudioPipe implements PipeTransform {
    transform(value: IFile | IFile[]): Promise<IFile | IFile[]>;
    validate(mimetype: string): Promise<void>;
}
export declare class FileTypeExcelPipe implements PipeTransform {
    transform(value: IFile | IFile[]): Promise<IFile | IFile[]>;
    validate(mimetype: string): Promise<void>;
}
