import { ConfigService } from '@nestjs/config';
import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { ENUM_FILE_TYPE } from 'src/common/file/constants/file.enum.constant';
export declare class MaxBinaryFileConstraint implements ValidatorConstraintInterface {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function MaxBinaryFile(type: ENUM_FILE_TYPE, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => any;
