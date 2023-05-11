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
exports.HelperDateService = void 0;
const common_1 = require("@nestjs/common");
const moment_1 = __importDefault(require("moment"));
const helper_enum_constant_1 = require("../constants/helper.enum.constant");
let HelperDateService = class HelperDateService {
    calculateAge(dateOfBirth, year) {
        const m = (0, moment_1.default)();
        if (year) {
            m.set('year', year);
        }
        return m.diff(dateOfBirth, 'years');
    }
    diff(dateOne, dateTwoMoreThanDateOne, options) {
        const mDateOne = (0, moment_1.default)(dateOne);
        const mDateTwo = (0, moment_1.default)(dateTwoMoreThanDateOne);
        const diff = moment_1.default.duration(mDateTwo.diff(mDateOne));
        if (options?.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.MILIS) {
            return diff.asMilliseconds();
        }
        else if (options?.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.SECONDS) {
            return diff.asSeconds();
        }
        else if (options?.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.HOURS) {
            return diff.asHours();
        }
        else if (options?.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.MINUTES) {
            return diff.asMinutes();
        }
        else {
            return diff.asDays();
        }
    }
    check(date) {
        return (0, moment_1.default)(date, true).isValid();
    }
    checkTimestamp(timestamp) {
        return (0, moment_1.default)(timestamp, true).isValid();
    }
    create(date, options) {
        const mDate = (0, moment_1.default)(date ?? undefined);
        if (options?.startOfDay) {
            mDate.startOf('day');
        }
        return mDate.toDate();
    }
    timestamp(date, options) {
        const mDate = (0, moment_1.default)(date ?? undefined);
        if (options?.startOfDay) {
            mDate.startOf('day');
        }
        return mDate.valueOf();
    }
    format(date, options) {
        return (0, moment_1.default)(date).format(options?.format ?? helper_enum_constant_1.ENUM_HELPER_DATE_FORMAT.DATE);
    }
    forwardInMilliseconds(milliseconds, options) {
        return (0, moment_1.default)(options?.fromDate).add(milliseconds, 'ms').toDate();
    }
    backwardInMilliseconds(milliseconds, options) {
        return (0, moment_1.default)(options?.fromDate).subtract(milliseconds, 'ms').toDate();
    }
    forwardInSeconds(seconds, options) {
        return (0, moment_1.default)(options?.fromDate).add(seconds, 's').toDate();
    }
    backwardInSeconds(seconds, options) {
        return (0, moment_1.default)(options?.fromDate).subtract(seconds, 's').toDate();
    }
    forwardInMinutes(minutes, options) {
        return (0, moment_1.default)(options?.fromDate).add(minutes, 'm').toDate();
    }
    backwardInMinutes(minutes, options) {
        return (0, moment_1.default)(options?.fromDate).subtract(minutes, 'm').toDate();
    }
    forwardInHours(hours, options) {
        return (0, moment_1.default)(options?.fromDate).add(hours, 'h').toDate();
    }
    backwardInHours(hours, options) {
        return (0, moment_1.default)(options?.fromDate).subtract(hours, 'h').toDate();
    }
    forwardInDays(days, options) {
        return (0, moment_1.default)(options?.fromDate).add(days, 'd').toDate();
    }
    backwardInDays(days, options) {
        return (0, moment_1.default)(options?.fromDate).subtract(days, 'd').toDate();
    }
    forwardInMonths(months, options) {
        return (0, moment_1.default)(options?.fromDate).add(months, 'M').toDate();
    }
    backwardInMonths(months, options) {
        return (0, moment_1.default)(options?.fromDate).subtract(months, 'M').toDate();
    }
    endOfMonth(date) {
        return (0, moment_1.default)(date).endOf('month').toDate();
    }
    startOfMonth(date) {
        return (0, moment_1.default)(date).startOf('month').toDate();
    }
    endOfYear(date) {
        return (0, moment_1.default)(date).endOf('year').toDate();
    }
    startOfYear(date) {
        return (0, moment_1.default)(date).startOf('year').toDate();
    }
    endOfDay(date) {
        return (0, moment_1.default)(date).endOf('day').toDate();
    }
    startOfDay(date) {
        return (0, moment_1.default)(date).startOf('day').toDate();
    }
    extractDate(date) {
        const newDate = this.create(date);
        const day = this.format(newDate, {
            format: helper_enum_constant_1.ENUM_HELPER_DATE_FORMAT.ONLY_DATE,
        });
        const month = this.format(newDate, {
            format: helper_enum_constant_1.ENUM_HELPER_DATE_FORMAT.ONLY_MONTH,
        });
        const year = this.format(newDate, {
            format: helper_enum_constant_1.ENUM_HELPER_DATE_FORMAT.ONLY_YEAR,
        });
        return {
            date: newDate,
            day,
            month,
            year,
        };
    }
    roundDown(date, options) {
        const mDate = (0, moment_1.default)(date).set({ millisecond: 0 });
        if (options?.hour) {
            mDate.set({ hour: 0 });
        }
        if (options?.minute) {
            mDate.set({ minute: 0 });
        }
        if (options?.second) {
            mDate.set({ second: 0 });
        }
        return mDate.toDate();
    }
    getStartAndEndDate(options) {
        const today = (0, moment_1.default)();
        const todayMonth = today.format(helper_enum_constant_1.ENUM_HELPER_DATE_FORMAT.ONLY_MONTH);
        const todayYear = today.format(helper_enum_constant_1.ENUM_HELPER_DATE_FORMAT.ONLY_YEAR);
        const year = options?.year ?? todayYear;
        const month = options?.month ?? todayMonth;
        const date = (0, moment_1.default)(`${year}-${month}-02`, 'YYYY-MM-DD');
        let startDate = date.startOf('month').toDate();
        let endDate = date.endOf('month').toDate();
        if (options?.month) {
            const date = (0, moment_1.default)(`${year}-${month}-02`, 'YYYY-MM-DD');
            startDate = date.startOf('month').toDate();
            endDate = date.endOf('month').toDate();
        }
        return {
            startDate,
            endDate,
        };
    }
};
HelperDateService = __decorate([
    (0, common_1.Injectable)()
], HelperDateService);
exports.HelperDateService = HelperDateService;
//# sourceMappingURL=helper.date.service.js.map