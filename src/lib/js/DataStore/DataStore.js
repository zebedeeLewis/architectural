/**
 * Represents a central data store for a small app. This system enforces
 * a hirachical structuring of connected data models.
 *
 * @typedef {Object} Store
 *
 * @property {?DataModel} model - the central store for all data models.
 * All other models should be a child of this model.
 *
 * @property {Data.Update} update - A function that knows how to
 * travers and update the entire data model.
 *
 * @property {Data.View} view - a function that knows how to render
 * the entire data model.
 */



/** @type {Store} */
const dataStore
  = { model  : null
      // the update & view functions will be replaced on Initialization
    , update : (action, model)=> model
    , view   : console.log
    , window : null
    }



/**
 * Initialize the dataStore by setting the update and view functions,
 * as well as providing the initial data Model.
 *
 * @param {Window} window
 * @param {Data.Update} update
 * @param {Data.View} view
 * @param {Model} model
 *
 * @return {Function}
 */
export function initialize
  ( window
  , update
  , view
  , model
  ) {
    dataStore.update = update
    dataStore.view = view
    dataStore.model = model
    dataStore.window = window
  }



/** @type {Action.Execute} */
export function execute_action
  ( action
  ) {
    dataStore.model
      = dataStore.update
          ( action
          , dataStore.model
          )

    dataStore.view
      ( dataStore.window
      , execute_action
      , dataStore.model
      )
  }



