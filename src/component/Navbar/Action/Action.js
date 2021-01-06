import * as DataStore from 'lib/js/DataStore'



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
      ( { Toggle_On   : 'Toggle_On'
        , Toggle_Off  : 'Toggle_Off'
        , Initialize  : 'Initialize'
        , Initialized : 'Initialized'
        }
      )



/**
 * Defines the shape of the data to be passed as the second argument to
 * DataStore.Action.create when creating a new
 * Navbar.Action.Type.Initialize.
 *
 * @typedef {Object} InitializeData
 * @property {Function} openClickHandler - see Navbar model definition
 * @property {Function} closeClickHandler - see Navbar model definition
 */
