
/* TODO!!! */
export type Model
  = 'Initialized'
  | 'Unset'



/* TODO!!! */
export function is_initialized
  ( possibleState : any
  ) : possibleState is Model {
    return true
  }



/* TODO!!! */
export function is_unset
  ( possibleState : any
  ) : possibleState is Model {
    return true
  }
