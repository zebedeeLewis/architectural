import
  { create_new_message
  , MessageId
  , Model
  , is_valid_message_id
  , is_valid_message
  , is_valid_model
  , update_loader_model
  } from "../src/loader/loader"



describe
  ( 'new_message'
  , () => {
      it( 'produces null when given an invalid message id'
        , () => {
            const actualValue = create_new_message('make_noodles', [])

            return expect(actualValue).toBeNull()
          }
        )

      it( 'produces null if second argument is not an Array'
        , () => {
            const actualValue =
              create_new_message(MessageId.START_LOADING, null)

            return expect(actualValue).toBeNull()
          }
        )

      it( 'produces a new message once given valid arguments'
        , () => {
            const messageId = MessageId.START_LOADING
            const argv = []
            const expectedValue =
              { id : messageId
              , argv : argv
              }
            const actualValue =
              create_new_message(messageId, argv)

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'is_valid_message_id'
  , () => {
      it( 'produces false when given an invalid message id'
        , () => {
            const messageId = 'this should not be valid'
            const actualValue =
              is_valid_message_id(messageId)
            const expectedValue = false

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces true when given a valid message id'
        , () => {
            const messageId = MessageId.START_LOADING
            const actualValue =
              is_valid_message_id(messageId)
            const expectedValue = true

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'update_loader_model'
  , () => {
      it( 'produces null when given an invalid message'
        , () => {
            const messageId = MessageId.START_LOADING
            const argv = 1

            const message =
              { id : messageId
              , argv : argv
              }
            const initialModel = Model.INITIALIZED

            const expectedValue = null

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces null when given an invalid model'
        , () => {
            const messageId = MessageId.START_LOADING
            const argv = []

            const message =
              { id : messageId
              , argv : argv
              }
          
            const initialModel = 234234

            const expectedValue = null

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Model LOADING_STARTING when given a message'
        + ' with id START_LOADING'
        , () => {
            const messageId = MessageId.START_LOADING
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }
          
            const initialModel = Model.INITIALIZED

            const expectedValue = Model.LOADING_STARTING

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Model INITIALIZED when given a message'
        + ' with id INFO_LOADING_INITIALIZED.'
        , () => {
            const messageId = MessageId.INFO_LOADING_INITIALIZED
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }
          
            const initialModel = Model.LOADING_UNDEFINED

            const expectedValue = Model.INITIALIZED

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Model LOADING_STARTED when given a message'
        + ' with id INFO_LOADING_STARTED.'
        , () => {
            const messageId = MessageId.INFO_LOADING_STARTED
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }
          
            const initialModel = Model.LOADING_UNDEFINED

            const expectedValue = Model.LOADING_STARTED

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Model LOADING_STOPPING when given a message'
        + ' with id STOP_LOADING.'
        , () => {
            const messageId = MessageId.STOP_LOADING
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }
          
            const initialModel = Model.LOADING_UNDEFINED

            const expectedValue = Model.LOADING_STOPPING

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Model LOADING_STOPPED when given a message'
        + ' with id INFO_LOADING_STOPPED.'
        , () => {
            const messageId = MessageId.INFO_LOADING_STOPPED
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }
          
            const initialModel = Model.LOADING_UNDEFINED

            const expectedValue = Model.LOADING_STOPPED

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'is_valid_message'
  , () => {
      it( 'produces false if argument does not have an id'
        , () => {
            const argv = []
            const message =
              { argv : argv }

            const expectedValue = false

            const actualValue =
              is_valid_message(message)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces false if argument does not have a valid id'
        , () => {
            const messageId = 'this should not be valid'
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }

            const expectedValue = false

            const actualValue =
              is_valid_message(message)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces false if argument does not have an argv'
        , () => {
            const messageId = MessageId.START_LOADING

            const message =
              { id : messageId }

            const expectedValue = false

            const actualValue =
              is_valid_message(message)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces false if argv is not an Array'
        , () => {
            const messageId = MessageId.START_LOADING

            const message =
              { id   : messageId 
              , argv : 23
              }

            const expectedValue = false

            const actualValue =
              is_valid_message(message)

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'is_valid_model'
  , () => {
      it( 'produces false if given model in not one of the enumerated'
        + ' modules.'
        , () => {
            const model = '234'
            const expectedValue = false
            const actualValue =
              is_valid_model(model)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces true if given model in one of the enumerated'
        + ' modules.'
        , () => {
            const model = Model.INITIALIZED
            const expectedValue = true
            const actualValue =
              is_valid_model(model)

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )
