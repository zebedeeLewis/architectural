
import * as Result from "../Result";



/**
 * Describes the current state of a Draggable component at a given
 * point.
 */
export type Model
  = 'Unset'
  | 'Initializing'
  | 'Resting'
  | 'Raised'
  | 'Moving'



export const Unset : Model = 'Unset'

export const Initializing : Model = 'Initializing'

export const Resting : Model = 'Resting'

export const Raised : Model = 'Raised'

export const Moving : Model = 'Moving'



export function is_unset
  ( possibleState : any ) : boolean {
    return possibleState === Unset
  }



export function is_initializing
  ( possibleState : any ) : boolean {
    return possibleState === Initializing
  }



export function is_resting
  (possibleState : any) : boolean {
    return possibleState === Resting
  }



export function is_raised
  ( possibleState : any ) : boolean {
    return possibleState === Raised
  }



export function is_moving
  ( possibleState : any ) : boolean {
    return possibleState === Moving
  }



export function is_state
  ( possibleState : any ) : possibleState is Model {
    return (
         is_unset(possibleState)
      || is_initializing(possibleState)
      || is_resting(possibleState)
      || is_raised(possibleState)
      || is_moving(possibleState)
    )
  }

