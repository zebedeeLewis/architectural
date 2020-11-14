import * as Result from "../Result";



/** Describes the current state of a Loader at a given point. */
export type Model
  = 'Unset'
  | 'Initializing'
  | 'Running'
  | 'Closing'
  | 'Done'



export const Unset : Model = 'Unset'

export const Initializing : Model = 'Initializing'

export const Running : Model = 'Running'

export const Closing : Model = 'Closing'

export const Done : Model = 'Done'



export function is_unset
  ( possibleState : any ) : boolean {
    return possibleState === Unset
  }



export function is_initializing
  ( possibleState : any ) : boolean {
    return possibleState === Initializing
  }



export function is_running
  (possibleState : any) : boolean {
    return possibleState === Running
  }



export function is_closing
  (possibleState : any) : boolean {
    return possibleState === Closing
  }



export function is_done
  (possibleState : any) : boolean {
    return possibleState === Done
  }



export function is_state
  ( possibleState : any ) : possibleState is Model {
    return (
         is_unset(possibleState)
      || is_initializing(possibleState)
      || is_running(possibleState)
      || is_closing(possibleState)
      || is_done(possibleState)
    )
  }

