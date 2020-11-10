
import * as Result from "../Result"
import * as State from "./State"
import * as Message from "./Message"
import * as Controller from "../Controller"
import * as I from "immutable"



import Splide from '@splidejs/splide';


import type {  RecordOf } from 'immutable'


export const UPDATE_ERROR = 'Unable to update Model'



/**
 * Represents a function to be called by the
 * update_model function in response a Message.
 */
export type MessageHandler =
  ( argv  : Array<any>
  , model : Model
  ) => Result.Result<Controller.Failure.Model<Interface, string>, Model>



const dummyHandler : MessageHandler =
  ( argv
  , model
  ) => (
    Result.Ok({ value : model})
  )



interface Interface extends Controller.Subject.Interface
  { state               : State.State
  , rootHtmlElement?    : HTMLElement
  , slider?             : Splide
  , sliderPagination?   : Splide
  , initializeHandler   : MessageHandler
  , playHandler         : MessageHandler
  , pauseHandler        : MessageHandler
  }



/**
 * Represents a snapshot of the Slider at a given point. The Slider
 * Model provides a context for the interpretation of the messages
 * in the Message module and the states in the State module.
 */
export type Model = Controller.Subject.Model<Interface>



export const create : Controller.Subject.Factory<Interface> =
  I.Record
    ( { state               : State.Unset
      , rootHtmlElement     : undefined
      , slider              : undefined
      , sliderPagination    : undefined
      , initializeHandler   : dummyHandler
      , playHandler         : dummyHandler
      , pauseHandler        : dummyHandler
      }
    , 'Model'
    )



const dummyModel = create({})



export function set_state_to
  ( newState : State.State
  , model    : Model
  ) : Model {
    return model.set('state', newState)
  }



export function get_state_from
  ( model    : Model
  ) : State.State {
    return model.get('state', undefined)
  }



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



export function get_initialize_handler_from
  ( model : Model
  ) : MessageHandler {
    return model.get('initializeHandler', undefined)
  }



export function set_initialize_handler_to
  ( handler : MessageHandler
  , model   : Model
  ) : Model {
    return model.set('initializeHandler', handler)
  }



export function get_play_handler_from
  ( model : Model
  ) : MessageHandler {
    return model.get('playHandler', undefined)
  }



export function set_play_handler_to
  ( handler : MessageHandler
  , model   : Model
  ) : Model {
    return model.set('playHandler', handler)
  }



export function get_pause_handler_from
  ( model : Model
  ) : MessageHandler {
    return model.get('pauseHandler', undefined)
  }



export function set_pause_handler_to
  ( handler : MessageHandler
  , model   : Model
  ) : Model {
    return model.set('pauseHandler', handler)
  }



export const update : Controller.Updater<Interface, Message.Interface> =
  ( message
  , model
  ) => {

    if( Controller.Message.is_initialize(message) ) {
      const argv = Controller.Message.get_argv_from(message)
      const result = model.initializeHandler(argv, model)

      if( Result.is_ok(result) ) {
        return (
          set_state_to
            ( State.Initialized
            , Result.get_ok_value(result)
            )
        )
      }

      return model


    } else if( Message.is_play(message) ) {
      const argv = Controller.Message.get_argv_from(message)
      const result = model.playHandler(argv, model)

      if( Result.is_ok(result) ) {
        return (
          set_state_to
            ( State.Playing
            , Result.get_ok_value(result)
            )
        )
      }

      return model


    } else if( Message.is_pause(message) ) {
      const argv = Controller.Message.get_argv_from(message)
      const result = model.pauseHandler(argv, model)

      if( Result.is_ok(result) ) {
        return (
          set_state_to
            ( State.Paused
            , Result.get_ok_value(result)
            )
        )
      }

      return model


    } else {
      return model
    }

  }



export const init = create

