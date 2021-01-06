import * as L from 'leaflet'
import * as DataStore from 'lib/js/DataStore'
import * as Navbar from "component/Navbar"
import * as ContactPage from './ContactPage'
import * as View from './View'
import * as Action from './Action'

import "./index.scss"



const NAVBAR_ID = 'main-nav'
const ZOOM_LEVEL = 8
const DEG_NORTH = 51.505
const DEG_WEST = -0.99
const MAP_ID = 'map'

const MAP_TILE_URL_TEMPLATE
  = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'

const MAP_ATTRIBUTION
  = 'Map data &copy; '
  + '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> '
  + 'contributors, '
  + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">'
  + '  CC-BY-SA'
  + '</a>,'
  + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'

const MAPBOX_TOKEN
  = 'pk.eyJ1IjoiemViZWRlZWxld2lzIiwiYSI6ImNraDNucXFobjAzc3EyeW53ZnllNzk2bXgifQ.ucM0QXsk0dh1qFkgojDtaw'



function init_map
  ( id
  ) {
    const map = L.map(id).setView([DEG_NORTH, DEG_WEST], ZOOM_LEVEL)

    return (
      L.tileLayer
        ( MAP_TILE_URL_TEMPLATE
        , { attribution : MAP_ATTRIBUTION 
          , maxZoom     : 18
          , id          : 'mapbox/streets-v11'
          , tileSize    : 512
          , zoomOffset  : -1
          , accessToken : MAPBOX_TOKEN
          }
        ).addTo(map)
    )
  }



function init
  ( window
  ) {
    const navbar = Navbar.create({ id : NAVBAR_ID })
    const contactPage = ContactPage.create({ navbar })

    DataStore.initialize
      ( window
      , ContactPage.update
      , View.as_default
      , contactPage
      )

    const document = window.document

    document.addEventListener
      ( 'DOMContentLoaded'
      , () => {
          const navbarOpenClickHandler 
            = () => {
                const toggleNavbarOn
                  = Action.wrap_navbar_action_toggle_on()
                DataStore.Action.execute(toggleNavbarOn)
              }

          const navbarCloseClickHandler 
            = ( ) => {
                const toggleNavbarOff
                  = Action.wrap_navbar_action_toggle_off()
                DataStore.Action.execute(toggleNavbarOff)
              }

          const initNavbar
            =  Action.wrap_navbar_action_initialize
                  ( navbarOpenClickHandler
                  , navbarCloseClickHandler
                  )

          DataStore.Action.execute( initNavbar )

          init_map(MAP_ID)
        }
      )
  }



init(window)
