"use strict";
exports.__esModule = true;
exports.get_root_html_element_from = exports.set_root_html_element_to = exports.get_state_from = exports.set_state_to = void 0;
function set_state_to(newState, model) {
    return model.set('state', newState);
}
exports.set_state_to = set_state_to;
function get_state_from(model) {
    return model.get('state', undefined);
}
exports.get_state_from = get_state_from;
function set_root_html_element_to(newHTMLElement, model) {
    return model.set('rootHtmlElement', newHTMLElement);
}
exports.set_root_html_element_to = set_root_html_element_to;
function get_root_html_element_from(model) {
    return model.get('rootHtmlElement', undefined);
}
exports.get_root_html_element_from = get_root_html_element_from;
