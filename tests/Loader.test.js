import * as Loader from "../src/Loader/Loader"
import * as Result from "../src/Result/Result"


describe
  ( 'Initialize'
  , () => {
      it( 'Produce a Result.<TypeError> if the first argument is not an'
        + ' Array.'
        , () => {
            const error = new TypeError(Loader.INITIALIZE_ARG1_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue = Loader.Initialize(2)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Initialize message when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Initialize(argv)
            const value =
              Object.create
                ( Loader.Initialize.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : value
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
      it( 'Produce a Err.<TypeError> if the first argument is not an'
        + ' Array.'
        , () => {
            const error = new TypeError(Loader.INITIALIZED_ARG1_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue = Loader.Initialized(2)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Ok.<Initialized> when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Initialized(argv)
            const value =
              Object.create
                ( Loader.Initialized.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : value
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
      it( 'Produce a Err.<TypeError> if the first argument is not an'
        + ' Array.'
        , () => {
            const error = new TypeError(Loader.START_ARG1_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue = Loader.Start(2)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Ok.<Start> when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Start(argv)
            const value =
              Object.create
                ( Loader.Start.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : value
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
      it( 'Produce a Err.<TypeError> if the first argument is not an'
        + ' Array.'
        , () => {
            const error = new TypeError(Loader.STARTED_ARG1_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue = Loader.Started(2)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Ok.<Started> when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Started(argv)
            const value =
              Object.create
                ( Loader.Started.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : value
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
      it( 'Produce a Err.<TypeError> if the first argument is not an'
        + ' Array.'
        , () => {
            const error = new TypeError(Loader.STOP_ARG1_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue = Loader.Stop(2)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Ok.<Stop> when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Stop(argv)
            const value =
              Object.create
                ( Loader.Stop.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : value
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
      it( 'Produce a Err.<TypeError> if the first argument is not an'
        + ' Array.'
        , () => {
            const error = new TypeError(Loader.STOPPED_ARG1_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue = Loader.Stopped(2)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces Ok.<Stopped> when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Stopped(argv)
            const value =
              Object.create
                ( Loader.Stopped.prototype
                , { argv :
                      { value      : argv
                      , enumerable : true
                      }
                  }
                )

            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : value
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
            const subject = Loader.Initialize([]).value
            const actualValue = Loader.is_valid_message(subject)
            const expectedValue = true

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Initialized' 
        , () => {
            const subject = Loader.Initialized([]).value
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Start' 
        , () => {
            const subject = Loader.Start([]).value
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Started' 
        , () => {
            const subject = Loader.Started([]).value
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Stop' 
        , () => {
            const subject = Loader.Stop([]).value
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toBe(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Stopped' 
        , () => {
            const subject = Loader.Stopped([]).value
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
      it( 'Produce a Err.<TypeError> if the first argument is not a '
        + 'string.'
        , () => {
            const stub = ()=>null
            const error = new TypeError(Loader.MODEL_ARG1_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue =
              Loader.Model
                ( 1
                , stub
                , stub
                , stub
                , stub
                , stub
                , stub
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'Produce a Err.<TypeError> if the second argument is not a '
        + 'function.'
        , () => {
            const stub = ()=>null
            const error = new TypeError(Loader.MODEL_ARG2_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue =
              Loader.Model
                ( 'test'
                , null
                , stub
                , stub
                , stub
                , stub
                , stub
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'Produce a Err.<TypeError> if the third argument is not a '
        + 'function.'
        , () => {
            const stub = ()=>null
            const error = new TypeError(Loader.MODEL_ARG3_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue =
              Loader.Model
                ( 'test'
                , stub
                , null
                , stub
                , stub
                , stub
                , stub
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'Produce a Err.<TypeError> if the fourth argument is not a '
        + 'function.'
        , () => {
            const stub = ()=>null
            const error = new TypeError(Loader.MODEL_ARG4_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue =
              Loader.Model
                ( 'test'
                , stub
                , stub
                , null
                , stub
                , stub
                , stub
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'Produce a Err.<TypeError> if the fifth argument is not a '
        + 'function.'
        , () => {
            const stub = ()=>null
            const error = new TypeError(Loader.MODEL_ARG5_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue =
              Loader.Model
                ( 'test'
                , stub
                , stub
                , stub
                , null
                , stub
                , stub
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'Produce a Err.<TypeError> if the sixth argument is not a '
        + 'function.'
        , () => {
            const stub = ()=>null
            const error = new TypeError(Loader.MODEL_ARG6_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue =
              Loader.Model
                ( 'test'
                , stub
                , stub
                , stub
                , stub
                , null
                , stub
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'Produce a Err.<TypeError> if the seventh argument is not a '
        + 'function.'
        , () => {
            const stub = ()=>null
            const error = new TypeError(Loader.MODEL_ARG7_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            const actualValue =
              Loader.Model
                ( 'test'
                , stub
                , stub
                , stub
                , stub
                , stub
                , null
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces Ok.<Model> when given valid arguments'
        , () => {
            const stub = () => null
            const htmlElementSelector = 'test'
            const actualValue =
              Loader.Model
                ( htmlElementSelector
                , stub
                , stub
                , stub
                , stub
                , stub
                , stub
                )
            const value =
                Object.create
                  ( Loader.Model.prototype
                  , { htmlElementSelector :
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

            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : value
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
  ( 'update'
  , () => {
      it( 'Produce a Err.<TypeError> if the first argument is not an'
        + ' message.'
        , () => {
            const message = 'adfasdf'
            const messageHandler = () => null
            const htmlElementSelector = 'test'
            const model =
              Object.create
                ( Loader.Model.prototype
                , { htmlElementSelector :
                      { value      : htmlElementSelector
                      , enumerable : true
                      }
                  , messageHandler : 
                      { value      : messageHandler
                      , enumerable : true
                      }
                  }
                )
            const actualValue = Loader.update(message, model)
            const error = new TypeError(Loader.UPDATE_ARG1_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'Produce a Err.<TypeError> if the second argument is not an'
        + ' Model.'
        , () => {
            const message = Loader.Start([]).value
            const model = { }
            const actualValue = Loader.update(message, model)
            const error = new TypeError(Loader.UPDATE_ARG2_ERROR)
            const expectedValue =
              Object.create
                ( Result.Err.prototype
                , { error :
                      { value      : error
                      , enumerable : true
                      }
                  }
                )

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces Ok.<Model> when given an "Initialize" Message,'
        + ' where the returned Model is the result of calling the'
        + ' initializeHandeler on the given Model'
        , () => {
            const model2 = 
              Object.create
                ( Loader.Model.prototype
                , { htmlElementSelector :
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
            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : model2
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
                , { htmlElementSelector :
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

            const message = Loader.Initialize(argv).value

            const actualValue = Loader.update(message, model)

            expect(messageHandler).toHaveBeenCalledTimes(1)
            expect(messageHandler).toHaveBeenCalledWith(argv, model)
            expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )
