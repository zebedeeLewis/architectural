import * as I from "immutable"
import * as Position from "./Position"

import type {  RecordOf } from 'immutable'



interface ModelInterface
  { topLeft     : Position.Model
  , topRight    : Position.Model
  , bottomRight : Position.Model
  , bottomLeft  : Position.Model
  }



export type Model = RecordOf<ModelInterface>



type ModelFactory = ( data : Partial<ModelInterface> ) => Model



export function set_top_left_to
  ( newPosition : Position.Model
  , model       : Model
  ) : Model {
    return model.set('topLeft', newPosition)
  }



export function get_top_left_from
  ( model    : Model
  ) : Position.Model {
    return model.get('topLeft', undefined)
  }



export function set_top_right_to
  ( newPosition : Position.Model
  , model       : Model
  ) : Model {
    return model.set('topRight', newPosition)
  }



export function get_top_right_from
  ( model    : Model
  ) : Position.Model {
    return model.get('topRight', undefined)
  }



export function set_bottom_right_to
  ( newPosition : Position.Model
  , model       : Model
  ) : Model {
    return model.set('bottomRight', newPosition)
  }



export function get_bottom_right_from
  ( model    : Model
  ) : Position.Model {
    return model.get('bottomRight', undefined)
  }



export function set_bottom_left_to
  ( newPosition : Position.Model
  , model       : Model
  ) : Model {
    return model.set('bottomLeft', newPosition)
  }



export function get_bottom_left_from
  ( model    : Model
  ) : Position.Model {
    return model.get('bottomLeft', undefined)
  }



export const create : ModelFactory =
  I.Record
    ( { topLeft     : Position.create({})
      , topRight    : Position.create({})
      , bottomRight : Position.create({})
      , bottomLeft  : Position.create({})
      }
    , 'Model'
    )
