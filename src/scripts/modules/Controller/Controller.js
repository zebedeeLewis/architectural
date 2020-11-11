"use strict";
exports.__esModule = true;
exports.dispatch_message = exports.render_model = exports.set_updater_to = exports.get_updater_from = exports.set_model_to = exports.get_model_from = exports.set_window_to = exports.get_window_from = exports.set_document_to = exports.get_document_from = exports.set_view_to = exports.get_view_from = exports.create = void 0;
var I = require("immutable");
var Subject = require("./Subject");
var View = require("./View");
var Failure = require("./Failure");
var Result = require("../Result");
var State = require("./State");
/**
 * Abbreaviations:
 *   ITF - Interface
 *   MSG - Message
 */
var ERROR_NO_ROOT_ELEMENT = 'I need a root element';
var dummyFactory = I.Record({});
exports.create = I.Record({ model: dummyFactory({}),
    updater: function (message, model) { return model; }, window: undefined,
    document: undefined, view: function (model, controller) { return View.create({}); }
}, 'Controller');
function get_view_from(controller) {
    return controller.get('view', undefined);
}
exports.get_view_from = get_view_from;
function set_view_to(viewRenderer, controller) {
    return controller.set('view', viewRenderer);
}
exports.set_view_to = set_view_to;
function get_document_from(controller) {
    return controller.get('document', undefined);
}
exports.get_document_from = get_document_from;
function set_document_to(newDocument, controller) {
    return controller.set('document', newDocument);
}
exports.set_document_to = set_document_to;
function get_window_from(controller) {
    return controller.get('window', undefined);
}
exports.get_window_from = get_window_from;
function set_window_to(newWindow, controller) {
    return controller.set('window', newWindow);
}
exports.set_window_to = set_window_to;
function get_model_from(controller) {
    return controller.get('model', undefined);
}
exports.get_model_from = get_model_from;
function set_model_to(newModel, controller) {
    return controller.set('model', newModel);
}
exports.set_model_to = set_model_to;
function get_updater_from(controller) {
    return controller.get('updater', undefined);
}
exports.get_updater_from = get_updater_from;
function set_updater_to(newUpdater, controller) {
    return controller.set('updater', newUpdater);
}
exports.set_updater_to = set_updater_to;
function render_model(renderer, controller, model) {
    var state = Subject.get_state_from(model);
    // We won't try to render a model that is not ready
    if (State.is_unset(state) || State.is_initialized(state)) {
        return Result.Ok({ value: model });
    }
    var rootHtmlElement = Subject.get_root_html_element_from(model);
    if (!rootHtmlElement) {
        var failure = Failure.create({ error: ERROR_NO_ROOT_ELEMENT,
            model: model
        });
        return Result.Err({ error: failure });
    }
    var document = get_document_from(controller);
    var window = get_window_from(controller);
    var view = renderer(model, controller);
    var markup = View.get_markup_from(view)
        || rootHtmlElement.innerHTML;
    window.requestAnimationFrame(function (timeStamp) {
        View.apply_all_styles(window, document, view);
        rootHtmlElement.innerHTML = markup;
    });
    return Result.Ok({ value: model });
}
exports.render_model = render_model;
function dispatch_message(message, controller) {
    var update_model = get_updater_from(controller);
    var view_model = get_view_from(controller);
    var renderResult = render_model(view_model, controller, update_model(message, get_model_from(controller)));
    if (Result.is_err(renderResult)) {
        return controller;
    }
    var updatedModel = Result.get_ok_value(renderResult);
    return (set_model_to(updatedModel, controller));
}
exports.dispatch_message = dispatch_message;
