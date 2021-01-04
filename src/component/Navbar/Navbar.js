/**
 * Represents the possible toggle state of a single
 * Navbar.
 *
 * @readonly
 * @enum {boolean}
 * @property {boolean} On  - the Navbar is toggled
 * @property {boolean} Off - the Navbar is not toggled
 */
export const ToggledState
  = Object.freeze
      ( { On  : true
        , Off : false
        }
      )



/**
 * Represents the state of the navbar.
 *
 * @typedef {Object} Model
 *
 * @property {HTMLElement} element - the DOM element this model
 * represents.
 *
 * @property {ToggledState} toggled  - ToggledState.On if the Navbar is
 * toggled otherwise ToggledState.Off
 */



/**
 * Produce a new Navbar model.
 *
 * @param {HTMLElement} element
 *
 * @return {Model}
 */
export function create
  ( element
  ) {
    return (
      { element : element
      , toggled : ToggledState.Off
      }
    )
  }



