/**
 * Represents a project to be displayed in the Modal.
 *
 * @typedef {Object} Model
 *
 * @property {string} id - unique identifier for this project.
 *
 * @property {string} title - Short title used to describe this project.
 * This title will be used as the projects main heading.
 *
 * @property {boolean} featured - should this project be featured?
 * Featured projects are displayed on the landing page.
 *
 * @property {Spec.Model} specs - This projects specifications.
 *
 * @property {string} description - Long description for this project.
 *
 * @property {Array<Picture.Model>} pictures - A collection of pictures
 * of this project.
 */



/**
 * produce a new project Model.
 *
 * @param {Partial<Model>}
 *
 * @return {Model}
 */
export function create
  ( { id
    , title
    , featured
    , specs
    , description
    , pictures
    }
  ) {
    return Object.freeze(
      { id          : id || ''
      , title       : title || ''
      , featured    : featured || false
      , specs       : specs || {}
      , description : description || ''
      , pictures    : pictures || []
      }
    )
  }



/**
 * produce an updated project Model.
 *
 * @param {Partial<Model>}
 * @param {Project}
 *
 * @return {Model}
 */
export function patch
  ( { title
    , featured
    , specs
    , description
    , pictures
    }
  , model
  ) {
    return Object.freeze(
      { id          : id !== undefined ? id : project.id
      , title       : title !== undefined ? title : project.title
      , featured    : featured !== undefined
                        ? featured
                        : project.featured
      , specs       : specs !== undefined ? specs : project.specs
      , description : description !== undefined
                        ? description
                        : project.description
      , pictures    : pictures !== undefined
                        ? pictures
                        : project.pictures
      }
    )
  }



/**
 * Produce the "id" value from the given project
 *
 * @param {Model}
 * @return {string}
 */
export function get_id( project ){ return project.id }



/**
 * Produce the "title" value from the given project
 *
 * @param {Model}
 * @return {string}
 */
export function get_title( project ){ return project.title }



/**
 * Produce the "featured" value from the given project
 *
 * @param {Model}
 * @return {boolean}
 */
export function get_featured( project ){ return project.featured }



/**
 * Produce the "specs" value from the given project
 *
 * @param {Model}
 * @return {Spec.Model}
 */
export function get_specs( project ){ return project.specs }



/**
 * Produce the "description" value from the given project
 *
 * @param {Model}
 * @return {string}
 */
export function get_description( project ){ return project.description }



/**
 * Produce the "pictures" value from the given project
 *
 * @param {Model}
 * @return {Array<Picture.Model>}
 */
export function get_pictures( project ){ return project.pictures }


