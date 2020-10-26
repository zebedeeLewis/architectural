
import * as State from "./State"
import * as Controller from "../Controller"
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



type MessageFactory<M> =
  ( data : Partial<Controller.MessageInterface> ) => M



type Initialize = RecordOf<Controller.MessageInterface>



export const Initialize : MessageFactory<Initialize> =
  I.Record({argv : []}, 'Initialize')



type Initialized = RecordOf<Controller.MessageInterface>



export const Initialized : MessageFactory<Initialized> =
  I.Record({argv : []}, 'Initialized')



type Start = RecordOf<Controller.MessageInterface>



export const Start : MessageFactory<Start> =
  I.Record({argv : []}, 'Start')



type Started = RecordOf<Controller.MessageInterface>



export const Started : MessageFactory<Started> =
  I.Record({argv : []}, 'Started')



type Stop = RecordOf<Controller.MessageInterface>



export const Stop : MessageFactory<Stop> =
  I.Record({argv : []}, 'Stop')



type Stopped = RecordOf<Controller.MessageInterface>



export const Stopped : MessageFactory<Stopped> =
  I.Record({argv : []}, 'Stopped')



function is_message_of_type<M extends Message>
  ( constructor     : MessageFactory<M>
  , possibleMessage : any
  ) : boolean {
    const _possibleMessage = possibleMessage as M

    return (
         I.Record.isRecord(_possibleMessage)
      && constructor(_possibleMessage.toObject()).equals(possibleMessage)
    )
  }



export function is_initialize
  ( possibleMessage : any
  ) : boolean {
    return is_message_of_type(Initialize, possibleMessage)
  }



export function is_initialized
  ( possibleMessage : any
  ) : boolean {
    return is_message_of_type(Initialized, possibleMessage)
  }



export function is_start
  ( possibleMessage : any
  ) : boolean {
    return is_message_of_type(Start, possibleMessage)
  }



export function is_started
  ( possibleMessage : any
  ) : boolean {
    return is_message_of_type(Started, possibleMessage)
  }



export function is_stop
  ( possibleMessage : any
  ) : boolean {
    return is_message_of_type(Stop, possibleMessage)
  }



export function is_stopped
  ( possibleMessage : any
  ) : boolean {
    return is_message_of_type(Stopped, possibleMessage)
  }



export function is_message
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
