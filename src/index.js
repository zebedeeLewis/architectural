import Splide from '@splidejs/splide';

import './scss/index.scss'


const MAIN_HOME_SLIDER_CLASSNAME = 'home-slider--main'

const mainHomeSlider =
  new Splide
    ( `.${MAIN_HOME_SLIDER_CLASSNAME}`
    , { autoplay : true
      , type     : 'loop'
      }
    ).mount()
