"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.dispatch_message = exports.set_updater_to = exports.get_updater_from = exports.set_model_to = exports.get_model_from = exports.set_window_to = exports.get_window_from = exports.set_document_to = exports.get_document_from = exports.set_view_to = exports.get_view_from = exports.create = exports.View = exports.Subject = exports.State = exports.Failure = exports.Message = void 0;
exports.Message = require("./Message");
exports.Failure = require("./Failure");
exports.State = require("./State");
exports.Subject = require("./Subject");
exports.View = require("./View");
var Controller_1 = require("./Controller");
__createBinding(exports, Controller_1, "create");
__createBinding(exports, Controller_1, "get_view_from");
__createBinding(exports, Controller_1, "set_view_to");
__createBinding(exports, Controller_1, "get_document_from");
__createBinding(exports, Controller_1, "set_document_to");
__createBinding(exports, Controller_1, "get_window_from");
__createBinding(exports, Controller_1, "set_window_to");
__createBinding(exports, Controller_1, "get_model_from");
__createBinding(exports, Controller_1, "set_model_to");
__createBinding(exports, Controller_1, "get_updater_from");
__createBinding(exports, Controller_1, "set_updater_to");
__createBinding(exports, Controller_1, "dispatch_message");
