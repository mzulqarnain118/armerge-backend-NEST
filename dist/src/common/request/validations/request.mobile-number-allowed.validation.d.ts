import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { SettingService } from 'src/common/setting/services/setting.service';
export declare class MobileNumberAllowedConstraint implements ValidatorConstraintInterface {
    private readonly settingService;
    constructor(settingService: SettingService);
    validate(value: string): Promise<boolean>;
}
export declare function MobileNumberAllowed(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
