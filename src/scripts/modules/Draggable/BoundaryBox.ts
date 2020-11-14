import * as I from "immutable"
import * as Position from "./Position"

import type {  RecordOf } from 'immutable'



interface Interface
  { topLeft     : Position.Model
  , bottomRight : Position.Model
  }



export type Model = RecordOf<Interface>



type Factory = ( data : Partial<Interface> ) => Model



export function set_top_left_to
  ( newPosition : Position.Model
  , model       : Model
  ) : Model {
    return model.set('topLeft', newPosition)
  }



export function get_top_left_from
  ( model    : Model
  ) : Position.Model {
    return model.get('topLeft', undefined)
  }



export function set_bottom_right_to
  ( newPosition : Position.Model
  , model       : Model
  ) : Model {
    return model.set('bottomRight', newPosition)
  }



export function get_bottom_right_from
  ( model    : Model
  ) : Position.Model {
    return model.get('bottomRight', undefined)
  }



export function get_lower_boundary_from
  ( model : Model
  ) : number {
    const bottomRight = get_bottom_right_from(model)

    return Position.get_x_from(bottomRight)
  }



export function get_right_boundary_from
  ( model : Model
  ) : number {
    const bottomRight = get_bottom_right_from(model)

    return Position.get_y_from(bottomRight)
  }



export function get_upper_boundary_from
  ( model : Model
  ) : number {
    const topLeft = get_top_left_from(model)

    return Position.get_x_from(topLeft)
  }



export function get_left_boundary_from
  ( model : Model
  ) : number {
    const topLeft = get_top_left_from(model)

    return Position.get_y_from(topLeft)
  }



export const create : Factory =
  I.Record
    ( { topLeft     : Position.create({})
      , bottomRight : Position.create({})
      }
    , 'Model'
    )



export function from_html_element
  ( element : HTMLElement
  ) : Model {
    const domRect = element.getBoundingClientRect()


    const topLeft =
      Position.create
        ( { x : domRect.x
          , y : domRect.y
          }
        )


    const bottomRight =
      Position.create
        ( { x : domRect.right
          , y : domRect.bottom
          }
        )


    return create( { topLeft, bottomRight} )
  }



