"use strict";
exports.__esModule = true;
exports.create = exports.get_left_boundary_from = exports.get_upper_boundary_from = exports.get_right_boundary_from = exports.get_lower_boundary_from = exports.get_bottom_right_from = exports.set_bottom_right_to = exports.get_top_left_from = exports.set_top_left_to = void 0;
var I = require("immutable");
var Position = require("./Position");
function set_top_left_to(newPosition, model) {
    return model.set('topLeft', newPosition);
}
exports.set_top_left_to = set_top_left_to;
function get_top_left_from(model) {
    return model.get('topLeft', undefined);
}
exports.get_top_left_from = get_top_left_from;
function set_bottom_right_to(newPosition, model) {
    return model.set('bottomRight', newPosition);
}
exports.set_bottom_right_to = set_bottom_right_to;
function get_bottom_right_from(model) {
    return model.get('bottomRight', undefined);
}
exports.get_bottom_right_from = get_bottom_right_from;
function get_lower_boundary_from(model) {
    var bottomRight = get_bottom_right_from(model);
    return Position.get_x_from(bottomRight);
}
exports.get_lower_boundary_from = get_lower_boundary_from;
function get_right_boundary_from(model) {
    var bottomRight = get_bottom_right_from(model);
    return Position.get_y_from(bottomRight);
}
exports.get_right_boundary_from = get_right_boundary_from;
function get_upper_boundary_from(model) {
    var topLeft = get_top_left_from(model);
    return Position.get_x_from(topLeft);
}
exports.get_upper_boundary_from = get_upper_boundary_from;
function get_left_boundary_from(model) {
    var topLeft = get_top_left_from(model);
    return Position.get_y_from(topLeft);
}
exports.get_left_boundary_from = get_left_boundary_from;
exports.create = I.Record({ topLeft: Position.create({}),
    bottomRight: Position.create({})
}, 'Model');
