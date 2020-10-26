
import * as I from "immutable"

import type {  RecordOf, Record } from 'immutable'



interface FailureInterface<Model, Error>
  { error  : Error
  , model  : Model
  }



/** Provides information about a failed model update operation. */
export type Failure<Model, Error> =
  RecordOf< FailureInterface<Model, Error> >



type FailureFactory =
  ( data : Partial< FailureInterface<any, any> > ) => Failure<any, any>



export const Failure : FailureFactory =
  I.Record
    ( { error : 'initial'
      , model : 'tempModel'
      }
    , 'Failure'
    )



/**
 * Interface for a function that knows how to update the model
 * of the given type.
 */
export type Updater<Model, Message> =
  ( message : Message, model : Model ) => Model



export interface MessageInterface { argv : Array<any> }



interface ControllerInterface<Model, Message>
  { model   : Model
  , updater : Updater<Model, Message>
  }



/**
 * The Controller is a command (i.e. Message) reciever and dispatcher
 */
export type Controller<Model, Message> =
  RecordOf< ControllerInterface<Model, Message> >



type ControllerFactory =
  ( data : Partial< ControllerInterface<any, any> >
  ) => Controller<any, any>



export const Controller : ControllerFactory =
  I.Record
    ( { model    : 'tempModel'
      , updater  : (message, model) => model
      }
    , 'Controller'
    )



export function get_model<Model, Message>
  ( controller : Controller<Model, Message>
  ) : Model {
    return controller.get('model', undefined)
  }



export function set_model<Model, Message>
  ( newModel   : Model
  , controller : Controller<Model, Message>
  ) : Controller<Model, Message> {
    return controller.set('model', newModel)
  }



export function get_updater<Model, Message>
  ( controller : Controller<Model, Message>
  ) : Updater<Model, Message> {
    return controller.get('updater', undefined)
  }



export function set_updater<Model, Message>
  ( newUpdater : Updater<Model, Message>
  , controller : Controller<Model, Message>
  ) : Controller<Model, Message> {
    return controller.set('updater', newUpdater)
  }



export function dispatch_message<Model, Message>
  ( message    : Message
  , controller : Controller<Model, Message>
  ) : Controller<Model, Message> {
    const update_model = get_updater(controller)

    return (
      set_model
        ( update_model
            ( message
            , get_model(controller)
            )
        , controller
        )
    )
  }



