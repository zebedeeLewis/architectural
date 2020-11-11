"use strict";
exports.__esModule = true;
exports.set_markup_to = exports.get_markup_from = exports.apply_all_styles = exports.apply_style = exports.set_style_to = exports.get_style_from = exports.create = void 0;
var I = require("immutable");
var Result = require("../Result");
var ERROR_DEAD_END_SELECTOR = 'The selector provided does not point to an element in the DOM';
var ERROR_INVALID_SELECTOR_TARGET = 'The selector must point to an HTMLElement';
exports.create = I.Record({ markup: undefined,
    style: []
}, 'View');
function get_style_from(view) {
    return view.get('style', undefined);
}
exports.get_style_from = get_style_from;
function set_style_to(newStyle, view) {
    return view.set('style', newStyle);
}
exports.set_style_to = set_style_to;
function apply_style(window, document, style) {
    var possibleHtmlElement = style.selector instanceof Element
        ? style.selector
        : document.querySelector(style.selector);
    if (!(possibleHtmlElement instanceof Element)) {
        return Result.Err({ error: ERROR_DEAD_END_SELECTOR });
    }
    if (!(possibleHtmlElement instanceof HTMLElement)) {
        return Result.Err({ error: ERROR_INVALID_SELECTOR_TARGET });
    }
    var htmlElement = possibleHtmlElement;
    var styleProperties = Object.keys(style.styles);
    styleProperties.forEach(function (styleProperty) {
        return htmlElement.style[styleProperty] = style.styles[styleProperty];
    });
    return Result.Ok({ value: style });
}
exports.apply_style = apply_style;
function apply_all_styles(window, document, view) {
    var styles = get_style_from(view);
    if (!styles) {
        return [];
    }
    return styles.map(function (style) { return apply_style(window, document, style); });
}
exports.apply_all_styles = apply_all_styles;
function get_markup_from(view) {
    return view.get('markup', undefined);
}
exports.get_markup_from = get_markup_from;
function set_markup_to(newMarkup, view) {
    return view.set('markup', undefined);
}
exports.set_markup_to = set_markup_to;
