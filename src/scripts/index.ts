import * as Controller from "./modules/Controller"
import * as Slider from "./modules/Slider"
import * as Result from "./modules/Result"
import * as Draggable from "./modules/Draggable"
import Splide from '@splidejs/splide';

import '../scss/index.scss'


const SLIDER_SELECTOR = '.main-slider'
const PAGINATION_SLIDER_SELECTOR = '.main-slider__pagination'



function init_slider
  ( window   : Window
  , document : Document
  ) : void {
    const rootHtmlElement =
      document.querySelector(SLIDER_SELECTOR) as HTMLElement

    const slider =
      new Splide
        ( SLIDER_SELECTOR
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
        ( PAGINATION_SLIDER_SELECTOR
        , { autoWidth    : true
          , autoHeight   : true
          , isNavigation : true
          , arrows       : false
          , pagination   : false
          }
        )


    const model =
      Slider.init
        ( { rootHtmlElement
          , slider
          , sliderPagination
          }
        )


    const dispatch_message =
      Controller.start
        ( window
        , model
        , Slider.update
        , Slider.view
        )


    dispatch_message( Controller.Message.Initialize({}) )
  }


function init_draggable
  ( window   : Window
  , document : Document
  ) : void {
    const rootHtmlElement =
      document.querySelector('.page-title') as HTMLElement


    const model =
      Draggable.init
        ( { rootHtmlElement
          , activeAxis : Draggable.Axis.Y
          }
        )


    const dispatch_message =
      Controller.start
        ( window
        , model
        , Draggable.update
        , Draggable.view
        )


    dispatch_message( Controller.Message.Initialize({}) )
  }



init_draggable(window, document)
init_slider(window, document)
