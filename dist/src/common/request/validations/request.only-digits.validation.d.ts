import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { HelperNumberService } from 'src/common/helper/services/helper.number.service';
export declare class IsOnlyDigitsConstraint implements ValidatorConstraintInterface {
    protected readonly helperNumberService: HelperNumberService;
    constructor(helperNumberService: HelperNumberService);
    validate(value: string): boolean;
}
export declare function IsOnlyDigits(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
