import * as Loader from "..//Loader"
import * as LoaderCore from "../Loader.core"
import * as Result from "../../Result"


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

      it( 'produces a new Ok.<Initialize> when given valid arguments'
        , () => {
            const argv = [1, 2, 3]
            const actualValue = Loader.Initialize(argv)

            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : LoaderCore.Initialize(argv)
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
            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : LoaderCore.Initialized(argv)
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

            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : LoaderCore.Start(argv)
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
            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : LoaderCore.Started(argv)
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
            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : LoaderCore.Stop(argv)
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
            const expectedValue =
              Object.create
                ( Result.Ok.prototype
                , { value :
                      { value      : LoaderCore.Stopped(argv)
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
  ( 'Model'
  , () => {
      it( 'Produce a Err.<TypeError> if the first argument is not a '
        + 'State.'
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
                ( null
                , 'test'
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
        + 'string.'
        , () => {
            const state = LoaderCore.Running()
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
                ( state
                , 1
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

      it( 'Produce a Err.<TypeError> if the third argument is not a '
        + 'function.'
        , () => {
            const state = LoaderCore.Running()
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
                ( state
                , 'test'
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

      it( 'Produce a Err.<TypeError> if the fourth argument is not a '
        + 'function.'
        , () => {
            const state = LoaderCore.Running()
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
                ( state
                , 'test'
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

      it( 'Produce a Err.<TypeError> if the fifth argument is not a '
        + 'function.'
        , () => {
            const state = LoaderCore.Running()
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
                ( state
                , 'test'
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

      it( 'Produce a Err.<TypeError> if the sixth argument is not a '
        + 'function.'
        , () => {
            const state = LoaderCore.Running()
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
                ( state
                , 'test'
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

      it( 'Produce a Err.<TypeError> if the seventh argument is not a '
        + 'function.'
        , () => {
            const state = LoaderCore.Running()
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
                ( state
                , 'test'
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

      it( 'Produce a Err.<TypeError> if the eighth argument is not a '
        + 'function.'
        , () => {
            const state = LoaderCore.Running()
            const stub = ()=>null
            const error = new TypeError(Loader.MODEL_ARG8_ERROR)
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
                ( state
                , 'test'
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
            const state = LoaderCore.Running()
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
                ( Result.Ok.prototype
                , { value :
                      { value      :
                          LoaderCore.Model
                            ( state
                            , htmlElementSelector
                            , stub
                            , stub
                            , stub
                            , stub
                            , stub
                            , stub
                            )
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
            const actualValue =
              Loader.update_according_to_message(message, model)
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
            const actualValue =
              Loader.update_according_to_message(message, model)
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
    }
  )
