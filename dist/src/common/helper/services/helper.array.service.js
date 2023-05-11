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
exports.HelperArrayService = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = __importDefault(require("lodash"));
let HelperArrayService = class HelperArrayService {
    getLeftByIndex(array, index) {
        return lodash_1.default.nth(array, index);
    }
    getRightByIndex(array, index) {
        return lodash_1.default.nth(array, -Math.abs(index));
    }
    getLeftByLength(array, length) {
        return lodash_1.default.take(array, length);
    }
    getRightByLength(array, length) {
        return lodash_1.default.takeRight(array, length);
    }
    getLast(array) {
        return lodash_1.default.last(array);
    }
    getFirst(array) {
        return lodash_1.default.head(array);
    }
    getFirstIndexByValue(array, value) {
        return lodash_1.default.indexOf(array, value);
    }
    getLastIndexByValue(array, value) {
        return lodash_1.default.lastIndexOf(array, value);
    }
    removeByValue(array, value) {
        const removed = lodash_1.default.remove(array, function (n) {
            return n === value;
        });
        return { removed, arrays: array };
    }
    removeLeftByLength(array, length) {
        return lodash_1.default.drop(array, length);
    }
    removeRightByLength(array, length) {
        return lodash_1.default.dropRight(array, length);
    }
    joinToString(array, delimiter) {
        return lodash_1.default.join(array, delimiter);
    }
    reverse(array) {
        return lodash_1.default.reverse(array);
    }
    unique(array) {
        return lodash_1.default.uniq(array);
    }
    shuffle(array) {
        return lodash_1.default.shuffle(array);
    }
    merge(a, b) {
        return lodash_1.default.concat(a, b);
    }
    mergeUnique(a, b) {
        return lodash_1.default.union(a, b);
    }
    filterIncludeByValue(array, value) {
        return lodash_1.default.filter(array, (arr) => arr === value);
    }
    filterNotIncludeByValue(array, value) {
        return lodash_1.default.without(array, value);
    }
    filterNotIncludeUniqueByArray(a, b) {
        return lodash_1.default.xor(a, b);
    }
    filterIncludeUniqueByArray(a, b) {
        return lodash_1.default.intersection(a, b);
    }
    equals(a, b) {
        return lodash_1.default.isEqual(a, b);
    }
    notEquals(a, b) {
        return !lodash_1.default.isEqual(a, b);
    }
    in(a, b) {
        return lodash_1.default.intersection(a, b).length > 0;
    }
    notIn(a, b) {
        return lodash_1.default.intersection(a, b).length == 0;
    }
    includes(a, b) {
        return lodash_1.default.includes(a, b);
    }
    chunk(a, size) {
        return lodash_1.default.chunk(a, size);
    }
};
HelperArrayService = __decorate([
    (0, common_1.Injectable)()
], HelperArrayService);
exports.HelperArrayService = HelperArrayService;
//# sourceMappingURL=helper.array.service.js.map