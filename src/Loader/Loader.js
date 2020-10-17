/**
 * @module Loader
 */


import * as Gsap from 'gsap'



/**
 * Represents a function to be called by the update function when the
 * "Initialize" message is recieved.
 *
 * @callback InitializeHandler
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
 * @param {InitializeHandler} initializeHandler - Function fire when
 *   the Initialize message is released.
 * @return {Model}
 *
 * @throws {TypeError} The first argument must be a string
 */
export const Model =
  ( htmlElementSelector
  , initializeHandler
  ) => {
    if (typeof htmlElementSelector !== 'string') {
      throw new TypeError(
        'First argument to Model constructor must be a string'
      )
    }

    if (typeof initializeHandler !== 'function') {
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
          , initializeHandler :
              { value      : initializeHandler 
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
 *   InitializeHandler function.
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
 * Produce a new "Initialized" Message. Intended to inform that the
 * Loader has been initialized.
 *
 *
 * @return {Message}
 *
 * @throws {TypeError} The first argument must be an Array
 */
export function Initialized
  () {
    return Object.freeze(
      Object.create(Initialized.prototype , {})
    )
  }



/**
 * Produce a new "Start" Message. Intended to be used as a command toi
 * start the Loader.
 *
 * @function
 * @return {Message}
 */
export function Start
  () {
    return Object.freeze(
      Object.create(Start.prototype, {})
    )
  }



/**
 * Produce a new "Started" Message. Intended to inform that the Loader
 * has been successfully started.
 *
 * @function
 * @return {Message}
 */
export function Started
  () {
    return Object.freeze(
      Object.create(Started.prototype, {})
    ) 
  }



/**
 * Produce a new "Stop" Message. Intended to be used as a command to
 * stop the Loader.
 *
 * @function
 * @return {Message}
 */
export function Stop
  () {
    return Object.freeze(
      Object.create(Stop.prototype, {})
    )
  }



/**
 * Produce a new "Stopped" Message. Intended to inform that the loader
 * has been successfully stopped.
 *
 * @function
 * @return {Message}
 */
export function Stopped
  () {
    return Object.freeze(
      Object.create(Stopped.prototype, {})
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
        ? model.initializeHandler(message.argv, model)
        : model
    )
  }
