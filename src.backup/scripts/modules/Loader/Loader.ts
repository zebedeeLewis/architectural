import * as I from 'immutable'
import * as Result from '../Result'
import * as State from './State'
import * as Message from './Message'
import * as Controller from '../Controller'
import type gsap from 'gsap'

import type {  RecordOf } from 'immutable'



export const UPDATE_ERROR = 'Unable to update Model'



interface Interface extends Controller.Subject.Interface
  { state               : State.Model
  , rootHtmlElement?    : HTMLElement
  , bars?               : NodeList
  , loaderGsapTimeline? : gsap.core.Timeline
  }



export type Model = Controller.Subject.Model<Interface>



type Factory = Controller.Subject.Factory<Interface>



export const create : Factory =
  I.Record
    ( { state              : State.Unset
      , rootHtmlElement    : undefined
      , bars               : undefined
      , loaderGsapTimeline : undefined
      }
    , 'Loader'
    )



export function get_loader_gsap_timeline_from
  ( model : Model
  ) : gsap.core.Timeline {
    return model.get('loaderGsapTimeline', undefined)
  }



export function set_loader_gsap_timeline_to
  ( timeline : gsap.core.Timeline
  , model    : Model
  ) : Model {
    return model.set('loaderGsapTimeline', timeline)
  }



export function get_bars_from
  ( model : Model
  ) : NodeList {
    return model.get('bars', undefined)
  }



export function set_bars_to
  ( bars  : NodeList
  , model : Model
  ) : Model {
    return model.set('bars', bars)
  }



const dummyModel = create({})



export const init = create



export const update
  : Controller.Updater<Interface, Message.Interface> =
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


    } else if( Message.is_start(message) ) {
      return (
        Controller.Subject.set_state_to
          ( State.Running
          , model
          )
      )


    } else if( Message.is_close(message) ) {
      return (
        Controller.Subject.set_state_to
          ( State.Closing
          , model
          )
      )


    } else if( Message.is_cleanup(message) ) {
      return (
        Controller.Subject.set_state_to
          ( State.Done
          , model
          )
      )


    } else {
      return model
    }
  }



function animate_loader
  ( model : Model
  ) : Controller.View.Model {
    const loaderGsapTimeline = get_loader_gsap_timeline_from(model)
    const bars = get_bars_from(model)
    const animationConfig =
      { rotationY : '360deg'
      , yoyo      : true
      , repeat    : -1
      , delay     : .1
      , stagger   : .3
      }


    loaderGsapTimeline.to(bars, animationConfig)


    return Controller.View.create({})
  }



type MessageDispatcher =
  Controller.MessageDispatcher<Interface, Message.Interface>



function fade_out_loader
  ( dispatch_message : MessageDispatcher
  , model            : Model
  ) : Controller.View.Model {
    const loaderGsapTimeline = get_loader_gsap_timeline_from(model)
    const rootHtmlElement =
      Controller.Subject.get_root_html_element_from(model)
    const animationConfig =
      { duration   : .8
      , opacity    : 0
      , onComplete :
          ()=> dispatch_message( Message.Cleanup({}) )
      }


    loaderGsapTimeline.to(rootHtmlElement, animationConfig)


    return Controller.View.create({})
  }



function remove_loader
  ( model : Model
  ) : Controller.View.Model {
    const loaderGsapTimeline = get_loader_gsap_timeline_from(model)


    loaderGsapTimeline.kill()


    const rootHtmlElement =
      Controller.Subject.get_root_html_element_from(model)


    const style =
      [ { selector : rootHtmlElement
        , styles   :
            { display : 'none'
            }
        }
      ]


    return Controller.View.create({style})
  }
  


export const view
  : Controller.ModelViewer<Interface, Message.Interface> =
  ( window
  , messageDispatcher
  , model
  ) => {
    const state = Controller.Subject.get_state_from(model)


    if( Controller.State.is_initializing(state) ) {
      return Controller.View.create({})


    } else if( State.is_running(state) ) {
      return animate_loader(model)


    } else if( State.is_closing(state) ) {
      return fade_out_loader(messageDispatcher, model)


    } else if( State.is_done(state) ) {
      return remove_loader(model)

    } else {
      return Controller.View.create({})

    }
  }
