import { Connection } from 'mongoose';
import { IAuthGooglePayload } from 'src/common/auth/interfaces/auth.interface';
import { AuthService } from 'src/common/auth/services/auth.service';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { RoleService } from 'src/modules/role/services/role.service';
import { SettingService } from 'src/common/setting/services/setting.service';
import { UserLoginDto } from 'src/modules/user/dtos/user.login.dto';
import { UserSignUpDto } from 'src/modules/user/dtos/user.sign-up.dto';
import { UserService } from 'src/modules/user/services/user.service';
export declare class UserPublicController {
    private readonly databaseConnection;
    private readonly userService;
    private readonly authService;
    private readonly roleService;
    private readonly settingService;
    constructor(databaseConnection: Connection, userService: UserService, authService: AuthService, roleService: RoleService, settingService: SettingService);
    login({ email, password }: UserLoginDto): Promise<IResponse>;
    signUp({ email, mobileNumber, ...body }: UserSignUpDto): Promise<void>;
    loginGoogle(): Promise<void>;
    loginGoogleCallback({ email, accessToken: googleAccessToken, refreshToken: googleRefreshToken, }: IAuthGooglePayload): Promise<IResponse>;
    signUpGoogle(): Promise<void>;
    signUpGoogleCallback({ email, firstName, lastName, accessToken: googleAccessToken, refreshToken: googleRefreshToken, }: IAuthGooglePayload): Promise<void>;
}
