import * as Result from "../Result"
import * as I from "immutable"



function make_test_value__ok(value) {
  return Result.Ok(value)
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

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

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
              const actualValue = Result.Ok(value)

              // console.log('Expected: ', expectedValue.toString())
              // console.log('Actual: ', actualValue.toString())

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
              const actualValue = Result.is_ok(testValue)

              // console.log('Expected: ', testValue.equals(testValue))
              // console.log('Actual: ', actualValue)

              expect(actualValue).toBe(true)
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
              const actualValue = Result.is_ok(testValue)

              // console.log('Expected: ', testValue.equals(testValue))
              // console.log('Actual: ', actualValue)

              expect(actualValue).toBe(false)
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
              const actualValue = Result.is_err(testValue)

              // console.log('Expected: ', testValue.equals(testValue))
              // console.log('Actual: ', actualValue)

              expect(actualValue).toBe(true)
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
              const actualValue = Result.is_err(testValue)

              // console.log('Expected: ', testValue.equals(testValue))
              // console.log('Actual: ', actualValue)

              expect(actualValue).toBe(false)
            }

            do_test('test error')
            do_test(1)
            do_test({failure : "this failed"})
          }
        )
    }
  )
