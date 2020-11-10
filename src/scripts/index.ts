import * as Controller from "./modules/Controller"
import * as Slider from "./modules/Slider"
import * as Result from "./modules/Result"

import Splide from '@splidejs/splide';
import '../scss/index.scss'


const SLIDER_CLASSNAME = 'main-slider'

const PAGINATION_SLIDER_CLASSNAME = 'main-slider__pagination'

const ERROR_SLIDER_OBJECT =
  'I need a slider object to proceed'



const initialize_slider : Slider.MessageHandler =
  ( argv
  , model
  ) => {
    const slider = Slider.get_slider_from( model )
    const sliderPagination = Slider.get_slider_pagination_from( model )

    try {
      if( !slider ) {
        throw new Error( ERROR_SLIDER_OBJECT )
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

    if( sliderPagination ) {
      slider
        .sync( sliderPagination.mount() )
        .mount()
    } else {
      slider.mount()
    }

    return Result.Ok( { value : model } )
  }



function init_slider
  ( window   : Window
  , document : Document
  ) : void {
    const slider =
      new Splide
        ( `.${SLIDER_CLASSNAME}`
        , { autoplay   : true
          , cover      : true
          , autoWidth  : true
          , autoHeight : true
          , type       : 'loop'
          , arrows     : false
          , pagination : false
          }
        )

    const sliderPagination =
      new Splide
        ( `.${PAGINATION_SLIDER_CLASSNAME}`
        , { autoWidth    : true
          , autoHeight   : true
          , isNavigation : true
          , arrows       : false
          , pagination   : false
          }
        )

    const sliderModel =
      Slider.init
        ( { slider
          , sliderPagination
          , initializeHandler   : initialize_slider
          }
        )

    const controller =
      Controller.create
        ( { model   : sliderModel
          , updater : Slider.update
          }
        )

    Controller.dispatch_message
      ( Controller.Message.Initialize({})
      , controller
      )
  }



init_slider(window, document)
