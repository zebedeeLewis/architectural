import * as DataStore from 'lib/js/DataStore'
import * as Utils from 'lib/js/Utils'
import * as Navbar from '..'



const CLOSE_SELECTOR = '.navbar__toggle-close'
const HAMBURGER_SELECTOR = '.navbar__toggle-open'
const BREAKPOINT_SM = '600'



/**
 * Represents the classes that are applied to the Navbar DOMElement
 * for each possible ToggleState.
 *
 * @readonly
 * @enum {string}
 * @property {string} On  - class given to a toggled navbar
 * @property {string} Off - class given to a navbar that is not toggled
 */
const ToggledClass
  = Object.freeze
      ( { On  : 'navbar--toggled'
        , Off : 'navbar'
        }
      )


/**
 * Represents the classes that are applied to the Navbar scrim
 * DOMElement for each possible ToggleState.
 *
 * @readonly
 * @enum {string}
 * @property {string} On  - class given to a scrim that is toggled
 * @property {string} Off - class given to a scrim that is not toggled
 */
const ToggledScrimClass
  = Object.freeze
      ( { On  : 'scrim--active'
        , Off : 'scrim'
        }
      )



/**
 * Display the nav items in the Navbar Dom and hide
 * the hamburger.
 *
 * @param {HTMLElement} navbarElement
 *
 * @return {HtmlElement}
 */
function display_nav_items
  ( navbarElement
  ) {
    navbarElement.classList.add( ToggledClass.On )
    navbarElement.classList.remove( ToggledClass.Off )

    return navbarElement
  }




/**
 * Display the hamburger and hide the nav items in the Navbar Dom
 *
 * @param {HTMLElement} navbarElement
 *
 * @return {HTMLElement}
 */
function display_navbar_hamburger
  ( navbarElement
  ) {
    navbarElement.classList.add( ToggledClass.Off )
    navbarElement.classList.remove( ToggledClass.On )

    return navbarElement
  }



/**
 * display navbar scrim (i.e. the translucent background shown when
 * the navbar is toggled).
 *
 * @param {HTMLElement} scrimElement
 *
 * @return {HTMLElement}
 */
function show_scrim
  ( scrimElement
  ) {
    scrimElement.classList.add( ToggledScrimClass.On )
    scrimElement.classList.remove( ToggledScrimClass.Off )

    return scrimElement
  }



/**
 * hide navbar scrim (i.e. the translucent background shown when
 * the navbar is toggled).
 *
 * @param {HTMLElement} scrimElement
 *
 * @return {HTMLElement}
 */
function hide_scrim
  ( scrimElement
  ) {
    scrimElement.classList.add( ToggledScrimClass.Off )
    scrimElement.classList.remove( ToggledScrimClass.On )

    return scrimElement
  }



/**
 * Setup an event handler to Toggle the Navbar off at the given
 * breakpoint.
 *
 * @param {Window} window
 * @param {number} screenSize - when the screen size is smaller than or
 * equal to this value, the pages scrolling will be disabled. Value is
 * interpreted as pixels.
 * @param {Model} model
 *
 * @return {void}
 */
export function toggle_off_at_breakpoint
  ( window
  , screenSize
  , model
  ) {
    const breakpoint
      = window.matchMedia(`(max-width:${screenSize}px)`)

    breakpoint.addEventListener
      ( 'change'
      , () => {
          if(!breakpoint.matches) {
            model.toggled = Navbar.ToggledState.Off
            sync_dom_representation(window, model)
          }
        }
      )
  }




/**
 * Setup handlers for the events that will toggle the Navbar
 *
 * @param {Window} window - the browser window object
 *
 * @param {DataStore.Action.Execute} execute - this executes whatever
 * actions we need.
 *
 * @param {Navbar) navbar - our Navbar model
 *
 * @return {Navbar}
 */
export function setup_handlers
  ( window
  , execute
  , navbar
  ) {
    const open_navbar = Navbar.get_openClickHandler(navbarModel)
    const close_navbar = Navbar.get_closeClickHandler(navbarModel)

    const navbarElement = Navbar.get_element(navbar)
    const hamburgerElement
      = navbarElement.querySelector(HAMBURGER_SELECTOR)
    hamburgerElement.addEventListener( 'click', open_navbar)


    const navbarCloseElement
      = navbarElement.querySelector(CLOSE_SELECTOR)
    navbarCloseElement.addEventListener( 'click', close_navbar)


    return navbar
  }



/**
 * Initialize the navbar functionality
 *
 * @param {Window} window - the browser window object
 *
 * @param {DataStore.Action.Execute} execute - this executes whatever
 * actions we need.
 *
 * @param {Navbar) navbar - our Navbar model
 *
 * @return {Model}
 *
 * @throws {Error}
 *    Selected element "${navbarSelector}" does not exist
 */
export function init
  ( window
  , execute
  , navbar
  ) {
    // TODO: refactor the Navbar to hold the navbars DOM id
    const navbarSelector = '#main-nav'
    const document = window.document
    const navbarElement = document.querySelector(navbarSelector)

    if( !navbarElement ) {
      throw Error
        ( `Selected element "${navbarSelector}" does not exist`
        )
    }

    return setup_handlers(window, execute, navbar)
  }



/**
 * open the navbar in the browser
 *
 * @type {DataStore.Data.View}
 */
export function render_opened_navbar
  ( window
  , execute
  , model
  ) {
    Utils.disable_page_scroll(window)


    const navbar = DataStore.Data.get_value(model)
    const navbarElement = Navbar.get_element(navbar)
    display_nav_items(navbarElement)


    const document = window.document
    const scrimElement
      =  document.querySelector('.' + ToggledScrimClass.Off)
      || document.querySelector('.' + ToggledScrimClass.On)
    if( scrimElement ) { show_scrim(scrimElement) }


    toggle_off_at_breakpoint
      ( window
      , BREAKPOINT_SM
      , navbar
      )
  }



/**
 * close the navbar in the browser
 *
 * @type {DataStore.Data.View}
 */
export function render_closed_navbar
  ( window
  , execute
  , model
  ) {
    Utils.enable_page_scroll(window)


    const navbar = DataStore.Data.get_value(model)
    const navbarElement = Navbar.get_element(navbar)
    display_navbar_hamburger(navbarElement)


    const document = window.document
    const scrimElement
      =  document.querySelector('.' + ToggledScrimClass.Off)
      || document.querySelector('.' + ToggledScrimClass.On)
    if( scrimElement ) { hide_scrim(scrimElement) }
  }



/**
 * Sync the DOM element of the given Navbar Model with it's
 * Model representation.
 *
 * @type {DataStore.Data.View}
 */
export function as_default
  ( window
  , execute
  , model
  ) {
    const _navbar = DataStore.Data.get_value(model)
    const initializationState
      = Navbar.get_initialization(_navbar)

    const navbar
      = initializationState === Navbar.Initialization.In_Process
      ? init( window, execute, _navbar )
      : _navbar


    const navbarToggled = Navbar.get_toggled(navbar)
    switch(navbarToggled) {
      case Navbar.ToggledState.On:
        render_opened_navbar(window, execute, navbar)
        break

      case Navbar.ToggledState.Off:
        render_closed_navbar(window, execute, navbar)
        break
    }


    return navbar
  }



