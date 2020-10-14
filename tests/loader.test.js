import
  { create_new_message
  , MessageId
  , ModelStatus
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
              create_new_message(MessageId.START_LOADER, null)

            return expect(actualValue).toBeNull()
          }
        )

      it( 'produces a new message once given valid arguments'
        , () => {
            const messageId = MessageId.START_LOADER
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
            const messageId = MessageId.START_LOADER
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
            const messageId = MessageId.START_LOADER
            const argv = 1

            const message =
              { id : messageId
              , argv : argv
              }
            const initialModel = 
              { status: ModelStatus.INITIALIZED
              , htmlElement: null
              }

            const expectedValue = null

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces null when given an invalid model'
        , () => {
            const messageId = MessageId.START_LOADER
            const argv = []

            const message =
              { id : messageId
              , argv : argv
              }
          
            const initialModel = 
              { staus: 234234
              , htmlElement: null
              }

            const expectedValue = null

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Model LOADER_STARTING when given a message'
        + ' with id START_LOADER'
        , () => {
            const messageId = MessageId.START_LOADER
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }
          
            const initialModel = 
              { status: ModelStatus.INITIALIZED
              , htmlElement: null
              }

            const expectedValue =
              { status: ModelStatus.LOADER_STARTING
              , htmlElement: null
              }

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Model INITIALIZED when given a message'
        + ' with id INFO_LOADER_INITIALIZED.'
        , () => {
            const messageId = MessageId.INFO_LOADER_INITIALIZED
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }
          
            const initialModel =
              { status: ModelStatus.LOADER_UNDEFINED
              , htmlElement: null
              }

            const expectedValue =
              { status: ModelStatus.INITIALIZED
              , htmlElement: null
              }

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Model LOADER_STARTED when given a message'
        + ' with id INFO_LOADER_STARTED.'
        , () => {
            const messageId = MessageId.INFO_LOADER_STARTED
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }
          
            const initialModel = 
              { status: ModelStatus.LOADER_UNDEFINED
              , htmlElement: null
              }

            const expectedValue =
              { status: ModelStatus.LOADER_STARTED
              , htmlElement: null
              }

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Model LOADER_STOPPING when given a message'
        + ' with id STOP_LOADER.'
        , () => {
            const messageId = MessageId.STOP_LOADER
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }
          
            const initialModel =
              { status : ModelStatus.LOADER_UNDEFINED
              , htmlElement : null
              }

            const expectedValue =
              { status: ModelStatus.LOADER_STOPPING
              , htmlElement : null
              }

            const actualValue =
              update_loader_model(message, initialModel)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces a new Model LOADER_STOPPED when given a message'
        + ' with id INFO_LOADER_STOPPED.'
        , () => {
            const messageId = MessageId.INFO_LOADER_STOPPED
            const argv = []

            const message =
              { id   : messageId
              , argv : argv
              }
          
            const initialModel = 
              { status: ModelStatus.LOADER_UNDEFINED
              , htmlElement: null
              }

            const expectedValue =
              { status: ModelStatus.LOADER_STOPPED
              , htmlElement: null
              }

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
            const messageId = MessageId.START_LOADER

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
            const messageId = MessageId.START_LOADER

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
      it( 'produces false if given model does not have a status property'
        , () => {
            const model =
              { htmlElement : null
              }
            const expectedValue = false
            const actualValue =
              is_valid_model(model)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces false if given model does not have an htmlElement'
        + ' property'
        , () => {
            const model =
              { status: ModelStatus.INITIALIZED
              }
            const expectedValue = false
            const actualValue =
              is_valid_model(model)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces false if given model status is not one of the'
        + ' enumerated module status.'
        , () => {
            const model =
              { status      : 2345
              , htmlElement : null
              }
            const expectedValue = false
            const actualValue =
              is_valid_model(model)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces true if the given model status is one of the'
        + ' enumerated module status and it has an htmlElement property'
        , () => {
            const model =
              { status      : ModelStatus.INITIALIZED
              , htmlElement : null
              }
            const expectedValue = true
            const actualValue =
              is_valid_model(model)

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )
