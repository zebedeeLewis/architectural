import * as Result from "../Result"
import * as I from "immutable"
import diff from  "jest-diff"



function make_test_value__ok(value) {
  return Result.Ok({value})
}



function make_test_value__err(error) {
  return Result.Err({error})
}



describe
  ( 'Err'
  , () => {
      it( 'Produces an Err<E> Result when given a first argument. '
        + 'of type "E", where "E" can be any type.'
        , () => {
            function do_test(error) {
              const expectedValue = make_test_value__err(error)
              const actualValue = Result.Err({error})

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(actualValue.hashCode())
                .toBe(expectedValue.hashCode())

              expect(I.Record.getDescriptiveName(actualValue))
                .toBe(I.Record.getDescriptiveName(expectedValue))
            }

            do_test('test error')
            do_test(1)
            do_test({failure : "this fialed"})
          }
        )
    }
  )



describe
  ( 'Ok'
  , () => {
      it( 'Produces an Ok<T> Result when given a first argument. '
        + 'of type "T", where "T" can be any type.'
        , () => {
            function do_test(value) {
              const expectedValue = make_test_value__ok(value)
              const actualValue = Result.Ok({value})

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(actualValue.hashCode())
                .toBe(expectedValue.hashCode())

              expect(I.Record.getDescriptiveName(actualValue))
                .toBe(I.Record.getDescriptiveName(expectedValue))
            }

            do_test('test error')
            do_test(1)
            do_test({failure : "this fialed"})
          }
        )
    }
  )



describe
  ( 'is_ok'
  , () => {
      it( 'Produces true if the given Result is an OK<T>, where '
        + '"T" can be any type.'
        , () => {
            function do_test(value) {
              const testValue = make_test_value__ok(value)
              const expectedValue = true
              const actualValue = Result.is_ok(testValue)

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(actualValue).toBe(expectedValue)
            }

            do_test('test error')
            do_test(1)
            do_test({failure : "this fialed"})
          }
        )



      it( 'Produces false if the given Result is not an OK<T>, where '
        + '"T" can be any type.'
        , () => {
            function do_test(value) {
              const testValue = make_test_value__err(value)
              const expectedValue = false
              const actualValue = Result.is_ok(testValue)

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(actualValue).toBe(expectedValue)
            }

            do_test('test error')
            do_test(1)
            do_test({failure : "this fialed"})
          }
        )
    }
  )



describe
  ( 'is_err'
  , () => {
      it( 'Produces true if the given Result is an Err<E>, where '
        + '"E" can be any type.'
        , () => {
            function do_test(value) {
              const testValue = make_test_value__err(value)
              const expectedValue = true
              const actualValue = Result.is_err(testValue)

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )


              expect(actualValue).toBe(expectedValue)
            }

            do_test('test error')
            do_test(1)
            do_test({failure : "this fialed"})
          }
        )



      it( 'Produces false if the given Result is not an Err<E>, where '
        + '"E" can be any type.'
        , () => {
            function do_test(value) {
              const testValue = make_test_value__ok(value)
              const expectedValue = false
              const actualValue = Result.is_err(testValue)

              console.log
                ( diff
                    ( expectedValue
                    , actualValue
                    )
                )

              expect(actualValue).toBe(expectedValue)
            }

            do_test('test error')
            do_test(1)
            do_test({failure : "this failed"})
          }
        )
    }
  )
