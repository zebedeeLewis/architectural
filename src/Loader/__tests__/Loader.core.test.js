import * as Loader from "../Loader"
import * as Result from "../../Result/Result"



const STATE_UNSET = Loader.Unset()
const STATE_INITIALIZING = Loader.Initializing()
const STATE_INITIALIZED = Loader.InitializedState()
const STATE_STARTING = Loader.Starting()
const STATE_RUNNING = Loader.Running()
const STATE_STOPPING = Loader.Stopping()
const STATE_FINISHED = Loader.Finished()



const MESSAGE_INITIALIZE = Loader.Initialize([])
const MESSAGE_INITIALIZED = Loader.Initialized([])
const MESSAGE_START = Loader.Start([])
const MESSAGE_STARTED = Loader.Started([])
const MESSAGE_STOP = Loader.Stop([])
const MESSAGE_STOPPED = Loader.Stopped([])



function make_test_value__result_err
  ( error
  ) {
    return Result.ErrFactory({error})
  }



function make_test_value__result_ok
  ( value
  ) {
    return Result.OkFactory({value})
  }



function dummyHandler
  ( argv
  , model
  ) {
    return make_test_value__result_ok(model)
  }



function make_test_value__model
  () {
    return Loader.ModelFactory(
      { state                : Loader.Unset
      , htmlElementSelector  : 'testHtmlSelector'
      , initializeHandler    : dummyHandler
      , initializedHandler   : dummyHandler
      , startHandler         : dummyHandler
      , startedHandler       : dummyHandler
      , stopHandler          : dummyHandler
      , stoppedHandler       : dummyHandler
      }
    )
  }



function make_test_value__failure
  ( error
  , model
  ) {
    return Loader.FailureFactory({error, model})
  }



describe
  ( 'is_unset_state'
  , () => {
      it( 'Produces true if the given value is a Unset State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_unset_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(STATE_UNSET)
          }
        )

      it( 'Produces false if the given value is not a Unset State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_unset_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(STATE_INITIALIZED)
            do_test(STATE_STARTING)
            do_test(STATE_STOPPING)
            do_test(STATE_FINISHED)
            do_test(STATE_INITIALIZING)
          }
        )
    }
  )



describe
  ( 'is_initializing_state'
  , () => {
      it( 'Produces true if the given value is a Initializing State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_initializing_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(STATE_INITIALIZING)
          }
        )

      it( 'Produces false if the given value is not a Initializing State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_initializing_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(STATE_INITIALIZED)
            do_test(STATE_STARTING)
            do_test(STATE_STOPPING)
            do_test(STATE_FINISHED)
            do_test(STATE_UNSET)
          }
        )
    }
  )



describe
  ( 'is_initialized_state'
  , () => {
      it( 'Produces true if the given value is a Initialized State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_initialized_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(STATE_INITIALIZED)
          }
        )

      it( 'Produces false if the given value is not a Initialized State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_initialized_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(STATE_INITIALIZING)
            do_test(STATE_STARTING)
            do_test(STATE_STOPPING)
            do_test(STATE_FINISHED)
            do_test(STATE_UNSET)
          }
        )
    }
  )



describe
  ( 'is_starting_state'
  , () => {
      it( 'Produces true if the given value is a Starting State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_starting_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(STATE_STARTING)
          }
        )

      it( 'Produces false if the given value is not a Starting State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_starting_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(STATE_INITIALIZING)
            do_test(STATE_RUNNING)
            do_test(STATE_STOPPING)
            do_test(STATE_FINISHED)
            do_test(STATE_UNSET)
          }
        )
    }
  )



describe
  ( 'is_running_state'
  , () => {
      it( 'Produces true if the given value is a Running State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_running_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(STATE_RUNNING)
          }
        )

      it( 'Produces false if the given value is not a Running State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_running_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(STATE_INITIALIZING)
            do_test(STATE_STARTING)
            do_test(STATE_STOPPING)
            do_test(STATE_FINISHED)
            do_test(STATE_UNSET)
          }
        )
    }
  )



