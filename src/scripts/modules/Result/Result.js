"use strict";
exports.__esModule = true;
exports.set_ok_value = exports.get_ok_value = exports.is_ok = exports.Ok = exports.set_err_value = exports.get_err_value = exports.is_err = exports.Err = exports.is_result = void 0;
var I = require("immutable");
/** Produce true if the given value is a valid Result<E|T> */
function is_result(possibleResult) {
    return is_ok(possibleResult) || is_err(possibleResult);
}
exports.is_result = is_result;
exports.Err = I.Record({ error: 'initial' }, 'Err');
/** Produce true if the given value is a Result.Err<E> */
function is_err(result) {
    var _result = result;
    return (_result.equals(exports.Err(_result.toObject())));
}
exports.is_err = is_err;
function get_err_value(result) {
    return result.get('error', undefined);
}
exports.get_err_value = get_err_value;
function set_err_value(error, result) {
    return result.set('error', error);
}
exports.set_err_value = set_err_value;
exports.Ok = I.Record({ value: 'initial' }, 'Ok');
/** Produce true if the given value is a Result.Ok<T> */
function is_ok(result) {
    var _result = result;
    return _result.equals(exports.Ok(_result.toObject()));
}
exports.is_ok = is_ok;
function get_ok_value(result) {
    return result.get('value', undefined);
}
exports.get_ok_value = get_ok_value;
function set_ok_value(value, result) {
    return result.set('value', value);
}
exports.set_ok_value = set_ok_value;
