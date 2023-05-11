import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
export declare class AwsS3MultipartPartsSerialization {
    ETag: string;
    PartNumber: number;
}
export declare class AwsS3MultipartSerialization extends AwsS3Serialization {
    uploadId: string;
    partNumber?: number;
    maxPartNumber?: number;
    parts?: AwsS3MultipartPartsSerialization[];
}
