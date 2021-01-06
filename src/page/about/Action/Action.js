import * as DataStore from 'lib/js/DataStore'
import * as Navbar from 'component/Navbar'



/**
 * Supported actions on an AboutPage model.
 *
 * @readonly
 * @enum {string}
 *
 * @property {string} Navbar - Wraps an action that should be handled by
 * the Navbar module.
 *
 */
export const Type
  = Object.freeze
      ( { Navbar : 'Navbar_Action'
        }
      )



/**
 * Produce a wrapped Navbar.Action.Type.Toggle_On to be passed to
 * AboutPage.update
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
 * AboutPage.update
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
 * AboutPage.update
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
