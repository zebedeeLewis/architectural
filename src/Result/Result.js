/**
 * @module Result
 */


/**
 * Represents the result of an operation that could either fail or
 * succeed.
 *
 * @typedef {( Err.<E>, Ok.<T>)} Result.<E|T>
 */



/**
 * Represents the result of an operation that has failed. It provides
 * an option to returna additional information about the failure.
 *
 * @param {E} error - an error object that provides additional
 * information about the failure.
 *
 * @return {Result.<E>}
 */
export const Err =
  ( error
  ) => Object.freeze(
    Object.create
      ( Err.prototype
      , { error :
            { value      : error
            , enumerable : true
            }
        }
      )
  )



/**
 * Represents the result of an operation that has succeded.
 *
 * @param {T} value - the result of the successful operation.
 *
 * @return {Result.<T>}
 */
export const Ok =
  ( value
  ) => Object.freeze(
    Object.create
      ( Ok.prototype
      , { value :
            { value      : value
            , enumerable : true
            }
        }
      )
  )

