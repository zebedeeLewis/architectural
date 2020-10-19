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
 *
 *   - add a "state" field on the Model object and create a "Status" type
 *     with constructors for "Initializing", "Starting", "Running",
 *     "Stopping", "Finished".
 */


import * as Result from '../Result/Result'
import * as Gsap from 'gsap'



export const INITIALIZE_ARG1_ERROR = 
  'First argument to Initialize constructor must be an Array'

export const INITIALIZED_ARG1_ERROR = 
  'First argument to Initialized constructor must be an Array'

export const START_ARG1_ERROR = 
  'First argument to Start constructor must be an Array'

export const STARTED_ARG1_ERROR = 
  'First argument to Started constructor must be an Array'

export const STOP_ARG1_ERROR = 
  'First argument to Stop constructor must be an Array'

export const STOPPED_ARG1_ERROR = 
  'First argument to Stopped constructor must be an Array'

export const UPDATE_ARG1_ERROR =
  'First argument to update function must be a valid Message'

export const UPDATE_ARG2_ERROR =
  'Second argument to update function must be a valid Model'

export const MODEL_ARG1_ERROR =
  'First argument to Model constructor must be a string'

export const MODEL_ARG2_ERROR =
  'Second argument to Model constructor must be a funciton'

export const MODEL_ARG3_ERROR =
  'Third argument to Model constructor must be a funciton'

export const MODEL_ARG4_ERROR =
  'Fourth argument to Model constructor must be a funciton'

export const MODEL_ARG5_ERROR =
  'Fifth argument to Model constructor must be a funciton'

export const MODEL_ARG6_ERROR =
  'Sixth argument to Model constructor must be a funciton'

export const MODEL_ARG7_ERROR =
  'Seventh argument to Model constructor must be a funciton'



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
 * Represents a snapshot of the Loader at a given point.
 *
 * @typedef {{htmlElementId: string}} Model
 */

/**
 * Produce a new Model.
 *
 *
 * @function
 *
 * @param {string} htmlElementSelector - Selector for one or more
 * element in the DOM that the loader represents.
 *
 * @param {MessageHandler} initializeHandler - Fires in response to the
 * Initialize message.
 *
 * @param {MessageHandler} initializedHandler - Fires in response to the
 * Initialized message.
 *
 * @param {MessageHandler} startHandler - Fires in response to the Start
 * message.
 *
 * @param {MessageHandler} startedHandler - Fires in response to the
 * Started message.
 *
 * @param {MessageHandler} stopHandler - Fires in response to the Stop
 * message.
 *
 * @param {MessageHandler} stoppedHandler - Fires in response to the
 * Stopped message.
 *
 * @return {Model}
 *
 * @throws {TypeError} The first argument must be a string
 */
