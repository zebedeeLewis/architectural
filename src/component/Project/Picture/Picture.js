/**
 * Represents the urls for images to be displayed for a project at
 * different breakpoints.
 *
 * @typedef {Object} Model
 *
 * @property {string} thumbnail - the url for the thumbnail for this
 * picture set.
 *
 * @property {string} xs - url for the image to display on smallest
 * screen size.
 *
 * @property {string} sm - url for image to display on small screens.
 *
 * @property {string} md - url for image to display on medium screens.
 *
 * @property {string} lg - url for image to display on large screens.
 */



/**
 * Produce a new picture object
 *
 * @param {Partial<Mode>}
 *
 * @return {Model}
 */
export function create
  ( { thumbnail
    , xs
    , sm
    , md
    , lg
    }
  ) {
    return Object.freeze(
      { thumbnail : thumbnail || ''
      , xs        : xs  || ''
      , sm        : sm  || ''
      , md        : md  || ''
      , lg        : lg  || ''
      }
    )
  }



/**
 * Produce the thumbnail value from the given picture
 *
 * @param {Model}
 * @return {string}
 */
export function get_thumbnail( picture) { return picture.thumbnail }



/**
 * Produce the "xs" value from the given picture
 *
 * @param {Model}
 * @return {string}
 */
export function get_xs( picture) { return picture.xs }



/**
 * Produce the "sm" value from the given picture
 *
 * @param {Model}
 * @return {string}
 */
export function get_sm( picture) { return picture.sm }



/**
 * Produce the "md" value from the given picture
 *
 * @param {Model}
 * @return {string}
 */
export function get_md( picture) { return picture.md }



/**
 * Produce the "lg" value from the given picture
 *
 * @param {Model}
 * @return {string}
 */
export function get_lg( picture) { return picture.lg }


/**
 * Produce the image source of the given size from the Picture. Produce
 * the "thumbnail" image source if no size is given or if the size
 * argument is unsupported.
 *
 * @param {string} size - can be one of "xs", "sm", "md", "lg".
 * @param {Model} picture - the picture
 */
export function get_size
  ( size
  , picture
  ) {
    return picture[size] || picture.thumbnail
  }



