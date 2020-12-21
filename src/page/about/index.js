import * as Navbar from "component/Navbar"

import './index.scss'



function init
  ( window
  ) {
    const document = window.document

    document.addEventListener
      ( 'DOMContentLoaded'
      , () => {
          Navbar.init(window, '#main-nav')
        }
      )
  }



init(window)
