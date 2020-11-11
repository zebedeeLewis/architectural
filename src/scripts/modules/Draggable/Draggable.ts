
import * as Result from "../Result"
import * as State from "./State"
import * as Message from "./Message"
import * as Controller from "../Controller"
import * as I from "immutable"
import * as Position from "./Position"
import * as Axis from "./Axis"
import * as BoundaryBox from "./BoundaryBox"
import * as Utils from "./Utils"

import type {  RecordOf } from 'immutable'



export const UPDATE_ERROR = 'Unable to update Model'



interface Interface extends Controller.Subject.Interface
  { state            : State.Model
  , rootHtmlElement? : HTMLElement
  , activeAxis       : Axis.Model
  , boundaryBox      : BoundaryBox.Model
  , position         : Position.Model;
  }



/**
 * Represents a snapshot of a Draggable component at a given point.
 */
export type Model = Controller.Subject.Model<Interface>



type Factory = Controller.Subject.Factory<Interface>



export const create : Factory =
  I.Record
    ( { state           : State.Unset
      , rootHtmlElement : undefined
      , activeAxis      : Axis.X
      , boundaryBox     : BoundaryBox.create({})
      , position        : Position.create({})
      }
    , 'Model'
    )



export const init = create



export function set_boundary_box_to
  ( newBoundaryBox : BoundaryBox.Model
  , model          : Model
  ) : Model {
    return model.set('boundaryBox', newBoundaryBox)
  }



export function get_boundary_box_from
  ( model : Model
  ) : BoundaryBox.Model {
    return model.get('boundaryBox', undefined)
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



function handle_initialize_message
  ( message : Controller.Message.Initialize
  , model   : Model
  ) : Model {
    const rootHtmlElement =
      Controller.Subject.get_root_html_element_from(model)

    const boundaryBox =
      BoundaryBox.from_html_element(rootHtmlElement.parentElement)


    return (
      Controller.Subject.set_state_to
        ( State.Initializing
        , set_boundary_box_to(boundaryBox, model)
        )
    )
  }



function handle_move_to_message
  ( message : Message.MoveTo
  , model   : Model
  ) : Model {
    const state = Controller.Subject.get_state_from(model)


    if( !State.is_raised(state) ) {
      return model
    }


    const boundaryBox = get_boundary_box_from(model)
    const activeAxis = get_active_axis_from(model)
    const proposedPosition =
      Message.get_proposed_position_from(message)


    const finalPosition =
      Axis.is_x(activeAxis)
        ? Utils.reset_x_position_within_boundary
            ( proposedPosition
            , boundaryBox
            ) :

      Axis.is_y(activeAxis)
        ? Utils.reset_y_position_within_boundary
            ( proposedPosition
            , boundaryBox
            )

        : Utils.reset_position_within_boundary
            ( proposedPosition
            , boundaryBox
            )


    return (
      set_position_to
        ( finalPosition
        , Controller.Subject.set_state_to
            ( State.Moving
            , model
            )
        )
    )
  }



export const update
  : Controller.Updater<Interface, Message.Interface> =
  ( message
  , model
  ) => {
    if( Controller.Message.is_initialize(message) ) {
      return handle_initialize_message(message, model)


    } else if( Message.is_drop(message) ) {
      return Controller.Subject.set_state_to(State.Resting, model)


    } else if( Message.is_lift(message) ) {
      return Controller.Subject.set_state_to(State.Raised, model)


    } else if( Message.is_move_to(message) ) {
      return handle_move_to_message(message, model)


    } else {
      return model
    }

  }



export const view
  : Controller.ViewRenderer<Interface, Message.Interface> =
  ( model
  , controller
  ) => {
    const state = Controller.Subject.get_state_from(model)
    if( !State.is_moving(state) ) {
      return Controller.View.create({})
    }


    const position = get_position_from(model)
    const xValue = Position.get_x_from(position)
    const yValue = Position.get_y_from(position)
    const rootHtmlElement =
      Controller.Subject.get_root_html_element_from(model)


    const style =
      [ { selector : rootHtmlElement
        , styles   :
            { transform : `translate(${xValue}px, ${yValue}px)`
            }
            
        }
      ]


    Controller.dispatch_message(Message.Lift({}), controller)


    return Controller.View.create( {style} )
  }

