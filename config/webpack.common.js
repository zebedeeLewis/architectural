const paths = require('./paths')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')



const html_webpack_plugins_from_source_descriptors =
  ( source_descriptors ) => source_descriptors.map(
    ( { html_page_title
      , html_template
      , html_output_filename
      , chunks
      }
    ) =>
      new HtmlWebpackPlugin(
        { title    : html_page_title
        , favicon  : paths.src + '/images/favicon.png'
        , template : html_template
        , filename : html_output_filename
        , chunks   : chunks
        }
      )
  )



const entries_from_source_descriptors =
  (source_descriptors) =>
    source_descriptors.reduce
      ( ( entries
        , { entry_name
          , entry_filename
          }
        ) => (
          { [entry_name] : entry_filename
          , ... entries
          }
        )
      , {}
      )



const source_descriptors =
  [ { entry_name           : 'index'
    , entry_filename       : path.join(paths.src, 'index.js')
    , html_page_title      : 'Title 1'
    , html_template        : path.join(paths.src, 'html', 'index.html')
    , html_output_filename : 'index.html'
    , chunks               : [ 'index' ]
    }
  ]



module.exports =
  { entry  : entries_from_source_descriptors(source_descriptors)
  , plugins:
    [ new CleanWebpackPlugin()
  
    , new CopyWebpackPlugin(
        { patterns: [ { from: 'assets', to: 'assets' } ] }
      )
  
    , ...  html_webpack_plugins_from_source_descriptors(
        source_descriptors
      )
    ]
  
  , module: 
    { rules: 
      [ { test      : /\.js$/
        , exclude   : /node_modules/
        , use       :
          [ { loader  : 'babel-loader'
            , options :
              { configFile: path.join(paths.config, '.babelrc') }
            }
          , { loader  : 'eslint-loader'
            , options :
              { configFile: path.join(paths.config, '.eslintrc') }
            }
          ]
        }
  
      , { test      : /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i
        , loader    : 'file-loader'
        , options   :
          { name    : '[path][name].[ext]'
          , context : 'src'
          }
        }
      ]
    }
  }