describe
  ( 'is_stopping_state'
  , () => {
      it( 'Produces true if the given value is a Stopping State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_stopping_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(STATE_STOPPING)
          }
        )

      it( 'Produces false if the given value is not a Stopping State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_stopping_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(STATE_INITIALIZING)
            do_test(STATE_STARTING)
            do_test(STATE_RUNNING)
            do_test(STATE_FINISHED)
            do_test(STATE_UNSET)
          }
        )
    }
  )



describe
  ( 'is_finished_state'
  , () => {
      it( 'Produces true if the given value is a Finished State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_finished_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(STATE_FINISHED)
          }
        )

      it( 'Produces false if the given value is not a Finished State'
        , () => {
            function do_test(state) {
              const actualValue =
                Loader.is_finished_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(STATE_INITIALIZING)
            do_test(STATE_STARTING)
            do_test(STATE_RUNNING)
            do_test(STATE_STOPPING)
            do_test(STATE_UNSET)
          }
        )
    }
  )



describe
  ( 'is_state'
  , () => {
      it( 'Produces true if the given value is a valid State'
        , () => {
            function do_test(possibleState) {
              const actualValue =
                Loader.is_state(possibleState)

              expect(actualValue).toBe(true)
            }

            do_test(STATE_INITIALIZING)
            do_test(STATE_STARTING)
            do_test(STATE_RUNNING)
            do_test(STATE_STOPPING)
            do_test(STATE_FINISHED)
            do_test(STATE_UNSET)
          }
        )

      it( 'Produces false if the given value is not a valid State'
        , () => {
            function do_test(possibleState) {
              const actualValue =
                Loader.is_state(possibleState)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
          }
        )
    }
  )



describe
  ( 'is_initialize_message'
  , () => {
      it( 'Produces true if the given value is a "Initialize" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Loader.is_initialize_message(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(MESSAGE_INITIALIZE)
          }
        )

      it( 'Produces false if the given value is not a "Initialize" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Loader.is_initialize_message(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(MESSAGE_INITIALIZED)
            do_test(MESSAGE_START)
            do_test(MESSAGE_STARTED)
            do_test(MESSAGE_STOP)
            do_test(MESSAGE_STOPPED)
          }
        )
    }
  )



describe
  ( 'is_initialized_message'
  , () => {
      it( 'Produces true if the given value is a "Initialized" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Loader.is_initialized_message(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(MESSAGE_INITIALIZED)
          }
        )

      it( 'Produces false if the given value is not a "Initialized" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue = Loader.is_initialized_message(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(MESSAGE_INITIALIZE)
            do_test(MESSAGE_START)
            do_test(MESSAGE_STARTED)
            do_test(MESSAGE_STOP)
            do_test(MESSAGE_STOPPED)
          }
        )
    }
  )



describe
  ( 'is_start_message'
  , () => {
      it( 'Produces true if the given value is a "Start" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Loader.is_start_message(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(MESSAGE_START)
          }
        )

      it( 'Produces false if the given value is not a "Start" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Loader.is_start_message(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(MESSAGE_INITIALIZE)
            do_test(MESSAGE_INITIALIZED)
            do_test(MESSAGE_STARTED)
            do_test(MESSAGE_STOP)
            do_test(MESSAGE_STOPPED)
          }
        )
    }
  )



describe
  ( 'is_started_message'
  , () => {
      it( 'Produces true if the given value is a "Started" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Loader.is_started_message(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(MESSAGE_STARTED)
          }
        )

      it( 'Produces false if the given value is not a "Started" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Loader.is_started_message(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(MESSAGE_INITIALIZE)
            do_test(MESSAGE_INITIALIZED)
            do_test(MESSAGE_START)
            do_test(MESSAGE_STOP)
            do_test(MESSAGE_STOPPED)
          }
        )
    }
  )



