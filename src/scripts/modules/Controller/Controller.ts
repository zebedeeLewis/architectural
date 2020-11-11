import * as I from 'immutable'
import * as Subject from './Subject'
import * as View from './View'
import * as Message from './Message'
import * as Failure from './Failure'
import * as Result from '../Result'
import * as State from './State'

import type {  RecordOf, Record } from 'immutable'


/**
 * Abbreaviations:
 *   ITF - Interface
 *   MSG - Message
 */



const ERROR_NO_ROOT_ELEMENT = 'I need a root element'



const dummyFactory = I.Record({})



/**
 * Interface for a function that knows how to update the model
 * of the given type.
 */
export type Updater
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  > =
  ( message : Message.Model<MSG_ITF>
  , model   : Subject.Model<ITF>
  ) => Subject.Model<ITF>



/**
 * Render a view of a given model
 */
export type ViewRenderer
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  > =
  ( model      : Subject.Model<ITF>
  , controller : Model<ITF, MSG_ITF>
  ) => View.Model



export interface Interface
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  { model     : Subject.Model<ITF>
  , updater   : Updater<ITF, MSG_ITF>
  , window?   : Window
  , document? : Document
  , view      : ViewRenderer<ITF, MSG_ITF>
  }



/**
 * The Controller is a command (i.e. Message) reciever and dispatcher
 */
export type Model
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  > = RecordOf< Interface<ITF, MSG_ITF> >



type Factory =
  ( data : Partial< Interface<any, any> >
  ) => Model<any, any>



export const create : Factory =
  I.Record
    ( { model    : dummyFactory({}) as any
      , updater  : (message, model) => model
      , window   : undefined
      , document : undefined
      , view     : (model, controller) => View.create({})
      }
    , 'Controller'
    )



export function get_view_from
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( controller : Model<ITF, MSG_ITF>
  ) : ViewRenderer<ITF, MSG_ITF> {
    return controller.get('view', undefined)
  }



export function set_view_to
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( viewRenderer : ViewRenderer<ITF, MSG_ITF>
  , controller   : Model<ITF, MSG_ITF>
  ) : Model<ITF, MSG_ITF> {
    return controller.set('view', viewRenderer)
  }



export function get_document_from
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( controller : Model<ITF, MSG_ITF>
  ) : Document {
    return controller.get('document', undefined)
  }



export function set_document_to
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( newDocument : Document
  , controller  : Model<ITF, MSG_ITF>
  ) : Model<ITF, MSG_ITF> {
    return controller.set('document', newDocument)
  }



export function get_window_from
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( controller : Model<ITF, MSG_ITF>
  ) : Window {
    return controller.get('window', undefined)
  }



export function set_window_to
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( newWindow  : Window
  , controller : Model<ITF, MSG_ITF>
  ) : Model<ITF, MSG_ITF> {
    return controller.set('window', newWindow)
  }



export function get_model_from
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( controller : Model<ITF, MSG_ITF>
  ) : Subject.Model<ITF> {
    return controller.get('model', undefined)
  }



export function set_model_to
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( newModel   : Subject.Model<ITF>
  , controller : Model<ITF, MSG_ITF>
  ) : Model<ITF, MSG_ITF> {
    return controller.set('model', newModel)
  }



export function get_updater_from
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( controller : Model<ITF, MSG_ITF>
  ) : Updater<ITF, MSG_ITF> {
    return controller.get('updater', undefined)
  }



export function set_updater_to
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( newUpdater : Updater<ITF, MSG_ITF>
  , controller : Model<ITF, MSG_ITF>
  ) : Model<ITF, MSG_ITF> {
    return controller.set('updater', newUpdater)
  }



export function render_model
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( renderer   : ViewRenderer<ITF, MSG_ITF>
  , controller : Model<ITF, MSG_ITF>
  , model      : Subject.Model<ITF>
  ) : Result.Result< Failure.Model<ITF, string>, Subject.Model<ITF> > {
    const state = Subject.get_state_from(model)


    // We won't try to render a model that is not ready
    if( State.is_unset(state) || State.is_initialized(state) ) {
      return Result.Ok({value : model})
    }


    const rootHtmlElement = Subject.get_root_html_element_from(model)


    if( !rootHtmlElement ) {
      const failure =
        Failure.create
          ( { error : ERROR_NO_ROOT_ELEMENT
            , model : model
            }
          )

      return Result.Err({error : failure})
    }


    const document = get_document_from(controller)
    const window = get_window_from(controller)
    const view = renderer(model, controller)


    const markup
      =  View.get_markup_from(view)
      || rootHtmlElement.innerHTML


    window.requestAnimationFrame
      ( ( timeStamp ) => {
          View.apply_all_styles(window, document, view)
          rootHtmlElement.innerHTML = markup
        }
      )


    return Result.Ok( {value : model} )
  }



export function dispatch_message
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( message    : Message.Model<MSG_ITF>
  , controller : Model<ITF, MSG_ITF>
  ) : Model<ITF, MSG_ITF> {
    const update_model = get_updater_from(controller)
    const view_model = get_view_from(controller)


    const renderResult =
      render_model
        ( view_model
        , controller
        , update_model
            ( message
            , get_model_from(controller)
            )
        )


    if( Result.is_err(renderResult) ) {
      return controller
    }


    const updatedModel = Result.get_ok_value(renderResult)


    return (
      set_model_to
        ( updatedModel
        , controller
        )
    )
  }

