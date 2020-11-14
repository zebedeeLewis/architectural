
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
  { state                  : State.Model
  , rootHtmlElement?       : HTMLElement
  , activeAxis             : Axis.Model
  , boundaryBox            : BoundaryBox.Model
  , position               : Position.Model
  , mouseOffsetFromTopLeft : Position.Model
  }



/**
 * Represents a snapshot of a Draggable component at a given point.
 */
export type Model = Controller.Subject.Model<Interface>



type Factory = Controller.Subject.Factory<Interface>



export const create : Factory =
  I.Record
    ( { state                  : State.Unset
      , rootHtmlElement        : undefined
      , activeAxis             : Axis.X
      , boundaryBox            : BoundaryBox.create({})
      , position               : Position.create({})
      , mouseOffsetFromTopLeft : Position.create({})
      }
    , 'Model'
    )



export const init = create



export function get_mouse_offset_from_top_left_from
  ( model : Model
  ) : Position.Model {
    return model.get('mouseOffsetFromTopLeft', undefined)
  }



export function set_mouse_offset_from_top_left_to
  ( newOffset : Position.Model
  , model     : Model
  ) : Model {
    return model.set('mouseOffsetFromTopLeft', newOffset)
  }



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
    const rootHtmlElement
      =  Controller.Message.get_root_html_element_from(message)
      || Controller.Subject.get_root_html_element_from(model)


    return (
      Controller.Subject.set_root_html_element_to
        ( rootHtmlElement
        , Controller.Subject.set_state_to
            ( State.Initializing
            , model
            )
        )
    )
  }



function handle_move_to_message
  ( message : Message.MoveTo
  , model   : Model
  ) : Model {
    const state = Controller.Subject.get_state_from(model)


    const currentPosition = get_position_from(model)
    const currentX = Position.get_x_from(currentPosition)
    const currentY = Position.get_y_from(currentPosition)

    const boundaryBox = get_boundary_box_from(model)
    const activeAxis = get_active_axis_from(model)
    const proposedPosition =
      Message.get_proposed_position_from(message)


    const finalPosition =
      Axis.is_x(activeAxis)
        ? Utils.reset_x_position_within_boundary
            ( Position.set_y_to(currentY, proposedPosition)
            , boundaryBox
            ) :

      Axis.is_y(activeAxis)
        ? Utils.reset_y_position_within_boundary
            ( Position.set_x_to(currentX, proposedPosition)
            , boundaryBox
            )

        : Utils.reset_xy_position_within_boundary
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



function handle_lift_message
  ( message : Message.Lift
  , model   : Model
  ) : Model {
    const mouseOffsetFromTopLeft =
      Message.get_mouse_offset_from_top_left_from(message)


    return (
      Controller.Subject.set_state_to
        ( State.Raised
        , set_mouse_offset_from_top_left_to
            ( mouseOffsetFromTopLeft
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
      return handle_lift_message(message, model)


    } else if( Message.is_move_to(message) ) {
      return handle_move_to_message(message, model)


    } else if( Message.is_update_boundary(message) ) {
      const boundaryBox = Message.get_boundary_box_from(message)

      return (
        Controller.Subject.set_state_to
          ( State.Resting
          , set_boundary_box_to(boundaryBox, model)
          )
      )


    } else {
      return model
    }

  }



type MessageDispatcher =
  Controller.MessageDispatcher<Interface, Message.Interface>



function view_initializing_state
  ( dispatch_message : MessageDispatcher
  , model            : Model
  ) : Controller.View.Model {
    const rootHtmlElement =
      Controller.Subject.get_root_html_element_from(model)


    rootHtmlElement.onmousedown =
      ( e : MouseEvent ) => {
        const x = e.clientX
        const y = e.clientY
        const mousePosition = Position.create({x, y})

        const elementTopLeftPosition =
          BoundaryBox.get_top_left_from
            ( BoundaryBox.from_html_element(rootHtmlElement)
            )

        const mouseOffsetFromTopLeft =
          Position.offset_from
            ( elementTopLeftPosition
            , mousePosition
            )

        dispatch_message
          ( Message.Lift( {mouseOffsetFromTopLeft} )
          )
      }


    const boundaryBox =
      BoundaryBox.from_html_element(rootHtmlElement.parentElement)


    dispatch_message(Message.UpdateBoundary( {boundaryBox} ))


    const style =
      [ { selector : rootHtmlElement
        , styles   :
            { cursor : 'grab'
            }
        }
      ]

    return Controller.View.create( {style} )
  }



function view_raised_state
  ( window           : Window
  , dispatch_message : MessageDispatcher
  , model            : Model
  ) : Controller.View.Model {
    window.onmouseup =
      () => dispatch_message(Message.Drop({}))


    const rootHtmlElement =
      Controller.Subject.get_root_html_element_from(model)


    rootHtmlElement.parentElement.onmousemove =
      ( e : MouseEvent ) => {
        const x = e.clientX
        const y = e.clientY
        const mouseOffsetFromTopLeft =
          get_mouse_offset_from_top_left_from(model)

        const proposedPosition =
          Position.offset_by
            ( mouseOffsetFromTopLeft
            , Position.create({x, y})
            )

        dispatch_message(Message.MoveTo({proposedPosition}))
      }


    const style =
      [ { selector : rootHtmlElement
        , styles   :
            { cursor : 'grabbing'
            }
        }
      ]


    return Controller.View.create({style})
  }



function view_moving_state
  ( model            : Model
  ) : Controller.View.Model {
    const position = get_position_from(model)


    const xValue = Position.get_x_from(position)
    const yValue = Position.get_y_from(position)


    const rootHtmlElement =
      Controller.Subject.get_root_html_element_from(model)


    const style =
      [ { selector : rootHtmlElement
        , styles   :
            { transform : `translate(${xValue}px, ${yValue}px)`
            , zIndex    : '9999'
            }
        }
      ]


    return Controller.View.create( {style} )
  }



function view_resting_state
  ( window           : Window
  , model            : Model
  ) : Controller.View.Model {
    window.onmouseup = null


    const rootHtmlElement =
      Controller.Subject.get_root_html_element_from(model)


    rootHtmlElement.parentElement.onmousemove = null


    const style =
      [ { selector : rootHtmlElement
        , styles   :
            { cursor : 'grab'
            }
        }
      ]


    return Controller.View.create( {style} )
  }



export const view
  : Controller.ModelViewer<Interface, Message.Interface> =
  ( window
  , dispatch_message
  , model
  ) => {
    const state = Controller.Subject.get_state_from(model)


    if( Controller.State.is_initializing(state) ) {
      return view_initializing_state(dispatch_message, model)


    } else if( State.is_raised(state) ) {
      return view_raised_state(window, dispatch_message, model)


    } else if( State.is_moving(state) ) {
      return view_moving_state(model)


    } else if( State.is_resting(state) ) {
      return view_resting_state(window, model)


    } else {
      return Controller.View.create({})
    }
  }

