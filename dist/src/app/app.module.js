"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jobs_module_1 = require("../jobs/jobs.module");
const app_controller_1 = require("./controllers/app.controller");
const router_module_1 = require("../router/router.module");
const common_module_1 = require("../common/common.module");
const morgan_1 = __importDefault(require("morgan"));
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply((0, morgan_1.default)('dev')).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        providers: [],
        imports: [
            common_module_1.CommonModule,
            jobs_module_1.JobsModule.forRoot(),
            router_module_1.RouterModule.forRoot(),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map