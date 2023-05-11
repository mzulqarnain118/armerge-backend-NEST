import { PipeTransform } from '@nestjs/common/interfaces';
import { IFile, IFileExtract } from 'src/common/file/interfaces/file.interface';
import { HelperFileService } from 'src/common/helper/services/helper.file.service';
export declare class FileExtractPipe implements PipeTransform {
    private readonly helperFileService;
    constructor(helperFileService: HelperFileService);
    transform(value: IFile | IFile[]): Promise<IFileExtract | IFileExtract[]>;
    validate(mimetype: string): Promise<void>;
    extract(value: IFile): Promise<IFileExtract>;
}
