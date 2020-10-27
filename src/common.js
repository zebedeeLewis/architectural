import * as GSAP from "gsap"

function animate_loader
  ( loadingElement
  , initTimeline
  ){
    if (!loadingElement) { return initTimeline }

    const timeline = initTimeline || GSAP.gsap.timeline()

    const loadingBars =
      loadingElement.querySelectorAll('.loading__bar')

    const animationConfig =
      { rotationY : '360deg'
      , yoyo      : true
      , repeat    : -1
      , delay     : .1
      , stagger   : .3
      }

    return timeline.to( loadingBars, animationConfig )
  }



function remove_loader
  ( loadingElement
  , loaderTimeline
  ){
    if (!loadingElement || !loaderTimeline) { return null }

    loaderTimeline
      .to( loadingElement
         , { duration   : .8
           , opacity    : 0
           , onComplete : ()=> {
               loadingElement.style.display = 'none'
               loaderTimeline.kill()
             }
           }
         )

    return loaderTimeline
  }



const loadingElement = document.querySelector('.loading')
const loaderTimeline = animate_loader(loadingElement, null)

window.addEventListener
  ( 'load'
  , () => remove_loader(loadingElement, loaderTimeline)
  )
