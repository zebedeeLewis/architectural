import * as DataStore from 'lib/js/DataStore'
import * as Navbar from 'component/Navbar'
import * as Modal from 'component/Modal'



/**
 * Supported actions on an PortfolioPage model.
 *
 * @readonly
 * @enum {string}
 *
 * @property {string} Modal - Wraps an action that should be handled by
 * the Modal module.
 *
 * @property {string} Navbar - Wraps an action that should be handled by
 * the Navbar module.
 *
 */
export const Type
  = Object.freeze
      ( { Modal  : 'Modal_Action'
        , Navbar : 'Navbar_Action'
        }
      )



/**
 * Produce a wrapped Navbar.Action.Type.Toggle_On to be passed to
 * PortfolioPage.update
 */
export function wrap_navbar_action_toggle_on
  () {
    const type = Type.Navbar
    const data
      = DataStore.Action.create({ type : Navbar.Action.Type.Toggle_On })

    return DataStore.Action.create({ type, data })
  }
  


/**
 * Produce a wrapped Navbar.Action.Type.Toggle_Off to be passed to
 * PortfolioPage.update
 */
export function wrap_navbar_action_toggle_off
  () {
    const type = Type.Navbar
    const data
      = DataStore.Action.create
          ( { type : Navbar.Action.Type.Toggle_Off }
          )

    return DataStore.Action.create({ type, data })
  }



 /**
 * Produce a wrapped Navbar.Action.Type.Initializ to be passed to
 * PortfolioPage.update
 */
export function wrap_navbar_action_initialize
  ( openClickHandler
  , closeClickHandler
  ) {
    const type = Type.Navbar
    const data
      = DataStore.Action.create
          ( { type : Navbar.Action.Type.Initialize
            , data : { openClickHandler, closeClickHandler }
            }
          )

    return DataStore.Action.create({ type, data })
  }
  


/**
 * Produce a wrapped Modal.Action.Type.Toggle_Off to be passed to
 * PortfolioPage.update
 */
export function wrap_modal_action_toggle_off
  () {
    const type = Type.Modal
    const data
      = DataStore.Action.create({ type : Modal.Action.Type.Toggle_Off })

    return DataStore.Action.create({ type, data })
  }



 /**
 * Produce a wrapped Modal.Action.Type.Toggle_On to be passed to
 * PortfolioPage.update
 */
export function wrap_modal_action_toggle_on
  () {
    const type = Type.Modal
    const data
      = DataStore.Action.create({ type : Modal.Action.Type.Toggle_On })

    return DataStore.Action.create({ type, data })
  }



 /**
 * Produce a wrapped Modal.Action.Type.Update_Project to be passed to
 * PortfolioPage.update
 *
 * @param {Project}
 */
export function wrap_modal_action_update_project
  ( project
  ) {
    const type = Type.Modal
    const data
      = DataStore.Action.create
          ( { type : Modal.Action.Type.Update_Project
            , data : { project }
            }
          )

    return DataStore.Action.create({ type, data })
  }
