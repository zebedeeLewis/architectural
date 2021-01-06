import * as DataStore from 'lib/js/DataStore'
import * as Navbar from 'component/Navbar'
import * as AboutPage from '../AboutPage'



export function as_default
  ( window
  , execute
  , aboutPage
  ) {
    Navbar.View.as_default
      ( window
      , execute
      , AboutPage.get_navbar(aboutPage)
      )
  }
  
