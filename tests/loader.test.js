import * as Loader from "../src/Loader/Loader"



describe
  ( 'is_valid_message'
  , () => {
      it( 'produces true if the given subject is the results of calling'
        + ' Initialized' 
        , () => {
            const htmlElementSelector = 'test'
            const subject = Loader.Initialized(htmlElementSelector)
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Start' 
        , () => {
            const subject = Loader.Start()
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Started' 
        , () => {
            const subject = Loader.Started()
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Stop' 
        , () => {
            const subject = Loader.Stop()
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces true if the given subject is the results of calling'
        + ' Stopped' 
        , () => {
            const subject = Loader.Stopped()
            const expectedValue = true
            const actualValue = Loader.is_valid_message(subject)

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'is_valid_model'
  , () => {
      it( 'produces false if the given subject does not have an'
        + ' htmlElementSelector attribute' 
        , () => {
            const subject = {}
            const expectedValue = false
            const actualValue = Loader.is_valid_model(subject)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces true if the given subject has an'
        + ' htmlElementSelector attribute' 
        , () => {
            const subject = { htmlElementSelector : 'test' }
            const expectedValue = true
            const actualValue = Loader.is_valid_model(subject)

            return expect(actualValue).toEqual(expectedValue)
          }
        )

      it( 'produces false if the given subjects htmlElementSelector'
        + ' is not a string' 
        , () => {
            const subject = { htmlElementSelector: 1 }
            const expectedValue = false
            const actualValue = Loader.is_valid_model(subject)

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'Model'
  , () => {
      it( 'Throws a TypeError if the first argument is not a string'
        , () => {
            const actualValue = () => Loader.Model(1)
            return expect(actualValue).toThrow(TypeError)
          }
        )

      it( 'Produces a new Model when given propper arguments'
        , () => {
            const actualValue = Loader.Model('test')
            const expectedValue =
              { htmlElementSelector : 'test' }
            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



describe
  ( 'update'
  , () => {
      it( 'throws a TypeError if the first argument is not a valid'
        + ' message.'
        , () => {
            const message = 'adfasdf'
            const model = { htmlElementSelector: 'test' }
            const actualValue = () => Loader.update(message, model)

            return expect(actualValue).toThrow(TypeError)
          }
        )

      it( 'throws a TypeError if the second argument is not a valid'
        + ' Model.'
        , () => {
            const message = Loader.Start()
            const model = { }
            const actualValue = () => Loader.update(message, model)

            return expect(actualValue).toThrow(TypeError)
          }
        )

      it( 'Transfers the value of "htmlElementSelector" from the'
        + ' Message to the Model when given an Initialized Message.'
        , () => {
            const message = Loader.Initialized('test1234')
            const model = {htmlElementSelector : ''}
            const actualValue = Loader.update(message, model)
            const expectedValue = {htmlElementSelector : 'test1234'}

            return expect(actualValue).toEqual(expectedValue)
          }
        )
    }
  )



/*
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
*/
