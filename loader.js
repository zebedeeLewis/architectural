/**
 * @module Loader
 */


import { gsap } from 'gsap'



/**
 * Represents the states of the loader. Can be any one of the following:
 *   - StatusInitialized(): The loader has recieved the
 *     LoaderInitialized() message.
 *
 *   - LoaderStarting(): The loader has recieved the
 *     StartLoader() message and is starting.
 *     
 *   - LoaderStarted: The loader has recieved the LoaderStarted()
 *     message to indicate that it has started.
 *
 *   - LoaderStopping(): The loader has recieved the StopLoader()
 *     message and is stopping.
 *
 *   - LoaderStopped(): The loader has recieved the LoaderStopped()
 *     message to indicate that it has stopped.
 *
 *
 * @typedef Status
 */

/** @constructs Status */
export const StatusInitialized = () => 'STATUS_INITIALIZED'
/** @constructs Status */
export const LoaderStarting    = () => 'LOADER_STARTING'
/** @constructs Status */
export const LoaderStarted     = () => 'LOADER_STARTED'
/** @constructs Status */
export const LoaderStopping    = () => 'LOADER_STOPPING'
/** @constructs Status */
export const LoaderStopped     = () => 'LOADER_STOPPED'



/**
 * Represents the state of the loader.
 *
 * @typedef {{status: Status, htmlElementId: string}} Model
 */

/**
 * Produce false if:
 *   - the given model status is not one of the options in the
 *     Status enumeration (see Status constant definition
 *     above).
 *
 * Otherwise produce true.
 *
      { status              : status
      , loaderSelector      : loaderSelector
      }
 *
 * @function
 * @param  {*} possibleModel - This may or may not be a Model.
 * @return {Boolean}
 * @TODO!!!
 */
export const is_valid_model =
  ( model
  ) => (
    true
  )



/**
 * @constructs Model
 * @param {Status} status
 * @param {string} htmlElementId
 * @TODO!!!
 */
export const Model =
  ( status
  , htmlElementId
  ) => {
    return Object.freeze(
      { status        : status
      , htmlElementId : htmlElementId
      }
    )
  }



/**
 * @constructs Model
 * @param {Model} model - The model we want to update
 * @param {Status} status - The new status we want to assign to the
 *   model.
 * @param {string} htmlElementId - The new selector we want to
 *   assign to the model.
 *
 * @TODO!!!
 */
export const copy__model =
  ( model
  , status
  , loaderSelector
  ) => {
    return Object.freeze(
      { status        : status
      , htmlElementId : htmlElementId
      }
    )
  }























/**
 * Represents all accepted loading message ids.
 * 
 * @typedef MessageId
 * @readonly
 * @enum {number}
 *
 * @property {MessageId} INFO_LOADER_INITIALIZED - sent when the loader
 *   has been initialized.
 *
 * @property {MessageId} START_LOADER - sent to start the loader.
 *
 * @property {MessageId} INFO_LOADER_STARTED - sent after the loader
 *   has started.
 *
 * @property {MessageId} STOP_LOADER - sent to stop the loader.
 *
 * @property {MessageId} INFO_LOADER_STOPPED - sent when the loader has
 *   stopped.
 */
export const MessageId = Object.freeze(
  { INFO_LOADER_INITIALIZED : 0
  , START_LOADER            : 1
  , INFO_LOADER_STARTED     : 2
  , STOP_LOADER             : 3
  , INFO_LOADER_STOPPED     : 4
  }
)



/**
 * A message is sent to trigger an action. A message can also
 * store whatever values needed for the fulfillment of that action.
 *
 * @typedef {{ id : string, argv : Array.<*> }} Message
 */



/**
 * Represents a callback that knows how to lift a Loader Message to 
 * a top level Message. A top level message is essentially a message
 * defined in the main application module.
 *
 * @callback TopLevelLift
 * @param {Message} - this could be any type of message.
 * @return {TopLevelMessage}
 * /



/**
 * Produce true if the given id is a valid message id or false
 * if not.
 *
 * Note: this function references the global constant MessageId
 *
 * @function
 * @param  {MessageId} id
 * @return {Boolean}
 */
export const is_valid_message_id =
  ( id
  ) => (
    Object.values(MessageId).indexOf(id) === -1
      ? false
      : true
  )



/**
 * Produce null if given an invalid message id, or if the argv
 * argument is not an array. Produces a new Message if given valid
 * arguments.
 *
 * @function
 * @param  {MessageId} id - one of the enumerated message ids
 * @param  {Array.<*>} argv - any argument needed by the message.
 * @return {(Message|Null)}
 */
export const create_new_message =
  ( id
  , argv
  ) => (
    !(argv instanceof Array) || !is_valid_message_id(id)
      ? null
      : { id, argv }
  )



/**
 * Produces false if:
 *   - argument does not have an id attribute
 *   - argument does not have an argv attribute
 *   - id attribute is not a valid MessageId
 *   - argv is not an Array
 *
 * otherwise produce true
 *
 * @function
 * @param  {*} possibleMessage
 * @return {Boolean}
 */
export const is_valid_message =
  ( possibleMessage
  ) => (
    possibleMessage.hasOwnProperty('id')
    && possibleMessage.hasOwnProperty('argv')
    && (possibleMessage.argv instanceof Array)
    && is_valid_message_id(possibleMessage.id)
  )



