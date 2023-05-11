"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const app_enum_constant_1 = require("./app/constants/app.enum.constant");
const aws_s3_multipart_serialization_1 = require("./common/aws/serializations/aws.s3-multipart.serialization");
const aws_s3_serialization_1 = require("./common/aws/serializations/aws.s3.serialization");
const response_default_serialization_1 = require("./common/response/serializations/response.default.serialization");
const response_paging_serialization_1 = require("./common/response/serializations/response.paging.serialization");
async function default_1(app) {
    const configService = app.get(config_1.ConfigService);
    const env = configService.get('app.env');
    const logger = new common_1.Logger();
    const docName = configService.get('doc.name');
    const docDesc = configService.get('doc.description');
    const docVersion = configService.get('doc.version');
    const docPrefix = configService.get('doc.prefix');
    if (env !== app_enum_constant_1.ENUM_APP_ENVIRONMENT.PRODUCTION) {
        const documentBuild = new swagger_1.DocumentBuilder()
            .setTitle(docName)
            .setDescription(docDesc)
            .setVersion(docVersion)
            .addTag("API's")
            .addServer(`/`)
            .addServer(`/staging`)
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'accessToken')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'refreshToken')
            .addApiKey({ type: 'apiKey', in: 'header', name: 'x-api-key' }, 'apiKey')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, documentBuild, {
            deepScanRoutes: true,
            extraModels: [
                response_default_serialization_1.ResponseDefaultSerialization,
                response_paging_serialization_1.ResponsePagingSerialization,
                aws_s3_multipart_serialization_1.AwsS3MultipartPartsSerialization,
                aws_s3_multipart_serialization_1.AwsS3MultipartSerialization,
                aws_s3_serialization_1.AwsS3Serialization,
            ],
        });
        swagger_1.SwaggerModule.setup(docPrefix, app, document, {
            explorer: true,
            customSiteTitle: docName,
        });
        logger.log(`==========================================================`);
        logger.log(`Docs will serve on ${docPrefix}`, 'NestApplication');
        logger.log(`==========================================================`);
    }
}
exports.default = default_1;
//# sourceMappingURL=swagger.js.map