describe
  ( 'is_stop_message'
  , () => {
      it( 'Produces true if the given value is a "Stop" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue = Loader.is_stop_message(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(MESSAGE_STOP)
          }
        )

      it( 'Produces false if the given value is not a "Stop" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue = Loader.is_stop_message(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(MESSAGE_INITIALIZE)
            do_test(MESSAGE_INITIALIZED)
            do_test(MESSAGE_START)
            do_test(MESSAGE_STARTED)
            do_test(MESSAGE_STOPPED)
          }
        )
    }
  )



describe
  ( 'is_stopped_message'
  , () => {
      it( 'Produces true if the given value is a "Stopped" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Loader.is_stopped_message(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(MESSAGE_STOPPED)
          }
        )

      it( 'Produces false if the given value is not a "Stopped" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Loader.is_stopped_message(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(MESSAGE_INITIALIZE)
            do_test(MESSAGE_INITIALIZED)
            do_test(MESSAGE_START)
            do_test(MESSAGE_STARTED)
            do_test(MESSAGE_STOP)
          }
        )
    }
  )



describe
  ( 'is_message'
  , () => {
      it( 'Produces true if the given value is a valid Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue = Loader.is_message(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(MESSAGE_INITIALIZE)
            do_test(MESSAGE_INITIALIZED)
            do_test(MESSAGE_START)
            do_test(MESSAGE_STARTED)
            do_test(MESSAGE_STOP)
            do_test(MESSAGE_STOPPED)
          }
        )

      it( 'Produces false if the given value is not a valid Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue = Loader.is_message(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
          }
        )
    }
  )



describe
  ( 'Model'
  , () => {
      it( 'Produces a new Model'
        , () => {
            function do_test() {
              const state = STATE_UNSET
              const selector = 'testHtmlSelector'

              const expectedValue =
                make_test_value__model()
                  .set('state', state)
                  .set('htmlElementSelector', selector)

              const actualValue = 
                Loader.Model
                  ( state
                  , selector
                  , dummyHandler
                  , dummyHandler
                  , dummyHandler
                  , dummyHandler
                  , dummyHandler
                  , dummyHandler
                  )

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(expectedValue.equals(actualValue)).toBe(true)
            }

            do_test()
          }
        )
    }
  )



describe
  ( 'set_model_state_or_forward_failure'
  , () => {

      it( 'Sets the state of the Model wrapped in the given Result to '
        + 'the given state if Result is an Ok<T>.'
        , () => {
            function do_test(initialState, newState) {
              const initialModel = make_test_value__model()

              const initialResult = 
                make_test_value__result_ok(initialModel)
                  .set('state', initialState)

              const expectedValue = newState

              const actualValue =
                Loader.set_model_state_or_forward_failure
                  ( newState
                  , initialResult
                  ).get('value', undefined)
                   .get('state', undefined)

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(actualValue).toEqual(expectedValue)
            }

            do_test(STATE_UNSET, STATE_INITIALIZING)
            do_test(STATE_STARTING, STATE_RUNNING)
            do_test(STATE_STARTING, STATE_FINISHED)
          }
        )

      it( 'Returns the given result unchanged if it is not a Ok<Model> '
        + '(.i.e. if it is an Err<Failure>.'
        , () => {
            function do_test() {
              const initialModel = make_test_value__model()

              const initialResult = 
                make_test_value__result_err
                  ( make_test_value__failure
                      ( 'this is a test error'
                      , initialModel
                      )
                  )

              const newState = STATE_INITIALIZING

              const expectedValue = initialResult

              const actualValue =
                Loader.set_model_state_or_forward_failure
                  ( newState
                  , initialResult
                  )

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(expectedValue.equals(actualValue)).toBe(true)
            }

            do_test()
          }
        )

    }
  )



