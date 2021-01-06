import Splide from '@splidejs/splide';
import * as Navbar from 'component/Navbar'
import * as Modal from 'component/Modal'
import * as Project from 'component/Project'
import * as DataStore from 'lib/js/DataStore'
import projects from 'lib/js/projects'
import * as IndexPage from './IndexPage'
import * as Action from './Action'
import * as View from './View'

import './index.scss'



const SLIDER_SELECTOR = '#slider'
const MODAL_ID = 'projectModal'
const NAVBAR_ID = 'main-nav'
const PAGINATION_SLIDER_SELECTOR = '.slider-pagination'
const FEATURED_PROJECT_SELECTOR = '.project, .project__cta'



function init_slider
  ( window
  ) {
    const slider
      = new Splide
          ( SLIDER_SELECTOR
          , { autoplay   : true
            , cover      : true
            , autoWidth  : true
            , autoHeight : true
            , type       : 'loop'
            , arrows     : false
            , pagination : false
            }
          )


    const sliderPagination
      = new Splide
          ( PAGINATION_SLIDER_SELECTOR
          , { autoWidth    : true
            , autoHeight   : true
            , isNavigation : true
            , arrows       : false
            , pagination   : false
            }
          )


    slider
      .sync(sliderPagination.mount())
      .mount()
  }



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


    projects
      .filter( Project.get_featured )
      .forEach(
        (project) => {
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
    const indexPage = IndexPage.create({ navbar, modal })

    DataStore.initialize
      ( window
      , IndexPage.update
      , View.as_default
      , indexPage
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


          init_slider(window)
        }
      )
  }



init(window, projects)
