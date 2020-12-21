import * as Controller from "./modules/Controller"
import * as Loader from "./modules/Loader"
import * as Result from "./modules/Result"

import * as Gsap from "gsap"



const LOADER_SELECTOR = '.loading'
const LOADER_BARS_SELECTOR = '.loading__bar'



function init_loader
  ( window   : Window
  , document : Document
  ) : void {
    const loaderGsapTimeline = Gsap.gsap.timeline()

    const rootHtmlElement =
      document.querySelector(LOADER_SELECTOR) as HTMLElement

    const bars = rootHtmlElement.querySelectorAll(LOADER_BARS_SELECTOR)


    const model =
      Loader.init
        ( { rootHtmlElement
          , bars
          , loaderGsapTimeline
          }
        )


    const dispatch_message =
      Controller.start
        ( window
        , model
        , Loader.update
        , Loader.view
        )


    window.addEventListener
      ( 'load'
      , () => dispatch_message( Loader.Message.Close({}) )
      )


    dispatch_message( Loader.Message.Start({}) )
  }



init_loader(window, document)


