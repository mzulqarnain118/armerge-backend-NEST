import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
import { UserService } from 'src/modules/user/services/user.service';
export declare class UserUserController {
    private readonly userService;
    constructor(userService: UserService);
    deleteSelf(user: UserDoc): Promise<void>;
}
