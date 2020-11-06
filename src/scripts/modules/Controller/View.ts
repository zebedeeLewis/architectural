import * as I from "immutable"
import * as Failure from './Failure'
import * as Result from '../Result'

import type {  RecordOf, Record } from 'immutable'


const ERROR_DEAD_END_SELECTOR =
  'The selector provided does not point to an element in the DOM'

const ERROR_INVALID_SELECTOR_TARGET =
  'The selector must point to an HTMLElement'



export interface StyleRule
  { selector : string
  , styles?  : { [x : string] : string }
  }



export interface Interface
  { markup? : string
  , style   : Array<StyleRule>
  }



export type Model = RecordOf<Interface>



type Factory = ( data : Partial<Interface>) => Model



export const create : Factory =
  I.Record
    ( { markup : undefined
      , style  : []
      }
    , 'View'
    )



export function get_style_from
  ( view : Model
  ) : Array<StyleRule> {
    return view.get('style', undefined)
  }



export function set_style_to
  ( newStyle : Array<StyleRule>
  , view      : Model
  ) : Model {
    return view.set('style', newStyle)
  }



export function apply_style
  ( window   : Window
  , document : Document
  , style    : StyleRule
  ) : Result.Result<StyleRule, string> {
    const possibleHtmlElement = document.querySelector(style.selector)


    if( !(possibleHtmlElement instanceof Element) ) {
      return Result.Err({ error : ERROR_DEAD_END_SELECTOR })
    }


    if( !(possibleHtmlElement instanceof HTMLElement) ) {
      return Result.Err({ error : ERROR_INVALID_SELECTOR_TARGET })
    }


    const htmlElement = possibleHtmlElement as HTMLElement


    const styleProperties = Object.keys(style.styles)
    styleProperties.forEach
      ( styleProperty => 
          htmlElement.style[styleProperty] = style.styles[styleProperty]
      )


    return Result.Ok({ value : style })
  }



export function apply_all_styles
  ( window   : Window
  , document : Document
  , view     : Model
  ) : Array< Result.Result<StyleRule, string> > {
    const styles = get_style_from(view)


    if( !styles ) {
      return []
    }


    return styles.map( style => apply_style(window, document, style) )
  }



export function get_markup_from
  ( view : Model
  ) : string {
    return view.get('markup', undefined)
  }



export function set_markup_to
  ( newMarkup : string
  , view      : Model
  ) : Model {
    return view.set('markup', undefined)
  }



