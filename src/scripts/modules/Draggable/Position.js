"use strict";
exports.__esModule = true;
exports.is_position = exports.create = exports.get_y_from = exports.set_y_to = exports.get_x_from = exports.set_x_to = void 0;
var I = require("immutable");
function set_x_to(newX, model) {
    return model.set('x', newX);
}
exports.set_x_to = set_x_to;
function get_x_from(model) {
    return model.get('x', undefined);
}
exports.get_x_from = get_x_from;
function set_y_to(newY, model) {
    return model.set('y', newY);
}
exports.set_y_to = set_y_to;
function get_y_from(model) {
    return model.get('y', undefined);
}
exports.get_y_from = get_y_from;
exports.create = I.Record({ x: 0,
    y: 0
}, 'Model');
function is_position(possiblePosition) {
    var _possiblePosition = possiblePosition;
    return (I.Record.isRecord(_possiblePosition)
        && exports.create(_possiblePosition.toObject()).equals(possiblePosition));
}
exports.is_position = is_position;
