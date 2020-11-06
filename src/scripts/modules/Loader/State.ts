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



export function is_unset
  ( possibleState : any ) : boolean {
    return possibleState === Unset()
  }



export function is_initializing
  ( possibleState : any ) : boolean {
    return possibleState === Initializing()
  }



export function is_initialized
  (possibleState : any) : boolean {
    return possibleState === InitializedState()
  }



export function is_starting
  ( possibleState : any ) : boolean {
    return possibleState === Starting()
  }



export function is_running
  ( possibleState : any ) : boolean {
    return possibleState === Running()
  }



export function is_stopping
  ( possibleState : any ) : boolean {
    return possibleState === Stopping()
  }



export function is_finished
  ( possibleState : any ) : boolean {
    return possibleState === Finished()
  }



export function is_state
  ( possibleState : any ) : possibleState is State {
    return (
         is_initializing(possibleState)
      || is_initialized(possibleState)
      || is_starting(possibleState)
      || is_running(possibleState)
      || is_stopping(possibleState)
      || is_finished(possibleState)
      || is_unset(possibleState)
    )
  }

