import * as Controller from "./modules/Controller"
import * as Loader from "./modules/Loader"
import * as Result from "./modules/Result"

import * as Gsap from "gsap"



const LOADER_SELECTOR = '.loading'

const LOADER_BARS_SELECTOR = '.loading__bar'

const ERROR_LOADING_ELEMENT =
  'Please provide an HtmlElement for the loading animation'

const ERROR_LOADING_TIMELINE =
  'I need a Gsap timeline to stop'



const animate_loader : Loader.MessageHandler =
  ( [ loadingElement
    , loaderTimeline
    , controller
    ]
  , model
  ) => {

    try {
      if( !loadingElement ) {
        throw new Error(ERROR_LOADING_ELEMENT)
      }

      if( !loaderTimeline ) {
        throw new Error(ERROR_LOADING_TIMELINE)
      }
    } catch( e ) {
      const failure = 
        Controller.Failure.create
          ( { error : e
            , model : model
            }
          )

      return Result.Err( { error : failure } )
    }

    const loadingBars =
      loadingElement.querySelectorAll( LOADER_BARS_SELECTOR )

    const animationConfig =
      { rotationY  : '360deg'
      , yoyo       : true
      , repeat     : -1
      , delay      : .1
      , stagger    : .3
      }

    loaderTimeline.to( loadingBars, animationConfig )

    Controller.dispatch_message
      ( Loader.Message.Started
          ( { argv :
                [ loadingElement
                , loaderTimeline
                , controller
                ]
            }
          )
      , controller
      )

    return Result.Ok( { value : model } )
  }



const fade_out_loader : Loader.MessageHandler =
  ( [ loadingElement
    , loaderTimeline
    , controller
    ]
  , model
  ) => {
    try {
      if ( !loadingElement ) {
        throw new Error( ERROR_LOADING_ELEMENT )
      }

      if ( !loaderTimeline ) {
        throw new Error( ERROR_LOADING_TIMELINE )
      }
    } catch( e ) {
      const failure = 
        Controller.Failure.create
          ( { error : e
            , model : model
            }
          )

      return Result.Err( { error : failure } )
    }

    const animationConfig =
      { duration   : .8
      , opacity    : 0
      , onComplete :
          ()=> {
            Controller.dispatch_message
              ( Loader.Message.Stopped
                  ( { argv : 
                        [ loadingElement
                        , loaderTimeline 
                        , controller
                        ] 
                    }
                  )
              , controller
              )
          }
      }

    loaderTimeline.to( loadingElement, animationConfig )

    return Result.Ok( { value : model } )
  }



const remove_loader : Loader.MessageHandler =
  ( [ loadingElement
    , loaderTimeline
    , controller
    ]
  , model
  ) => {
    try {
      if( !loadingElement ) {
        throw new Error( ERROR_LOADING_ELEMENT )
      }

      if( !loaderTimeline ) {
        throw new Error( ERROR_LOADING_TIMELINE )
      }
    } catch( e ) {
      const failure = 
        Controller.Failure.create
          ( { error : e
            , model : model
            }
          )

      return Result.Err( { error : failure } )
    }

    loadingElement.style.display = 'none'
    loaderTimeline.kill()

    return Result.Ok( { value : model } )
  }
  


function init_loader
  ( window   : Window
  , document : Document
  ) : void {
    const loaderComponent =
      Loader.init
        ( { htmlElementSelector : LOADER_SELECTOR
          , startHandler        : animate_loader
          , stopHandler         : fade_out_loader
          , stoppedHandler      : remove_loader
          }
        )

    const controller =
      Controller.create
        ( { model   : loaderComponent
          , updater : Loader.update
          }
        )

    const loadingElement = document.querySelector( LOADER_SELECTOR )

    const loaderTimeline = Gsap.gsap.timeline()

    window.addEventListener
      ( 'load'
      , () => (
          Controller.dispatch_message
            ( Loader.Message.Stop
               ( { argv : 
                     [ loadingElement
                     , loaderTimeline
                     , controller
                     ]
                 }
               )
            , controller
            )
        )
      )

    Controller.dispatch_message
      ( Loader.Message.Start
         ( { argv : 
               [ loadingElement
               , loaderTimeline
               , controller
               ]
           }
         )
      , controller
      )
  }



init_loader(window, document)


