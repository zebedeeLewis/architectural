import * as Loader from "../src/Loader/Loader.core"



describe
  ( 'is_valid_state'
  , () => {
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
  ( 'update_according_to_message'
  , () => {
      it( 'produces a Model when given an "Initialize" Message,'
        + ' where the returned Model is the result of calling the'
        + ' initializeHandeler on the given Model'
        , () => {
            const expectedValue =
              Object.create
                ( Loader.Model.prototype
                , { state :
                      { value      : Loader.Initializing()
                      , enumerable : true
                      }
                  , htmlElementSelector :
                      { value      : 'new test'
                      , enumerable : true
                      }
                  , initializeHandler : 
                      { value      : messageHandler
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

            const stub = ()=>null
            const htmlElementSelector = 'test'
            const messageHandler = jest.fn(() => expectedValue )
            const argv = [1,2,3]
            const model = 
              Object.create
                ( Loader.Model.prototype
                , { state :
                      { value      : Loader.Finished()
                      , enumerable : true
                      }
                  , htmlElementSelector :
                      { value      : htmlElementSelector
                      , enumerable : true
                      }
                  , initializeHandler : 
                      { value      : messageHandler
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

            const message = Loader.Initialize(argv)

            const actualValue =
              Loader.update_according_to_message(message, model)

            expect(messageHandler).toHaveBeenCalledTimes(1)
            expect(messageHandler).toHaveBeenCalledWith(argv, model)
            expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )
