"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperHashService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const crypto_js_1 = require("crypto-js");
let HelperHashService = class HelperHashService {
    randomSalt(length) {
        return (0, bcryptjs_1.genSaltSync)(length);
    }
    bcrypt(passwordString, salt) {
        return (0, bcryptjs_1.hashSync)(passwordString, salt);
    }
    bcryptCompare(passwordString, passwordHashed) {
        return (0, bcryptjs_1.compareSync)(passwordString, passwordHashed);
    }
    sha256(string) {
        return (0, crypto_js_1.SHA256)(string).toString(crypto_js_1.enc.Hex);
    }
    sha256Compare(hashOne, hashTwo) {
        return hashOne === hashTwo;
    }
};
HelperHashService = __decorate([
    (0, common_1.Injectable)()
], HelperHashService);
exports.HelperHashService = HelperHashService;
//# sourceMappingURL=helper.hash.service.js.map