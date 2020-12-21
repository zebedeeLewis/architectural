
import * as State from "./State"
import * as Controller from "../Controller"
import * as I from "immutable"

import type {  RecordOf, Record } from 'immutable'



/**
 * Represents a message indicating a milestone in the Sliders
 * progression.
 */
export type Message 
  = Controller.Message.Common
  | Play
  | Pause



export type Interface = Controller.Message.Interface



export type Play = Controller.Message.Model<Interface>



export const Play : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Play')



export type Pause = Controller.Message.Model<Interface>



export const Pause : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Pause')



export function is_play
  ( possibleMessage : any
  ) : possibleMessage is Play {
    return Controller.Message.is_message_of_type(Play, possibleMessage)
  }



export function is_pause
  ( possibleMessage : any
  ) : possibleMessage is Pause {
    return Controller.Message.is_message_of_type(Pause, possibleMessage)
  }



export function is_message
  ( possibleMessage : any
  ) : possibleMessage is Message {
    return (
         Controller.Message.is_common(possibleMessage)
      || is_play(possibleMessage)
      || is_pause(possibleMessage)
    )
  }
