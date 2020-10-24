
import * as Result from "../Result";



/** Describes the current state of a Loader at a given point. */
export type State
  = 'Unset'
  | 'Initializing'
  | 'InitializedState'
  | 'Starting'
  | 'Running'
  | 'Stopping'
  | 'Finished'



export function Unset
  () : State {
    return 'Unset'
  }



export function Initializing
  () : State {
    return 'Initializing'
  }



export function InitializedState
  () : State {
    return 'InitializedState'
  }



export function Starting
  () : State {
    return 'Starting'
  }



export function Running
  () : State {
    return 'Running'
  }



export function Stopping
  () : State {
    return 'Stopping'
  }



export function Finished
  () : State {
    return 'Finished'
  }



export function is_unset_state
  ( possibleState : any ) : boolean {
    return possibleState === Unset()
  }



export function is_initializing_state
  ( possibleState : any ) : boolean {
    return possibleState === Initializing()
  }



export function is_initialized_state
  (possibleState : any) : boolean {
    return possibleState === InitializedState()
  }



export function is_starting_state
  ( possibleState : any ) : boolean {
    return possibleState === Starting()
  }



export function is_running_state
  ( possibleState : any ) : boolean {
    return possibleState === Running()
  }



export function is_stopping_state
  ( possibleState : any ) : boolean {
    return possibleState === Stopping()
  }



export function is_finished_state
  ( possibleState : any ) : boolean {
    return possibleState === Finished()
  }



export function is_state
  ( possibleState : any ) : possibleState is State {
    return (
         is_initializing_state(possibleState)
      || is_initialized_state(possibleState)
      || is_starting_state(possibleState)
      || is_running_state(possibleState)
      || is_stopping_state(possibleState)
      || is_finished_state(possibleState)
      || is_unset_state(possibleState)
    )
  }

