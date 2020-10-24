import * as State from "../State"
import * as TestHelper from "./TestHelper"



describe
  ( 'is_unset_state'
  , () => {
      it( 'Produces true if the given value is a Unset State'
        , () => {
            function do_test(state) {
              const actualValue =
                State.is_unset_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.STATE_UNSET)
          }
        )

      it( 'Produces false if the given value is not a Unset State'
        , () => {
            function do_test(state) {
              const actualValue =
                State.is_unset_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.STATE_INITIALIZED)
            do_test(TestHelper.STATE_STARTING)
            do_test(TestHelper.STATE_STOPPING)
            do_test(TestHelper.STATE_FINISHED)
            do_test(TestHelper.STATE_INITIALIZING)
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
                State.is_initializing_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.STATE_INITIALIZING)
          }
        )

      it( 'Produces false if the given value is not a Initializing State'
        , () => {
            function do_test(state) {
              const actualValue =
                State.is_initializing_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.STATE_INITIALIZED)
            do_test(TestHelper.STATE_STARTING)
            do_test(TestHelper.STATE_STOPPING)
            do_test(TestHelper.STATE_FINISHED)
            do_test(TestHelper.STATE_UNSET)
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
                State.is_initialized_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.STATE_INITIALIZED)
          }
        )

      it( 'Produces false if the given value is not a Initialized State'
        , () => {
            function do_test(state) {
              const actualValue =
                State.is_initialized_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.STATE_INITIALIZING)
            do_test(TestHelper.STATE_STARTING)
            do_test(TestHelper.STATE_STOPPING)
            do_test(TestHelper.STATE_FINISHED)
            do_test(TestHelper.STATE_UNSET)
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
                State.is_starting_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.STATE_STARTING)
          }
        )

      it( 'Produces false if the given value is not a Starting State'
        , () => {
            function do_test(state) {
              const actualValue =
                State.is_starting_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.STATE_INITIALIZING)
            do_test(TestHelper.STATE_RUNNING)
            do_test(TestHelper.STATE_STOPPING)
            do_test(TestHelper.STATE_FINISHED)
            do_test(TestHelper.STATE_UNSET)
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
                State.is_running_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.STATE_RUNNING)
          }
        )

      it( 'Produces false if the given value is not a Running State'
        , () => {
            function do_test(state) {
              const actualValue =
                State.is_running_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.STATE_INITIALIZING)
            do_test(TestHelper.STATE_STARTING)
            do_test(TestHelper.STATE_STOPPING)
            do_test(TestHelper.STATE_FINISHED)
            do_test(TestHelper.STATE_UNSET)
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
                State.is_stopping_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.STATE_STOPPING)
          }
        )

      it( 'Produces false if the given value is not a Stopping State'
        , () => {
            function do_test(state) {
              const actualValue =
                State.is_stopping_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.STATE_INITIALIZING)
            do_test(TestHelper.STATE_STARTING)
            do_test(TestHelper.STATE_RUNNING)
            do_test(TestHelper.STATE_FINISHED)
            do_test(TestHelper.STATE_UNSET)
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
                State.is_finished_state(state)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.STATE_FINISHED)
          }
        )

      it( 'Produces false if the given value is not a Finished State'
        , () => {
            function do_test(state) {
              const actualValue =
                State.is_finished_state(state)

              expect(actualValue).toBe(false)
            }

            do_test(1)
            do_test({})
            do_test([])
            do_test('this is not a valid message')
            do_test(true)
            do_test(false)
            do_test(TestHelper.STATE_INITIALIZING)
            do_test(TestHelper.STATE_STARTING)
            do_test(TestHelper.STATE_RUNNING)
            do_test(TestHelper.STATE_STOPPING)
            do_test(TestHelper.STATE_UNSET)
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
                State.is_state(possibleState)

              expect(actualValue).toBe(true)
            }

            do_test(TestHelper.STATE_INITIALIZING)
            do_test(TestHelper.STATE_STARTING)
            do_test(TestHelper.STATE_RUNNING)
            do_test(TestHelper.STATE_STOPPING)
            do_test(TestHelper.STATE_FINISHED)
            do_test(TestHelper.STATE_UNSET)
          }
        )

      it( 'Produces false if the given value is not a valid State'
        , () => {
            function do_test(possibleState) {
              const actualValue =
                State.is_state(possibleState)

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

