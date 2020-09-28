import Splide from '@splidejs/splide';

import './scss/index.scss'


const MAIN_HOME_SLIDER_CLASSNAME = 'main-slider'
const NAV_SLIDER_CLASSNAME = 'main-slider__pagination'

const mainSlider =
  new Splide
    ( `.${MAIN_HOME_SLIDER_CLASSNAME}`
    , { autoplay   : true
      , cover      : true
      , autoWidth  : true
      , autoHeight : true
      , type       : 'loop'
      , arrows     : false
      , pagination : false
      }
    )

const mainSliderPagination =
  new Splide
    ( `.${NAV_SLIDER_CLASSNAME}`
    , { autoWidth    : true
      , autoHeight   : true
      , isNavigation : true
      , arrows       : false
      , pagination   : false
      }
    ).mount()

mainSlider.sync(mainSliderPagination).mount()
