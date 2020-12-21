import * as I from "immutable"
import type {  RecordOf, Record } from 'immutable'



export interface Interface 
  { state            : any
  , rootHtmlElement? : HTMLElement
  }



export type Model<ITF extends Interface> = RecordOf<ITF>



export type Factory<ITF extends Interface> =
  ( data : Partial<ITF> ) => Model<ITF>



export const dummy : Factory<Interface> =
  I.Record
    ( { state           : 'dummy state'
      , rootHtmlElement : undefined
      }
    )



export function set_state_to<ITF extends Interface>
  ( newState : any
  , model    : Model<ITF>
  ) : Model<ITF> {
    return model.set('state', newState)
  }



export function get_state_from<ITF extends Interface>
  ( model : Model<ITF>
  ) : any {
    return model.get('state', undefined)
  }



export function set_root_html_element_to<ITF extends Interface>
  ( newHTMLElement : HTMLElement
  , model          : Model<ITF>
  ) : Model<ITF> {
    return model.set('rootHtmlElement', newHTMLElement)
  }



export function get_root_html_element_from<ITF extends Interface>
  ( model : Model<ITF>
  ) : HTMLElement {
    return model.get('rootHtmlElement', undefined)
  }



