import * as Loader from "../src/Loader/Loader.core"
import * as Result from "../src/Result"



describe
  ( 'is_valid_state'
  , () => {
      it( 'produces true if the given subject is the results of calling'
        + ' Unset' 
        , () => {
            const subject = Loader.Unset()
            const actualValue = Loader.is_valid_state(subject)
            const expectedValue = true

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Initializing' 
        , () => {
            const subject = Loader.Initializing()
            const actualValue = Loader.is_valid_state(subject)
            const expectedValue = true

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' InitializedState' 
        , () => {
            const subject = Loader.InitializedState()
            const expectedValue = true
            const actualValue = Loader.is_valid_state(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Starting' 
        , () => {
            const subject = Loader.Starting()
            const expectedValue = true
            const actualValue = Loader.is_valid_state(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Running' 
        , () => {
            const subject = Loader.Running()
            const expectedValue = true
            const actualValue = Loader.is_valid_state(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Stopping' 
        , () => {
            const subject = Loader.Stopping()
            const expectedValue = true
            const actualValue = Loader.is_valid_state(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Finished' 
        , () => {
            const subject = Loader.Finished()
            const expectedValue = true
            const actualValue = Loader.is_valid_state(subject)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'otherwise produces false.' 
        , () => {
            const subject = {}
            const expectedValue = false
            const actualValue = Loader.is_valid_state(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )
    }
  )



describe
  ( 'Unset'
  , () => {
      it( 'produces an Unset State'
        , () => {
            const actualValue = Loader.Unset()
            const expectedValue =
              Object.create
                ( Loader.Unset.prototype
                , { id :
                      { value      : 'Unset'
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Initializing'
  , () => {
      it( 'produces an Initializing State'
        , () => {
            const actualValue = Loader.Initializing()
            const expectedValue =
              Object.create
                ( Loader.Initializing.prototype
                , { id :
                      { value      : 'Initializing'
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'InitializedState'
  , () => {
      it( 'produces an InitializedState'
        , () => {
            const actualValue = Loader.InitializedState()
            const expectedValue =
              Object.create
                ( Loader.InitializedState.prototype
                , { id :
                      { value      : 'InitializedState'
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Starting'
  , () => {
      it( 'produces a Starting State'
        , () => {
            const actualValue = Loader.Starting()
            const expectedValue =
              Object.create
                ( Loader.Starting.prototype
                , { id :
                      { value      : 'Starting'
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Running'
  , () => {
      it( 'produces a Running State'
        , () => {
            const actualValue = Loader.Running()
            const expectedValue =
              Object.create
                ( Loader.Running.prototype
                , { id :
                      { value      : 'Running'
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Stopping'
  , () => {
      it( 'produces a Stopping State'
        , () => {
            const actualValue = Loader.Stopping()
            const expectedValue =
              Object.create
                ( Loader.Stopping.prototype
                , { id :
                      { value      : 'Stopping'
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Finished'
  , () => {
      it( 'produces a Finished State'
        , () => {
            const actualValue = Loader.Finished()
            const expectedValue =
              Object.create
                ( Loader.Finished.prototype
                , { id :
                      { value      : 'Finished'
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Initialize'
  , () => {
      it( 'produces an Initialize message when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Initialize(argv)
            const expectedValue =
              Object.create
                ( Loader.Initialize.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Initialized'
  , () => {
      it( 'produces an "Initialized" messge when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Initialized(argv)
            const expectedValue =
              Object.create
                ( Loader.Initialized.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Start'
  , () => {
      it( 'produces a "Start" Message when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Start(argv)
            const expectedValue =
              Object.create
                ( Loader.Start.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Started'
  , () => {
      it( 'produces a "Started" Message when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Started(argv)
            const expectedValue =
              Object.create
                ( Loader.Started.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Stop'
  , () => {
      it( 'produces a "Stop" Message when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Stop(argv)
            const expectedValue =
              Object.create
                ( Loader.Stop.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Stopped'
  , () => {
      it( 'produces a "Stopped" Message when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Stopped(argv)
            const expectedValue =
              Object.create
                ( Loader.Stopped.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )


describe
  ( 'is_valid_message'
  , () => {
      it( 'produces true if the given subject is the results of calling'
        + ' Initialize' 
        , () => {
            const subject = Loader.Initialize([])
            const actualValue = Loader.is_valid_message(subject)
            const expectedValue = true

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Initialized' 
        , () => {
            const subject = Loader.Initialized([])
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Start' 
        , () => {
            const subject = Loader.Start([])
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Started' 
        , () => {
            const subject = Loader.Started([])
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Stop' 
        , () => {
            const subject = Loader.Stop([])
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Stopped' 
        , () => {
            const subject = Loader.Stopped([])
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'otherwise produces false.' 
        , () => {
            const subject = {}
            const expectedValue = false
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )
    }
  )



describe
  ( 'Model'
  , () => {
      it( 'produces a Model when given valid arguments'
        , () => {
            const state = Loader.Running()
            const stub = () => null
            const htmlElementSelector = 'test'
            const actualValue =
              Loader.Model
                ( state
                , htmlElementSelector
                , stub
                , stub
                , stub
                , stub
                , stub
                , stub
                )
            const expectedValue =
                Object.create
                  ( Loader.Model.prototype
                  , { state :
                        { value      : state
                        , enumerable : true
                        }
                    , htmlElementSelector :
                        { value      : htmlElementSelector
                        , enumerable : true
                        }
                    , initializeHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , initializedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , startHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , startedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , stopHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , stoppedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    }
                  )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'set_state_to'
  , () => {
      it( 'produces a Model from the given Model with the state set to '
        + 'the given state'
        , () => {
            const stub = () => null
            const htmlElementSelector = 'test'

            const initialModel =
                Object.create
                  ( Loader.Model.prototype
                  , { state :
                        { value      : Loader.Running()
                        , enumerable : true
                        }
                    , htmlElementSelector :
                        { value      : htmlElementSelector
                        , enumerable : true
                        }
                    , initializeHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , initializedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , startHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , startedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , stopHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , stoppedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    }
                  )


            const actualValue =
              Loader.set_state_to
                ( Loader.Starting()
                , initialModel
                )

            const expectedValue =
                Object.create
                  ( Loader.Model.prototype
                  , { state :
                        { value      : Loader.Starting()
                        , enumerable : true
                        }
                    , htmlElementSelector :
                        { value      : htmlElementSelector
                        , enumerable : true
                        }
                    , initializeHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , initializedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , startHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , startedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , stopHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , stoppedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    }
                  )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Failure'
  , () => {
      it( 'produces a Failure'
        , () => {
            const stub = () => null
            const htmlElementSelector = 'test'

            const error = 2
            const initialModel =
                Object.create
                  ( Loader.Model.prototype
                  , { state :
                        { value      : Loader.Running()
                        , enumerable : true
                        }
                    , htmlElementSelector :
                        { value      : htmlElementSelector
                        , enumerable : true
                        }
                    , initializeHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , initializedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , startHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , startedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , stopHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    , stoppedHandler :
                       { value      : stub
                       , enumerable : true
                       }
                    }
                  )

            const actualValue = Loader.Failure(error, initialModel)

            const expectedValue =
              Object.create
                ( Loader.Failure.prototype
                , { error : { value: error, enumerable : true }
                  , model : { value: initialModel, enumerable : true }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'set_state_or_forward_failure'
  , () => {
      it( 'produces a copy of the model in the result, with the new '
        + 'models state set to the given state when given a Result.Ok '
        + 'value.'
        , () => {
            const stub = () => null
            const produce_test_model_at_state =
              ( state
              ) => (
                Object.create
                  ( Loader.Model.prototype
                  , { state :
                        { value      : state
                        , enumerable : true
                        }
                    , htmlElementSelector :
                        { value      : 'new test'
                        , enumerable : true
                        }
                    , initializeHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    , initializedHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    , startHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    , startedHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    , stopHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    , stoppedHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    }
                  )
              )


            const initialModel =
              produce_test_model_at_state(Loader.Unset())


            const newState = Loader.Initializing()


            const expectedModel =
              produce_test_model_at_state(newState)


            const inputResult =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : initialModel
                      , enumerable : true
                      }
                  }
                )


            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : expectedModel
                      , enumerable : true
                      }
                  }
                )


            const actualValue =
              Loader.set_state_or_forward_failure
                ( newState
                , inputResult
                )


            expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'forwards all Result.Err'
        , () => {
            const stub = () => null
            const produce_test_model_at_state =
              ( state
              ) => (
                Object.create
                  ( Loader.Model.prototype
                  , { state :
                        { value      : state
                        , enumerable : true
                        }
                    , htmlElementSelector :
                        { value      : 'new test'
                        , enumerable : true
                        }
                    , initializeHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    , initializedHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    , startHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    , startedHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    , stopHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    , stoppedHandler : 
                        { value      : stub
                        , enumerable : true
                        }
                    }
                  )
              )

            const initialModel =
              produce_test_model_at_state(Loader.Unset())


            const error = 'test error'


            const failure =
              ( Loader.Failure.prototype
              , { error : { value: error, enumerable : true }
                , model : { value: initialModel, enumerable : true }
                }
              )


            const result =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : failure
                      , enumerable : true
                      }
                  }
                )


            const expectedValue = result


            const actualValue =
              Loader.set_state_or_forward_failure
                ( Loader.Initializing()
                , result
                )


            expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'update_according_to_message'
  , () => {
      it( 'sets the given Models state to Initializing when given the '
        + 'Initialize Message.'
        , () => {
            const newState = Loader.Initializing()


            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : produce_test_model_at_state(newState)
                      , enumerable : true
                      }
                  }
                )


            function produce_test_model_at_state
              ( state
              ) {
                const stub = () => null

                return (
                  Object.create
                    ( Loader.Model.prototype
                    , { state :
                          { value      : state
                          , enumerable : true
                          }
                      , htmlElementSelector :
                          { value      : 'new test'
                          , enumerable : true
                          }
                      , initializeHandler : 
                          { value      : () => expectedValue
                          , enumerable : true
                          }
                      , initializedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stopHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stoppedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      }
                    )
                )
              }


            const message = Loader.Initialize([])


            const initialModel =
              produce_test_model_at_state(Loader.Unset())


            const actualValue =
              Loader.update_according_to_message
                ( message
                , initialModel
                )


            expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'sets the given Models state to InitializedState when given the '
        + 'Initialized Message.'
        , () => {
            const newState = Loader.InitializedState()


            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : produce_test_model_at_state(newState)
                      , enumerable : true
                      }
                  }
                )


            function produce_test_model_at_state
              ( state
              ) {
                const stub = () => null

                return (
                  Object.create
                    ( Loader.Model.prototype
                    , { state :
                          { value      : state
                          , enumerable : true
                          }
                      , htmlElementSelector :
                          { value      : 'new test'
                          , enumerable : true
                          }
                      , initializeHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , initializedHandler : 
                          { value      : () => expectedValue
                          , enumerable : true
                          }
                      , startHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stopHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stoppedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      }
                    )
                )
              }


            const message = Loader.Initialized([])


            const initialModel =
              produce_test_model_at_state(Loader.Unset())


            const actualValue =
              Loader.update_according_to_message
                ( message
                , initialModel
                )


            expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'sets the given Models state to Starting when given the Start '
        + 'Message.'
        , () => {
            const newState = Loader.Starting()


            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : produce_test_model_at_state(newState)
                      , enumerable : true
                      }
                  }
                )


            function produce_test_model_at_state
              ( state
              ) {
                const stub = () => null

                return (
                  Object.create
                    ( Loader.Model.prototype
                    , { state :
                          { value      : state
                          , enumerable : true
                          }
                      , htmlElementSelector :
                          { value      : 'new test'
                          , enumerable : true
                          }
                      , initializeHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , initializedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startHandler : 
                          { value      : () => expectedValue
                          , enumerable : true
                          }
                      , startedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stopHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stoppedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      }
                    )
                )
              }


            const message = Loader.Start([])


            const initialModel =
              produce_test_model_at_state(Loader.Unset())


            const actualValue =
              Loader.update_according_to_message
                ( message
                , initialModel
                )


            expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'sets the given Models state to Running when given the Started '
        + 'Message.'
        , () => {
            const newState = Loader.Running()


            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : produce_test_model_at_state(newState)
                      , enumerable : true
                      }
                  }
                )


            function produce_test_model_at_state
              ( state
              ) {
                const stub = () => null

                return (
                  Object.create
                    ( Loader.Model.prototype
                    , { state :
                          { value      : state
                          , enumerable : true
                          }
                      , htmlElementSelector :
                          { value      : 'new test'
                          , enumerable : true
                          }
                      , initializeHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , initializedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startedHandler : 
                          { value      : () => expectedValue
                          , enumerable : true
                          }
                      , stopHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stoppedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      }
                    )
                )
              }


            const message = Loader.Started([])


            const initialModel =
              produce_test_model_at_state(Loader.Unset())


            const actualValue =
              Loader.update_according_to_message
                ( message
                , initialModel
                )


            expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'sets the given Models state to Stopping when given the Stop '
        + 'Message.'
        , () => {
            const newState = Loader.Stopping()


            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : produce_test_model_at_state(newState)
                      , enumerable : true
                      }
                  }
                )


            function produce_test_model_at_state
              ( state
              ) {
                const stub = () => null

                return (
                  Object.create
                    ( Loader.Model.prototype
                    , { state :
                          { value      : state
                          , enumerable : true
                          }
                      , htmlElementSelector :
                          { value      : 'new test'
                          , enumerable : true
                          }
                      , initializeHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , initializedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stopHandler : 
                          { value      : () => expectedValue
                          , enumerable : true
                          }
                      , stoppedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      }
                    )
                )
              }


            const message = Loader.Stop([])


            const initialModel =
              produce_test_model_at_state(Loader.Unset())


            const actualValue =
              Loader.update_according_to_message
                ( message
                , initialModel
                )


            expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'sets the given Models state to Finished when given the Stopped '
        + 'Message.'
        , () => {
            const newState = Loader.Finished()


            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : produce_test_model_at_state(newState)
                      , enumerable : true
                      }
                  }
                )


            function produce_test_model_at_state
              ( state
              ) {
                const stub = () => null

                return (
                  Object.create
                    ( Loader.Model.prototype
                    , { state :
                          { value      : state
                          , enumerable : true
                          }
                      , htmlElementSelector :
                          { value      : 'new test'
                          , enumerable : true
                          }
                      , initializeHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , initializedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stopHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stoppedHandler : 
                          { value      : () => expectedValue
                          , enumerable : true
                          }
                      }
                    )
                )
              }


            const message = Loader.Stopped([])


            const initialModel =
              produce_test_model_at_state(Loader.Unset())


            const actualValue =
              Loader.update_according_to_message
                ( message
                , initialModel
                )


            expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'Produces a Failure if given an unrecognized Message'
        , () => {
            function produce_test_model_at_state
              ( state
              ) {
                const stub = () => null

                return (
                  Object.create
                    ( Loader.Model.prototype
                    , { state :
                          { value      : state
                          , enumerable : true
                          }
                      , htmlElementSelector :
                          { value      : 'new test'
                          , enumerable : true
                          }
                      , initializeHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , initializedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , startedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stopHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      , stoppedHandler : 
                          { value      : stub
                          , enumerable : true
                          }
                      }
                    )
                )
              }


            const message = {}


            const initialModel =
              produce_test_model_at_state(Loader.Unset())


            const actualValue =
              Loader.update_according_to_message
                ( message
                , initialModel
                )

            const failure =
              Object.create
                ( Loader.Failure.prototype
                , { error :
                      { value: Loader.UPDATE_ERROR
                      , enumerable : true
                      }
                  , model : { value: initialModel, enumerable : true }
                  }
                )


            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error : { value: failure, enumerable : true }
                  }
                )


            expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )
