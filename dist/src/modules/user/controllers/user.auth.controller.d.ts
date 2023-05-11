import { AuthService } from 'src/common/auth/services/auth.service';
import { AwsS3Service } from 'src/common/aws/services/aws.s3.service';
import { IFile } from 'src/common/file/interfaces/file.interface';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { SettingService } from 'src/common/setting/services/setting.service';
import { UserChangePasswordDto } from 'src/modules/user/dtos/user.change-password.dto';
import { UserUpdateNameDto } from 'src/modules/user/dtos/user.update-name.dto';
import { UserUpdateUsernameDto } from 'src/modules/user/dtos/user.update-username.dto';
import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
import { UserPayloadSerialization } from 'src/modules/user/serializations/user.payload.serialization';
import { UserService } from 'src/modules/user/services/user.service';
export declare class UserAuthController {
    private readonly userService;
    private readonly authService;
    private readonly settingService;
    private readonly awsS3Service;
    constructor(userService: UserService, authService: AuthService, settingService: SettingService, awsS3Service: AwsS3Service);
    refresh(refreshToken: string, user: UserDoc): Promise<IResponse>;
    changePassword(body: UserChangePasswordDto, user: UserDoc): Promise<void>;
    info(payload: UserPayloadSerialization): Promise<IResponse>;
    profile(user: UserDoc): Promise<IResponse>;
    updateProfile(user: UserDoc, body: UserUpdateNameDto): Promise<void>;
    claimUsername(user: UserDoc, { username }: UserUpdateUsernameDto): Promise<void>;
    upload(user: UserDoc, file: IFile): Promise<void>;
}
