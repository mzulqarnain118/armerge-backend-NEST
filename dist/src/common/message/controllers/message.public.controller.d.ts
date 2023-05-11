import { MessageService } from 'src/common/message/services/message.service';
import { IResponse } from 'src/common/response/interfaces/response.interface';
export declare class MessagePublicController {
    private readonly messageService;
    constructor(messageService: MessageService);
    languages(): Promise<IResponse>;
}
