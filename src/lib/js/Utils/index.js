
const NO_SCROLL_CLASS = 'no-scroll'



/**
 * prevent page from scrolling.
 *
 * @parm {Window} window
 *
 * @return {void}
 */
export function disable_page_scroll
  ( window
  ) {
    const document = window.document
    const body = document.body
    body.classList.add( NO_SCROLL_CLASS )


    const scrollTop
      =  window.pageYOffset
      || document.documentElement.scrollTop
    const scrollLeft
      =  window.pageXOffset
      || document.documentElement.scrollLeft

    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)
  }



/**
 * re-enable page from scrolling.
 *
 * @parm {Window} window
 *
 * @return {void}
 */
export function enable_page_scroll
  ( window
  ) {
    const document = window.document
    const body = document.body
    body.classList.remove( NO_SCROLL_CLASS )

    window.onscroll = () => {}
  }



