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
