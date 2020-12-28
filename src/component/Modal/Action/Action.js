import * as DataStore from 'lib/js/DataStore'
import * as Modal from '..'



/**
 * Supported actions on a modal.
 *
 * @readonly
 * @enum {string}
 * @property {string}
 *
 */
export const Type
  = Object.freeze
      ( { Toggle_On      : 'Toggle_On'
        , Toggle_Off     : 'Toggle_Off'
        , Update_Project : 'Update_Project'
        }
      )



/**
 * Data given to an Update_Project action.
 *
 * @typedef {Object} UpdateProjectData
 * @property {Project.Model} project - the new project to be displayed
 * in the modal.
 */



/**
 * Represents the shape of the data for each accepted action type.
 *
 * @typedef {UpdateProjectData} Data
 */



/**
 * set the toggled property of the Modal to TOGGLED_On
 * 
 * @param {Model} model
 *
 * @return {Model}
 */
export function toggle_on
  ( model
  ) {
    const newModal
      = Modal.patch
          ( { toggled : Modal.ToggledState.On }
          , DataStore.Data.get_value(model)
          ) 

    return (
      DataStore.Data.patch
        ( { value : newModal }
        , model
        )
    )
  }



/**
 * set the toggled property of the Modal to TOGGLED_Off
 * 
 * @param {Model} model
 *
 * @return {Model}
 */
export function toggle_off
  ( model
  ) {
    const newModal
      = Modal.patch
          ( { toggled : Modal.ToggledState.Off }
          , DataStore.Data.get_value(model)
          ) 

    return (
      DataStore.Data.patch
        ( { value : newModal }
        , model
        )
    )
  }



/**
 * @type {DataStore.Data.Update}
 */
export function update
  ( action
  , model
  ) {
    const actionType = DataStore.Action.get_type(action)

    switch(actionType) {
      case Type.Toggle_On:
        return toggle_on(model)
        break


      case Type.Toggle_Off:
        return toggle_off(model)
        break


      case Type.Update_Project:
        const {project} = DataStore.Action.get_data(action)
        const modal = DataStore.Data.get_value(model)

        return (
          DataStore.Data.patch
            ( { value : Modal.patch({project}, modal) }
            , model
            )
        )
        break
    }

    return model
  }
