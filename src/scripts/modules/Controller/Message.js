"use strict";
exports.__esModule = true;
exports.Initialize = exports.is_message_of_type = exports.create_factory = void 0;
var I = require("immutable");
/**
 * Note: This function is meant to be called only once to build each
 * Message type factory.
 */
function create_factory(data) {
    return I.Record(data);
}
exports.create_factory = create_factory;
function is_message_of_type(constructor, possibleMessage) {
    var _possibleMessage = possibleMessage;
    return (I.Record.isRecord(_possibleMessage)
        && constructor(_possibleMessage.toObject()).equals(possibleMessage));
}
exports.is_message_of_type = is_message_of_type;
exports.Initialize = create_factory({ rootHtmlElement: null,
    initialMarkup: null,
    argv: undefined
});
