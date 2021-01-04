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


/**
 * Produce the "openClickHandler" of a InitializeData
 *
 * @param {Action}
 * @return {Function}
 */
export function get_initialize_data_openClickHandler
  ( action
  ) {
    const data = DataStore.Action.get_data(action)
    return data.openClickHandler
  }



/**
 * Produce the "closeClickHandler" of a InitializeData
 *
 * @param {Action}
 * @return {Function}
 */
export function get_initialize_data_closeClickHandler
  ( action
  ) {
    const data = DataStore.Action.get_data(action)
    return data.closeClickHandler
  }



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
    const navbar
      = Navbar.patch
          ( { toggled : Navbar.ToggledState.On }
          , DataStore.Data.get_value(model)
          )

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
    const navbar
      = Navbar.patch
          ( { toggled : Navbar.ToggledState.Off }
          , DataStore.Data.get_value(model)
          )

    return (
      DataStor.Data.patch
        ( { value : navbar }
        , model
        )
    )
  }



/**
 * Set the Navbars initialization to Initialization.In_process
 * this triggers the initialization process on the next call to
 * the "view" function.
 *
 * @param {Function} openClickHandler
 * @param {Function} closeClickHandler
 * @param {Model} model
 * @return {Model}
 */
export function start_initialization
  ( openClickHandler
  , closeClickHandler
  , model
  ) {
    const navbar
      = Navbar.patch
          ( { initialization    : Navbar.Initialization.In_Process
            , openClickHandler  : openClickHandler 
            , closeClickHandler : closeClickHandler
            }
          , initialNavbar
          )

    return (
      DataStor.Data.patch
        ( { value : navbar }
        , model
        )
    )
  }


/**
 * Set the Navbars initialization to Initialization.Complete.
 * This is the final stage of the initialization process.
 *
 * @param {Model} model
 * @return {Model}
 */
export function finalize_initialization
  ( model
  ) {
    const navbar
      = Navbar.patch
          ( { initialization : Navbar.Initialization.Complete }
          , DataStore.Data.get_value(model)
          )

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
    const navbar = DataStore.Data.get_value(model)

    switch(actionType) {
      case Type.Toggle_On:
        return toggle_on(model)

      case Type.Toggle_Off:
        return toggle_off(model)

      case Type.Initialize:
        return (
          start_initialization
            ( get_initialize_data_openClickHandler(action)
            , get_initialize_data_closeClickHandler(action)
            , model
            )
        )

      case Type.Initialized:
        return finalize_initialization(model)
    }

    return model
  }
