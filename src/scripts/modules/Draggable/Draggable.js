"use strict";
exports.__esModule = true;
exports.view = exports.update = exports.get_active_axis_from = exports.set_active_axis_to = exports.get_position_from = exports.set_position_to = exports.get_boundary_box_from = exports.set_boundary_box_to = exports.init = exports.create = exports.UPDATE_ERROR = void 0;
var State = require("./State");
var Message = require("./Message");
var Controller = require("../Controller");
var I = require("immutable");
var Position = require("./Position");
var Axis = require("./Axis");
var BoundaryBox = require("./BoundaryBox");
var Utils = require("./Utils");
exports.UPDATE_ERROR = 'Unable to update Model';
exports.create = I.Record({ state: State.Unset,
    rootHtmlElement: undefined,
    activeAxis: Axis.X,
    boundaryBox: BoundaryBox.create({}),
    position: Position.create({})
}, 'Model');
exports.init = exports.create;
function set_boundary_box_to(newBoundaryBox, model) {
    return model.set('boundaryBox', newBoundaryBox);
}
exports.set_boundary_box_to = set_boundary_box_to;
function get_boundary_box_from(model) {
    return model.get('boundaryBox', undefined);
}
exports.get_boundary_box_from = get_boundary_box_from;
function set_position_to(newPosition, model) {
    return model.set('position', newPosition);
}
exports.set_position_to = set_position_to;
function get_position_from(model) {
    return model.get('position', undefined);
}
exports.get_position_from = get_position_from;
function set_active_axis_to(newAxis, model) {
    return model.set('activeAxis', newAxis);
}
exports.set_active_axis_to = set_active_axis_to;
function get_active_axis_from(model) {
    return model.get('activeAxis', undefined);
}
exports.get_active_axis_from = get_active_axis_from;
/* TODO!!! */
function handle_initialize_message(message, model) {
    // set boundaryBox from rootHtmlElement parent
    return (Controller.Subject.set_state_to(State.Initializing, model));
}
function handle_move_to_message(message, model) {
    var state = Controller.Subject.get_state_from(model);
    if (!State.is_raised(state)) {
        return model;
    }
    var boundaryBox = get_boundary_box_from(model);
    var activeAxis = get_active_axis_from(model);
    var proposedPosition = Message.get_proposed_position_from(message);
    var finalPosition = Axis.is_x(activeAxis)
        ? Utils.reset_x_position_within_boundary(proposedPosition, boundaryBox) :
        Axis.is_y(activeAxis)
            ? Utils.reset_y_position_within_boundary(proposedPosition, boundaryBox)
            : Utils.reset_position_within_boundary(proposedPosition, boundaryBox);
    return (set_position_to(finalPosition, Controller.Subject.set_state_to(State.Moving, model)));
}
exports.update = function (message, model) {
    if (Controller.Message.is_initialize(message)) {
        return handle_initialize_message(message, model);
    }
    else if (Message.is_drop(message)) {
        return Controller.Subject.set_state_to(State.Resting, model);
    }
    else if (Message.is_lift(message)) {
        return Controller.Subject.set_state_to(State.Raised, model);
    }
    else if (Message.is_move_to(message)) {
        return handle_move_to_message(message, model);
    }
    else {
        return model;
    }
};
exports.view = function (model, controller) {
    var state = Controller.Subject.get_state_from(model);
    if (!State.is_moving(state)) {
        return Controller.View.create({});
    }
    var position = get_position_from(model);
    var xValue = Position.get_x_from(position);
    var yValue = Position.get_y_from(position);
    var rootHtmlElement = Controller.Subject.get_root_html_element_from(model);
    var style = [{ selector: rootHtmlElement, styles: { transform: "translate(" + xValue + "px, " + yValue + "px)"
            }
        }
    ];
    Controller.dispatch_message(Message.Lift({}), controller);
    return Controller.View.create({ style: style });
};
