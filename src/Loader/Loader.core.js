/* Note: All functions in this module assume that they have been
 * provided with correct data. So they do not perform any kind of check
 * to ascertain the correctness of the given data. That function is
 * fulfilled by the wrapper Module "Loader.js".
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
 * Describes the current state of a Loader at a given point.
 *
 * @typedef { ( Initializing
 *            | InitializedState
 *            | Starting
 *            | Running
 *            | Stopping
 *            | Finished
 *            )
 *          } State
 */



/* * -> Boolean */
export const is_valid_state =
  ( possibleState
  ) => (possibleState instanceof Initializing)
    || (possibleState instanceof InitializedState)
    || (possibleState instanceof Starting)
    || (possibleState instanceof Running)
    || (possibleState instanceof Stopping)
    || (possibleState instanceof Finished)



/* State */
export function Initializing
  () {
    return (
      Utils.create_and_freeze
        ( Initializing.prototype
        , { id :
              { value      : 'Initializing'
              , enumerable : true
              }
          }
        )
    )
  }



/* State */
export function InitializedState
  () {
    return (
      Utils.create_and_freeze
        ( InitializedState.prototype
        , { id :
              { value      : 'InitializedState'
              , enumerable : true
              }
          }
        )
    )
  }



/* State */
export function Starting
  () {
    return (
      Utils.create_and_freeze
        ( Starting.prototype
        , { id :
              { value      : 'Starting'
              , enumerable : true
              }
          }
        )
    )
  }



/* State */
export function Running
  () {
    return (
      Utils.create_and_freeze
        ( Running.prototype
        , { id :
              { value      : 'Running'
              , enumerable : true
              }
          }
        )
    )
  }



/* State */
export function Stopping
  () {
    return (
      Utils.create_and_freeze
        ( Stopping.prototype
        , { id :
              { value      : 'Stopping'
              , enumerable : true
              }
          }
        )
    )
  }



/* State */
export function Finished
  () {
    return (
      Utils.create_and_freeze
        ( Finished.prototype
        , { id :
              { value      : 'Finished'
              , enumerable : true
              }
          }
        )
    )
  }



/**
 * Represents a snapshot of the Loader at a given point.
 *
 * @typedef { { state              : State
 *            , htmlElementId      : string
 *            , initializeHandler  : MessageHandler
 *            , initializedHandler : MessageHandler
 *            , startHandler       : MessageHandler
 *            , startedHandler     : MessageHandler
 *            , stopHandler        : MessageHandler
 *            , stoppedHandler     : MessageHandler
 *            }
 *          } Model
 */



/* State ->
 * string ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * Model
 */
export function Model
  ( state
  , htmlElementSelector
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
        , { state               :
              { value      : state 
              , enumerable : true
              }
          , htmlElementSelector :
              { value      : htmlElementSelector 
              , enumerable : true
              }
          , initializeHandler   :
              { value      : initializeHandler 
              , enumerable : true
              }
          , initializedHandler  :
              { value      : initializedHandler 
              , enumerable : true
              }
          , startHandler        :
              { value      : startHandler 
              , enumerable : true
              }
          , startedHandler      :
              { value      : startedHandler 
              , enumerable : true
              }
          , stopHandler         :
              { value      : stopHandler 
              , enumerable : true
              }
          , stoppedHandler      :
              { value      : stoppedHandler 
              , enumerable : true
              }
          }
        )
    )
  }



/* State -> Model -> Model */
export const set_state_to =
  ( newState
  , model
  ) => (
    Model
      ( newState
      , model.htmlElementSelector
      , model.initializeHandler
      , model.initializedHandler
      , model.startHandler
      , model.startedHandler
      , model.stopHandler
      , model.stoppedHandler
      )
  )



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



/* * -> Boolean */
export const is_valid_message =
  ( possibleMessage
  ) => (possibleMessage instanceof Initialize)
    || (possibleMessage instanceof Initialized)
    || (possibleMessage instanceof Start)
    || (possibleMessage instanceof Started)
    || (possibleMessage instanceof Stop)
    || (possibleMessage instanceof Stopped)



/* Message -> Model -> Result<E|Model> */
export const update_according_to_message =
  ( message
  , model
  ) => (
    message instanceof Initialize
      ? set_state_to
          ( Initializing()
          , model.initializeHandler(message.argv, model)
          ) :

    message instanceof Initialized
      ? set_state_to
          ( InitializedState()
          , model.initializedHandler(message.argv, model)
          ) :

    message instanceof Start
      ? set_state_to
          ( Starting()
          , model.startHandler(message.argv, model)
          ) :

    message instanceof Started
      ? set_state_to
          ( Running()
          , model.startedHandler(message.argv, model)
          ) :

    message instanceof Stop
      ? set_state_to
          ( Stopping()
          , model.stopHandler(message.argv, model)
          ) :

    message instanceof Stopped
      ? set_state_to
          ( Finished()
          , model.stoppedHandler(message.argv, model)
          ) :

        Result.Ok(model)
  )
