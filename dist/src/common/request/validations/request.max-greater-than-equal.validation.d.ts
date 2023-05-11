import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class MaxGreaterThanEqualConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function MaxGreaterThanEqual(property: string, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
