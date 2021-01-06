import * as DataStore from 'lib/js/DataStore'
import * as Navbar from 'component/Navbar'
import * as Modal from 'component/Modal'
import * as Action from '../Action'




/**
 * Index Page Model
 *
 * @typedef {Object} IndexPage
 *
 * @property {Navbar} navbar
 * @property {Modal} modal
 */



/**
 * Produce a new IndexPage model.
 *
 * @param {Partial<IndexPage>}
 * @return {IndexPage}
 */
export function create
  ( { navbar
    , modal
    }
  ) {
    return Object.freeze(
      { navbar : navbar || Navbar.create({})
      , modal  : modal || Modal.create({})
      }
    )
  }



/**
 * Produce an updated IndexPage model.
 *
 * @param {Partial<IndexPage>}
 * @param {IndexPage}
 *
 * @return {IndexPage}
 */
export function patch
  ( { navbar
    , modal
    }
  , indexPage
  ) {
    return create(
      { navbar : navbar !== undefined ? navbar : indexPage.navbar
      , modal  : modal !== undefined ? modal : indexPage.modal
      }
    )
  }



/**
 * Produce the "navbar" attribute of the given indexPage
 *
 * @param {IndexPage}
 * @return {Navbar}
 */
export function get_navbar( indexPage ){ return indexPage.navbar }



/**
 * Produce the "navbar" attribute of the given indexPage
 *
 * @param {IndexPage}
 * @return {Navbar}
 */
export function get_modal( indexPage ){ return indexPage.modal }



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

      case Action.Type.Modal:
        const modal
          = Modal.update( wrappedAction, get_modal(indexPage))
        return patch({ modal }, indexPage )
    }

    return indexPage
  }
