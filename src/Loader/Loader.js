/**
 * @module Loader
 * @TODO:
 *   - currently all functions that do type checking or any type of
 *     check before the main action is executed will throw an error
 *     if the checks fail. I personally believe that throwing errors
 *     should be reserved for the topmost layer of an application. So
 *     I want to refactor this module so that each function that could
 *     fail returns a Results.Err on failure or Results.Ok on success.
 *     Results.Err could encapsulate some additional information about
 *     the failure and Results.Ok could encapsulate the success value.
 */


import * as Gsap from 'gsap'



/**
 * Represents a function to be called by the update function when the
 * "Initialize" message is recieved.
 *
 * @callback MessageHandler
 *
 * @param {Array.<*>} argv - the "argv" array recieved from the
 *   Initialize message.
 *
 * @param {Model} model - recieved from the update function. The update
 *   function performs it's internal transformations on the model before
 *   passing it to this handler.
 *
 * @return {Model}
 */



/**
 * Represents the state of the Loader.
 *
 * @typedef {{htmlElementId: string}} Model
 */

/**
 * Produce a new Model.
 *
 * @function
 * @param {string} htmlElementSelector - Selector for one or more
 *   element in the DOM that the loader represents.
 * @param {MessageHandler} messageHandler - Function fire when
 *   the Initialize message is released.
 * @return {Model}
 *
 * @throws {TypeError} The first argument must be a string
 */
export const Model =
  ( htmlElementSelector
  , messageHandler
  ) => {
    if (typeof htmlElementSelector !== 'string') {
      throw new TypeError(
        'First argument to Model constructor must be a string'
      )
    }

    if (typeof messageHandler !== 'function') {
      throw new TypeError(
        'Second argument to Model constructor must be a function'
      )
    }

    return Object.freeze(
      Object.create
        ( Initialize.prototype
        , { htmlElementSelector :
              { value      : htmlElementSelector 
              , enumerable : true
              }
          , messageHandler :
              { value      : messageHandler 
              , enumerable : true
              }
          }
        )
    )
  }



/**
 * Represents a message indicating a milestone in the Loaders
 * progression.
 *
 *   - Initialize(string)
 *   - Initialized()
 *   - Start()
 *   - Started
 *   - Stop()
 *   - Stopped()
 *
 * @typedef { ( Initialize
 *            | Initialized
 *            | Start
 *            | Started
 *            | Stop
 *            | Stopped
 *            )
 *          } Message
 */



/**
 * Produce a new "Initialize" Message. Intended to be used as a command
 * to initialize the Loader.
 *
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of MessageHandler expects.
 *
 *
 * @return {Message}
 *
 * @throws {TypeError} The first argument must be an Array
 */
export function Initialize
  ( argv
  ) {
    if (!(argv instanceof Array)) {
      throw new TypeError(
        'First argument to Initialize constructor must be an Array'
      )
    }

    return Object.freeze(
      Object.create
        ( Initialize.prototype
        , { argv :
              { value      : argv
              , enumerable : true
              }
          }
        )
    )
  }



/**
 * Produce a new "Start" Message. Intended to be used as a command to
 * start the Loader.
 *
 * 
 * @function
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of MessageHandler expects.
 *
 * @return {Message}
 */
export const Start =
  ( argv
  ) => Object.freeze(
    Object.create
      ( Start.prototype
      , { argv :
            { value      : argv
            , enumerable : true
            }
        }
      )
  )



/**
 * Produce a new "Started" Message. Intended to inform that the Loader
 * has been successfully started.
 *
 * @function
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of MessageHandler expects.
 *
 * @return {Message}
 */
export const Started =
  ( argv
  ) => Object.freeze(
    Object.create
      ( Started.prototype
      , { argv :
            { value      : argv
            , enumerable : true
            }
        }
      )
  ) 



/**
 * Produce a new "Stop" Message. Intended to be used as a command to
 * stop the Loader.
 *
 * @function
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of the MessageHandler for this
 *   message expects.
 *
 * @return {Message}
 */
export const Stop =
  ( argv
  ) =>  Object.freeze(
    Object.create
      ( Stop.prototype
      , { argv :
            { value      : argv
            , enumerable : true
            }
        }
      )
  )



/**
 * Produce a new "Stopped" Message. Intended to inform that the loader
 * has been successfully stopped.
 *
 * @function
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of the MessageHandler for this
 *   message expects.
 *
 * @return {Message}
 */
export const Stopped =
  ( argv
  ) => Object.freeze(
    Object.create
      ( Stopped.prototype
      , { argv :
            { value      : argv
            , enumerable : true
            }
        }
      )
  )



/**
 * Produce true if the given subject is the result of calling one of:
 *   - Initialize(Array)
 *   - Initialized()
 *   - Start()
 *   - Started()
 *   - Stop()
 *   - Stopped()
 *
 * Otherwise produce false.
 *
 *
 * @function
 * @param  {*} possibleMessage - This may or may not be a Message.
 * @return {Boolean}
 */
export const is_valid_message =
  ( possibleMessage
  ) => (possibleMessage instanceof Start)
    || (possibleMessage instanceof Started)
    || (possibleMessage instanceof Stop)
    || (possibleMessage instanceof Stopped)
    || (possibleMessage instanceof Initialize)



/**
 * Produce a new Model by updating the given Model according to the
 * given Message.
 *
 * @function
 * @param  {Message} message - describes how to alter the given Model
 * @param  {Model} model - Model initial state
 * @return {Model}
 *
 * @throws {TypeError} "First argument to update function must be a
 *   valid Message"

 * @throws {TypeError} "Second argument to update function must be a
 *   valid Model"
 *
 * @TODO!!!
 */
export const update =
  ( message
  , model
  ) => {
    if (!is_valid_message(message)) {
      throw new TypeError(
        'First argument to update function must be a valid Message'
      )
    }

    if (!(model instanceof Model)) {
      throw new TypeError(
        'Second argument to update function must be a valid Model'
      )
    }

    return (
      message instanceof Initialize
        ? model.messageHandler(message.argv, model)
        : model
    )
  }
