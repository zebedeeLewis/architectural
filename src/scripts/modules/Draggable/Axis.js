"use strict";
exports.__esModule = true;
exports.is_axis = exports.is_both = exports.is_y = exports.is_x = exports.Both = exports.Y = exports.X = void 0;
exports.X = 'X';
exports.Y = 'Y';
exports.Both = 'Both';
function is_x(possibleX) {
    return possibleX === exports.X;
}
exports.is_x = is_x;
function is_y(possibleY) {
    return possibleY === exports.Y;
}
exports.is_y = is_y;
function is_both(possibleBoth) {
    return possibleBoth === exports.Both;
}
exports.is_both = is_both;
function is_axis(possibleAxis) {
    var _possibleAxis = possibleAxis;
    return (is_x(possibleAxis)
        || is_y(possibleAxis)
        || is_both(possibleAxis));
}
exports.is_axis = is_axis;
