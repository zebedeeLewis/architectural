import * as DataStore from 'lib/js/DataStore'
import * as Navbar from 'component/Navbar'
import * as ContactPage from '../ContactPage'



export function as_default
  ( window
  , execute
  , contactPage
  ) {
    Navbar.View.as_default
      ( window
      , execute
      , ContactPage.get_navbar(contactPage)
      )
  }
  
