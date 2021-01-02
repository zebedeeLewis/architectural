import * as Project from '../'
import Splide from '@splidejs/splide';



const HEADING_SELECTOR = '.project-detail__heading'
const SPECS_SELECTOR = '.project-detail__specs'
const DESC_SELECTOR = '.project-detail__desc'
const SLIDER_SELECTOR = '.project-detail__slider'
const ADDRESS_SELECTOR = '.spec__col--address'
const ROLE_SELECTOR = '.spec__col--role'
const ARCHITECT_SELECTOR = '.spec__col--architect'
const STATUS_SELECTOR = '.spec__col--status'
const COMPLETED_SELECTOR = '.spec__col--completed'
const STARTED_SELECTOR = '.spec__col--started'
const LABEL_SELECTOR = '.spec__label'
const VALUE_SELECTOR = '.spec__value'
const THUMBNAIL_SLIDER_SELECTOR = '.thumbnail-slider'
const MAIN_SLIDER_SELECTOR = '.project-slider'



/**
 * Render the projects heading DOM element.
 *
 * @param {HTMLElement} headingElement
 * @param {string} heading
 *
 * @return {void}
 */
export function render_heading
  ( headingElement
  , heading
  ) {
    headingElement.innerHTML = heading
  }


/**
 * render a DOM elment that has a label and a value.
 *
 *
 * @param {HTMLElement} element
 * @param {string} label
 * @param {string} value
 *
 * @return {void}
 */
export function render_labeled_item
  ( element
  , label
  , value
  ) {
    const labelElement = element.querySelector(LABEL_SELECTOR)
    if( label && labelElement){ labelElement.innerHTML = label + ': ' }

    const valueElement = element.querySelector(VALUE_SELECTOR)
    if( value && valueElement){ valueElement.innerHTML = value }
  }



/**
 * render the projects address DOM element.
 *
 * @param {HTMLElement} addressElement
 * @param {string} address
 *
 * @return {void}
 */
export function render_address
  ( addressElement
  , address
  ) {
    render_labeled_item( addressElement, 'address', address )
  }



/**
 * render the projects role DOM element.
 *
 * @param {HTMLElement} roleElement
 * @param {string} role
 *
 * @return {void}
 */
export function render_role
  ( roleElement
  , role
  ) {
    render_labeled_item( roleElement, 'role', role )
  }



/**
 * render the projects architect DOM element.
 *
 * @param {HTMLElement} architectElement
 * @param {Array<string>} architect
 *
 * @return {void}
 */
export function render_architect
  ( architectElement
  , architects
  ) {
    const architectString = architects.join(', ')
    render_labeled_item
      ( architectElement
      , 'architects'
      , architectString
      )
  }



/**
 * render the projects started DOM element.
 *
 * @param {HTMLElement} startedElement
 * @param {Date} started
 *
 * @return {void}
 */
export function render_started
  ( startedElement
  , started
  ) {
    render_labeled_item
      ( startedElement
      , 'started'
      , started.getMonth() + '/' + started.getFullYear()
      )
  }



/**
 * render the projects completed DOM element.
 *
 * @param {HTMLElement} completedElement
 * @param {Date} completed
 *
 * @return {void}
 */
export function render_completed
  ( completedElement
  , completed
  ) {
    render_labeled_item
      ( completedElement
      , 'completed'
      , completed.getMonth() + '/' + completed.getFullYear()
      )
  }



/**
 * render the projects status DOM element.
 *
 * @param {HTMLElement} statusElement
 * @param {string} status
 *
 * @return {void}
 */
export function render_status
  ( statusElement
  , status
  ) {
    render_labeled_item( statusElement, 'status', status )
  }



/**
 * Render the projects specs DOM element.
 *
 * @param {HTMLElement} specsElement
 * @param {Project.Spec.Spec} specs
 *
 * @return {void}
 */
export function render_specs
  ( specsElement
  , specs
  ) {
    const addressElement = specsElement.querySelector(ADDRESS_SELECTOR)
    const address = Project.Spec.get_address(specs)
    if( addressElement && address ) {
      render_address(addressElement, address)
    }


    const roleElement = specsElement.querySelector(ROLE_SELECTOR)
    const role = Project.Spec.get_role(specs)
    if( roleElement && role ){ render_role(roleElement, role) }


    const architectElement
      = specsElement.querySelector(ARCHITECT_SELECTOR)
    const architect = Project.Spec.get_architects(specs)
    if( architectElement && architect ) {
      render_architect(architectElement, architect)
    }


    const startedElement = specsElement.querySelector(STARTED_SELECTOR)
    const started = Project.Spec.get_started(specs)
    if( startedElement && started ) {
      render_started(startedElement, started)
    }


    const completedElement
      = specsElement.querySelector(COMPLETED_SELECTOR)
    const completed = Project.Spec.get_completed(specs)
    if( completedElement && completed ) {
      render_completed(completedElement, completed)
    }


    const statusElement = specsElement.querySelector(STATUS_SELECTOR)
    const status = Project.Spec.get_status(specs)
    if( statusElement && status ) {
      render_status(statusElement, status)
    }
  }



