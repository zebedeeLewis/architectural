
/* TODO!!! */
export type Model
  = 'Unset'
  | 'Initializing'



export const Unset = 'Unset'

export const Initializing = 'Initializing'



export function is_initializing
  ( possibleState : any
  ) : possibleState is Model {
    return possibleState === Initializing
  }



export function is_unset
  ( possibleState : any
  ) : possibleState is Model {
    return possibleState === Unset
  }
