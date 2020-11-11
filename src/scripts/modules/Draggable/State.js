"use strict";
exports.__esModule = true;
exports.is_state = exports.is_moving = exports.is_raised = exports.is_resting = exports.is_initializing = exports.is_unset = exports.Moving = exports.Raised = exports.Resting = exports.Initializing = exports.Unset = void 0;
exports.Unset = 'Unset';
exports.Initializing = 'Initializing';
exports.Resting = 'Resting';
exports.Raised = 'Raised';
exports.Moving = 'Moving';
function is_unset(possibleState) {
    return possibleState === exports.Unset;
}
exports.is_unset = is_unset;
function is_initializing(possibleState) {
    return possibleState === exports.Initializing;
}
exports.is_initializing = is_initializing;
function is_resting(possibleState) {
    return possibleState === exports.Resting;
}
exports.is_resting = is_resting;
function is_raised(possibleState) {
    return possibleState === exports.Raised;
}
exports.is_raised = is_raised;
function is_moving(possibleState) {
    return possibleState === exports.Moving;
}
exports.is_moving = is_moving;
function is_state(possibleState) {
    return (is_unset(possibleState)
        || is_initializing(possibleState)
        || is_resting(possibleState)
        || is_raised(possibleState)
        || is_moving(possibleState));
}
exports.is_state = is_state;
