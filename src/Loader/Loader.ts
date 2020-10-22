
import * as Result from "../Result";
import * as I from "immutable";

import type {  RecordOf, Record } from 'immutable';



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



/** Describes the current state of a Loader at a given point. */
export type State
  = 'Unset'
  | 'Initializing'
  | 'InitializedState'
  | 'Starting'
  | 'Running'
  | 'Stopping'
  | 'Finished'



export function Unset
  () : State {
    return 'Unset'
  }



export function Initializing
  () : State {
    return 'Initializing'
  }



export function InitializedState
  () : State {
    return 'InitializedState'
  }



export function Starting
  () : State {
    return 'Starting'
  }



export function Running
  () : State {
    return 'Running'
  }



export function Stopping
  () : State {
    return 'Stopping'
  }



export function Finished
  () : State {
    return 'Finished'
  }



export function is_unset_state
  ( possibleState : any ) : boolean {
    return possibleState === Unset()
  }



export function is_initializing_state
  ( possibleState : any ) : boolean {
    return possibleState === Initializing()
  }



export function is_initialized_state
  (possibleState : any) : boolean {
    return possibleState === InitializedState()
  }



export function is_starting_state
  ( possibleState : any ) : boolean {
    return possibleState === Starting()
  }



export function is_running_state
  ( possibleState : any ) : boolean {
    return possibleState === Running()
  }



export function is_stopping_state
  ( possibleState : any ) : boolean {
    return possibleState === Stopping()
  }



export function is_finished_state
  ( possibleState : any ) : boolean {
    return possibleState === Finished()
  }



export function is_state
  ( possibleState : any ) : possibleState is State {
    return (
         is_initializing_state(possibleState)
      || is_initialized_state(possibleState)
      || is_starting_state(possibleState)
      || is_running_state(possibleState)
      || is_stopping_state(possibleState)
      || is_finished_state(possibleState)
      || is_unset_state(possibleState)
    )
  }




/** Represents a snapshot of the Loader at a given point. */
interface ModelInterface
  { state               : State
  , htmlElementSelector : string
  , initializeHandler   : MessageHandler
  , initializedHandler  : MessageHandler
  , startHandler        : MessageHandler
  , startedHandler      : MessageHandler
  , stopHandler         : MessageHandler
  , stoppedHandler      : MessageHandler
  }



export type Model = RecordOf<ModelInterface>



export const ModelFactory : Record.Factory<ModelInterface> =
  I.Record
    ( { state               : 'Unset' 
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



export function Model
  ( state                : State
  , htmlElementSelector  : string
  , initializeHandler    : MessageHandler
  , initializedHandler   : MessageHandler
  , startHandler         : MessageHandler
  , startedHandler       : MessageHandler
  , stopHandler          : MessageHandler
  , stoppedHandler       : MessageHandler
  ) : Model {
    return ModelFactory(
      { state
      , htmlElementSelector
      , initializeHandler
      , initializedHandler
      , startHandler
      , startedHandler
      , stopHandler
      , stoppedHandler
      }
    )
  }



const dummyModel = ModelFactory()



export function set_state_to
  ( newState : State
  , model    : Model
  ) : Model {
    return I.update(model, 'state', () => newState)
  }



/**
 * Represents a message indicating a milestone in the Loaders
 * progression.
 */
type Message 
  = Initialize
  | Initialized
  | Start
  | Started
  | Stop
  | Stopped



interface MessageInterface { argv : Array<any> }



type Initialize = RecordOf<MessageInterface>



const InitializeFactory : Record.Factory<MessageInterface> =
  I.Record({argv : []}, 'Initialize')



export function Initialize
  ( argv : Array<any>
  ) : Message {
    return InitializeFactory({argv})
  }



type Initialized = RecordOf<MessageInterface>



const InitializedFactory : Record.Factory<MessageInterface> =
  I.Record({argv : []}, 'Initialized')



export function Initialized
  ( argv : Array<any>
  ) : Message {
    return InitializedFactory({argv})
  }



type Start = RecordOf<MessageInterface>



const StartFactory : Record.Factory<MessageInterface> =
  I.Record({argv : []}, 'Start')



export function Start
  ( argv : Array<any>
  ) : Message {
    return StartFactory({argv})
  }



type Started = RecordOf<MessageInterface>



const StartedFactory : Record.Factory<MessageInterface> =
  I.Record({argv : []}, 'Started')



export function Started
  ( argv : Array<any>
  ) : Message {
    return StartedFactory({argv})
  }



type Stop = RecordOf<MessageInterface>



const StopFactory : Record.Factory<MessageInterface> =
  I.Record({argv : []}, 'Stop')




export function Stop
  ( argv : Array<any>
  ) : Message {
    return StopFactory({argv})
  }



type Stopped = RecordOf<MessageInterface>



const StoppedFactory : Record.Factory<MessageInterface> =
  I.Record({argv : []}, 'Stopped')



export function Stopped
  ( argv : Array<any>
  ) : Message {
    return StoppedFactory({argv})
  }



export function is_initialize_message
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Initialize(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_initialized_message
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Initialized(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_start_message
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Start(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_started_message
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Started(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_stop_message
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Stop(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_stopped_message
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Stopped(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_message
  ( possibleMessage : any
  ) : possibleMessage is Message {
    return (
         is_initialize_message(possibleMessage)
      || is_initialized_message(possibleMessage)
      || is_start_message(possibleMessage)
      || is_started_message(possibleMessage)
      || is_stop_message(possibleMessage)
      || is_stopped_message(possibleMessage)
    )
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
  ( newState : State
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
  ( message : Message
  , model   : Model
  ) : Result.Result<Failure, Model> {

    if( is_initialize_message(message) ) {
      return (
        set_model_state_or_forward_failure
          ( Initializing()
          , model.initializeHandler(message.argv, model)
          )
      )
    } else if( is_initialized_message(message) ) {
      return (
        set_model_state_or_forward_failure
          ( InitializedState()
          , model.initializedHandler(message.argv, model)
          )
      )
    } else if( is_start_message(message) ) {
      return (
        set_model_state_or_forward_failure
          ( Starting()
          , model.startHandler(message.argv, model)
          )
      )
    } else if( is_started_message(message) ) {
      return (
        set_model_state_or_forward_failure
          ( Running()
          , model.startedHandler(message.argv, model)
          )
      )
    } else if( is_stop_message(message) ) {
      return (
        set_model_state_or_forward_failure
          ( Stopping()
          , model.stopHandler(message.argv, model)
          )
      )
    } else if( is_stopped_message(message) ) {
      return (
        set_model_state_or_forward_failure
          ( Finished()
          , model.stoppedHandler(message.argv, model)
          )
      )
    } else {
      return Result.Err( Failure(UPDATE_ERROR, model) )
    }

  }

