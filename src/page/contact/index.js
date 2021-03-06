import * as L from 'leaflet'
import * as Navbar from "component/Navbar"

import "./index.scss"



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
    return L.map(id).setView([DEG_NORTH, DEG_WEST], ZOOM_LEVEL)
  }



function add_map_tile_layer
  ( map
  ) {
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
    const document = window.document

    document.addEventListener
      ( 'DOMContentLoaded'
      , () => {
          Navbar.init(window, '#main-nav')

          add_map_tile_layer
            ( init_map(MAP_ID)
            )
        }
      )
  }



init(window)
