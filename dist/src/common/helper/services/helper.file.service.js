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
exports.HelperFileService = void 0;
const common_1 = require("@nestjs/common");
const bytes_1 = __importDefault(require("bytes"));
const helper_enum_constant_1 = require("../constants/helper.enum.constant");
const xlsx_1 = require("xlsx");
const fs_1 = require("fs");
let HelperFileService = class HelperFileService {
    createExcelWorkbook(rows, options) {
        const headers = Object.keys(rows[0]);
        const worksheet = xlsx_1.utils.json_to_sheet(rows);
        const workbook = xlsx_1.utils.book_new();
        xlsx_1.utils.sheet_add_aoa(worksheet, [headers], { origin: 'A1' });
        xlsx_1.utils.book_append_sheet(workbook, worksheet, options?.sheetName ?? 'Sheet 1');
        return workbook;
    }
    writeExcelToBuffer(workbook, options) {
        const buff = (0, xlsx_1.write)(workbook, {
            type: 'buffer',
            bookType: options?.type ?? helper_enum_constant_1.ENUM_HELPER_FILE_TYPE.CSV,
            password: options?.password,
        });
        return buff;
    }
    readExcelFromBuffer(file, options) {
        const workbook = (0, xlsx_1.read)(file, {
            type: 'buffer',
            password: options?.password,
            sheets: options?.sheet,
        });
        const worksheetName = workbook.SheetNames;
        const worksheet = workbook.Sheets[worksheetName[0]];
        const rows = xlsx_1.utils.sheet_to_json(worksheet);
        return rows;
    }
    convertToBytes(megabytes) {
        return (0, bytes_1.default)(megabytes);
    }
    createJson(path, data) {
        const sData = JSON.stringify(data);
        (0, fs_1.writeFileSync)(path, sData);
        return true;
    }
    readJson(path) {
        const data = (0, fs_1.readFileSync)(path, 'utf8');
        return JSON.parse(data);
    }
};
HelperFileService = __decorate([
    (0, common_1.Injectable)()
], HelperFileService);
exports.HelperFileService = HelperFileService;
//# sourceMappingURL=helper.file.service.js.map