/**
 * Produce a new Model by updating the given Model according to the
 * specifications in the given Message. Produce null if given an
 * invalid message or model.
 *
 * Note: this function references the global constants Model and
 * MessageId.
 *
 * @function
 * @param  {Message} message - describes how to alter the given Model
 * @param  {Model} model - Model initial state
 * @return {(Model|Null)}
 */
export const update_loader_model =
  ( message
  , model
  ) => {
    if ( !is_valid_message(message) || !is_valid_model(model)) {
      return null
    }


    switch (message.id) {
      case MessageId.INFO_LOADER_INITIALIZED:
        return { ... model
               , status : Status.INITIALIZED
               }
        break

      case MessageId.START_LOADER:
        return { ... model
               , status: Status.LOADER_STARTING
               }
        break

      case MessageId.INFO_LOADER_STARTED:
        return { ... model
               , status: Status.LOADER_STARTED
               }
        break

      case MessageId.STOP_LOADER:
        return { ... model
               , status: Status.LOADER_STOPPING
               }
        break

      case MessageId.INFO_LOADER_STOPPED:
        return { ... model
               , status: Status.LOADER_STOPPED
               }
        break

      default:
        return { ... model
               , status: null
               }
    }
  }



/**
 * Set the display css property of the given element to
 * block.
 *
 * @function
 * @param {HTMLElement} element - the element we want shown.
 * @return {HTMLElement}
 */
export const show__block_element =
  ( element
  ) => {
    element.style.display = 'block'
    return element
  }



/**
 * Produce the initial state of the loader model.
 *
 * @function
 * @param  {HTMLElement} rootElement - the html element in the DOM
 *   where the componentElement will be inserted. Ideally this element
 *   should have no children.
 *
 * @param  {HTMLElement} loaderElement - the html element representing
 *   the loader.
 *
 * @return {Model}
 */
export const init__loader_model =
  ( rootElement
  , loaderElement
  ) => (
   { status      : Status.LOADER_INITIALIZED
   , htmlElement : show__block_element(loaderElement)
   }
  )



/**
 * Produce a new view of the given Model.
 *
 * @function
 *
 * @param {Controller} controller - this is a reference to
 *   the controller instance for the current process.
 *
 * @param {TopLevelLift} lift_to__top_level_message -
 *   this is a callback that knows how to lift a Loader Message to a top
 *   level Message.
 *
 * @param {HTMLElement} window -
 *   this is the DOM window element
 *
 * @param {HTMLElement} document -
 *   this is the DOM document element
 *
 * @param {Model} model -
 *   the model of the current loader state
 *
 * @return {HTMLElement}
 */
export const view_loader =
  ( controller
  , lift_to__top_level_message
  , window
  , document
  , model
  ) => {
    switch(model) {
      case Model.LOADER_STARTING:
        animate__starting_loader
          ( controller
          , lift_to__top_level_message
          , model.htmlElement
          , gsap.timeline()
          )
        break

      case Model.LOADER_STOPPING:
        animate__stopping_loader
          ( controller
          , lift_to__top_level_message
          , model.htmlElement
          , gsap.timeline()
          )
        break

        /*
      case Model.LOADER_STOPPED:
        innerHtml = view__stopped_loader(model)
        break
        */
    }

    return loaderElement
  }



/**
 * Give the given loader a starting animation.
 *
 * @function
 *
 * @param {Controller} controller - this is a reference to
 *   the controller instance for the current process.
 *
 *  @param {TopLevelLift} lift_to__top_level_message - this is a callback
 *    that knows how to lift a Loader Message to a top level Message.
 * 
 * @param {HTMLElement} loaderElement - this is the DOM element that
 *   represents the loader.
 *
 * @param {GsapTimeline} gsapTimeline - this is the timeline that the
 *   animation will run on.
 *
 * @return {undefined}
 */
const animate__starting_loader =
  ( controller
  , lift_to__top_level_message
  , loaderElement
  , gsapTimeline
  ) => {
    const loaderStartedMessage =
      create_message(MessageId.INFO_LOADER_STARTED, [])
    const topLevelLoaderStartedMessage =
      lift_to__top_level_message(loaderStartedMessage)

    gsapTimeline
      .to( loaderElement
         , { rotationY   : '360deg'
           , yoyo        : true
           , repeate     : -1
           , delay       :  0.1
           , stagger     :  0.3
           , onComplete : ()=> {
               gsapTimeline.kill()
               controller.dispatch_message(topLevelLoaderStartedMessage)
             }
           }
         )
  }



/**
 * Give the given loader a stopping animation.
 *
 * @function
 *
 * @param {Controller} controller - this is a reference to
 *   the controller instance for the current process.
 *
 *  @param {TopLevelLift} lift_to__top_level_message - this is a callback
 *    that knows how to lift a Loader Message to a top level Message.
 * 
 * @param {HTMLElement} loaderElement - this is the DOM element that
 *   represents the loader.
 *
 * @param {GsapTimeline} gsapTimeline - this is the timeline that the
 *   animation will run on.
 *
 * @return {undefined}
 */
const animate__stopping_loader =
  ( controller
  , lift_to__top_level_message
  , loaderElement
  , gsapTimeline
  ) => {
    const loaderStoppedMessage =
      create_message(MessageId.INFO_LOADER_STOPPED, [])
    const topLevelLoaderStoppedMessage =
      lift_to__top_level_message(loaderStoppedMessage)

    gsapTimeline
      .to( loaderElement
         , { duration   : 0.8
           , opacity    : 0
           , onComplete : ()=> {
               gsapTimeline.kill()
               controller.dispatch_message(topLevelLoaderStoppedMessage)
             }
           }
         )
  }

