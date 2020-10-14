
/**
 * @module Loader
 */



/**
 * Represents all possible states of the loader.
 *
 * @typedef ModelStatus
 * @readonly
 * @enum {number}
 *
 * @property {Model} INITIALIZED - the loader has recieved the
 *   INFO_LOADER_INITIALIZED message to indicate that it has been
 *   initialized and is ready to operate.
 *
 * @property {Model} LOADER_STARTING - the loader has recieved the
 *   START_LOADER message and is starting.
 *
 * @property {Model} LOADER_STARTED - the loader has recieved the
 *   INFO_LOADER_STARTED message to indicate that it has started.
 *
 * @property {Model} LOADER_STOPPING - the loader has recieved the
 *   STOP_LOADER message and is stopping.
 *   
 * @property {Model} LOADER_STOPPED - the loader has recieved the
 *   INFO_LOADER_STOPPED message to indicate that it has stopped.
 *
 * @property {ModelStatus} LOADER_UNDEFINED - the loader state is
 *   undefined
 */
export const ModelStatus = Object.freeze(
  { INITIALIZED        : 0
  , LOADER_STARTING   : 1
  , LOADER_STARTED    : 2
  , LOADER_STOPPING   : 3
  , LOADER_STOPPED    : 4
  , LOADER_UNDEFINED  : 5
  }
)



/**
 * Represents the state of the loader.
 *
 * @typedef {{status: ModelStatus, htmlElement: HtmlElement|Null}}
 */



/**
 * Represents all accepted loading message ids.
 * 
 * @typedef MessageId
 * @readonly
 * @enum {number}
 *
 * @property {MessageId} INFO_LOADER_INITIALIZED - sent when the loader
 *   has been initialized.
 *
 * @property {MessageId} START_LOADER - sent to start the loader.
 *
 * @property {MessageId} INFO_LOADER_STARTED - sent after the loader
 *   has started.
 *
 * @property {MessageId} STOP_LOADER - sent to stop the loader.
 *
 * @property {MessageId} INFO_LOADER_STOPPED - sent when the loader has
 *   stopped.
 */
export const MessageId = Object.freeze(
  { INFO_LOADER_INITIALIZED : 0
  , START_LOADER            : 1
  , INFO_LOADER_STARTED     : 2
  , STOP_LOADER             : 3
  , INFO_LOADER_STOPPED     : 4
  }
)



/**
 * A message is sent to trigger an action. A message can also
 * store whatever values needed for the fulfillment of that action.
 *
 * @typedef {{ id : string, argv : Array.<*> }} Message
 */



/**
 * Produce true if the given id is a valid message id or false
 * if not.
 *
 * Note: this function references the global constant MessageId
 *
 * @function
 * @param  {MessageId} id
 * @return {Boolean}
 */
export const is_valid_message_id =
  ( id
  ) => (
    Object.values(MessageId).indexOf(id) === -1
      ? false
      : true
  )



/**
 * Produce null if given an invalid message id, or if the argv
 * argument is not an array. Produces a new Message if given valid
 * arguments.
 *
 * @function
 * @param  {MessageId} id - one of the enumerated message ids
 * @param  {Array.<*>} argv - any argument needed by the message.
 * @return {(Message|Null)}
 */
export const create_new_message =
  ( id
  , argv
  ) => (
    !(argv instanceof Array) || !is_valid_message_id(id)
      ? null
      : { id, argv }
  )



/**
 * Produces false if:
 *   - argument does not have an id attribute
 *   - argument does not have an argv attribute
 *   - id attribute is not a valid MessageId
 *   - argv is not an Array
 *
 * otherwise produce true
 *
 * @function
 * @param  {*} possibleMessage
 * @return {Boolean}
 */
export const is_valid_message =
  ( possibleMessage
  ) => (
    possibleMessage.hasOwnProperty('id')
    && possibleMessage.hasOwnProperty('argv')
    && (possibleMessage.argv instanceof Array)
    && is_valid_message_id(possibleMessage.id)
  )



/**
 * produce false if:
 *   - the given model status is not one of the options in the
 *     ModelStatus enumeration (see ModelStatus constant definition
 *     above).
 *
 * Otherwise produce true.
 *
 * Note: this function references the global constant ModelStatus
 *
 * @function
 * @param  {*} possibleModel - This may or may not be a Model.
 * @return {Boolean}
 */
export const is_valid_model =
  ( model
  ) => !(
       !model.hasOwnProperty('status')
    || !model.hasOwnProperty('htmlElement')
    || (Object.values(ModelStatus).indexOf(model.status) === -1)
  )



