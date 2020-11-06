
import * as Result from "../Result"
import * as State from "./State"
import * as Message from "./Message"
import * as Controller from "../Controller"
import * as I from "immutable"
import * as Position from "./Position"
import * as Axis from "./Axis"
import * as BoundaryBox from "./BoundaryBox"

import type {  RecordOf } from 'immutable'



export const UPDATE_ERROR = 'Unable to update Model'



interface ModelInterface
  { state            : State.Model
  , activeAxis       : Axis.Model
  , boundaryBox      : BoundaryBox.Model
  , rootHtmlElement? : HTMLElement
  , position         : Position.Model;
  }



/**
 * Represents a snapshot of a Draggable component at a given point.
 */
export type Model = RecordOf<ModelInterface>



type ModelFactory =
  ( data : Partial<ModelInterface> ) => Model



export const create : ModelFactory =
  I.Record
    ( { state           : State.Unset
      , activeAxis      : Axis.X
      , boundaryBox     : BoundaryBox.create({})
      , rootHtmlElement : undefined
      , position        : Position.create({})
      }
    , 'Model'
    )



export const init_model = create



export function set_boundary_box_to
  ( newPosition : Position.Model
  , model       : Model
  ) : Model {
    return model.set('position', newPosition)
  }



export function get_boundary_box_from
  ( model : Model
  ) : Position.Model {
    return model.get('position', undefined)
  }



export function set_position_to
  ( newPosition : Position.Model
  , model       : Model
  ) : Model {
    return model.set('position', newPosition)
  }



export function get_position_from
  ( model : Model
  ) : Position.Model {
    return model.get('position', undefined)
  }



export function set_active_axis_to
  ( newAxis : Axis.Model
  , model   : Model
  ) : Model {
    return model.set('activeAxis', newAxis)
  }



export function get_active_axis_from
  ( model : Model
  ) : Axis.Model {
    return model.get('activeAxis', undefined)
  }



export function set_state_to
  ( newState  : State.Model
  , model     : Model
  ) : Model {
    return model.set('state', newState)
  }



export function get_state_from
  ( model : Model
  ) : State.Model {
    return model.get('state', undefined)
  }



export const update_model : Controller.Updater<Model, Message.Model> =
  ( message
  , model
  ) => {

    if( Message.is_initialize(message) ) {
      return set_state_to(State.Initializing, model)


    } else if( Message.is_drop(message) ) {
      return set_state_to(State.Resting, model)


    } else if( Message.is_lift(message) ) {
      return set_state_to(State.Raised, model)


    } else if( Message.is_move_to(message) ) {
      const newPosition = Message.get_new_position(message)

      if( Position.is_position(newPosition) ) {
        
        return (
          set_position_to
            ( newPosition
            , set_state_to
                ( State.Moving
                , model
                )
            )
        )
      }

      return model


    } else {
      return model
    }

  }



export const view : Controller.ViewRenderer<Model> =
  ( model
  ) => {
    return Controller.create_view({})
  }
