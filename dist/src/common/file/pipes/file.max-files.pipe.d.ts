import { PipeTransform } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { IFile } from 'src/common/file/interfaces/file.interface';
export declare class FileMaxFilesImagePipe implements PipeTransform {
    private readonly request;
    private readonly configService;
    private readonly maxFile;
    constructor(request: Request & {
        __customMaxFiles: number;
    }, configService: ConfigService);
    transform(value: IFile[]): Promise<IFile[]>;
    validate(value: IFile[]): Promise<void>;
}
export declare class FileMaxFilesExcelPipe implements PipeTransform {
    private readonly request;
    private readonly configService;
    private readonly maxFile;
    constructor(request: Request & {
        __customMaxFiles: number;
    }, configService: ConfigService);
    transform(value: IFile[]): Promise<IFile[]>;
    validate(value: IFile[]): Promise<void>;
}
export declare class FileMaxFilesVideoPipe implements PipeTransform {
    private readonly request;
    private readonly configService;
    private readonly maxFile;
    constructor(request: Request & {
        __customMaxFiles: number;
    }, configService: ConfigService);
    transform(value: IFile[]): Promise<IFile[]>;
    validate(value: IFile[]): Promise<void>;
}
export declare class FileMaxFilesAudioPipe implements PipeTransform {
    private readonly request;
    private readonly configService;
    private readonly maxFile;
    constructor(request: Request & {
        __customMaxFiles: number;
    }, configService: ConfigService);
    transform(value: IFile[]): Promise<IFile[]>;
    validate(value: IFile[]): Promise<void>;
}