/**
 * Produce a new Model by updating the given Model according to the
 * specifications in the given Message. Produce null if given an
 * invalid message or model.
 *
 * Note: this function references the global constants Model and
 * MessageId
 *
 * @function
 * @param  {Message} message - describes how to alter the given Model
 * @param  {Model} model - Model initial state
 * @return {(Model|Null)}
 */
export const update_loader_model =
  ( message
  , model
  ) => {
    if ( !is_valid_message(message) || !is_valid_model(model)) {
      return null
    }


    switch (message.id) {
      case MessageId.INFO_LOADER_INITIALIZED:
        return { ... model
               , status : ModelStatus.INITIALIZED
               }
        break

      case MessageId.START_LOADER:
        return { ... model
               , status: ModelStatus.LOADER_STARTING
               }
        break

      case MessageId.INFO_LOADER_STARTED:
        return { ... model
               , status: ModelStatus.LOADER_STARTED
               }
        break

      case MessageId.STOP_LOADER:
        return { ... model
               , status: ModelStatus.LOADER_STOPPING
               }
        break

      case MessageId.INFO_LOADER_STOPPED:
        return { ... model
               , status: ModelStatus.LOADER_STOPPED
               }
        break

      default:
        return { ... model
               , status: null
               }
    }
  }



/**
 * Produce the initial state of the loader model.
 *
 * @param  {HTMLElement} rootElement - the html element in the DOM
 *   where the componentElement will be inserted. Ideally this element
 *   should have no children.
 *
 * @function
 * @param  {HTMLElement} componentElement - the html element
 *   representing the loader.
 *
 * @return {Model}
 */
export const init__loader_model =
  ( rootElement
  , componentElement
  ) => ModelStatus.LOADER_INITIALIZED



/**
 * Produce a new view of the given Model.
 *
 * @function
 * @param {HTMLElement} window - this is the DOM window element
 * @param {HTMLElement} document - this is the DOM document element
 * @param {Model} model - the model of the current loader state
 *
 * @return {HTMLElement}
 */
export const view_loader =
  ( window
  , document
  , model
  ) => {
    let innerHtml
    let loaderElement = model.htmlElement;

    switch(model) {
      case Model.INITIALIZED:
        innerHtml = view__initialized_loader(model)
        break

      case Model.LOADER_STARTING:
        innerHtml = view__starting_loader(model)
        break

      case Model.LOADER_STARTED:
        innerHtml = view__started_loader(model)
        break

      case Model.LOADER_STOPPING:
        innerHtml = view__stopping_loader(model)
        break

      case Model.LOADER_STOPPED:
        innerHtml = view__stopped_loader(model)
        break

      case Model.LOADER_UNDEFINED:
        innerHtml = view__undefined_loader(model)
        break
    }

    loaderElement = innerHtml
    return loaderElement
  }



/**
 * Produce the view of an initialized loader.
 *
 * @function
 * @param {Model} model - the model of the current loader state
 *
 * @return {string}
 *
 */
export const view__initialized_loader =
  ( model
  ) => (`
  <div class="loading__bar"></div>
  <div class="loading__bar"></div>
  <div class="loading__bar"></div>
  <div class="loading__bar"></div>
  <div class="loading__bar"></div>
  <div class="loading__bar"></div>
  `)



/**
 * Produce the view of a starting loader.
 *
 * @function
 * @param {Model} model - the model of the current loader state
 *
 * @return {string}
 *
 * @TODO!!!
 */
export const view__starting_loader =
  ( model
  ) => (
    ``
  )



/**
 * Produce the view of a started loader.
 *
 * @function
 * @param {Model} model - the model of the current loader state
 *
 * @return {string}
 *
 * @TODO!!!
 */
export const view__started_loader =
  ( model
  ) => (
    ``
  )



/**
 * Produce the view of a stopping loader.
 *
 * @function
 * @param {Model} model - the model of the current loader state
 *
 * @return {string}
 *
 * @TODO!!!
 */
export const view__stopping_loader =
  ( model
  ) => (
    ''
  )



/**
 * Produce the view of a stopped loader.
 *
 * @function
 * @param {Model} model - the model of the current loader state
 *
 * @return {string}
 *
 * @TODO!!!
 */
export const view__stopped_loader =
  ( model
  ) => (
    ''
  )



/**
 * Produce the view of a loader in an undefined state.
 *
 * @function
 * @param {Model} model - the model of the current loader state
 *
 * @return {string}
 *
 * @TODO!!!
 */
export const view__undefined_loader =
  ( model
  ) => (
    ''
  )
