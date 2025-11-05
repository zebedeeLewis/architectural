const templateCompiler = require('./compile_templates')
const Webpack = require('./webpack')
const { registerProjectTemplates
      , pageTemplateName
      } = require('./register_project_templates')

module.exports
  = { registerProjectTemplates
    , pageTemplateName
    , templateCompiler
    , Webpack
    }
