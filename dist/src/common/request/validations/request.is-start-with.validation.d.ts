import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsStartWithConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function IsStartWith(prefix: string[], validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
