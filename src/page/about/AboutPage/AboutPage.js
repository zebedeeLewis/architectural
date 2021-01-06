import * as DataStore from 'lib/js/DataStore'
import * as Navbar from 'component/Navbar'
import * as Modal from 'component/Modal'
import * as Action from '../Action'




/**
 * About Page Model
 *
 * @typedef {Object} AboutPage
 *
 * @property {Navbar} navbar
 */



/**
 * Produce a new AboutPage model.
 *
 * @param {Partial<AboutPage>}
 * @return {AboutPage}
 */
export function create
  ( { navbar
    }
  ) {
    return Object.freeze({ navbar : navbar || Navbar.create({}) })
  }



/**
 * Produce an updated AboutPage model.
 *
 * @param {Partial<AboutPage>}
 * @param {AboutPage}
 *
 * @return {AboutPage}
 */
export function patch
  ( { navbar
    }
  , indexPage
  ) {
    return create(
      { navbar : navbar !== undefined ? navbar : indexPage.navbar
      }
    )
  }



/**
 * Produce the "navbar" attribute of the given indexPage
 *
 * @param {AboutPage}
 * @return {Navbar}
 */
export function get_navbar( indexPage ){ return indexPage.navbar }



/**
 * @type {DataStore.Update}
 */
export function update
  ( action
  , indexPage
  ) {
    const actionType = DataStore.Action.get_type(action)
    const wrappedAction = DataStore.Action.get_data(action)

    switch(actionType) {
      case Action.Type.Navbar:
        const navbar
          = Navbar.update( wrappedAction, get_navbar(indexPage))
        return patch({ navbar }, indexPage )
    }

    return indexPage
  }
