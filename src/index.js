import Splide from '@splidejs/splide';

import './scss/index.scss'


const MAIN_HOME_SLIDER_CLASSNAME = 'main-slider'
const NAV_SLIDER_CLASSNAME = 'main-slider__pagination'



const init_main_slider = (sliderSelector) => (
  new Splide
    ( sliderSelector
    , { autoplay   : true
      , cover      : true
      , autoWidth  : true
      , autoHeight : true
      , type       : 'loop'
      , arrows     : false
      , pagination : false
      }
    )
)



const init_main_slider_pagination = (paginationSelector) => (
  new Splide
    ( paginationSelector
    , { autoWidth    : true
      , autoHeight   : true
      , isNavigation : true
      , arrows       : false
      , pagination   : false
      }
    )
)



init_main_slider(`.${MAIN_HOME_SLIDER_CLASSNAME}`)
  .sync(
    init_main_slider_pagination(`.${NAV_SLIDER_CLASSNAME}`).mount()
  ).mount()

