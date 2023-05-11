/// <reference types="node" />
/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import { IAwsS3PutItemOptions } from 'src/common/aws/interfaces/aws.interface';
import { IAwsS3Service } from 'src/common/aws/interfaces/aws.s3-service.interface';
import { AwsS3MultipartPartsSerialization, AwsS3MultipartSerialization } from 'src/common/aws/serializations/aws.s3-multipart.serialization';
import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
import { Readable } from 'stream';
import { CompletedPart, UploadPartRequest, HeadBucketCommandOutput } from '@aws-sdk/client-s3';
export declare class AwsS3Service implements IAwsS3Service {
    private readonly configService;
    private readonly s3Client;
    private readonly bucket;
    private readonly baseUrl;
    constructor(configService: ConfigService);
    checkBucketExistence(): Promise<HeadBucketCommandOutput>;
    listBucket(): Promise<string[]>;
    listItemInBucket(prefix?: string): Promise<AwsS3Serialization[]>;
    getItemInBucket(filename: string, path?: string): Promise<Readable | ReadableStream<any> | Blob>;
    putItemInBucket(filename: string, content: string | Uint8Array | Buffer | Readable | ReadableStream | Blob, options?: IAwsS3PutItemOptions): Promise<AwsS3Serialization>;
    deleteItemInBucket(filename: string): Promise<void>;
    deleteItemsInBucket(filenames: string[]): Promise<void>;
    deleteFolder(dir: string): Promise<void>;
    createMultiPart(filename: string, options?: IAwsS3PutItemOptions): Promise<AwsS3MultipartSerialization>;
    uploadPart(path: string, content: UploadPartRequest['Body'] | string | Uint8Array | Buffer, uploadId: string, partNumber: number): Promise<AwsS3MultipartPartsSerialization>;
    completeMultipart(path: string, uploadId: string, parts: CompletedPart[]): Promise<void>;
    abortMultipart(path: string, uploadId: string): Promise<void>;
}
