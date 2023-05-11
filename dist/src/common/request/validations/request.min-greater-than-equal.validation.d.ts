import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class MinGreaterThanEqualConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function MinGreaterThanEqual(property: string, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
