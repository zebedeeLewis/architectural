
import * as State from "./State"
import * as Controller from "../Controller"
import * as I from "immutable"
import diff from  "jest-diff"

import type {  RecordOf, Record } from 'immutable'



/**
 * Represents a message indicating a milestone in the Loaders
 * progression.
 */
export type Message 
  = Controller.Message.Common
  | Initialized
  | Start
  | Started
  | Stop
  | Stopped



export type Interface = Controller.Message.Interface



type Factory = Controller.Message.Factory<Interface>



export type Initialized = Controller.Message.Model<Interface>



export const Initialized : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Initialized')



export type Start = Controller.Message.Model<Interface>



export const Start : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Start')



export type Started = Controller.Message.Model<Interface>



export const Started : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Started')



export type Stop = Controller.Message.Model<Interface>



export const Stop : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Stop')



export type Stopped = Controller.Message.Model<Interface>



export const Stopped : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Stopped')



export function is_initialized
  ( possibleMessage : any
  ) : possibleMessage is Initialized {
    return (
      Controller.Message.is_message_of_type
        ( Initialized
        , possibleMessage
        )
    )
  }



export function is_start
  ( possibleMessage : any
  ) : possibleMessage is Start {
    return (
      Controller.Message.is_message_of_type
        ( Start
        , possibleMessage
        )
    )
  }



export function is_started
  ( possibleMessage : any
  ) : possibleMessage is Started {
    return (
      Controller.Message.is_message_of_type
        ( Started
        , possibleMessage
        )
    )
  }



export function is_stop
  ( possibleMessage : any
  ) : possibleMessage is Stop {
    return (
      Controller.Message.is_message_of_type
        ( Stop
        , possibleMessage
        )
    )
  }



export function is_stopped
  ( possibleMessage : any
  ) : possibleMessage is Stopped {
    return (
      Controller.Message.is_message_of_type
        ( Stopped
        , possibleMessage
        )
    )
  }



export function is_message
  ( possibleMessage : any
  ) : possibleMessage is Message {
    return (
         Controller.Message.is_common(possibleMessage)
      || is_initialized(possibleMessage)
      || is_start(possibleMessage)
      || is_started(possibleMessage)
      || is_stop(possibleMessage)
      || is_stopped(possibleMessage)
    )
  }
