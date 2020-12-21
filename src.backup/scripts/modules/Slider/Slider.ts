
import * as Result from "../Result"
import * as State from "./State"
import * as Message from "./Message"
import * as Controller from "../Controller"
import * as I from "immutable"
import Splide from '@splidejs/splide';

import type {  RecordOf } from 'immutable'



export const UPDATE_ERROR = 'Unable to update Model'



interface Interface extends Controller.Subject.Interface
  { state               : State.State
  , rootHtmlElement?    : HTMLElement
  , slider?             : Splide
  , sliderPagination?   : Splide
  }



export type Model = Controller.Subject.Model<Interface>



export const create : Controller.Subject.Factory<Interface> =
  I.Record
    ( { state               : State.Unset
      , rootHtmlElement     : undefined
      , slider              : undefined
      , sliderPagination    : undefined
      }
    , 'Model'
    )



export function get_slider_from
  ( model : Model
  ) : Splide {
    return model.get('slider', undefined)
  }



export function set_slider_to
  ( slider : Splide
  , model  : Model
  ) : Model {
    return model.set('slider', slider)
  }



export function get_slider_pagination_from
  ( model : Model
  ) : Splide {
    return model.get('sliderPagination', undefined)
  }



export function set_slider_pagination_to
  ( slider : Splide
  , model  : Model
  ) : Model {
    return model.set('sliderPagination', slider)
  }



export const init = create



export const update : Controller.Updater<Interface, Message.Interface> =
  ( message
  , model
  ) => {
    if( Controller.Message.is_initialize(message) ) {
      return (
        Controller.Subject.set_state_to
          ( State.Initializing
          , model
          )
      )


    } else if( Message.is_play(message) ) {
      return (
        Controller.Subject.set_state_to
          ( State.Playing
          , model
          )
      )


    } else if( Message.is_pause(message) ) {
      return (
        Controller.Subject.set_state_to
          ( State.Paused
          , model
          )
      )


    } else {
      return model
    }
  }



type MessageDispatcher =
  Controller.MessageDispatcher<Interface, Message.Interface>



function initialize_slider
  ( dispatch_message : MessageDispatcher
  , model            : Model
  ) : Controller.View.Model {
    const slider = get_slider_from( model )
    const sliderPagination = get_slider_pagination_from( model )


    if( sliderPagination ) {
      slider
        .sync( sliderPagination.mount() )
        .mount()
    } else {
      slider.mount()
    }


    dispatch_message( Message.Play({}) )


    return Controller.View.create({})
  }



function play_slider
  ( model : Model
  ) : Controller.View.Model {
    const slider = get_slider_from( model )


    slider.options = { autoplay : true }


    return Controller.View.create({})
  }



function pause_slider
  ( model : Model
  ) : Controller.View.Model {
    const slider = get_slider_from( model )


    slider.options = { autoplay : false }


    return Controller.View.create({})
  }



export const view
  : Controller.ModelViewer<Interface, Message.Interface> =
  ( window
  , messageDispatcher
  , model
  ) => {
    const state = Controller.Subject.get_state_from(model)


    if( State.is_initializing(state) ) {
      return initialize_slider(messageDispatcher, model)


    } else if( State.is_playing(state) ) {
      return play_slider(model)


    } else if( State.is_paused(state) ) {
      return pause_slider(model)


    } else {
      return Controller.View.create({})
    }
  }

