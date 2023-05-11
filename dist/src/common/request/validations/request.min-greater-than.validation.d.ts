import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class MinGreaterThanConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function MinGreaterThan(property: string, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
