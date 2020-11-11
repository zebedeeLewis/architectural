"use strict";
exports.__esModule = true;
exports.is_message = exports.get_proposed_position_from = exports.is_move_to = exports.MoveTo = exports.is_lift = exports.Lift = exports.is_drop = exports.Drop = void 0;
var Controller = require("../Controller");
var Position = require("./Position");
exports.Drop = Controller.Message.create_factory({ argv: [] }, 'Drop');
function is_drop(possibleMessage) {
    return Controller.Message.is_message_of_type(exports.Drop, possibleMessage);
}
exports.is_drop = is_drop;
exports.Lift = Controller.Message.create_factory({ argv: [] }, 'Lift');
function is_lift(possibleMessage) {
    return Controller.Message.is_message_of_type(exports.Lift, possibleMessage);
}
exports.is_lift = is_lift;
exports.MoveTo = Controller.Message.create_factory({ proposedPosition: Position.create({}),
    argv: []
}, 'MoveTo');
function is_move_to(possibleMessage) {
    return (Controller.Message.is_message_of_type(exports.MoveTo, possibleMessage));
}
exports.is_move_to = is_move_to;
function get_proposed_position_from(moveTo) {
    return moveTo.get('proposedPosition', undefined);
}
exports.get_proposed_position_from = get_proposed_position_from;
function is_message(possibleMessage) {
    return (Controller.Message.is_common(possibleMessage)
        || is_lift(possibleMessage)
        || is_drop(possibleMessage)
        || is_move_to(possibleMessage));
}
exports.is_message = is_message;
