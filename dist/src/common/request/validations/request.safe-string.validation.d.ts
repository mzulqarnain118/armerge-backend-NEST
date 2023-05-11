import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { HelperStringService } from 'src/common/helper/services/helper.string.service';
export declare class SafeStringConstraint implements ValidatorConstraintInterface {
    protected readonly helperStringService: HelperStringService;
    constructor(helperStringService: HelperStringService);
    validate(value: string): boolean;
}
export declare function SafeString(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
