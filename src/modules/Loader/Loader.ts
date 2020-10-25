
import * as Result from "../Result"
import * as State from "./State"
import * as Message from "./Message"
import * as I from "immutable"

import type {  RecordOf, Record } from 'immutable'



export const UPDATE_ERROR = 'Unable to update Model'



/**
 * Represents a function to be called by the
 * update_model_according_to_message function in response a Message.
 */
export type MessageHandler =
  (argv : Array<any>, model : Model) => Result.Result<Failure, Model>



const dummyHandler : MessageHandler =
  ( argv
  , model
  ) => (
    Result.Ok(model)
  )



interface ModelInterface
  { state?               : State.State
  , htmlElementSelector? : string
  , initializeHandler?   : MessageHandler
  , initializedHandler?  : MessageHandler
  , startHandler?        : MessageHandler
  , startedHandler?      : MessageHandler
  , stopHandler?         : MessageHandler
  , stoppedHandler?      : MessageHandler
  }



/**
 * Represents a snapshot of the Loader at a given point. The Loader
 * Model provides a context for the interpretation of the messages
 * in the Message module and the states in the State module.
 */
export type Model = RecordOf<ModelInterface>



export type ModelFactory =
  ( data : ModelInterface ) => Model



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



interface FailureInterface
  { error  : any
  , model  : Model
  }



/** Provides information about a failed loader operation. */
type Failure = RecordOf<FailureInterface>



export const FailureFactory : Record.Factory<FailureInterface> =
  I.Record
    ( { error : 'initial'
      , model : dummyModel
      }
    , 'Failure'
    )



export function Failure
  ( error : any
  , model : Model
  ) : Failure {
    return FailureFactory( {error, model} )
  }



export function set_model_state_or_forward_failure
  ( newState : State.State
  , result   : Result.Result<Failure, Model>
  ) : Result.Result<Failure, Model>  {

    if( Result.is_ok(result) ) {
      return Result.Ok(
        set_state_to
          ( newState
          , result.get('value', undefined)
          )
      )
    } else {
      return result
    }

  }



export function update_model_according_to_message
  ( message : Message.Message
  , model   : Model
  ) : Result.Result<Failure, Model> {

    if( Message.is_initialize(message) ) {
      return (
        set_model_state_or_forward_failure
          ( State.Initializing()
          , model.initializeHandler(message.argv, model)
          )
      )
    } else if( Message.is_initialized(message) ) {
      return (
        set_model_state_or_forward_failure
          ( State.InitializedState()
          , model.initializedHandler(message.argv, model)
          )
      )
    } else if( Message.is_start(message) ) {
      return (
        set_model_state_or_forward_failure
          ( State.Starting()
          , model.startHandler(message.argv, model)
          )
      )
    } else if( Message.is_started(message) ) {
      return (
        set_model_state_or_forward_failure
          ( State.Running()
          , model.startedHandler(message.argv, model)
          )
      )
    } else if( Message.is_stop(message) ) {
      return (
        set_model_state_or_forward_failure
          ( State.Stopping()
          , model.stopHandler(message.argv, model)
          )
      )
    } else if( Message.is_stopped(message) ) {
      return (
        set_model_state_or_forward_failure
          ( State.Finished()
          , model.stoppedHandler(message.argv, model)
          )
      )
    } else {
      return Result.Err( Failure(UPDATE_ERROR, model) )
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


