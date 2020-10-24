
import * as State from "./State"
import * as I from "immutable"

import type {  RecordOf, Record } from 'immutable'



/**
 * Represents a message indicating a milestone in the Loaders
 * progression.
 */
export type Message 
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



export function is_initialize
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Initialize(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_initialized
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Initialized(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_start
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Start(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_started
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Started(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_stop
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Stop(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is_stopped
  ( possibleMessage : any
  ) : boolean {
    return (
         I.Record.isRecord(possibleMessage)
      && Stopped(possibleMessage.get('argv', undefined))
           .equals(possibleMessage)
    )
  }



export function is
  ( possibleMessage : any
  ) : possibleMessage is Message {
    return (
         is_initialize(possibleMessage)
      || is_initialized(possibleMessage)
      || is_start(possibleMessage)
      || is_started(possibleMessage)
      || is_stop(possibleMessage)
      || is_stopped(possibleMessage)
    )
  }
