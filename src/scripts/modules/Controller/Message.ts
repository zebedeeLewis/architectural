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
  ( data     : ITF
  , typeName : string
  ) : Factory<ITF> {
    return I.Record(data, typeName)
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
      , argv            : []
      }
    , 'Initialize'
    )



export function get_argv_from<ITF extends Interface>
  ( model : Model<ITF>
  ) : Array<any> | undefined {
    return model.get('argv', undefined)
  }



export function set_argv_to<ITF extends Interface>
  ( newElement : Array<any> | undefined
  , model      : Model<ITF>
  ) : Model<ITF> {
    return model.set('argv', newElement)
  }



export function get_root_html_element_from
  ( model : Initialize
  ) : HTMLElement {
    return model.get('rootHtmlElement', undefined)
  }



export function set_root_html_element_to
  ( newElement : HTMLElement
  , model      : Initialize
  ) : Initialize {
    return model.set('rootHtmlElement', newElement)
  }



export function is_initialize
  ( possibleMessage : any
  ) : possibleMessage is Initialize {
    return (
      is_message_of_type(Initialize, possibleMessage)
    )
  }



export function is_common
  ( possibleMessage : any
  ) : possibleMessage is Common {
    return (
      is_initialize(possibleMessage)
    )
  }

