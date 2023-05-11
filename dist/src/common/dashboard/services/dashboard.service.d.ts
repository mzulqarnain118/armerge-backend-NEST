import { DashboardDto } from 'src/common/dashboard/dtos/dashboard';
import { IDashboardStartAndEndDate } from 'src/common/dashboard/interfaces/dashboard.interface';
import { IDashboardService } from 'src/common/dashboard/interfaces/dashboard.service.interface';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { HelperNumberService } from 'src/common/helper/services/helper.number.service';
export declare class DashboardService implements IDashboardService {
    private readonly helperDateService;
    private readonly helperNumberService;
    constructor(helperDateService: HelperDateService, helperNumberService: HelperNumberService);
    getStartAndEndDate(date?: DashboardDto): IDashboardStartAndEndDate;
    getPercentage(value: number, total: number): number;
}
