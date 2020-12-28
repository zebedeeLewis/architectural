import * as DataStore from '../DataStore'



/**
 * Describes a type of action to be carried out by a system as well as
 * some data needed for the action to complete.
 *
 * @typedef {Object} Model
 *
 * @property {!string} type - the name of the type of action to be
 * executed on the system.
 *
 * @property {?*} data - any data needed by the subroutine executing the
 * action.
 */



/**
 * Produce a new action of the given type with the given data.
 *
 * @param {Type} type
 * @param {Data} data
 */
export function create
  ( type
  , data
  ) {
    return Object.freeze({type, data})
  }



/**
 * produce the type of the given action.
 *
 * @param {Model} action
 *
 * @return {Type}
 */
export function get_type(action) { return action.type }



/**
 * produce the data for the given action.
 *
 * @param {Model} action
 *
 * @return {Data}
 */
export function get_data (action) { return action.data }



/**
 * Use the central stores registered Data.Update function to execute
 * the given action on the central "dataStore". This function should
 * be implemented by the DataStore module.
 *
 * @typedef {Function} Execute
 * @param {Action.Action} action
 *
 * @return {Data.Store}
 */



/**
 * This function is not technically necessary, because it simply serves
 * to pass the given action to "DataStore.execute_action". It does,
 * however, makes sense from a API standpoint. Since calling
 * DataStore.Action.execute seems more organic than calling
 * DataStore.execute_action.
 *
 * @type {Execute}
 */
export function execute
  ( action
  ) {
    return DataStore.execute_action(action)
  }

