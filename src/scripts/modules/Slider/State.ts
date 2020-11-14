import * as Result from "../Result";



export type State
  = 'Unset'
  | 'Initializing'
  | 'Playing'
  | 'Paused'



export const Unset : State = 'Unset'

export const Initializing : State = 'Initializing'

export const Playing : State = 'Playing'

export const Paused : State = 'Paused'

export function is_unset
  ( possibleState : any ) : boolean {
    return possibleState === Unset
  }



export function is_initializing
  ( possibleState : any ) : boolean {
    return possibleState === Initializing
  }



export function is_playing
  (possibleState : any) : boolean {
    return possibleState === Playing
  }



export function is_paused
  ( possibleState : any ) : boolean {
    return possibleState === Paused
  }



export function is_state
  ( possibleState : any ) : possibleState is State {
    return (
         is_unset(possibleState)
      || is_playing(possibleState)
      || is_paused(possibleState)
    )
  }

