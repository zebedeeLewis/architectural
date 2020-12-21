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



export function offset_by
  ( offsetPosition : Model
  , basePosition   : Model
  ) : Model {
    const offsetX = get_x_from(offsetPosition)
    const offsetY = get_y_from(offsetPosition)


    const baseX = get_x_from(basePosition)
    const baseY = get_y_from(basePosition)

     
    const nX = baseX + offsetX
    const nY = baseY + offsetY


    return (
      create
        ( { x : nX
          , y : nY
          }
        )
    )
  }



export function offset_from
  ( positionN    : Model
  , basePosition : Model
  ) : Model {
    const nX = get_x_from(positionN)
    const nY = get_y_from(positionN)


    const baseX = get_x_from(basePosition)
    const baseY = get_y_from(basePosition)


    const offsetX = nX - baseX
    const offsetY = nY - baseY


    return (
      create
        ( { x : offsetX
          , y : offsetY
          }
        )
    )
  }


