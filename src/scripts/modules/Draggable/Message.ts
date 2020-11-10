
import * as State from "./State"
import * as Controller from "../Controller"
import * as I from "immutable"
import * as Position from "./Position"

import type {  RecordOf, Record } from 'immutable'



export type Model 
  = Controller.Message.Common
  | Drop
  | Lift
  | MoveTo



export type Interface = Controller.Message.Interface



type Drop = Controller.Message.Model<Interface>



export const Drop : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Drop')



export function is_drop
  ( possibleMessage : any
  ) : possibleMessage is Drop {
    return Controller.Message.is_message_of_type(Drop, possibleMessage)
  }



type Lift = Controller.Message.Model<Interface>



export const Lift : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Lift')



export function is_lift
  ( possibleMessage : any
  ) : possibleMessage is Lift {
    return Controller.Message.is_message_of_type(Lift, possibleMessage)
  }



export interface MoveToInterface extends Controller.Message.Interface
  { newPosition : Position.Model
  , argv        : []
  }



type MoveTo = Controller.Message.Model<MoveToInterface>



type MoveToFactory = Controller.Message.Factory<MoveToInterface>



export const MoveTo : MoveToFactory =
  Controller.Message.create_factory
    ( { newPosition : Position.create({})
      , argv        : []
      }
    , 'MoveTo'
    )



export function is_move_to
  ( possibleMessage : any
  ) : possibleMessage is MoveTo {
    return (
      Controller.Message.is_message_of_type(MoveTo, possibleMessage)
    )
  }



export function get_new_position
  ( moveTo : MoveTo
  ) : Position.Model {
    return moveTo.get('newPosition', undefined)
  }



export function is_message
  ( possibleMessage : any
  ) : possibleMessage is Model {
    return (
         Controller.Message.is_common(possibleMessage)
      || is_lift(possibleMessage)
      || is_drop(possibleMessage)
      || is_move_to(possibleMessage)
    )
  }



