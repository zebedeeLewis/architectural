const compile_templates = require('./compile_templates')
const Webpack = require('./webpack')
const { register_project_templates
      , page_template_name
      } = require('./register_project_templates')



module.exports
  = { register_project_templates
    , page_template_name
    , compile_templates
    , Webpack
    }
