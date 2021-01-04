import * as Navbar from "component/Navbar"

import './index.scss'



function init
  ( window
  ) {
    const document = window.document

    document.addEventListener
      ( 'DOMContentLoaded'
      , () => {
          Navbar.View.init(window, '#main-nav')
        }
      )
  }



init(window)
