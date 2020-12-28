/**
 * @typedef {Object} Model
 *
 * @property {boolean} dirty - has this model or one of it's children
 * been modified? This value can be used to trigger a view update.
 *
 * @property {*} value - the data being modeled.
 *
 * @property {?Object<string, Model>} children - this object holds the
 * direct children of this data model. Each property must be another
 * "Model".
 */



/**
 * Produce a new data Model
 *
 * @param {Partial<Model>}
 * @return {Model}
 */
export function create
  ( { dirty
    , value
    , children
    }
  ) {
    return (
      { dirty    : dirty || true
      , value    : value || null
      , children : children || null
      }
    )
  }



/**
 * Produce the "dirty" attribute of the given Model.
 *
 * @param {Model} model
 * @return {boolean}
 */
export function get_dirty(model) { return model.dirty }



/**
 * Produce the "value" attribute of the given Model.
 *
 * @param {Model} model
 * @return {*}
 */
export function get_value(model) { return model.value }



/**
 * Produce the "children" attribute of the given Model.
 *
 * @param {Model} model
 * @return {(null|Object<string, Model>)}
 */
export function get_children(model) { return model.children }



/**
 * Updates a given data Model
 *
 * @param {Partial<Model>}
 * @param {Model}
 *
 * @return {Model}
 */
export function patch
  ( { dirty
    , value
    , children
    }
  , model
  ) {
    return (
      { dirty    : true
      , value    : value || get_value(model)
      , children : children || get_children(model)
      }
    )
  }



/**
 * Produce the result of executing the given action on the given data
 * model. after completing an action, the Update function must set the
 * "dirty" flag on the given Model.
 *
 * @typedef {Function} Update
 * @param {Action.Model}
 * @param {Model}
 *
 * @return {Model}
 */



/**
 * Update the representation of the given DataModel. This function
 * should unset the "dirty" flag on the given Model After displaying.
 *
 * @typedef {Function} View
 * @param {Window}
 * @param {Action.Execute}
 * @param {Model}
 *
 * @return {void}
 */



