'use strict'

module.exports =
  { "plugins": []
  , "recurseDepth": 10
  , "source":
      { "include":
          [ "./src/loader/loader.js"
          ]
      , "includePattern": ".+\\.js(doc|x)?$"
      , "excludePattern": "(^|\\/|\\\\)_"
      }
  , "sourceType": "module"
  , "tags":
      { "allowUnknownTags": true
      , "dictionaries": ["jsdoc","closure"]
      }
  , "templates":
      { "cleverLinks": false
      , "monospaceLinks": false
      }
  }
