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
export type ModelViewer
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  > =
  ( window           : Window
  , dispatch_message : MessageDispatcher<ITF, MSG_ITF>
  , model            : Subject.Model<ITF>
  ) => View.Model



export type MessageDispatcher
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  > = 
  (message : Message.Model<MSG_ITF>
  ) => Result.Result< Failure.Model<ITF, string>, Subject.Model<ITF> >



export function render_model
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( window            : Window
  , view_model        : ModelViewer<ITF, MSG_ITF>
  , messageDispatcher : MessageDispatcher<ITF, MSG_ITF>
  , model             : Subject.Model<ITF>
  ) : Result.Result< Failure.Model<ITF, string>, Subject.Model<ITF> > {
    const state = Subject.get_state_from(model)


    if( State.is_unset(state) ) {
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


    const view = view_model(window, messageDispatcher, model)


    const markup = View.get_markup_from(view)


    const document = window.document


    window.requestAnimationFrame
      ( ( timeStamp ) => {
          View.apply_all_styles(window, document, view)

          if( markup ) {
            rootHtmlElement.innerHTML = markup
          }
        }
      )


    return Result.Ok( {value : model} )
  }



export function start
  < ITF extends Subject.Interface
  , MSG_ITF extends Message.Interface
  >
  ( window       : Window
  , initModel    : Subject.Model<ITF>
  , update_model : Updater<ITF, MSG_ITF>
  , modelViewer  : ModelViewer<ITF, MSG_ITF>
  ) : MessageDispatcher<ITF, MSG_ITF> {
    const modelWrapper = { appModel : initModel }


    const messageDispatcher : MessageDispatcher<ITF, MSG_ITF> =
      ( message ) => {
        // TODO: setup an update queue so that updates occure in
        // the order the user expects.
        modelWrapper.appModel =
          update_model
            ( message
            , modelWrapper.appModel
            )

        return (
          render_model
            ( window
            , modelViewer
            , messageDispatcher
            , modelWrapper.appModel
            )
        )
      }


    return  messageDispatcher
  }



