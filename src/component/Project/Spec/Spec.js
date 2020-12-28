
/**
 * Represents a project specifications for an architectural project.
 *
 * @typedef {Object} Model
 * @property {string} address - the address of the architecture. 
 *
 * @property {string} role - the role we played on the project team.
 *
 * @property {Array<string>} architects - names of the architects from
 *   our team that worked on the project.
 *
 * @property {Date} started - the date when the project was started.
 *
 * @property {Date} completed - the date when the project was completed.
 *
 * @property {string} status - the projects current status.
 */



/**
 * produce a new spec object
 *
 * @param {Partial<Model>}
 * @return {Model}
 */
export function create
  ( { address
    , role
    , architects
    , started
    , completed
    , status
    }
  ){
    return Object.freeze(
      { address    : address || ''
      , role       : role || ''
      , architects : architects || []
      , started    : started || Date.now()
      , completed  : completed || null
      , status     : status || 'Progress'
      }
    )
  }


/**
 * produce an updated spec object
 *
 * @param {Partial<Model>}
 * @param {Model}
 * @return {Model}
 */
export function patch
  ( { address
    , role
    , architects
    , started
    , completed
    , status
    }
  , spec
  ){
    return Object.freeze(
      { address    : address !== undefined ? address : spec.address
      , role       : role !== undefined ? role : spec.role
      , architects : architects !== undefined ? architects : spec.role
      , started    : started !== undefined ? started : spec.started
      , completed  : completed !== undefined
                       ? completed
                       : spec.completed
      , status     : status !== undefined ? status : spec.status
      }
    )
  }




/**
 * produce the "address" value from the given spec
 *
 * @param {Model}
 * @return {string}
 */
export function get_address( spec ){ return spec.address }




/**
 * produce the "role" value from the given spec
 *
 * @param {Model}
 * @return {string}
 */
export function get_role( spec ){ return spec.role }



/**
 * produce the "architects" value from the given spec
 *
 * @param {Model}
 * @return {Array<string>}
 */
export function get_architects( spec ){ return spec.architects }



/**
 * produce the "started" value from the given spec
 *
 * @param {Model}
 * @return {Date}
 */
export function get_started( spec ){ return spec.started }



/**
 * produce the "completed" value from the given spec
 *
 * @param {Model}
 * @return {Date}
 */
export function get_completed( spec ){ return spec.completed }



/**
 * produce the "status" value from the given spec
 *
 * @param {Model}
 * @return {string}
 */
export function get_status( spec ){ return spec.status }

