
import * as I from "immutable"
import type { RecordOf, Record } from "immutable"



/**
 * Represents the result of an operation that could either fail or
 * succeed.
 */
export type Result<E, T>
  = Ok<T>
  | Err<E>



/** Produce true if the given value is a valid Result<E|T> */
export function is_result<E, T>
  ( possibleResult : any
  ) : possibleResult is Result<E, T> {
    return is_ok(possibleResult) || is_err(possibleResult)
  }



interface ErrInterface<E> { error : E }



/**
 * Represents the result of an operation that has failed. It provides
 * an option to returna additional information about the failure.
 */
export type Err<E> = RecordOf< ErrInterface<E> >



export const ErrFactory : Record.Factory< ErrInterface<any> > =
  I.Record({error : 'initial'}, 'Err')



export function Err<E>
  ( error : E
  ) : Err<E> {
    return ErrFactory({error})
  }



/** Produce true if the given value is a Result.Err<E> */
export function is_err<E, T>
  ( result : Result<E, T>
  ) : result is Err<E> {
    return (
      (result as Err<E>).equals(Err(result.get('error', undefined)))
    )
  }



interface OkInterface<T> { value : T }



/** Represents the result of an operation that has succeded. */
export type Ok<T> = RecordOf< OkInterface<T> >



export const OkFactory : Record.Factory< OkInterface<any> > =
  I.Record({value : 'initial'}, 'Ok')



export function Ok<T>
  ( value : T
  ) : Ok<T> {
    return OkFactory({value})
  }



/** Produce true if the given value is a Result.Ok<T> */
export function is_ok<E, T>
  ( result : Result<E, T>
  ) : result is Ok<T> {
    return (result as Ok<T>).equals(Ok(result.get('value', undefined)))
  }



