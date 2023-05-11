"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUM_FILE_TYPE = exports.ENUM_FILE_VIDEO_MIME = exports.ENUM_FILE_AUDIO_MIME = exports.ENUM_FILE_EXCEL_MIME = exports.ENUM_FILE_IMAGE_MIME = void 0;
var ENUM_FILE_IMAGE_MIME;
(function (ENUM_FILE_IMAGE_MIME) {
    ENUM_FILE_IMAGE_MIME["JPG"] = "image/jpg";
    ENUM_FILE_IMAGE_MIME["JPEG"] = "image/jpeg";
    ENUM_FILE_IMAGE_MIME["PNG"] = "image/png";
})(ENUM_FILE_IMAGE_MIME = exports.ENUM_FILE_IMAGE_MIME || (exports.ENUM_FILE_IMAGE_MIME = {}));
var ENUM_FILE_EXCEL_MIME;
(function (ENUM_FILE_EXCEL_MIME) {
    ENUM_FILE_EXCEL_MIME["XLS"] = "application/vnd.ms-excel";
    ENUM_FILE_EXCEL_MIME["XLSX"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    ENUM_FILE_EXCEL_MIME["CSV"] = "text/csv";
})(ENUM_FILE_EXCEL_MIME = exports.ENUM_FILE_EXCEL_MIME || (exports.ENUM_FILE_EXCEL_MIME = {}));
var ENUM_FILE_AUDIO_MIME;
(function (ENUM_FILE_AUDIO_MIME) {
    ENUM_FILE_AUDIO_MIME["MPEG"] = "audio/mpeg";
    ENUM_FILE_AUDIO_MIME["MP3"] = "audio/mp3";
    ENUM_FILE_AUDIO_MIME["MP4"] = "audio/mp4";
})(ENUM_FILE_AUDIO_MIME = exports.ENUM_FILE_AUDIO_MIME || (exports.ENUM_FILE_AUDIO_MIME = {}));
var ENUM_FILE_VIDEO_MIME;
(function (ENUM_FILE_VIDEO_MIME) {
    ENUM_FILE_VIDEO_MIME["MP4"] = "video/mp4";
    ENUM_FILE_VIDEO_MIME["APPLICATION_MP4"] = "application/mp4";
})(ENUM_FILE_VIDEO_MIME = exports.ENUM_FILE_VIDEO_MIME || (exports.ENUM_FILE_VIDEO_MIME = {}));
var ENUM_FILE_TYPE;
(function (ENUM_FILE_TYPE) {
    ENUM_FILE_TYPE["AUDIO"] = "audio";
    ENUM_FILE_TYPE["IMAGE"] = "image";
    ENUM_FILE_TYPE["EXCEL"] = "excel";
    ENUM_FILE_TYPE["VIDEO"] = "video";
})(ENUM_FILE_TYPE = exports.ENUM_FILE_TYPE || (exports.ENUM_FILE_TYPE = {}));
//# sourceMappingURL=file.enum.constant.js.map