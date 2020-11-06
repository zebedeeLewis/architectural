"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.set_err_value = exports.get_err_value = exports.set_ok_value = exports.get_ok_value = exports.is_result = exports.is_err = exports.is_ok = exports.Err = exports.Ok = void 0;
var Result_1 = require("./Result");
__createBinding(exports, Result_1, "Ok");
__createBinding(exports, Result_1, "Err");
__createBinding(exports, Result_1, "is_ok");
__createBinding(exports, Result_1, "is_err");
__createBinding(exports, Result_1, "is_result");
__createBinding(exports, Result_1, "get_ok_value");
__createBinding(exports, Result_1, "set_ok_value");
__createBinding(exports, Result_1, "get_err_value");
__createBinding(exports, Result_1, "set_err_value");
