import * as DataStore from 'lib/js/DataStore'
import * as Navbar from 'component/Navbar'
import * as Modal from 'component/Modal'
import * as IndexPage from '../IndexPage'



export function as_default
  ( window
  , execute
  , indexPage
  ) {
    Navbar.View.as_default
      ( window
      , execute
      , IndexPage.get_navbar(indexPage)
      )

    Modal.View.as_default
      ( window
      , execute
      , IndexPage.get_modal(indexPage)
      )
  }
  
