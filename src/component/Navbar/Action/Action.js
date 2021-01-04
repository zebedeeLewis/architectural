import * as Navbar from '..'



/**
 * Supported actions on a navbar.
 *
 * @readonly
 * @enum {string}
 * @property {string}
 *
 */
export const Type
  = Object.freeze
      ( { Toggle_On  : 'Toggle_On'
        , Toggle_Off : 'Toggle_Off'
        }
      )



/**
 * set the toggled property of the Navbar to TOGGLED_On
 * 
 * @param {Model} navbar
 *
 * @return {Model}
 */
export function toggle_on
  ( navbar
  ) {
    navbar.toggled = Navbar.ToggledState.On

    return navbar
  }



/**
 * set the toggled property of the Navbar to TOGGLED_Off
 * 
 * @param {Model} navbar
 *
 * @return {Model}
 */
export function toggle_off
  ( navbar
  ) {
    navbar.toggled = Navbar.ToggledState.Off

    return navbar
  }
