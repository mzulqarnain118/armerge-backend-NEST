import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
export declare class MinDateTodayConstraint implements ValidatorConstraintInterface {
    private readonly helperDateService;
    constructor(helperDateService: HelperDateService);
    validate(value: string): boolean;
}
export declare function MinDateToday(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
