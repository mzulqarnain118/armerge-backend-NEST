import { ValidatorConstraintInterface } from 'class-validator';
export declare class SkipConstraint implements ValidatorConstraintInterface {
    validate(): boolean;
}
export declare function Skip(): (object: Record<string, any>, propertyName: string) => void;
