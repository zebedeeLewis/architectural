
import * as State from "./State"
import * as Controller from "../Controller"
import * as I from "immutable"

import type {  RecordOf, Record } from 'immutable'



/**
 * Represents a message indicating a milestone in the Loaders
 * progression.
 */
export type Model 
  = Controller.Message.Common
  | Start
  | Close
  | Cleanup



export type Interface = Controller.Message.Interface



type Factory = Controller.Message.Factory<Interface>



export type Start = Controller.Message.Model<Interface>



export const Start : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Start')



export function is_start
  ( possibleStart : any
  ) : possibleStart is Start {
    return (
      Controller.Message.is_message_of_type(Start, possibleStart)
    )
  }



export type Close = Controller.Message.Model<Interface>



export const Close : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Close')



export function is_close
  ( possibleClose : any
  ) : possibleClose is Close {
    return (
      Controller.Message.is_message_of_type(Close, possibleClose)
    )
  }



export type Cleanup = Controller.Message.Model<Interface>



export const Cleanup : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Cleanup')



export function is_cleanup
  ( possibleCleanup : any
  ) : possibleCleanup is Cleanup {
    return (
      Controller.Message.is_message_of_type(Cleanup, possibleCleanup)
    )
  }



export function is_message
  ( possibleMessage : any
  ) : possibleMessage is Model {
    return (
         Controller.Message.is_common(possibleMessage)
      || is_start(possibleMessage)
      || is_close(possibleMessage)
      || is_cleanup(possibleMessage)
    )
  }
