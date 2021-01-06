import * as DataStore from 'lib/js/DataStore'
import * as Navbar from "component/Navbar"
import * as AboutPage from './AboutPage'
import * as View from './View'
import * as Action from './Action'

import './index.scss'



const NAVBAR_ID = 'main-nav'



function init
  ( window
  , projects
  ) {
    const navbar = Navbar.create({ id : NAVBAR_ID })
    const aboutPage = AboutPage.create({ navbar })

    DataStore.initialize
      ( window
      , AboutPage.update
      , View.as_default
      , aboutPage
      )

    const document = window.document
    document.addEventListener
      ( 'DOMContentLoaded'
      , () => {
          const navbarOpenClickHandler 
            = () => {
                const toggleNavbarOn
                  = Action.wrap_navbar_action_toggle_on()
                DataStore.Action.execute(toggleNavbarOn)
              }

          const navbarCloseClickHandler 
            = ( ) => {
                const toggleNavbarOff
                  = Action.wrap_navbar_action_toggle_off()
                DataStore.Action.execute(toggleNavbarOff)
              }

          const initNavbar
            =  Action.wrap_navbar_action_initialize
                  ( navbarOpenClickHandler
                  , navbarCloseClickHandler
                  )

          DataStore.Action.execute( initNavbar )
        }
      )
  }



init(window)
