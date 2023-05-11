import { DiskHealthIndicator, HealthCheckService, MemoryHealthIndicator, MongooseHealthIndicator } from '@nestjs/terminus';
import { Connection } from 'mongoose';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { HealthAwsS3Indicator } from 'src/health/indicators/health.aws-s3.indicator';
export declare class HealthPublicController {
    private readonly databaseConnection;
    private readonly health;
    private readonly memoryHealthIndicator;
    private readonly diskHealthIndicator;
    private readonly mongooseIndicator;
    private readonly awsS3Indicator;
    constructor(databaseConnection: Connection, health: HealthCheckService, memoryHealthIndicator: MemoryHealthIndicator, diskHealthIndicator: DiskHealthIndicator, mongooseIndicator: MongooseHealthIndicator, awsS3Indicator: HealthAwsS3Indicator);
    checkAws(): Promise<IResponse>;
    checkDatabase(): Promise<IResponse>;
    checkMemoryHeap(): Promise<IResponse>;
    checkMemoryRss(): Promise<IResponse>;
    checkStorage(): Promise<IResponse>;
}
