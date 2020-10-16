/**
 * @module Loader
 */


import { gsap } from 'gsap'



/**
 * Represents the state of the Loader.
 *
 * @typedef {{htmlElementId: string}} Model
 */

/**
 * Produce false if:
 *   - The given object does not have an "htmlElementSelector" attribute.
 *   - The given objects htmlElementSelector value is not a string.
 *
 * Otherwise produce true.
 *
 *
 * @function
 * @param  {*} possibleModel - This may or may not be a Model.
 * @return {Boolean}
 */
export const is_valid_model =
  ( possibleModel
  ) => (
       possibleModel.hasOwnProperty('htmlElementSelector')
    && typeof possibleModel.htmlElementSelector === 'string'
  )



/**
 * Produce a new Model.
 *
 * @function
 * @param {string} htmlElementSelector - Selector for one or more
 *   element in the DOM that the loader represents.
 * @return {Model}
 *
 * @throws {TypeError} The first argument must be a string
 */
export const Model =
  ( htmlElementSelector
  ) => {
    if (typeof htmlElementSelector !== 'string') {
      throw new TypeError(
        'First argument to Model constructor must be a string'
      )
    }

    return Object.freeze({ htmlElementSelector})
  }



/**
 * Represents a message indicating a milestone in the Loaders
 * progression.
 *
 *   - Initialized(string)
 *   - Start()
 *   - Started
 *   - Stop()
 *   - Stopped()
 *
 * @typedef {( {type : string}
 *          |  {type : string, htmlElementSelector : string}
 *          )} Message
 */



/**
 * Produce a new "Initialized" Message. Intended to informed that the
 * Loader has been successfully initialized.
 *
 * @function
 * @param {string} htmlElementSelector - Selector for one or more
 *   element in the DOM that the loader represents.
 * @return {Message}
 *
 * @throws {TypeError} The first argument must be a string
 */
export function Initialized
  ( htmlElementSelector
  ) {
    if (typeof htmlElementSelector !== 'string') {
      throw new TypeError(
        'First argument to Initialized constructor must be a string'
      )
    }

    return Object.freeze(
      Object.create
        ( Initialized.prototype
        , { htmlElementSelector : { value : htmlElementSelector } }
        )
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
  () { return Object.freeze(Object.create(Start.prototype, {})) }



/**
 * Produce a new "Started" Message. Intended to inform that the Loader
 * has been successfully started.
 *
 * @function
 * @return {Message}
 */
export function Started
  () { return Object.freeze(Object.create(Started.prototype, {})) }



/**
 * Produce a new "Stop" Message. Intended to be used as a command to
 * stop the Loader.
 *
 * @function
 * @return {Message}
 */
export function Stop
  () { return Object.freeze(Object.create(Stop.prototype, {})) }



/**
 * Produce a new "Stopped" Message. Intended to inform that the loader
 * has been successfully stopped.
 *
 * @function
 * @return {Message}
 */
export function Stopped
  () { return Object.freeze(Object.create(Stopped.prototype, {})) }



/**
 * Produce true if the given subject is the result of calling one of:
 *   - Initialized(string)
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
  ) => (
       (possibleMessage instanceof Start)
    || (possibleMessage instanceof Started)
    || (possibleMessage instanceof Stop)
    || (possibleMessage instanceof Stopped)
    || (possibleMessage instanceof Initialized)
  )



/**
 * Produce a new Model by updating the given Model according to the
 * given Message.
 *
 * @function
 * @param  {Message} message - describes how to alter the given Model
 * @param  {Model} model - Model initial state
 * @return {Model}
 *
 * @throws {TypeError} The first argument must be a valid Message
 * @throws {TypeError} The second argument must be a valid Model
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

    if (!is_valid_model(model)) {
      throw new TypeError(
        'Second argument to update function must be a valid Model'
      )
    }

    return (
      message instanceof Initialized
        ? Model(message.htmlElementSelector)
        : model
    )
  }
