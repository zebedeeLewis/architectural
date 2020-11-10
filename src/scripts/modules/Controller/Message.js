"use strict";
exports.__esModule = true;
exports.is_common = exports.is_initialize = exports.set_root_html_element_to = exports.get_root_html_element_from = exports.Initialize = exports.is_message_of_type = exports.create_factory = void 0;
var I = require("immutable");
/**
 * Note: This function is meant to be called only once to build each
 * Message type factory.
 */
function create_factory(data, typeName) {
    return I.Record(data, typeName);
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
}, 'Initialize');
function get_root_html_element_from(model) {
    return model.get('rootHtmlElement', undefined);
}
exports.get_root_html_element_from = get_root_html_element_from;
function set_root_html_element_to(newElement, model) {
    return model.set('rootHtmlElement', newElement);
}
exports.set_root_html_element_to = set_root_html_element_to;
function is_initialize(possibleMessage) {
    return (is_message_of_type(exports.Initialize, possibleMessage));
}
exports.is_initialize = is_initialize;
function is_common(possibleMessage) {
    return (is_initialize(possibleMessage));
}
exports.is_common = is_common;