describe
  ( 'update_model_according_to_message'
  , () => {

      it( 'Produces an Result.Err<Failure> when given an unrecognized '
        + 'Message.'
        , () => {
            function do_test(message) {
              const state = STATE_UNSET

              const initialModel =
                make_test_value__model().set('state', state)

              const expectedValue = make_test_value__result_err(
                make_test_value__failure
                  ( Loader.UPDATE_ERROR
                  , initialModel
                  )
              )

              const actualValue = 
                Loader.update_model_according_to_message
                  ( message
                  , initialModel
                  )

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(expectedValue.equals(actualValue)).toBe(true)
            }

            do_test({})
            do_test(1)
            do_test('this is not a valid message')
          }
        )


      it( 'Calls the MessageHandler associated with the given message '
        + 'once, and produces the return value of the MessageHandler.'
        , () => {
            function do_test(message, handlerName, state) {
              const handlerStub = jest.fn(
                () => make_test_value__result_ok(
                  make_test_value__model().set('state', state)
                )
              )

              const initialModel =
                make_test_value__model()
                  .set('state', state)
                  .set(handlerName, handlerStub)

              const expectedValue = make_test_value__result_ok(
                make_test_value__model().set('state', state)
              )

              const actualValue = 
                Loader.update_model_according_to_message
                  ( message
                  , initialModel
                  )

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(handlerStub).toHaveBeenCalledTimes(1)
              expect(expectedValue.equals(actualValue)).toBe(true)
            }

            do_test
              ( MESSAGE_INITIALIZE
              , 'initializeHandler'
              , STATE_INITIALIZING
              )

            do_test
              ( MESSAGE_INITIALIZED
              , 'initializedHandler'
              , STATE_INITIALIZED
              )

            do_test
              ( MESSAGE_START
              , 'startHandler'
              , STATE_STARTING
              )

            do_test
              ( MESSAGE_STARTED
              , 'startedHandler'
              , STATE_RUNNING
              )

            do_test
              ( MESSAGE_STOP
              , 'stopHandler'
              , STATE_STOPPING
              )

            do_test
              ( MESSAGE_STOPPED
              , 'stoppedHandler'
              , STATE_FINISHED
              )
          }
        )


      it( 'Produces a new Model in the "Initializing" State when given '
        + 'an "Initialize" Message'
        , () => {
            function do_test() {
              const initialState = STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = STATE_INITIALIZING

              const message = MESSAGE_INITIALIZE

              const actualValue = 
                Loader.update_model_according_to_message
                  ( message
                  , initialModel
                  ).get('value')
                   .get('state')

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )


      it( 'Produces a new Model in the "InitializedState" State when '
        + 'given an "Initialized" Message.'
        , () => {
            function do_test() {
              const initialState = STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = STATE_INITIALIZED

              const message = MESSAGE_INITIALIZED

              const actualValue = 
                Loader.update_model_according_to_message
                  ( message
                  , initialModel
                  ).get('value')
                   .get('state')

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )


      it( 'Produces a new Model in the "Starting" State when given a '
        + '"Start" Message.'
        , () => {
            function do_test() {
              const initialState = STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = STATE_STARTING

              const message = MESSAGE_START

              const actualValue = 
                Loader.update_model_according_to_message
                  ( message
                  , initialModel
                  ).get('value')
                   .get('state')

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )


      it( 'Produces a new Model in the "Running" State whengiven a '
        + '"Started" Message.'
        , () => {
            function do_test() {
              const initialState = STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = STATE_RUNNING

              const message = MESSAGE_STARTED

              const actualValue = 
                Loader.update_model_according_to_message
                  ( message
                  , initialModel
                  ).get('value')
                   .get('state')

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )


      it( 'Produces a new Model in the "Stopping" State whengiven a '
        + '"Stop" Message.'
        , () => {
            function do_test() {
              const initialState = STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = STATE_STOPPING

              const message = MESSAGE_STOP

              const actualValue = 
                Loader.update_model_according_to_message
                  ( message
                  , initialModel
                  ).get('value')
                   .get('state')

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )


      it( 'Produces a new Model in the "Finished" State whengiven a '
        + '"Stopped" Message.'
        , () => {
            function do_test() {
              const initialState = STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = STATE_FINISHED

              const message = MESSAGE_STOPPED

              const actualValue = 
                Loader.update_model_according_to_message
                  ( message
                  , initialModel
                  ).get('value')
                   .get('state')

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )
    }
  )
