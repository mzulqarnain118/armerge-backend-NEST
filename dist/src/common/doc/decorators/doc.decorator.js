"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocAllOf = exports.DocAnyOf = exports.DocOneOf = exports.DocDefault = exports.DocPaging = exports.Doc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_constant_1 = require("../../../app/constants/app.constant");
const api_key_status_code_constant_1 = require("../../api-key/constants/api-key.status-code.constant");
const auth_status_code_constant_1 = require("../../auth/constants/auth.status-code.constant");
const doc_enum_constant_1 = require("../constants/doc.enum.constant");
const error_status_code_constant_1 = require("../../error/constants/error.status-code.constant");
const file_enum_constant_1 = require("../../file/constants/file.enum.constant");
const file_multiple_dto_1 = require("../../file/dtos/file.multiple.dto");
const file_single_dto_1 = require("../../file/dtos/file.single.dto");
const pagination_enum_constant_1 = require("../../pagination/constants/pagination.enum.constant");
const request_status_code_constant_1 = require("../../request/constants/request.status-code.constant");
const request_skip_validation_1 = require("../../request/validations/request.skip.validation");
const response_default_serialization_1 = require("../../response/serializations/response.default.serialization");
const response_paging_serialization_1 = require("../../response/serializations/response.paging.serialization");
const role_status_code_constant_1 = require("../../../modules/role/constants/role.status-code.constant");
function Doc(messagePath, options) {
    const docs = [];
    const normDoc = {
        httpStatus: options?.response?.httpStatus ?? common_1.HttpStatus.OK,
        messagePath,
        statusCode: options?.response?.statusCode,
    };
    if (!normDoc.statusCode) {
        normDoc.statusCode = normDoc.httpStatus;
    }
    if (options?.request?.bodyType === doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.FORM_DATA) {
        docs.push((0, swagger_1.ApiConsumes)('multipart/form-data'));
        if (options?.request?.file?.multiple) {
            docs.push((0, swagger_1.ApiBody)({
                description: 'Multiple file',
                type: file_multiple_dto_1.FileMultipleDto,
            }));
        }
        else if (!options?.request?.file?.multiple) {
            docs.push((0, swagger_1.ApiBody)({
                description: 'Single file',
                type: file_single_dto_1.FileSingleDto,
            }));
        }
    }
    else if (options?.request?.bodyType === doc_enum_constant_1.ENUM_DOC_REQUEST_BODY_TYPE.TEXT) {
        docs.push((0, swagger_1.ApiConsumes)('text/plain'));
    }
    else {
        docs.push((0, swagger_1.ApiConsumes)('application/json'));
    }
    if (options?.response?.bodyType === doc_enum_constant_1.ENUM_DOC_RESPONSE_BODY_TYPE.FILE) {
        docs.push((0, swagger_1.ApiProduces)(file_enum_constant_1.ENUM_FILE_EXCEL_MIME.XLSX));
    }
    else if (options?.response?.bodyType === doc_enum_constant_1.ENUM_DOC_RESPONSE_BODY_TYPE.TEXT) {
        docs.push((0, swagger_1.ApiProduces)('text/plain'));
    }
    else {
        docs.push((0, swagger_1.ApiProduces)('application/json'));
        if (options?.response?.serialization) {
            normDoc.serialization = options?.response?.serialization;
        }
    }
    docs.push(DocDefault(normDoc));
    if (options?.request?.params) {
        docs.push(...options?.request?.params.map((param) => (0, swagger_1.ApiParam)(param)));
    }
    if (options?.request?.queries) {
        docs.push(...options?.request?.queries.map((query) => (0, swagger_1.ApiQuery)(query)));
    }
    const oneOfUnauthorized = [];
    const oneOfForbidden = [];
    const auths = [];
    if (options?.auth?.jwtRefreshToken) {
        auths.push((0, swagger_1.ApiBearerAuth)('refreshToken'));
        oneOfUnauthorized.push({
            messagePath: 'auth.error.refreshTokenUnauthorized',
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_JWT_REFRESH_TOKEN_ERROR,
        });
    }
    if (options?.auth?.jwtAccessToken) {
        auths.push((0, swagger_1.ApiBearerAuth)('accessToken'));
        oneOfUnauthorized.push({
            messagePath: 'auth.error.accessTokenUnauthorized',
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_JWT_ACCESS_TOKEN_ERROR,
        });
        oneOfForbidden.push({
            statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_PAYLOAD_TYPE_INVALID_ERROR,
            messagePath: 'role.error.typeForbidden',
        });
    }
    if (options?.auth?.apiKey) {
        auths.push((0, swagger_1.ApiSecurity)('apiKey'));
        oneOfUnauthorized.push({
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_NEEDED_ERROR,
            messagePath: 'apiKey.error.keyNeeded',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_NOT_FOUND_ERROR,
            messagePath: 'apiKey.error.notFound',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_INVALID_ERROR,
            messagePath: 'apiKey.error.invalid',
        });
    }
    const requestHeaders = [];
    if (options?.requestHeader?.userAgent) {
        oneOfForbidden.push({
            statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_INVALID_ERROR,
            messagePath: 'request.error.userAgentInvalid',
        }, {
            statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_BROWSER_INVALID_ERROR,
            messagePath: 'request.error.userAgentBrowserInvalid',
        }, {
            statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_OS_INVALID_ERROR,
            messagePath: 'request.error.userAgentOsInvalid',
        });
        requestHeaders.push({
            name: 'user-agent',
            description: 'User agent header',
            required: true,
            schema: {
                example: 'Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion',
                type: 'string',
            },
        });
    }
    if (options?.requestHeader?.timestamp) {
        oneOfForbidden.push({
            statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_TIMESTAMP_INVALID_ERROR,
            messagePath: 'request.error.timestampInvalid',
        });
        requestHeaders.push({
            name: 'x-timestamp',
            description: 'Timestamp header, in microseconds',
            required: true,
            schema: {
                example: 1662876305642,
                type: 'number',
            },
        });
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiHeader)({
        name: 'x-custom-lang',
        description: 'Custom language header',
        required: false,
        schema: {
            default: app_constant_1.APP_LANGUAGE,
            example: app_constant_1.APP_LANGUAGE,
            type: 'string',
        },
    }), (0, swagger_1.ApiHeaders)(requestHeaders), DocDefault({
        httpStatus: common_1.HttpStatus.SERVICE_UNAVAILABLE,
        messagePath: 'http.serverError.serviceUnavailable',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_SERVICE_UNAVAILABLE,
    }), DocDefault({
        httpStatus: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        messagePath: 'http.serverError.internalServerError',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
    }), DocDefault({
        httpStatus: common_1.HttpStatus.REQUEST_TIMEOUT,
        messagePath: 'http.serverError.requestTimeout',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_REQUEST_TIMEOUT,
    }), oneOfForbidden.length > 0
        ? DocOneOf(common_1.HttpStatus.FORBIDDEN, ...oneOfForbidden)
        : (0, request_skip_validation_1.Skip)(), oneOfUnauthorized.length > 0
        ? DocOneOf(common_1.HttpStatus.UNAUTHORIZED, ...oneOfUnauthorized)
        : (0, request_skip_validation_1.Skip)(), ...auths, ...docs);
}
exports.Doc = Doc;
function DocPaging(messagePath, options) {
    const docs = [];
    if (options?.request?.params) {
        docs.push(...options?.request?.params.map((param) => (0, swagger_1.ApiParam)(param)));
    }
    if (options?.request?.queries) {
        docs.push(...options?.request?.queries.map((query) => (0, swagger_1.ApiQuery)(query)));
    }
    const oneOfUnauthorized = [];
    const oneOfForbidden = [];
    const auths = [];
    if (options?.auth?.jwtRefreshToken) {
        auths.push((0, swagger_1.ApiBearerAuth)('refreshToken'));
        oneOfUnauthorized.push({
            messagePath: 'auth.error.refreshTokenUnauthorized',
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_JWT_REFRESH_TOKEN_ERROR,
        });
    }
    if (options?.auth?.jwtAccessToken) {
        auths.push((0, swagger_1.ApiBearerAuth)('accessToken'));
        oneOfUnauthorized.push({
            messagePath: 'auth.error.accessTokenUnauthorized',
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_JWT_ACCESS_TOKEN_ERROR,
        });
        oneOfForbidden.push({
            statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_PAYLOAD_TYPE_INVALID_ERROR,
            messagePath: 'role.error.typeForbidden',
        });
    }
    if (options?.auth?.apiKey) {
        auths.push((0, swagger_1.ApiSecurity)('apiKey'));
        oneOfUnauthorized.push({
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_NEEDED_ERROR,
            messagePath: 'apiKey.error.keyNeeded',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_NOT_FOUND_ERROR,
            messagePath: 'apiKey.error.notFound',
        }, {
            statusCode: api_key_status_code_constant_1.ENUM_API_KEY_STATUS_CODE_ERROR.API_KEY_INVALID_ERROR,
            messagePath: 'apiKey.error.invalid',
        });
    }
    const requestHeaders = [];
    if (options?.requestHeader?.userAgent) {
        oneOfForbidden.push({
            statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_INVALID_ERROR,
            messagePath: 'request.error.userAgentInvalid',
        }, {
            statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_BROWSER_INVALID_ERROR,
            messagePath: 'request.error.userAgentBrowserInvalid',
        }, {
            statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_OS_INVALID_ERROR,
            messagePath: 'request.error.userAgentOsInvalid',
        });
        requestHeaders.push({
            name: 'user-agent',
            description: 'User agent header',
            required: true,
            schema: {
                example: 'Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion',
                type: 'string',
            },
        });
    }
    if (options?.requestHeader?.timestamp) {
        oneOfForbidden.push({
            statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_TIMESTAMP_INVALID_ERROR,
            messagePath: 'request.error.timestampInvalid',
        });
        requestHeaders.push({
            name: 'x-timestamp',
            description: 'Timestamp header, in microseconds',
            required: true,
            schema: {
                example: 1662876305642,
                type: 'number',
            },
        });
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiConsumes)('application/json'), (0, swagger_1.ApiExtraModels)((response_paging_serialization_1.ResponsePagingSerialization)), (0, swagger_1.ApiExtraModels)(options.response.serialization), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)((response_paging_serialization_1.ResponsePagingSerialization)) },
            ],
            properties: {
                message: {
                    example: messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: options.response.statusCode ?? common_1.HttpStatus.OK,
                },
                data: {
                    type: 'array',
                    items: {
                        $ref: (0, swagger_1.getSchemaPath)(options.response.serialization),
                    },
                },
            },
        },
    }), (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        allowEmptyValue: true,
        type: 'string',
        description: 'Search will base on _availableSearch with rule contains, and case insensitive',
    }), (0, swagger_1.ApiQuery)({
        name: 'perPage',
        required: false,
        allowEmptyValue: true,
        example: 20,
        type: 'number',
        description: 'Data per page',
    }), (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        allowEmptyValue: true,
        example: 1,
        type: 'number',
        description: 'page number',
    }), (0, swagger_1.ApiQuery)({
        name: 'orderBy',
        required: false,
        allowEmptyValue: true,
        example: 'createdAt',
        type: 'string',
        description: 'Order by base on _availableOrderBy',
    }), (0, swagger_1.ApiQuery)({
        name: 'orderDirection',
        required: false,
        allowEmptyValue: true,
        example: pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC,
        enum: pagination_enum_constant_1.ENUM_PAGINATION_ORDER_DIRECTION_TYPE,
        type: 'string',
        description: 'Order direction base on _availableOrderDirection',
    }), (0, swagger_1.ApiHeader)({
        name: 'x-custom-lang',
        description: 'Custom language header',
        required: false,
        schema: {
            default: app_constant_1.APP_LANGUAGE,
            example: app_constant_1.APP_LANGUAGE,
            type: 'string',
        },
    }), (0, swagger_1.ApiHeaders)(requestHeaders), DocDefault({
        httpStatus: common_1.HttpStatus.SERVICE_UNAVAILABLE,
        messagePath: 'http.serverError.serviceUnavailable',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_SERVICE_UNAVAILABLE,
    }), DocDefault({
        httpStatus: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        messagePath: 'http.serverError.internalServerError',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
    }), DocDefault({
        httpStatus: common_1.HttpStatus.REQUEST_TIMEOUT,
        messagePath: 'http.serverError.requestTimeout',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_REQUEST_TIMEOUT,
    }), oneOfForbidden.length > 0
        ? DocOneOf(common_1.HttpStatus.FORBIDDEN, ...oneOfForbidden)
        : (0, request_skip_validation_1.Skip)(), oneOfUnauthorized.length > 0
        ? DocOneOf(common_1.HttpStatus.UNAUTHORIZED, ...oneOfUnauthorized)
        : (0, request_skip_validation_1.Skip)(), ...auths, ...docs);
}
exports.DocPaging = DocPaging;
function DocDefault(options) {
    const docs = [];
    const schema = {
        allOf: [{ $ref: (0, swagger_1.getSchemaPath)((response_default_serialization_1.ResponseDefaultSerialization)) }],
        properties: {
            message: {
                example: options.messagePath,
            },
            statusCode: {
                type: 'number',
                example: options.statusCode,
            },
        },
    };
    if (options.serialization) {
        docs.push((0, swagger_1.ApiExtraModels)(options.serialization));
        schema.properties = {
            ...schema.properties,
            data: {
                $ref: (0, swagger_1.getSchemaPath)(options.serialization),
            },
        };
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)((response_default_serialization_1.ResponseDefaultSerialization)), (0, swagger_1.ApiResponse)({
        status: options.httpStatus,
        schema,
    }), ...docs);
}
exports.DocDefault = DocDefault;
function DocOneOf(httpStatus, ...documents) {
    const docs = [];
    const oneOf = [];
    for (const doc of documents) {
        const oneOfSchema = {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)((response_default_serialization_1.ResponseDefaultSerialization)) }],
            properties: {
                message: {
                    example: doc.messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: doc.statusCode ?? common_1.HttpStatus.OK,
                },
            },
        };
        if (doc.serialization) {
            docs.push((0, swagger_1.ApiExtraModels)(doc.serialization));
            oneOfSchema.properties = {
                ...oneOfSchema.properties,
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(doc.serialization),
                },
            };
        }
        oneOf.push(oneOfSchema);
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)((response_default_serialization_1.ResponseDefaultSerialization)), (0, swagger_1.ApiResponse)({
        status: httpStatus,
        schema: {
            oneOf,
        },
    }), ...docs);
}
exports.DocOneOf = DocOneOf;
function DocAnyOf(httpStatus, ...documents) {
    const docs = [];
    const anyOf = [];
    for (const doc of documents) {
        const anyOfSchema = {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)((response_default_serialization_1.ResponseDefaultSerialization)) }],
            properties: {
                message: {
                    example: doc.messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: doc.statusCode ?? common_1.HttpStatus.OK,
                },
            },
        };
        if (doc.serialization) {
            docs.push((0, swagger_1.ApiExtraModels)(doc.serialization));
            anyOfSchema.properties = {
                ...anyOfSchema.properties,
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(doc.serialization),
                },
            };
        }
        anyOf.push(anyOfSchema);
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)((response_default_serialization_1.ResponseDefaultSerialization)), (0, swagger_1.ApiResponse)({
        status: httpStatus,
        schema: {
            anyOf,
        },
    }), ...docs);
}
exports.DocAnyOf = DocAnyOf;
function DocAllOf(httpStatus, ...documents) {
    const docs = [];
    const allOf = [];
    for (const doc of documents) {
        const allOfSchema = {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)((response_default_serialization_1.ResponseDefaultSerialization)) }],
            properties: {
                message: {
                    example: doc.messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: doc.statusCode ?? common_1.HttpStatus.OK,
                },
            },
        };
        if (doc.serialization) {
            docs.push((0, swagger_1.ApiExtraModels)(doc.serialization));
            allOfSchema.properties = {
                ...allOfSchema.properties,
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(doc.serialization),
                },
            };
        }
        allOf.push(allOfSchema);
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)((response_default_serialization_1.ResponseDefaultSerialization)), (0, swagger_1.ApiResponse)({
        status: httpStatus,
        schema: {
            allOf,
        },
    }), ...docs);
}
exports.DocAllOf = DocAllOf;
//# sourceMappingURL=doc.decorator.js.map