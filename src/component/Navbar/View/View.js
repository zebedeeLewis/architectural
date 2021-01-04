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
 * Sync the DOM element of the given Navbar Model with it's
 * Model representation.
 *
 * @param {Window} window
 * @param {Model} navbarModel
 *
 * @return {Model}
 */
export function sync_dom_representation
  ( window
  , navbarModel
  ) {
    const document = window.document


    const navbarElement = Navbar.get_element(navbarModel)
    const scrimElement
      =  document.querySelector('.' + ToggledScrimClass.Off)
      || document.querySelector('.' + ToggledScrimClass.On)


    const navbarToggled = Navbar.get_toggled(navbarModel)
    switch(navbarToggled) {
      case Navbar.ToggledState.On:
        display_nav_items(navbarElement)
        if( scrimElement ) { show_scrim(scrimElement) }
        toggle_off_at_breakpoint(window, BREAKPOINT_SM, navbarModel)
        Utils.disable_page_scroll(window)
        break

      case Navbar.ToggledState.Off:
        display_navbar_hamburger(navbarElement)
        if( scrimElement ) { hide_scrim(scrimElement) }
        Utils.enable_page_scroll(window)
        break
    }


    return navbarModel
  }



/**
 * Setup handlers for the events that will toggle the Navbar
 *
 * @param {Window} window
 * @param {Model} navbarModel
 *
 * @return {Model}
 */
export function setup_handlers
  ( window
  , navbarModel
  ) {
    const navbarElement = Navbar.get_element(navbarModel)


    const hamburgerElement
      = navbarElement.querySelector(HAMBURGER_SELECTOR)

    hamburgerElement.addEventListener
      ( 'click'
      , () => {
          // TODO: this handler should call DataStore.Action.Execute
          // on a Navbar.Action.Type.ToggleState_On
          navbarModel.toggled = Navbar.ToggledState.On
          sync_dom_representation(window, navbarModel)
        }
      )


    const navbarCloseElement
      = navbarElement.querySelector(CLOSE_SELECTOR)

    navbarCloseElement.addEventListener
      ( 'click'
      , () => {
          // TODO: this handler should call DataStore.Action.Execute
          // on a Navbar.Action.Type.ToggleState_Off
          navbarModel.toggled = Navbar.ToggledState.On
          navbarModel.toggled = Navbar.ToggledState.Off
          sync_dom_representation(window, navbarModel)
        }
      )


    return navbarModel
  }



/**
 * Initialize the navbar functionality
 *
 * @param {Window} window - the browser window object
 * @param {string) navbarSelector - the selector for the DOM
 *   element we want to initialize.
 *
 * @return {Model}
 *
 * @throws {Error}
 *    Selected element "${navbarSelector}" does not exist
 *   
 */
export function init
  ( window
  , navbarSelector
  ) {
    const document = window.document
    const navbarElement = document.querySelector(navbarSelector)


    if( !navbarElement ) {
      throw Error
        ( `Selected element "${navbarSelector}" does not exist`
        )
    }


    const navbarModel = Navbar.create({ element : navbarElement })

    sync_dom_representation(window, navbarModel)
    setup_handlers(window, navbarModel)


    return navbarModel
  }



