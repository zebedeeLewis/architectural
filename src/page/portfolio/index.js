import * as Navbar from "component/Navbar"
import * as Modal from 'component/Modal'
import * as Project from 'component/Project'

import * as DataStore from 'lib/js/DataStore'
import projects from 'lib/js/projects'

import './index.scss'



const MODAL_ID = 'projectModal'



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


    projects.forEach
      ( project => {
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

          Navbar.init(window, '#main-nav')
        }
      )
  }



init(window, projects)
