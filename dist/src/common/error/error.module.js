"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const error_http_filter_1 = require("./filters/error.http.filter");
const error_meta_guard_1 = require("./guards/error.meta.guard");
const debugger_module_1 = require("../debugger/debugger.module");
let ErrorModule = class ErrorModule {
};
ErrorModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: error_http_filter_1.ErrorHttpFilter,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: error_meta_guard_1.ErrorMetaGuard,
            },
        ],
        imports: [debugger_module_1.DebuggerModule.forRoot()],
    })
], ErrorModule);
exports.ErrorModule = ErrorModule;
//# sourceMappingURL=error.module.js.map