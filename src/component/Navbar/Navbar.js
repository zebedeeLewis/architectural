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
 * Represents all possible states of the Navbars initialization.
 *
 * @readonly
 * @enum {string}
 *
 * @property {string} Pending - the initialization process has not
 * started yet.
 *
 * @property {string} In_Process - initialization is in process.
 *
 * @property {string} Complete - the initialization process is
 * complete.
 */
export const Initialization
  = Object.freeze
      ( { Pending    : 'Pending'
        , In_Process : 'In_Process'
        , Complete   : 'Complete'
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
 *
 * @property {Initialization} initialization - the state of the
 * initialization process.
 *
 * @property {Function} openClickHandler - the handler that will fire
 * when the navbars open button is clicked. This function should call
 * DataStore.Action.execute.
 *
 * @property {Function} closeClickHandler - the handler that will fire
 * when the navbars close button is clicked. This function should call
 * DataStore.Action.execute.
 */



/**
 * Produce a new Navbar model.
 *
 * @param {Partial<Model>}
 *
 * @return {Model}
 */
export function create
  ( { element
    , toggled
    , initialization
    , openClickHandler
    , closeClickHandler
    }
  ) {
    return (
      { element           : element !== undefined ? element : null
      , toggled           : toggled !== undefined
                              ? toggled
                              : ToggledState.Off
      , initialization    : initialization !== undefined
                              ? initialization
                              : Initialization.Pending
      , openClickHandler  : openClickHandler !== undefined
                              ? openClickHandler
                              : ()=>{}
      , closeClickHandler : closeClickHandler !== undefined
                              ? closeClickHandler
                              : ()=>{}
      }
    )
  }



/**
 * Use the given Partial to update the given model. Produce the updated
 * model.
 *
 * @param {Partial<Model>}
 * @param {Model}
 *
 * @return {Model}
 */
export function patch
  ( { element
    , toggled
    , initialization
    }
  , navbar
  ) {
    return (
      { element           : element !== undefined
                              ? element
                              : navbar.element
      , toggled           : toggled !== undefined
                              ? toggled
                              : navbar.toggled
      , initialization    : initialization !== undefined
                              ? initialization
                              : navbar.initialization
      , openClickHandler  : openClickHandler !== undefined
                              ? openClickHandler
                              : navbar.openClickHandler
      , closeClickHandler : closeClickHandler !== undefined
                              ? closeClickHandler
                              : navbar.closeClickHandler
      }
    )
  }



/**
 * Produce the "element" attribute of the Navbar.
 *
 * @param {Model}
 * @return {HTMLElement}
 */
export function get_element( navbar ){ return navbar.element }



/**
 * Produce the "toggled" attribute of the Navbar.
 *
 * @param {Model}
 * @return {ToggledState}
 */
export function get_toggled( navbar ){ return navbar.toggled }



/**
 * Produce the "initialization" attribute of the Navbar.
 *
 * @param {Model}
 * @return {Initialization}
 */
export function get_initialization
  ( navbar
  ){
    return navbar.initialization
  }



/**
 * Produce the "openClickHandler" attribute of the Navbar.
 *
 * @param {Model}
 * @return {Function}
 */
export function get_openClickHandler
  ( navbar
  ){
    return navbar.openClickHandler
  }



/**
 * Produce the "closeClickHandler" attribute of the Navbar.
 *
 * @param {Model}
 * @return {Function}
 */
export function get_closeClickHandler
  ( navbar
  ){
    return navbar.closeClickHandler
  }



