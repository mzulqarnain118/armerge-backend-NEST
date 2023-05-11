import { PipeTransform } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IFile } from 'src/common/file/interfaces/file.interface';
import { HelperFileService } from 'src/common/helper/services/helper.file.service';
export declare class FileSizeImagePipe implements PipeTransform {
    private readonly request;
    private readonly configService;
    private readonly helperFileService;
    private readonly maxSize;
    constructor(request: Request & {
        __customMaxFileSize: string;
    }, configService: ConfigService, helperFileService: HelperFileService);
    transform(value: IFile | IFile[]): Promise<IFile | IFile[]>;
    validate(size: number): Promise<void>;
}
export declare class FileSizeExcelPipe implements PipeTransform {
    private readonly request;
    private readonly configService;
    private readonly helperFileService;
    private readonly maxSize;
    constructor(request: Request & {
        __customMaxFileSize: string;
    }, configService: ConfigService, helperFileService: HelperFileService);
    transform(value: IFile | IFile[]): Promise<IFile | IFile[]>;
    validate(size: number): Promise<void>;
}
export declare class FileSizeVideoPipe implements PipeTransform {
    private readonly request;
    private readonly configService;
    private readonly helperFileService;
    private readonly maxSize;
    constructor(request: Request & {
        __customMaxFileSize: string;
    }, configService: ConfigService, helperFileService: HelperFileService);
    transform(value: IFile | IFile[]): Promise<IFile | IFile[]>;
    validate(size: number): Promise<void>;
}
export declare class FileSizeAudioPipe implements PipeTransform {
    private readonly request;
    private readonly configService;
    private readonly helperFileService;
    private readonly maxSize;
    constructor(request: Request & {
        __customMaxFileSize: string;
    }, configService: ConfigService, helperFileService: HelperFileService);
    transform(value: IFile | IFile[]): Promise<IFile | IFile[]>;
    validate(size: number): Promise<void>;
}
