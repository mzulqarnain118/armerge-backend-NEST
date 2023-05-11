"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3Service = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
let AwsS3Service = class AwsS3Service {
    constructor(configService) {
        this.configService = configService;
        this.s3Client = new client_s3_1.S3Client({
            credentials: {
                accessKeyId: this.configService.get('aws.credential.key'),
                secretAccessKey: this.configService.get('aws.credential.secret'),
            },
            region: this.configService.get('aws.s3.region'),
        });
        this.bucket = this.configService.get('aws.s3.bucket');
        this.baseUrl = this.configService.get('aws.s3.baseUrl');
    }
    async checkBucketExistence() {
        const command = new client_s3_1.HeadBucketCommand({
            Bucket: this.bucket,
        });
        try {
            const check = await this.s3Client.send(command);
            return check;
        }
        catch (err) {
            throw err;
        }
    }
    async listBucket() {
        const command = new client_s3_1.ListBucketsCommand({});
        try {
            const listBucket = await this.s3Client.send(command);
            const mapList = listBucket.Buckets.map((val) => val.Name);
            return mapList;
        }
        catch (err) {
            throw err;
        }
    }
    async listItemInBucket(prefix) {
        const command = new client_s3_1.ListObjectsV2Command({
            Bucket: this.bucket,
            Prefix: prefix,
        });
        try {
            const listItems = await this.s3Client.send(command);
            const mapList = listItems.Contents.map((val) => {
                const lastIndex = val.Key.lastIndexOf('/');
                const path = val.Key.substring(0, lastIndex);
                const filename = val.Key.substring(lastIndex + 1, val.Key.length);
                const mime = filename
                    .substring(filename.lastIndexOf('.') + 1, filename.length)
                    .toLocaleUpperCase();
                return {
                    path,
                    pathWithFilename: val.Key,
                    filename: filename,
                    completedUrl: `${this.baseUrl}/${val.Key}`,
                    baseUrl: this.baseUrl,
                    mime,
                };
            });
            return mapList;
        }
        catch (err) {
            throw err;
        }
    }
    async getItemInBucket(filename, path) {
        if (path)
            path = path.startsWith('/') ? path.replace('/', '') : `${path}`;
        const key = path ? `${path}/${filename}` : filename;
        const command = new client_s3_1.GetObjectCommand({
            Bucket: this.bucket,
            Key: key,
        });
        try {
            const item = await this.s3Client.send(command);
            return item.Body;
        }
        catch (err) {
            throw err;
        }
    }
    async putItemInBucket(filename, content, options) {
        let path = options?.path;
        const acl = options?.acl ? options.acl : 'public-read';
        if (path)
            path = path.startsWith('/') ? path.replace('/', '') : `${path}`;
        const mime = filename
            .substring(filename.lastIndexOf('.') + 1, filename.length)
            .toUpperCase();
        const key = path ? `${path}/${filename}` : filename;
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: content,
            ACL: acl,
        });
        try {
            await this.s3Client.send(command);
        }
        catch (err) {
            throw err;
        }
        return {
            path,
            pathWithFilename: key,
            filename: filename,
            completedUrl: `${this.baseUrl}/${key}`,
            baseUrl: this.baseUrl,
            mime,
        };
    }
    async deleteItemInBucket(filename) {
        const command = new client_s3_1.DeleteObjectCommand({
            Bucket: this.bucket,
            Key: filename,
        });
        try {
            await this.s3Client.send(command);
            return;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteItemsInBucket(filenames) {
        const keys = filenames.map((val) => ({
            Key: val,
        }));
        const command = new client_s3_1.DeleteObjectsCommand({
            Bucket: this.bucket,
            Delete: {
                Objects: keys,
            },
        });
        try {
            await this.s3Client.send(command);
            return;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteFolder(dir) {
        const commandList = new client_s3_1.ListObjectsV2Command({
            Bucket: this.bucket,
            Prefix: dir,
        });
        const lists = await this.s3Client.send(commandList);
        try {
            const listItems = lists.Contents.map((val) => ({
                Key: val.Key,
            }));
            const commandDeleteItems = new client_s3_1.DeleteObjectsCommand({
                Bucket: this.bucket,
                Delete: {
                    Objects: listItems,
                },
            });
            await this.s3Client.send(commandDeleteItems);
            const commandDelete = new client_s3_1.DeleteObjectCommand({
                Bucket: this.bucket,
                Key: dir,
            });
            await this.s3Client.send(commandDelete);
            return;
        }
        catch (err) {
            throw err;
        }
    }
    async createMultiPart(filename, options) {
        let path = options?.path;
        const acl = options?.acl ? options.acl : 'public-read';
        if (path)
            path = path.startsWith('/') ? path.replace('/', '') : `${path}`;
        const mime = filename
            .substring(filename.lastIndexOf('.') + 1, filename.length)
            .toUpperCase();
        const key = path ? `${path}/${filename}` : filename;
        const multiPartCommand = new client_s3_1.CreateMultipartUploadCommand({
            Bucket: this.bucket,
            Key: key,
            ACL: acl,
        });
        try {
            const response = await this.s3Client.send(multiPartCommand);
            return {
                uploadId: response.UploadId,
                path,
                pathWithFilename: key,
                filename: filename,
                completedUrl: `${this.baseUrl}/${key}`,
                baseUrl: this.baseUrl,
                mime,
            };
        }
        catch (err) {
            throw err;
        }
    }
    async uploadPart(path, content, uploadId, partNumber) {
        const uploadPartCommand = new client_s3_1.UploadPartCommand({
            Bucket: this.bucket,
            Key: path,
            Body: content,
            PartNumber: partNumber,
            UploadId: uploadId,
        });
        try {
            const { ETag } = await this.s3Client.send(uploadPartCommand);
            return {
                ETag,
                PartNumber: partNumber,
            };
        }
        catch (err) {
            throw err;
        }
    }
    async completeMultipart(path, uploadId, parts) {
        const completeMultipartCommand = new client_s3_1.CompleteMultipartUploadCommand({
            Bucket: this.bucket,
            Key: path,
            UploadId: uploadId,
            MultipartUpload: {
                Parts: parts,
            },
        });
        try {
            await this.s3Client.send(completeMultipartCommand);
            return;
        }
        catch (err) {
            throw err;
        }
    }
    async abortMultipart(path, uploadId) {
        const abortMultipartCommand = new client_s3_1.AbortMultipartUploadCommand({
            Bucket: this.bucket,
            Key: path,
            UploadId: uploadId,
        });
        try {
            await this.s3Client.send(abortMultipartCommand);
            return;
        }
        catch (err) {
            throw err;
        }
    }
};
AwsS3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsS3Service);
exports.AwsS3Service = AwsS3Service;
//# sourceMappingURL=aws.s3.service.js.map