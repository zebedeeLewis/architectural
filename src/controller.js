
/* A message is sent to trigger an action. A message can also
 * store whatever values needed for the fulfillment of that action.
 *
 * @typedef {{ id : string, argv : Array.<*> }} Message
 */



/* Represents all possible states of the loader.
 *
 * @enum {number}
 */
export const Model = Object.freeze(
  { INITIALIZED        : 0
  , LOADING_STARTING   : 1
  , LOADING_STARTED    : 2
  , LOADING_STOPPING   : 3
  , LOADING_STOPPED    : 4
  , LOADING_UNDEFINED  : 5
  }
)



/* Represents all accepted loading messages ids.
 * 
 * @enum {number}
 */
export const MessageId = Object.freeze(
  { INFO_LOADING_INITIALIZED : 0
  , START_LOADING            : 1
  , INFO_LOADING_STARTED     : 2
  , STOP_LOADING             : 3
  , INFO_LOADING_STOPPED     : 4
  }
)



/* Produce true if the given id is a valid message id or false
 * if not.
 *
 * Note: this function references the global constant MessageId
 *
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



/* Produce null if given an invalid message id, or if the argv
 * argument is not an array. Produces a new Message if given valid
 * arguments.
 *
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



/* produces false if:
 *   - argument does not have an id attribute
 *   - argument does not have an argv attribute
 *   - id attribute is not a valid MessageId
 *   - argv is not an Array
 *
 * otherwise produce true
 *
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



/* produce false if the given model is not one of the options
 * in the Model enumeration (see Model constant definition above).
 * Otherwise produce true.
 *
 * Note: this function references the global constant Model
 *
 * @param  {*} possibleModel
 * @return {Boolean}
 */
export const is_valid_model =
  ( model
  ) => (
    Object.values(Model).indexOf(model) === -1
      ? false
      : true
  )



/* Produce a new Model by updating the given Model according to the
 * specifications in the given Message. Produce null if given an
 * invalid message or model.
 *
 * Note: this function references the global constants Model and
 * MessageId
 *
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
      case MessageId.INFO_LOADING_INITIALIZED:
        return Model.INITIALIZED
        break

      case MessageId.START_LOADING:
        return Model.LOADING_STARTING
        break

      case MessageId.INFO_LOADING_STARTED:
        return Model.LOADING_STARTED
        break

      case MessageId.STOP_LOADING:
        return Model.LOADING_STOPPING
        break

      case MessageId.INFO_LOADING_STOPPED:
        return Model.LOADING_STOPPED
        break

      default:
        return null
    }
  }



/*
const animate_loader =
  ( gsap
  , loadingElement
  , initTimeline
  ) => {
    if (!loadingElement || !gsap) { return initTimeline }

    const timeline = initTimeline ? initTimeline : gsap.timeline()

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



/* Perform a gsap animation and 
const play_remove_loader_animation =
  ( loadingElement
  ) => (
    loadingTimeline
      .to( loadingElement
         , { duration   : .8
           , opacity    : 0
           , onComplete : ()=> {
               loadingElement.style.display = 'none'
               loadingTimeline.kill()
             }
           }
         )
  )



const remove_loader =
  ( loadingElement
  , loaderTimeline
  ) => {

    (!loadingElement || !loaderTimeline)
      ? null
      : ( loaderTimeline
        )

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
*/
