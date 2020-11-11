import * as I from "immutable"
import type {  RecordOf, Record } from 'immutable'



interface Interface
  { x : number
  , y : number
  }



/**
 * Represents an elements position in a container.
 */
export type Model = RecordOf<Interface>



type Factory = ( data : Partial<Interface> ) => Model



export function set_x_to
  ( newX  : number
  , model : Model
  ) : Model {
    return model.set('x', newX)
  }



export function get_x_from
  ( model    : Model
  ) : number {
    return model.get('x', undefined)
  }



export function set_y_to
  ( newY  : number
  , model : Model
  ) : Model {
    return model.set('y', newY)
  }



export function get_y_from
  ( model    : Model
  ) : number {
    return model.get('y', undefined)
  }



export const create : Factory =
  I.Record
    ( { x : 0
      , y : 0
      }
    , 'Model'
    )



export function is_position
  ( possiblePosition : any
  ) : possiblePosition is Model {
    const _possiblePosition = possiblePosition as Position

    return (
         I.Record.isRecord(_possiblePosition)
      && create(_possiblePosition.toObject()).equals(possiblePosition)
    )
  }
