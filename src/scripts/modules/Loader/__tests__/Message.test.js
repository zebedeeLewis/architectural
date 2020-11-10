import * as Message from "../Message"
import * as TestHelper from "./TestHelper"



describe
  ( 'is_initialized'
  , () => {
      it( 'Produces true if the given value is a "Initialized" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Message.is_initialized(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.MESSAGE_INITIALIZED)
          }
        )

      it( 'Produces false if the given value is not a "Initialized" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Message.is_initialized(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.MESSAGE_INITIALIZE)
            do_test(TestHelper.MESSAGE_START)
            do_test(TestHelper.MESSAGE_STARTED)
            do_test(TestHelper.MESSAGE_STOP)
            do_test(TestHelper.MESSAGE_STOPPED)
          }
        )
    }
  )



describe
  ( 'is_start'
  , () => {
      it( 'Produces true if the given value is a "Start" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Message.is_start(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.MESSAGE_START)
          }
        )

      it( 'Produces false if the given value is not a "Start" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Message.is_start(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.MESSAGE_INITIALIZE)
            do_test(TestHelper.MESSAGE_INITIALIZED)
            do_test(TestHelper.MESSAGE_STARTED)
            do_test(TestHelper.MESSAGE_STOP)
            do_test(TestHelper.MESSAGE_STOPPED)
          }
        )
    }
  )



describe
  ( 'is_started'
  , () => {
      it( 'Produces true if the given value is a "Started" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Message.is_started(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.MESSAGE_STARTED)
          }
        )

      it( 'Produces false if the given value is not a "Started" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Message.is_started(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.MESSAGE_INITIALIZE)
            do_test(TestHelper.MESSAGE_INITIALIZED)
            do_test(TestHelper.MESSAGE_START)
            do_test(TestHelper.MESSAGE_STOP)
            do_test(TestHelper.MESSAGE_STOPPED)
          }
        )
    }
  )



describe
  ( 'is_stop'
  , () => {
      it( 'Produces true if the given value is a "Stop" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue = Message.is_stop(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.MESSAGE_STOP)
          }
        )

      it( 'Produces false if the given value is not a "Stop" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue = Message.is_stop(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.MESSAGE_INITIALIZE)
            do_test(TestHelper.MESSAGE_INITIALIZED)
            do_test(TestHelper.MESSAGE_START)
            do_test(TestHelper.MESSAGE_STARTED)
            do_test(TestHelper.MESSAGE_STOPPED)
          }
        )
    }
  )



describe
  ( 'is_stopped'
  , () => {
      it( 'Produces true if the given value is a "Stopped" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Message.is_stopped(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.MESSAGE_STOPPED)
          }
        )

      it( 'Produces false if the given value is not a "Stopped" Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue =
                Message.is_stopped(possibleMessage)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valide message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.MESSAGE_INITIALIZE)
            do_test(TestHelper.MESSAGE_INITIALIZED)
            do_test(TestHelper.MESSAGE_START)
            do_test(TestHelper.MESSAGE_STARTED)
            do_test(TestHelper.MESSAGE_STOP)
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
              const actualValue = Message.is_message(possibleMessage)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.MESSAGE_INITIALIZE)
            do_test(TestHelper.MESSAGE_INITIALIZED)
            do_test(TestHelper.MESSAGE_START)
            do_test(TestHelper.MESSAGE_STARTED)
            do_test(TestHelper.MESSAGE_STOP)
            do_test(TestHelper.MESSAGE_STOPPED)
          }
        )

      it( 'Produces false if the given value is not a valid Message'
        , () => {
            function do_test(possibleMessage) {
              const actualValue = Message.is_message(possibleMessage)

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

