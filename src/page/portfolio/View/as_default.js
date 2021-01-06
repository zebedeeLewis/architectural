import * as DataStore from 'lib/js/DataStore'
import * as Navbar from 'component/Navbar'
import * as Modal from 'component/Modal'
import * as PortfolioPage from '../PortfolioPage'



export function as_default
  ( window
  , execute
  , portfolioPage
  ) {
    Navbar.View.as_default
      ( window
      , execute
      , PortfolioPage.get_navbar(portfolioPage)
      )

    Modal.View.as_default
      ( window
      , execute
      , PortfolioPage.get_modal(portfolioPage)
      )
  }
  
