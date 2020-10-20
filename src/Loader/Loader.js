/**
 * @TODO:
 *   - all functions that accept or Return a Result.Err, should return
 *     Result.Err<LoaderCore.Failure>
 */

import * as Result from '../Result/Result'
import * as LoaderCore from './Loader.core'



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
  'First argument to Model constructor must be a State'

export const MODEL_ARG2_ERROR =
  'First argument to Model constructor must be a string'

export const MODEL_ARG3_ERROR =
  'Second argument to Model constructor must be a funciton'

export const MODEL_ARG4_ERROR =
  'Third argument to Model constructor must be a funciton'

export const MODEL_ARG5_ERROR =
  'Fourth argument to Model constructor must be a funciton'

export const MODEL_ARG6_ERROR =
  'Fifth argument to Model constructor must be a funciton'

export const MODEL_ARG7_ERROR =
  'Sixth argument to Model constructor must be a funciton'

export const MODEL_ARG8_ERROR =
  'Seventh argument to Model constructor must be a funciton'



/* State ->
 * string ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * MessageHandler ->
 * Result<TypeError|Model>
 *
 * Perform type checking on arguments before passing them to
 * LoaderCore.Model.
 */
export const Model =
  ( state
  , htmlElementSelector
  , initializeHandler
  , initializedHandler
  , startHandler
  , startedHandler
  , stopHandler
  , stoppedHandler
  ) => (
    (!LoaderCore.is_valid_state(state))
      ? Result.Err(new TypeError(MODEL_ARG1_ERROR)) :

    (typeof htmlElementSelector !== 'string')
      ? Result.Err(new TypeError(MODEL_ARG2_ERROR)) :

    (typeof initializeHandler !== 'function')
      ? Result.Err(new TypeError(MODEL_ARG3_ERROR)) :

    (typeof initializedHandler !== 'function')
      ? Result.Err(new TypeError(MODEL_ARG4_ERROR)) :

    (typeof startHandler !== 'function')
      ? Result.Err(new TypeError(MODEL_ARG5_ERROR)) :
    
    (typeof startedHandler !== 'function')
      ? Result.Err(new TypeError(MODEL_ARG6_ERROR)) :

    (typeof stopHandler !== 'function')
      ? Result.Err(new TypeError(MODEL_ARG7_ERROR)) :

    (typeof stoppedHandler !== 'function')
      ? Result.Err(new TypeError(MODEL_ARG8_ERROR))

      : Result.Ok(
          LoaderCore.Model
            ( state
            , htmlElementSelector
            , initializeHandler
            , initializedHandler
            , startHandler
            , startedHandler
            , stopHandler
            , stoppedHandler
            )
        )
  )



/* Array<*> -> Result<TypeError|Initialize>
 *
 * Perform type checking on arguments before passing them to
 * LoaderCore.Initialize.
 */
export const Initialize =
  ( argv
  ) => (
    !(argv instanceof Array)
      ? Result.Err(new TypeError(INITIALIZE_ARG1_ERROR))
      : Result.Ok(LoaderCore.Initialize(argv))
  )



/* Array<*> -> Result<TypeError|Initialized>
 *
 * Perform type checking on arguments before passing them to
 * LoaderCore.Initialized.
 */
export const Initialized =
  ( argv
  ) => (
    !(argv instanceof Array)
      ? Result.Err(new TypeError(INITIALIZED_ARG1_ERROR))
      : Result.Ok(LoaderCore.Initialized(argv))
  )



/* Array<*> -> Result<TypeError|Start>
 *
 * Perform type checking on arguments before passing them to
 * LoaderCore.Start.
 */
export const Start =
  ( argv
  ) => (
    !(argv instanceof Array)
      ? Result.Err(new TypeError(START_ARG1_ERROR))
      : Result.Ok(LoaderCore.Start(argv))
  )



/* Array<*> -> Result<TypeError|Started>
 *
 * Perform type checking on arguments before passing them to
 * LoaderCore.Started.
 */
export const Started =
  ( argv
  ) => (
    !(argv instanceof Array)
      ? Result.Err(new TypeError(STARTED_ARG1_ERROR))
      : Result.Ok(LoaderCore.Started(argv))
  )



/* Array<*> -> Result<TypeError|Stop>
 *
 * Perform type checking on arguments before passing them to
 * LoaderCore.Stop.
 */
export const Stop =
  ( argv
  ) => (
    !(argv instanceof Array)
      ? Result.Err(new TypeError(STOP_ARG1_ERROR))
      : Result.Ok(LoaderCore.Stop(argv))
  )



/* Array<*> -> Result<TypeError|Stop>
 *
 * Perform type checking on arguments before passing them to
 * LoaderCore.Stopped.
 */
export const Stopped =
  ( argv
  ) => (
    !(argv instanceof Array)
      ? Result.Err(new TypeError(STOPPED_ARG1_ERROR))
      : Result.Ok(LoaderCore.Stopped(argv))
  )



/* Message -> Model -> Result<(TypeError|E)|Model>
 *
 * Perform type checking on arguments before passing them to
 * LoaderCore.update_according_to_message
 */
export const update_according_to_message =
  ( message
  , model
  ) => (
    !LoaderCore.is_valid_message(message)
      ? Result.Err(new TypeError(UPDATE_ARG1_ERROR)) :

    !(model instanceof Model)
      ? Result.Err(new TypeError(UPDATE_ARG2_ERROR))

      : LoaderCore.update_according_to_message(message, model)
  )
