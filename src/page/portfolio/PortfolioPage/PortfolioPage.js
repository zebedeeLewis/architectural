import * as DataStore from 'lib/js/DataStore'
import * as Navbar from 'component/Navbar'
import * as Modal from 'component/Modal'
import * as Action from '../Action'




/**
 * Portfolio Page Model
 *
 * @typedef {Object} PortfolioPage
 *
 * @property {Navbar} navbar
 * @property {Modal} modal
 */



/**
 * Produce a new PortfolioPage model.
 *
 * @param {Partial<PortfolioPage>}
 * @return {PortfolioPage}
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
 * Produce an updated PortfolioPage model.
 *
 * @param {Partial<PortfolioPage>}
 * @param {PortfolioPage}
 *
 * @return {PortfolioPage}
 */
export function patch
  ( { navbar
    , modal
    }
  , portfolioPage
  ) {
    return create(
      { navbar : navbar !== undefined ? navbar : portfolioPage.navbar
      , modal  : modal !== undefined ? modal : portfolioPage.modal
      }
    )
  }



/**
 * Produce the "navbar" attribute of the given portfolioPage
 *
 * @param {PortfolioPage}
 * @return {Navbar}
 */
export function get_navbar( portfolioPage ){ return portfolioPage.navbar }



/**
 * Produce the "navbar" attribute of the given portfolioPage
 *
 * @param {PortfolioPage}
 * @return {Navbar}
 */
export function get_modal( portfolioPage ){ return portfolioPage.modal }



/**
 * @type {DataStore.Update}
 */
export function update
  ( action
  , portfolioPage
  ) {
    const actionType = DataStore.Action.get_type(action)
    const wrappedAction = DataStore.Action.get_data(action)

    switch(actionType) {
      case Action.Type.Navbar:
        const navbar
          = Navbar.update( wrappedAction, get_navbar(portfolioPage))
        return patch({ navbar }, portfolioPage )

      case Action.Type.Modal:
        const modal
          = Modal.update( wrappedAction, get_modal(portfolioPage))
        return patch({ modal }, portfolioPage )
    }

    return portfolioPage
  }
