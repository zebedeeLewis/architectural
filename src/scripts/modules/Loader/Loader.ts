import * as I from "immutable"
import * as Result from "../Result"
import * as State from "./State"
import * as Message from "./Message"
import * as Controller from "../Controller"

import type {  RecordOf } from 'immutable'



export const UPDATE_ERROR = 'Unable to update Model'



/**
 * Represents a function to be called by the
 * update function in response a Message.
 */
export type MessageHandler =
  ( argv  : Array<any>
  , model : Model
  ) => Result.Result<Controller.Failure.Model<Interface, string>, Model>



const dummyHandler : MessageHandler =
  ( argv
  , model
  ) => (
    Result.Ok({ value : model})
  )



interface Interface extends Controller.Subject.Interface
  { state               : State.State
  , rootHtmlElement     : HTMLElement
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
export type Model = Controller.Subject.Model<Interface>



type Factory = Controller.Subject.Factory<Interface>



export const create : Factory =
  I.Record
    ( { state               : State.Unset()
      , rootHtmlElement     : undefined
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



const dummyModel = create({})



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



export const update
  : Controller.Updater<Interface, Message.Interface> =
  ( message
  , model
  ) => {

    if( Controller.Message.is_initialize(message) ) {
      const argv = Controller.Message.get_argv_from(message)
      const result = model.initializeHandler(argv, model)

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
      const argv = Controller.Message.get_argv_from(message)
      const result = model.initializedHandler(argv, model)

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
      const argv = Controller.Message.get_argv_from(message)
      const result = model.startHandler(argv, model)

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
      const argv = Controller.Message.get_argv_from(message)
      const result = model.startedHandler(argv, model)

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
      const argv = Controller.Message.get_argv_from(message)
      const result = model.stopHandler(argv, model)

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
      const argv = Controller.Message.get_argv_from(message)
      const result = model.stoppedHandler(argv, model)

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



export const init = create

