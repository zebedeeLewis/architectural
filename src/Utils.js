
/**
 * Create a new frozen object with the given prototype and
 * propertiesObject.
 *
 * @property {(Object|Null)} - This is the object that will be set
 * as the newly created objects prototype.
 *
 * @property {?Object} propertiesObject - an object containing the
 * descriptors for the newly created Objects properties. See the
 * documentation for Object.create for more information.
 *
 * @return {Object}
 */
export const create_and_freeze =
  ( prototype
  , properties
  ) => Object.freeze(Object.create(prototype, properties))

