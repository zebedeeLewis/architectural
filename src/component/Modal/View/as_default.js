import * as DataStore from 'lib/js/DataStore'
import * as Utils from 'lib/js/Utils'
import * as Project from 'component/Project'
import * as Modal from '..'



/**
 * Represents the classes that are applied to the Modal DOMElement
 * for each possible ToggleState.
 *
 * @readonly
 * @enum {string}
 * @property {string} On  - class given to a toggled modal
 * @property {string} Off - class given to a modal that is not toggled
 */
export const ToggledClass
  = Object.freeze
      ( { On  : 'modal--toggled'
        , Off : 'modal'
        }
      )



/**
 * Display the Modal element in the browser.
 *
 * @param {Document} document
 * @param {Model} modal
 *
 * @return {Model}
 */
export function show_modal
  ( document
  , modal
  ) {
    const project = Modal.get_project(modal)
    const modalId = Modal.get_id(modal)
    const modalElement = document.getElementById(modalId)
    if( !modalElement || !project ) { return modal }

    Project.View.as_default(modalElement, project)
    modalElement.classList.add( ToggledClass.On )
    modalElement.classList.remove( ToggledClass.Off )

    return modal
  }



/**
 * Hide the Modal element in the browser.
 *
 * @param {Document} document
 * @param {Model} modal
 *
 * @return {Model}
 */
export function hide_modal
  ( document
  , modal
  ) {
    const id = Modal.get_id(modal)
    const modalElement = document.getElementById(id)
    if( !modalElement ) { return modal }

    modalElement.classList.add( ToggledClass.Off )
    modalElement.classList.remove( ToggledClass.On )

    return modal
  }



/**
 * @type {DataStore.Data.View}
 */
export function as_default
  ( window
  , execute
  , model
  ) {
    const document = window.document
    const modal = DataStore.Data.get_value(model)
    const modalToggled = Modal.get_toggled(modal)

    switch(modalToggled) {
      case Modal.ToggledState.On:
        show_modal(document, modal)
        Utils.disable_page_scroll(window)
        break

      case Modal.ToggledState.Off:
        hide_modal(document, modal)
        Utils.enable_page_scroll(window)
        break
    }


    return model
  }




