import * as DataStore from 'lib/js/DataStore'
import * as Project from 'component/Project'

import * as Action from './Action'



const CLOSE_SELECTOR = '.modal__toggle-close'



/**
 * Represents the possible toggle state of the Modal.
 *
 * @readonly
 * @enum {boolean}
 * @property {boolean} On  - the Modal is toggled
 * @property {boolean} Off - the Modal is not toggled
 */
export const ToggledState
  = Object.freeze
      ( { On  : true
        , Off : false
        }
      )



/**
 * Represents the state of the modal.
 *
 * @typedef {Object} Model
 *
 * @property {boolean} isInitialized - has the modal been initialized.
 *
 * @property {string} id - the id of the DOM element this model
 *   represents.
 *
 * @property {ToggledState} toggled  - ToggledState.On if the Modal is
 *   toggled otherwise ToggledState.Off
 *
 * @property {Project.Model} project - the project to be displayed by
 *   the modal.
 */



/**
 * Produce a new Modal model.
 *
 * @param {Partial<Model>}
 *
 * @return {Model}
 */
export function create
  ( { id
    , toggled
    , project
    , isInitialized
    }
  ) {
    return Object.freeze(
      { id            : id
      , project       : project
      , toggled       : toggled !== undefined
                      ? toggled
                      : ToggledState.Off
      , isInitialized : isInitialized || false
      }
    )
  }



/**
 * Updates the given modal
 *
 * @param {Partial<Model>}
 * @param {Model}
 *
 * @return {Model}
 */
export function patch
  ( { id
    , toggled
    , project
    , isInitialized
    }
  , modal
  ) {
    return Object.freeze(
      { id            : id !== undefined ? id : modal.id
      , project       : project !== undefined ? project : modal.project
      , toggled       : toggled !== undefined ? toggled : modal.toggled
      , isInitialized : isInitialized !== undefined
                      ? isInitialized
                      : modal.isInitialized
      }
    )
  }



/**
 * produce the "id" attribute of the given Modal
 *
 * @param {Modal}
 * @return {string}
 */
export function get_id( modal ){ return modal.id }



/**
 * produce the "toggled" attribute of the given Modal
 *
 * @param {Modal}
 * @return {boolean}
 */
export function get_toggled( modal ){ return modal.toggled }



/**
 * produce the "project" attribute of the given Modal
 *
 * @param {Modal}
 * @return {Project}
 */
export function get_project( modal ){ return modal.project }



/**
 * produce the "isInitialized" attribute of the given Modal
 *
 * @param {Modal}
 * @return {boolean}
 */
export function get_isInitialized( modal ){ return modal.isInitialized }



/**
 * Setup handlers for the events that will toggle the Modal
 *
 * @param {HTMLElement} modalElement - the element represented by this
 * Model.
 *
 * @param {Function} close_modal - a function that dispatches a
 * "Action.Type.Toggle_Off" action on the given modal.
 *
 * @param {Model} modal
 *
 * @return {Model}
 */
export function init
  ( modalElement
  , close_modal
  , modal
  ) {
    const modalCloseElement = modalElement.querySelector(CLOSE_SELECTOR)
    modalCloseElement.addEventListener( 'click', close_modal )

    return modal
  }
