const paths = require('./paths')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInjector = require('html-webpack-injector')



const page_descriptors =
  [ { entry_name           : 'index'
    , entry_filename       : path.join(paths.src, 'index.ts')
    , html_page_title      : 'Title 1'
    , html_template        : path.join(paths.src, 'html', 'index.html')
    , html_output_filename : 'index.html'
    , chunks               :
        [ 'index'
        , 'common_js_head'
        , 'common_css_inline'
        ]
    }
  ]



const entries =
  page_descriptors.reduce
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



const html_webpack_plugins =
  page_descriptors.map
    ( ( { html_page_title
        , html_template
        , html_output_filename
        , chunks
        }
      ) =>
        new HtmlWebpackPlugin(
          { title        : html_page_title
          , favicon      : paths.src + '/images/favicon.png'
          , template     : html_template
          , filename     : html_output_filename
          , chunks       : chunks
          , inject       : true
          , minify       : false
          }
        )
    )



module.exports =
  { entry  : 
      { ... entries
      , common_js_head : path.join(paths.src, 'common.ts')
      , common_css_inline:
          path.join(paths.src, 'scss', 'common.inline.scss')
      }

  , plugins:
    [ new CleanWebpackPlugin()
  
    , new CopyWebpackPlugin(
        { patterns:
          [ { from: 'assets', to: 'assets' }
          , { from: 'src/images', to: 'images' }
          ]
        }
      )
  
    , ... html_webpack_plugins

      // inject files into head or body
    , new HtmlWebpackInjector()
    ]
  
  , module: 
    { rules:
      [ { test      : /(\.tsx?|\.jsx?)$/
        , use       : 'ts-loader'
        , exclude   : /node_modules/
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

  , resolve :
      { extensions : ['.js', '.ts', '.scss', '.css' ]
      }
  }

