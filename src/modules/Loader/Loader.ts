
import * as Result from "../Result"
import * as State from "./State"
import * as Message from "./Message"
import * as Controller from "../Controller"
import * as I from "immutable"

import type {  RecordOf } from 'immutable'


export const UPDATE_ERROR = 'Unable to update Model'



/**
 * Represents a function to be called by the
 * update_model function in response a Message.
 */
export type MessageHandler =
  ( argv  : Array<any>
  , model : Model
  ) => Result.Result<Controller.Failure<Model, string>, Model>



const dummyHandler : MessageHandler =
  ( argv
  , model
  ) => (
    Result.Ok({ value : model})
  )



interface ModelInterface
  { state               : State.State
  , htmlElementSelector : string
  , initializeHandler   : MessageHandler
  , initializedHandler  : MessageHandler
  , startHandler        : MessageHandler
  , startedHandler      : MessageHandler
  , stopHandler         : MessageHandler
  , stoppedHandler      : MessageHandler
  }



/**
 * Represents a snapshot of the Loader at a given point. The Loader
 * Model provides a context for the interpretation of the messages
 * in the Message module and the states in the State module.
 */
export type Model = RecordOf<ModelInterface>



type ModelFactory =
  ( data : Partial<ModelInterface> ) => Model



export const Model : ModelFactory =
  I.Record
    ( { state               : State.Unset()
      , htmlElementSelector : 'selector' 
      , initializeHandler   : dummyHandler
      , initializedHandler  : dummyHandler 
      , startHandler        : dummyHandler
      , startedHandler      : dummyHandler 
      , stopHandler         : dummyHandler 
      , stoppedHandler      : dummyHandler 
      }
    , 'Model'
    )



const dummyModel = Model({})



export function set_state_to
  ( newState : State.State
  , model    : Model
  ) : Model {
    return I.update(model, 'state', () => newState)
  }



export function get_state_from
  ( model    : Model
  ) : State.State {
    return model.get('state', undefined)
  }



export const update_model : Controller.Updater<Model, Message.Message> =
  ( message
  , model
  ) => {

    if( Message.is_initialize(message) ) {
      const result = model.initializeHandler(message.argv, model)

      if( Result.is_ok(result) ) {
        return (
          set_state_to
            ( State.Initializing()
            , Result.get_ok_value(result)
            )
        )
      }

      return model


    } else if( Message.is_initialized(message) ) {
      const result = model.initializedHandler(message.argv, model)

      if( Result.is_ok(result) ) {
        return (
          set_state_to
            ( State.InitializedState()
            , Result.get_ok_value(result)
            )
        )
      }

      return model


    } else if( Message.is_start(message) ) {
      const result = model.startHandler(message.argv, model)

      if( Result.is_ok(result) ) {
        return (
          set_state_to
            ( State.Starting()
            , Result.get_ok_value(result)
            )
        )
      }

      return model


    } else if( Message.is_started(message) ) {
      const result = model.startedHandler(message.argv, model)

      if( Result.is_ok(result) ) {
        return (
          set_state_to
            ( State.Running()
            , Result.get_ok_value(result)
            )
        )
      }

      return model


    } else if( Message.is_stop(message) ) {
      const result = model.stopHandler(message.argv, model)

      if( Result.is_ok(result) ) {
        return (
          set_state_to
            ( State.Stopping()
            , Result.get_ok_value(result)
            )
        )
      }

      return model


    } else if( Message.is_stopped(message) ) {
      const result = model.stoppedHandler(message.argv, model)

      if( Result.is_ok(result) ) {
        return (
          set_state_to
            ( State.Finished()
            , Result.get_ok_value(result)
            )
        )
      }

      return model


    } else {
      return model
    }

  }



export function init_model
  ( htmlElementSelector  : string
  , initializeHandler    : MessageHandler
  , initializedHandler   : MessageHandler
  , startHandler         : MessageHandler
  , startedHandler       : MessageHandler
  , stopHandler          : MessageHandler
  , stoppedHandler       : MessageHandler
  ) : Model {
    return (
      Model
        ( { state : State.Unset()
          , htmlElementSelector
          , initializeHandler
          , initializedHandler
          , startHandler
          , startedHandler
          , stopHandler
          , stoppedHandler
          }
        )
    )
  }