export const Model =
  ( htmlElementSelector
  , initializeHandler
  , initializedHandler
  , startHandler
  , startedHandler
  , stopHandler
  , stoppedHandler
  ) => {
    if (typeof htmlElementSelector !== 'string') {
      return Result.Err(new TypeError(MODEL_ARG1_ERROR))
    }

    if (typeof initializeHandler !== 'function') {
      return Result.Err(new TypeError(MODEL_ARG2_ERROR))
    }

    if (typeof initializedHandler !== 'function') {
      return Result.Err(new TypeError(MODEL_ARG3_ERROR))
    }

    if (typeof startHandler !== 'function') {
      return Result.Err(new TypeError(MODEL_ARG4_ERROR))
    }
    
    if (typeof startedHandler !== 'function') {
      return Result.Err(new TypeError(MODEL_ARG5_ERROR))
    }

    if (typeof stopHandler !== 'function') {
      return Result.Err(new TypeError(MODEL_ARG6_ERROR))
    }

    if (typeof stoppedHandler !== 'function') {
      return Result.Err(new TypeError(MODEL_ARG7_ERROR))
    }

    return Result.Ok(
      Object.freeze(
        Object.create
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
 * Produce Ok.<Initialize>. It produces Err.<TypeError> if given invalid
 * arguments. The "Initialize" Message is Intended to be used as a
 * command to initialize the Loader.
 *
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of MessageHandler expects.
 *
 *
 * @return {Result.<TypeError|Initialize>}
 */
export function Initialize
  ( argv
  ) {
    return (
      !(argv instanceof Array)
        ? Result.Err(new TypeError(INITIALIZE_ARG1_ERROR))
        : Result.Ok
            ( Object.freeze
                ( Object.create
                    ( Initialize.prototype
                    , { argv : {value: argv, enumerable : true} }
                    )
                )
            )
    )
  }



/**
 * Produce Ok.<Initialized>. It produces Err.<TypeError> if given
 * invalid arguments. The "Initialized" Message is Intended to inform
 * that the Loader has been initialized.
 *
 *
 * @function
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of MessageHandler expects.
 *
 * @return {Result.<TypeError|Initialized>}
 */
export function Initialized
  ( argv
  ) {
    return (
      !(argv instanceof Array)
        ? Result.Err(new TypeError(INITIALIZED_ARG1_ERROR))
        : Result.Ok
            ( Object.freeze
                ( Object.create
                    ( Initialized.prototype
                    , { argv : {value: argv, enumerable : true} }
                    )
                )
            )
    )
  }



/**
 * Produce Ok.<Start>. It produces Err.<TypeError> if given invalid
 * arguments. The Start Message is intended to be used as a command
 * to start the Loader.
 * 
 * @function
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of MessageHandler expects.
 *
 * @return {Message}
 */
export function Start
  ( argv
  ) {
    return (
      !(argv instanceof Array)
        ? Result.Err(new TypeError(START_ARG1_ERROR))
        : Result.Ok
            ( Object.freeze
                ( Object.create
                    ( Start.prototype
                    , { argv : {value: argv, enumerable : true} }
                    )
                )
            )
    )
  }



/**
 * Produce Ok.<Started>. It produces Err.<TypeError> if given
 * invalid arguments. The "Started" Message is Intended to inform
 * that the Loader has been Started.
 *
 * @function
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of MessageHandler expects.
 *
 * @return {Result.<TypeError|Started>}
 */
export function Started
  ( argv
  ) {
    return (
      !(argv instanceof Array)
        ? Result.Err(new TypeError(STARTED_ARG1_ERROR))
        : Result.Ok
            ( Object.freeze
                ( Object.create
                    ( Started.prototype
                    , { argv : {value: argv, enumerable : true} }
                    )
                )
            )
    )
  }



/**
 * Produce Ok.<Stop>. It produces Err.<TypeError> if given invalid
 * arguments. The Stop Message is intended to be used as a command
 * to stop the Loader.
 *
 * @function
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of the MessageHandler for this
 *   message expects.
 *
 * @return {Result.<TypeError|Stop>}
 */
export function Stop
  ( argv
  ) {
    return (
      !(argv instanceof Array)
        ? Result.Err(new TypeError(STOP_ARG1_ERROR))
        : Result.Ok
            ( Object.freeze
                ( Object.create
                    ( Stop.prototype
                    , { argv : {value: argv, enumerable : true} }
                    )
                )
            )
    )
  }



/**
 * Produce Ok.<Stopped>. It produces Err.<TypeError> if given
 * invalid arguments. The "Stopped" Message is Intended to inform
 * that the Loader has been stopped.
 *
 * @function
 *
 * @param {Array.<*>} argv - a user supplied array to be passed to the
 *   MessageHandler function. The content of the array depends on
 *   what the specific implementation of the MessageHandler for this
 *   message expects.
 *
 * @return {Result.<TypeError|Stop>}
 */
export function Stopped
  ( argv
  ) {
    return (
      !(argv instanceof Array)
        ? Result.Err(new TypeError(STOPPED_ARG1_ERROR))
        : Result.Ok
            ( Object.freeze
                ( Object.create
                    ( Stopped.prototype
                    , { argv : {value: argv, enumerable : true} }
                    )
                )
            )
    )
  }



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
  ) => (possibleMessage instanceof Initialize)
    || (possibleMessage instanceof Initialized)
    || (possibleMessage instanceof Start)
    || (possibleMessage instanceof Started)
    || (possibleMessage instanceof Stop)
    || (possibleMessage instanceof Stopped)



/**
 * Produce a new Model by updating the given Model according to the
 * given Message.
 *
 * @function
 * @param  {Message} message - describes how to alter the given Model
 * @param  {Model} model - Model initial state
 * @return {Result.<TypeError|Model>}
 *
 * @TODO!!!
 */
export const update =
  ( message
  , model
  ) => {
    if (!is_valid_message(message)) {
      return Result.Err(
        new TypeError(UPDATE_ARG1_ERROR)
      )
    }

    if (!(model instanceof Model)) {
      return Result.Err(
        new TypeError(UPDATE_ARG2_ERROR)
      )
    }

    return (
      message instanceof Initialize
        ? model.initializeHandler(message.argv, model)
        : Result.Ok(model)
    )
  }
