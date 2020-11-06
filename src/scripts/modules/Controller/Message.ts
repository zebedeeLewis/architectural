import * as I from "immutable"

import type {  RecordOf, Record } from 'immutable'



export type Common = Initialize



export interface Interface {
  argv? : Array<any>
}



export type Model<ITF extends Interface> = RecordOf<ITF>



export type Factory<ITF extends Interface> =
  ( data : Partial<ITF> ) => Model<ITF>



/**
 * Note: This function is meant to be called only once to build each
 * Message type factory.
 */
export function create_factory<ITF extends Interface>
  ( data : ITF
  ) : Factory<ITF> {
    return I.Record(data)
  }



export function is_message_of_type<ITF extends Interface>
  ( constructor     : Factory<ITF>
  , possibleMessage : any
  ) : possibleMessage is Model<ITF> {
    const _possibleMessage = possibleMessage as Model<ITF>

    return (
         I.Record.isRecord(_possibleMessage)
      && constructor(_possibleMessage.toObject()).equals(possibleMessage)
    )
  }



export interface InitializeInterface extends Interface
  { rootHtmlElement : HTMLElement | null
  , initialMarkup   : string | null
  , argv?           : Array<any>
  }



export type Initialize = Model<InitializeInterface>



export const Initialize : Factory<InitializeInterface> =
  create_factory
    ( { rootHtmlElement : null
      , initialMarkup   : null
      , argv            : undefined
      }
    )


