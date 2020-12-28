import Splide from '@splidejs/splide';
import * as Navbar from 'component/Navbar'
import * as Modal from 'component/Modal'
import * as Project from 'component/Project'
import * as DataStore from 'lib/js/DataStore'
import projects from 'lib/js/projects'

import './index.scss'



const SLIDER_SELECTOR = '#slider'
const MODAL_ID = 'projectModal'
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
      = DataStore.Action.create(Modal.Action.Type.Toggle_Off)
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
      = DataStore.Action.create(Modal.Action.Type.Toggle_On)
    const open_modal
      = () => DataStore.Action.execute(toggleOnAction)
    const projectElement
      = modalElement.querySelector('.project-detail')


    projects
      .filter( Project.get_featured )
      .forEach(
        (project) => {
          const updateProjectAction
            = DataStore.Action.create
                ( Modal.Action.Type.Update_Project
                , { project }
                )

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
    const document = window.document

    document.addEventListener
      ( 'DOMContentLoaded'
      , () => {
          DataStore.initialize
            ( window
            , Modal.Action.update
            , Modal.View.as_default
            , DataStore.Data.create
                ( { value : init_modal(window, projects)
                  }
                )
            )

          init_slider(window)
          Navbar.init(window, '#main-nav')
        }
      )
  }



init(window, projects)
