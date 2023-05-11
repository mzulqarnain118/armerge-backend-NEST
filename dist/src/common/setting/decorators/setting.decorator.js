"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSetting = void 0;
const common_1 = require("@nestjs/common");
exports.GetSetting = (0, common_1.createParamDecorator)((returnPlain, ctx) => {
    const { __setting } = ctx
        .switchToHttp()
        .getRequest();
    return returnPlain ? __setting.toObject() : __setting;
});
//# sourceMappingURL=setting.decorator.js.map