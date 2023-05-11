import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class MaxGreaterThanConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function MaxGreaterThan(property: string, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
