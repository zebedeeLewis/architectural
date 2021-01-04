import * as DataStore from 'lib/js/DataStore'
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
 * @param {Model} model
 *
 * @return {Model}
 */
export function toggle_on
  ( model
  ) {
    const navbar = DataStore.Data.get_value(model)
    navbar.toggled = Navbar.ToggledState.On

    return (
      DataStor.Data.patch
        ( { value : navbar }
        , model
        )
    )
  }



/**
 * set the toggled property of the Navbar to TOGGLED_Off
 * 
 * @param {Model} model
 *
 * @return {Model}
 */
export function toggle_off
  ( model
  ) {
    const navbar = DataStore.Data.get_value(model)
    navbar.toggled = Navbar.ToggledState.Off

    return (
      DataStor.Data.patch
        ( { value : navbar }
        , model
        )
    )
  }



/**
 * @type {DataStore.Data.Update}
 */
export function update
  ( action
  , model
  ) {
    const actionType = DataStore.Action.get_type(action)

    switch(actionType) {
      case Type.Toggle_On:
        return toggle_on(model)
        break


      case Type.Toggle_Off:
        return toggle_off(model)
        break
    }

    return model
  }
