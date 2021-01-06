import * as Navbar from "component/Navbar"
import * as Modal from 'component/Modal'
import * as Project from 'component/Project'

import * as DataStore from 'lib/js/DataStore'
import projects from 'lib/js/projects'

import * as PortfolioPage from './PortfolioPage'
import * as Action from './Action'
import * as View from './View'


import './index.scss'



const MODAL_ID = 'projectModal'
const NAVBAR_ID = 'main-nav'



function init_modal
  ( window
  , projects
  ) {
    const toggleOffAction
      = Action.wrap_modal_action_toggle_off()
    const modalCloser
      = (e) => {
          e.preventDefault()
          DataStore.Action.execute(toggleOffAction)
        }

    const document = window.document
    const modalElement = document.getElementById(MODAL_ID)
    const modal
      = Modal.init
          ( modalElement
          , modalCloser
          , Modal.create( {id : MODAL_ID} )
          )


    const toggleOnAction
      = Action.wrap_modal_action_toggle_on()
    const open_modal
      = () => DataStore.Action.execute(toggleOnAction)
    const projectElement
      = modalElement.querySelector('.project-detail')


    projects.forEach
      ( project => {
          const updateProjectAction
            = Action.wrap_modal_action_update_project( project )

          const do_update_project
            = () => DataStore.Action.execute(updateProjectAction)

          const projectId = Project.get_id(project)
          const elmnt = document.getElementById(projectId)
          if( !elmnt ) { return }

          elmnt.addEventListener
            ( 'click'
            , (e) => {
                e.preventDefault()
                do_update_project()
                open_modal()
              }
            )
        }
      )


    return modal
  }



function init
  ( window
  , projects
  ) {
    const navbar = Navbar.create({ id : NAVBAR_ID })
    const modal = init_modal(window, projects)
    const portfolioPage = PortfolioPage.create({ navbar, modal })

    DataStore.initialize
      ( window
      , PortfolioPage.update
      , View.as_default
      , portfolioPage
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



init(window, projects)
