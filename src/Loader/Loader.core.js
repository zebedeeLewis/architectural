/* Note: All functions in this module assume that they have been
 * provided with correct data. So they do not perform any kind of check
 * to ascertain the correctness of the given data. That function is
 * fulfilled by the wrapper Module "Loader.js".
 * 
 * TODO:
 *   - add a "state" field on the Model object and create a "Status" type
 *     with constructors for "Initializing", "Starting", "Running",
 *     "Stopping", "Finished".
 */

import * as Utils from "../Utils"



/**
 * Represents a function to be called by the update function in response
 * a corresponding Message.
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
 * @return {Result.<E|Model>}
 */



/**
 * Represents a snapshot of the Loader at a given point.
 *
 * @typedef { { htmlElementId      : string
 *            , initializeHandler  : MessageHandler
 *            , initializedHandler : MessageHandler
 *            , startHandler       : MessageHandler
 *            , startedHandler     : MessageHandler
 *            , stopHandler        : MessageHandler
 *            , stoppedHandler     : MessageHandler
 *            }
 *          } Model
 */



/* string ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * Model
 */
export function Model
  ( htmlElementSelector
  , initializeHandler
  , initializedHandler
  , startHandler
  , startedHandler
  , stopHandler
  , stoppedHandler
  ) {
    return (
      Utils.create_and_freeze
        ( Model.prototype
        , { htmlElementSelector :
              { value      : htmlElementSelector 
              , enumerable : true
              }
          , initializeHandler   :
              { value      : initializeHandler 
              , enumerable : true
              }
          , initializedHandler   :
              { value      : initializedHandler 
              , enumerable : true
              }
          , startHandler         :
              { value      : startHandler 
              , enumerable : true
              }
          , startedHandler       :
              { value      : startedHandler 
              , enumerable : true
              }
          , stopHandler          :
              { value      : stopHandler 
              , enumerable : true
              }
          , stoppedHandler       :
              { value      : stoppedHandler 
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
 * @typedef { ( Initialize
 *            | Initialized
 *            | Start
 *            | Started
 *            | Stop
 *            | Stopped
 *            )
 *          } Message
 */



/* Array<*> -> Message */
export function Initialize
  ( argv
  ) {
    return (
      Utils.create_and_freeze
        ( Initialize.prototype
        , { argv : {value: argv, enumerable : true} }
        )
    )
  }



/* Array<*> -> Message */
export function Initialized
  ( argv
  ) {
    return (
      Utils.create_and_freeze
        ( Initialized.prototype
        , { argv : {value: argv, enumerable : true}
          }
        )
    )
  }



/* Array<*> -> Message */
export function Start
  ( argv
  ) {
    return (
      Utils.create_and_freeze
        ( Start.prototype
        , { argv : {value: argv, enumerable : true} }
        )
    )
  }



/* Array<*> -> Message */
export function Started
  ( argv
  ) {
    return (
      Utils.create_and_freeze
        ( Started.prototype
        , { argv : {value: argv, enumerable : true} }
        )
    )
  }



/* Array<*> -> Message */
export function Stop
  ( argv
  ) {
    return (
      Utils.create_and_freeze
        ( Stop.prototype
        , { argv : {value: argv, enumerable : true}
          }
        )
    )
  }



/* Array<*> -> Message */
export function Stopped
  ( argv
  ) {
    return (
      Utils.create_and_freeze
        ( Stopped.prototype
        , { argv : {value: argv, enumerable : true}
          }
        )
    )
  }



/* Array<*> -> Boolean */
export const is_valid_message =
  ( possibleMessage
  ) => (possibleMessage instanceof Initialize)
    || (possibleMessage instanceof Initialized)
    || (possibleMessage instanceof Start)
    || (possibleMessage instanceof Started)
    || (possibleMessage instanceof Stop)
    || (possibleMessage instanceof Stopped)



/* Message -> Model -> Result<E|Model>
 *
 * @TODO!!!
 */
export const update_according_to_message =
  ( message
  , model
  ) => (
    message instanceof Initialize
      ? model.initializeHandler(message.argv, model)
      : Result.Ok(model)
  )
