
import * as State from "./State"
import * as Controller from "../Controller"
import * as I from "immutable"

import type {  RecordOf, Record } from 'immutable'



/**
 * Represents a message indicating a milestone in the Sliders
 * progression.
 */
export type Message 
  = Initialize
  | Play
  | Pause



type MessageFactory<M> =
  ( data : Partial<Controller.MessageInterface> ) => M



type Initialize = RecordOf<Controller.MessageInterface>



export const Initialize : MessageFactory<Initialize> =
  I.Record({argv : []}, 'Initialize')



type Play = RecordOf<Controller.MessageInterface>



export const Play : MessageFactory<Play> =
  I.Record({argv : []}, 'Play')



type Pause = RecordOf<Controller.MessageInterface>



export const Pause : MessageFactory<Pause> =
  I.Record({argv : []}, 'Pause')



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



export function is_play
  ( possibleMessage : any
  ) : boolean {
    return is_message_of_type(Play, possibleMessage)
  }



export function is_pause
  ( possibleMessage : any
  ) : boolean {
    return is_message_of_type(Pause, possibleMessage)
  }



export function is_message
  ( possibleMessage : any
  ) : possibleMessage is Message {
    return (
         is_initialize(possibleMessage)
      || is_play(possibleMessage)
      || is_pause(possibleMessage)
    )
  }
