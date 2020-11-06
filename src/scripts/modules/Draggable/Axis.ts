import * as I from "immutable"



/**
 * Represents an axis on a 2-D plane.
 */
export type Model
  = 'X'
  | 'Y'
  | 'Both'



export const X : Model = 'X'
export const Y : Model = 'Y'
export const Both : Model = 'Both'



export function is_x
  ( possibleX : Model
  ) : boolean {
    return possibleX === X
  }



export function is_y
  ( possibleY : Model
  ) : boolean {
    return possibleY === Y
  }



export function is_both
  ( possibleBoth : Model
  ) : boolean {
    return possibleBoth === Both
  }



export function is_axis
  ( possibleAxis : any
  ) : possibleAxis is Model {
    const _possibleAxis = possibleAxis as Model

    return (
         is_x(possibleAxis)
      || is_y(possibleAxis)
      || is_both(possibleAxis)
    )
  }
