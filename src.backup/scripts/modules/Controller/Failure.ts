import * as I from "immutable"
import * as Subject from "./Subject"

import type {  RecordOf, Record } from 'immutable'



export interface Interface<ITF extends Subject.Interface, Error>
  { error  : Error
  , model  : Subject.Model<ITF>
  }



/** Provides information about a failed model update operation. */
export type Model<ITF extends Subject.Interface, Error> =
  RecordOf< Interface<ITF, Error> >



type Factory =
  ( data : Partial< Interface<any, any> > ) => Model<any, any>



const dummyFactory = I.Record({})



export const create : Factory =
  I.Record
    ( { error : 'initial'
      , model : dummyFactory({}) as RecordOf<any>
      }
    , 'Failure'
    )



