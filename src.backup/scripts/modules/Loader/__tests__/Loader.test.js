import * as Loader from "../Loader"
import * as Result from "../../Result/Result"
import * as TestHelper from "./TestHelper"
import diff from  "jest-diff"



function make_test_value__result_err
  ( error
  ) {
    return Result.ErrFactory({error})
  }



function make_test_value__result_ok
  ( value
  ) {
    return Result.Ok({value})
  }



function dummyHandler
  ( argv
  , model
  ) {
    return make_test_value__result_ok(model)
  }



function make_test_value__model
  () {
    return (
      Loader.create
        ( { state                : TestHelper.STATE_UNSET
          , rootHtmlElement      : undefined
          , htmlElementSelector  : 'testHtmlSelector'
          , initializeHandler    : dummyHandler
          , initializedHandler   : dummyHandler
          , startHandler         : dummyHandler
          , startedHandler       : dummyHandler
          , stopHandler          : dummyHandler
          , stoppedHandler       : dummyHandler
          }
        )
    )
  }



function make_test_value__failure
  ( error
  , model
  ) {
    return Loader.Failure({error, model})
  }



describe
  ( 'Model'
  , () => {
      it( 'Produces a new Model'
        , () => {
            function do_test() {
              const state = TestHelper.STATE_UNSET
              const selector = 'testHtmlSelector'

              const expectedValue =
                make_test_value__model()
                  .set('state', state)
                  .set('htmlElementSelector', selector)

              const actualValue = 
                Loader.create
                  ( { state               : state
                    , htmlElementSelector : selector
                    , initializeHandler   : dummyHandler
                    , initializedHandler  : dummyHandler 
                    , startHandler        : dummyHandler
                    , startedHandler      : dummyHandler 
                    , stopHandler         : dummyHandler 
                    , stoppedHandler      : dummyHandler 
                    }
                  )

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(expectedValue.equals(actualValue)).toBe(true)
            }

            do_test()
          }
        )
    }
  )



describe
  ( 'update'
  , () => {

      it( 'Produces the given Model when given an unrecognized '
        + 'Message.'
        , () => {
            function do_test(message) {
              const state = TestHelper.STATE_UNSET

              const initialModel =
                make_test_value__model().set('state', state)

              const expectedValue = initialModel

              const actualValue = 
                Loader.update
                  ( message
                  , initialModel
                  )

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

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

              const expectedValue = 
                make_test_value__model().set('state', state)

              const actualValue = 
                Loader.update
                  ( message
                  , initialModel
                  )

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(handlerStub).toHaveBeenCalledTimes(1)
              expect(expectedValue.equals(actualValue)).toBe(true)
            }

            do_test
              ( TestHelper.MESSAGE_INITIALIZE
              , 'initializeHandler'
              , TestHelper.STATE_INITIALIZING
              )

            do_test
              ( TestHelper.MESSAGE_INITIALIZED
              , 'initializedHandler'
              , TestHelper.STATE_INITIALIZED
              )

            do_test
              ( TestHelper.MESSAGE_START
              , 'startHandler'
              , TestHelper.STATE_STARTING
              )

            do_test
              ( TestHelper.MESSAGE_STARTED
              , 'startedHandler'
              , TestHelper.STATE_RUNNING
              )

            do_test
              ( TestHelper.MESSAGE_STOP
              , 'stopHandler'
              , TestHelper.STATE_STOPPING
              )

            do_test
              ( TestHelper.MESSAGE_STOPPED
              , 'stoppedHandler'
              , TestHelper.STATE_FINISHED
              )
          }
        )


      it( 'Produces a new Model in the "Initializing" State when given '
        + 'an "Initialize" Message'
        , () => {
            function do_test() {
              const initialState = TestHelper.STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = TestHelper.STATE_INITIALIZING

              const message = TestHelper.MESSAGE_INITIALIZE

              const actualValue = 
                Loader.update
                  ( message
                  , initialModel
                  ).get('state')

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )


      it( 'Produces a new Model in the "InitializedState" State when '
        + 'given an "Initialized" Message.'
        , () => {
            function do_test() {
              const initialState = TestHelper.STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = TestHelper.STATE_INITIALIZED

              const message = TestHelper.MESSAGE_INITIALIZED

              const actualValue = 
                Loader.update
                  ( message
                  , initialModel
                  ).get('state')

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )


      it( 'Produces a new Model in the "Starting" State when given a '
        + '"Start" Message.'
        , () => {
            function do_test() {
              const initialState = TestHelper.STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = TestHelper.STATE_STARTING

              const message = TestHelper.MESSAGE_START

              const actualValue = 
                Loader.update
                  ( message
                  , initialModel
                  ).get('state')

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )


      it( 'Produces a new Model in the "Running" State whengiven a '
        + '"Started" Message.'
        , () => {
            function do_test() {
              const initialState = TestHelper.STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = TestHelper.STATE_RUNNING

              const message = TestHelper.MESSAGE_STARTED

              const actualValue = 
                Loader.update
                  ( message
                  , initialModel
                  ).get('state')

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )


      it( 'Produces a new Model in the "Stopping" State whengiven a '
        + '"Stop" Message.'
        , () => {
            function do_test() {
              const initialState = TestHelper.STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = TestHelper.STATE_STOPPING

              const message = TestHelper.MESSAGE_STOP

              const actualValue = 
                Loader.update
                  ( message
                  , initialModel
                  ).get('state')

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )


      it( 'Produces a new Model in the "Finished" State whengiven a '
        + '"Stopped" Message.'
        , () => {
            function do_test() {
              const initialState = TestHelper.STATE_UNSET

              const initialModel =
                make_test_value__model()

              const expectedValue = TestHelper.STATE_FINISHED

              const message = TestHelper.MESSAGE_STOPPED

              const actualValue = 
                Loader.update
                  ( message
                  , initialModel
                  ).get('state')

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(expectedValue).toEqual(actualValue)
            }

            do_test()
          }
        )
    }
  )
