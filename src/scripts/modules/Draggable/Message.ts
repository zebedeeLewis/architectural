
import * as State from "./State"
import * as Controller from "../Controller"
import * as I from "immutable"
import * as Position from "./Position"

import type {  RecordOf, Record } from 'immutable'



export type Model 
  = Initialize
  | Drop
  | Lift
  | MoveTo



type MessageFactory<M> =
  ( data : Partial<Controller.MessageInterface> ) => M



function is_message_of_type<M extends Model>
  ( constructor     : MessageFactory<M> | MoveToFactory
  , possibleMessage : any
  ) : boolean {
    const _possibleMessage = possibleMessage as M

    return (
         I.Record.isRecord(_possibleMessage)
      && constructor(_possibleMessage.toObject()).equals(possibleMessage)
    )
  }



type Initialize = RecordOf<Controller.MessageInterface>



export const Initialize : MessageFactory<Initialize> =
  I.Record({argv : []}, 'Initialize')



export function is_initialize
  ( possibleMessage : any
  ) : possibleMessage is Initialize {
    return is_message_of_type(Initialize, possibleMessage)
  }



type Drop = RecordOf<Controller.MessageInterface>



export const Drop : MessageFactory<Drop> =
  I.Record({argv : []}, 'Drop')



export function is_drop
  ( possibleMessage : any
  ) : possibleMessage is Drop {
    return is_message_of_type(Drop, possibleMessage)
  }



type Lift = RecordOf<Controller.MessageInterface>



export const Lift : MessageFactory<Lift> =
  I.Record({argv : []}, 'Lift')



export function is_lift
  ( possibleMessage : any
  ) : possibleMessage is Lift {
    return is_message_of_type(Lift, possibleMessage)
  }



export interface MoveToInterface
  { newPosition : Position.Model
  }



type MoveToFactory =
  ( data : Partial<MoveToInterface> ) => MoveTo



type MoveTo = RecordOf<MoveToInterface>



export const MoveTo : MoveToFactory =
  I.Record({newPosition : Position.create({})}, 'MoveTo')



export function get_new_position
  ( moveTo : MoveTo
  ) : Position.Model {
    return moveTo.get('newPosition', undefined)
  }



export function is_move_to
  ( possibleMessage : any
  ) : possibleMessage is MoveTo {
    return is_message_of_type(MoveTo, possibleMessage)
  }



export function is_message
  ( possibleMessage : any
  ) : possibleMessage is Model {
    return (
         is_initialize(possibleMessage)
      || is_lift(possibleMessage)
      || is_drop(possibleMessage)
      || is_move_to(possibleMessage)
    )
  }