/**
 * produce the markup for a splide slider
 *
 * @param {HTMLElement}
 * @param {Array<Project.Picture.Model>}
 *
 * @param {Function} imgSrc - function to get the right image url
 * from a single Picture.
 *
 * @param {string} sliderId
 */
export function markup_slider
  ( sliderElement
  , pictures
  , imgSrc
  , sliderId
  ) {
    const slides
      = pictures.map(
          picture =>
            ( '<div class="splide__slide">'
            + '  <picture>'
            + '    <source'
            + '      media="(min-width: 1200px)"'
            + `      srcset="${imgSrc('lg', picture)}"`
            + '    >'
            + '    <source'
            + '      media="(min-width: 960px)"'
            + `      srcset="${imgSrc('md', picture)}"`
            + '    >'
            + '    <source'
            + '      media="(min-width: 600px)"'
            + `      srcset="${imgSrc('sm', picture)}"`
            + '    >'
            + '    <img'
            + `      src="${imgSrc('xs', picture)}"`
            + `      alt=""`
            + '    >'
            + '  </picture>'
            + '</div>'
            )
        ).join()

    const sliderInnerHTML
      = `<div id="${sliderId}" class="splide">`
      + ' <div class="splide__track">'
      + `   <div class="splide__list">${slides}</div>`
      + ' </div>'
      + '</div>'

    sliderElement.innerHTML = sliderInnerHTML
  }



/**
 * Render the projects thumbnail slider.
 *
 * @param {HTMLElement}
 * @param {Array<Project.Picture.Model>}
 *
 * @return {Splide}
 */
export function render_thumbnail_slider
  ( sliderElement
  , pictures
  ) {
    const sliderId = 'thumbnail-slider'
    markup_slider
      ( sliderElement
      , pictures
      , (_, picture)=>Project.Picture.get_size('thumbnail', picture)
      , sliderId
      )


    const slider
      = new Splide
          ( `#${sliderId}`
          , { fixedWidth   : 100
            , rewind       : true
            , cover        : true
            , height       : 60
            , gap          : 10
            , pagination   : false
            , isNavigation : true
            }
          ).mount();


    return slider
  }



/**
 * Render the projects main slider.
 *
 * @param {HTMLElement}
 * @param {Array<Project.Picture.Model>}
 *
 * @return {void}
 */
export function render_main_slider
  ( sliderElement
  , pictures
  ) {
    const sliderId = 'project-slider'
    markup_slider
      ( sliderElement
      , pictures
      , Project.Picture.get_size
      , sliderId
      )


    const slider
      = new Splide
          ( `#${sliderId}`
          , { rewind       : true
            , cover        : true
            , arrows       : true
            }
          )


    return slider
  }



/**
 * Render the projects slide DOM elements.
 *
 * @param {HTMLElement}
 * @param {Array<Project.Picture.Model>}
 *
 * @return {void}
 */
export function render_slider
  ( sliderElement
  , pictures
  ) {
    const thumbnailSliderElement
      = sliderElement.querySelector(THUMBNAIL_SLIDER_SELECTOR)
    const thumbnailSlider
      = thumbnailSliderElement && pictures
      ? render_thumbnail_slider(thumbnailSliderElement, pictures)
      : null


    const mainSliderElement
      = sliderElement.querySelector(MAIN_SLIDER_SELECTOR)
    const mainSlider
      = mainSliderElement && pictures
      ? render_main_slider(mainSliderElement, pictures)
      : null


    if( mainSlider ) {
      if( thumbnailSlider ) {
        mainSlider.sync( thumbnailSlider ).mount()
      } else {
        mainSlider.mount()
      }
    }
  }



/**
 * Render the projects description DOM elements.
 *
 * @param {HTMLElement} descriptionElement -
 * @param {string} description
 *
 * @return {void}
 */
export function render_description
  ( descriptionElement
  , description
  ) {
    descriptionElement.innerHTML = description
  }



/**
 * Render the projects DOM element. 
 *
 * @param {HTMLElement} projectElement
 * @param {Project} project - the project
 *
 * @return {void}
 */
export function as_default
  ( projectElement
  , project
  ) {
    const headingElement
      = projectElement.querySelector(HEADING_SELECTOR)
    const heading = Project.get_title(project)
    if( headingElement && heading ) {
      render_heading( headingElement, heading )
    }


    const specsElement = projectElement.querySelector(SPECS_SELECTOR)
    const specs = Project.get_specs(project)
    if( specsElement && specs ){ render_specs( specsElement, specs ) }


    const descElement = projectElement.querySelector(DESC_SELECTOR)
    const desc = Project.get_description(project)
    if( descElement && desc ) {
      render_description( descElement, desc )
    }


    const sliderElement = projectElement.querySelector(SLIDER_SELECTOR)
    const pictures = Project.get_pictures(project)
    if( sliderElement && pictures ) {
      render_slider( sliderElement, pictures )
    }
  }
