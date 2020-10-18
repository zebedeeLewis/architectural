import * as Result from "../src/Result/Result"



describe
  ( 'Err'
  , () => {
      it( 'Produces an Err.<string> Result when given a string as'
        + ' first argument.'
        , () => {
            const error = "just a string"
            const actualValue = Result.Err(error)
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

      it( 'Produces an Err.<number> Result when given a number as'
        + ' first argument.'
        , () => {
            const error = 4
            const actualValue = Result.Err(error)
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



describe
  ( 'Ok'
  , () => {
      it( 'Produces an Ok.<string> Result when given a string as'
        + ' first argument.'
        , () => {
            const value = "just a string"
            const actualValue = Result.Ok(value)
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

      it( 'Produces an Ok.<number> Result when given a number as'
        + ' first argument.'
        , () => {
            const value = 6
            const actualValue = Result.Ok(value)
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
