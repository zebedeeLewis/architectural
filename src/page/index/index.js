import Splide from '@splidejs/splide';
import * as Navbar from "component/Navbar"

import './index.scss'



const SLIDER_SELECTOR = '#slider'
const PAGINATION_SLIDER_SELECTOR = '.slider-pagination'



function init_slider
  ( window
  ) {
    const slider
      = new Splide
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


    const sliderPagination
      = new Splide
          ( PAGINATION_SLIDER_SELECTOR
          , { autoWidth    : true
            , autoHeight   : true
            , isNavigation : true
            , arrows       : false
            , pagination   : false
            }
          )


    slider
      .sync(sliderPagination.mount())
      .mount()
  }



function init
  ( window
  ) {
    const document = window.document

    document.addEventListener
      ( 'DOMContentLoaded'
      , () => {
          init_slider(window)
          Navbar.init(window, '#main-nav')
        }
      )
  }



init(window)
