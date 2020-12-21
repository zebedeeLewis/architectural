
import * as State from "./State"
import * as Controller from "../Controller"
import * as I from "immutable"
import * as Position from "./Position"
import * as BoundaryBox from "./BoundaryBox"

import type {  RecordOf, Record } from 'immutable'



export type Model 
  = Controller.Message.Common
  | Drop
  | Lift
  | MoveTo
  | UpdateBoundary



export type Interface = Controller.Message.Interface



type Drop = Controller.Message.Model<Interface>



export const Drop : Controller.Message.Factory<Interface> =
  Controller.Message.create_factory({argv : []}, 'Drop')



export function is_drop
  ( possibleMessage : any
  ) : possibleMessage is Drop {
    return Controller.Message.is_message_of_type(Drop, possibleMessage)
  }



export interface LiftInterface extends Interface
  { mouseOffsetFromTopLeft : Position.Model
  , argv?                  : []
  }



export type Lift = Controller.Message.Model<LiftInterface>



type LiftFactory = Controller.Message.Factory<LiftInterface>



export const Lift : LiftFactory =
  Controller.Message.create_factory
    ( { mouseOffsetFromTopLeft : Position.create({})
      , argv                   : []
      }
    , 'Lift'
    )



export function get_mouse_offset_from_top_left_from
  ( message : Lift
  ) : Position.Model {
    return message.get('mouseOffsetFromTopLeft', undefined)
  }



export function set_mouse_offset_from_top_left_to
  ( newPosition : Position.Model
  , message     : Lift
  ) : Lift {
    return message.set('mouseOffsetFromTopLeft', newPosition)
  }



export function is_lift
  ( possibleMessage : any
  ) : possibleMessage is Lift {
    return Controller.Message.is_message_of_type(Lift, possibleMessage)
  }



export interface MoveToInterface extends Interface
  { proposedPosition : Position.Model
  , argv?            : []
  }



export type MoveTo = Controller.Message.Model<MoveToInterface>



type MoveToFactory = Controller.Message.Factory<MoveToInterface>



export const MoveTo : MoveToFactory =
  Controller.Message.create_factory
    ( { proposedPosition : Position.create({})
      , argv             : []
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



export interface UpdateBoundaryInterface extends Interface
  { boundaryBox : BoundaryBox.Model
  , argv?       : []
  }



export type UpdateBoundary =
  Controller.Message.Model<UpdateBoundaryInterface>



type UpdateBoundaryFactory =
  Controller.Message.Factory<UpdateBoundaryInterface>



export const UpdateBoundary : UpdateBoundaryFactory =
  Controller.Message.create_factory
    ( { boundaryBox : BoundaryBox.create({})
      , argv        : []
      }
    , 'UpdateBoundary'
    )



export function is_update_boundary
  ( possibleMessage : any
  ) : possibleMessage is UpdateBoundary {
    return (
      Controller.Message.is_message_of_type
        ( UpdateBoundary
        , possibleMessage
        )
    )
  }



export function get_boundary_box_from
  ( message : UpdateBoundary
  ) : BoundaryBox.Model {
    return message.get('boundaryBox', undefined)
  }



export function get_proposed_position_from
  ( moveTo : MoveTo
  ) : Position.Model {
    return moveTo.get('proposedPosition', undefined)
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



