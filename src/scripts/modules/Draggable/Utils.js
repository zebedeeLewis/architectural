"use strict";
exports.__esModule = true;
exports.reset_position_within_boundary = exports.reset_x_position_within_boundary = exports.reset_y_position_within_boundary = exports.is_position_within_boundary = exports.is_position_past_left_boundary = exports.is_position_past_upper_boundary = exports.is_position_past_right_boundary = exports.is_position_past_lower_boundary = void 0;
var Position = require("./Position");
var BoundaryBox = require("./BoundaryBox");
function is_position_past_lower_boundary(position, boundaryBox) {
    var lowerBoundary = BoundaryBox.get_lower_boundary_from(boundaryBox);
    var xPosition = Position.get_x_from(position);
    return xPosition < lowerBoundary;
}
exports.is_position_past_lower_boundary = is_position_past_lower_boundary;
function is_position_past_right_boundary(position, boundaryBox) {
    var rightBoundary = BoundaryBox.get_right_boundary_from(boundaryBox);
    var yPosition = Position.get_y_from(position);
    return yPosition > rightBoundary;
}
exports.is_position_past_right_boundary = is_position_past_right_boundary;
function is_position_past_upper_boundary(position, boundaryBox) {
    var upperBoundary = BoundaryBox.get_upper_boundary_from(boundaryBox);
    var xPosition = Position.get_x_from(position);
    return xPosition > upperBoundary;
}
exports.is_position_past_upper_boundary = is_position_past_upper_boundary;
function is_position_past_left_boundary(position, boundaryBox) {
    var leftBoundary = BoundaryBox.get_left_boundary_from(boundaryBox);
    var yPosition = Position.get_y_from(position);
    return yPosition > leftBoundary;
}
exports.is_position_past_left_boundary = is_position_past_left_boundary;
function is_position_within_boundary(position, boundaryBox) {
    return (!is_position_past_lower_boundary(position, boundaryBox)
        && !is_position_past_right_boundary(position, boundaryBox)
        && !is_position_past_upper_boundary(position, boundaryBox)
        && !is_position_past_left_boundary(position, boundaryBox));
}
exports.is_position_within_boundary = is_position_within_boundary;
function reset_y_position_within_boundary(position, boundaryBox) {
    return (is_position_past_upper_boundary(position, boundaryBox)
        ? Position.set_y_to(BoundaryBox.get_upper_boundary_from(boundaryBox), position) :
        is_position_past_lower_boundary(position, boundaryBox)
            ? Position.set_y_to(BoundaryBox.get_lower_boundary_from(boundaryBox), position)
            : position);
}
exports.reset_y_position_within_boundary = reset_y_position_within_boundary;
function reset_x_position_within_boundary(position, boundaryBox) {
    return (is_position_past_left_boundary(position, boundaryBox)
        ? Position.set_x_to(BoundaryBox.get_left_boundary_from(boundaryBox), position) :
        is_position_past_right_boundary(position, boundaryBox)
            ? Position.set_y_to(BoundaryBox.get_right_boundary_from(boundaryBox), position)
            : position);
}
exports.reset_x_position_within_boundary = reset_x_position_within_boundary;
function reset_position_within_boundary(position, boundaryBox) {
    return (reset_y_position_within_boundary(reset_x_position_within_boundary(position, boundaryBox), boundaryBox));
}
exports.reset_position_within_boundary = reset_position_within_boundary;
