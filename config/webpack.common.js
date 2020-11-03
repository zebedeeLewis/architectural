const paths = require('./paths')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInjector = require('html-webpack-injector')
const InlineChunksPlugin =
  require('./plugins/html-webpack-inline-chunks')



const page_descriptors =
  [ { pageTitle      : 'Home'
    , pageSourceFile : path.join(paths.src, 'index.html')
    , assets :
      { external :
        { index :
          { sourceFile : path.join(paths.src, 'scripts', 'index.ts')
          , 
          }
        }
      , inline :
        { common_js :
          { sourceFile : path.join(paths.src, 'scripts', 'common.ts')
          }
        , common_css :
          { sourceFile :
            path.join(paths.src, 'scss', 'common.inline.scss')
          }
        }
      }
    }
  ]



function entries_from_page_descriptor
  ( pageDescriptor
  ) {
    const to_entry =
      ( entries
      , [ assetName, assetDesc ]
      ) => (
        { [assetName] : assetDesc.sourceFile
        , ... entries
        }
      )
    

    const inlineAssets = pageDescriptor.assets.inline

    const inlineEntries =
      Object.entries(inlineAssets).reduce( to_entry, {} )

    const externalAssets = pageDescriptor.assets.external

    const externalEntries =
      Object.entries(externalAssets).reduce( to_entry, {} )

    return (
      { ... externalEntries
      , ... inlineEntries
      }
    )
  }



const entries =
  page_descriptors.reduce
    ( ( entries
      , pageDescriptor
      ) => (
        { ... entries_from_page_descriptor(pageDescriptor)
        , ... entries
        }
      )
    , {}
    )



const htmlWebpackPlugins =
  page_descriptors.map
    ( ( { pageTitle
        , pageSourceFile
        , assets
        }
      ) =>
        new HtmlWebpackPlugin(
          { title        : pageTitle
          , favicon      : paths.src + '/images/favicon.png'
          , template     : pageSourceFile
          , filename     : path.basename(pageSourceFile)
          , chunks       :
            [ ... Object.keys(assets.external)
            , ... Object.keys(assets.inline)
            ]
          , inject       : true
          , minify       : false
          }
       )
    )



const allInlinedAssetNamess =
  page_descriptors.reduce
    ( ( pageDescriptors
      , pageDescriptor
      ) => (
        [ ... Object.keys(pageDescriptor.assets.inline)
        , ... pageDescriptors
        ]
      )
    , []
    ).map( assetName => RegExp(assetName) )



module.exports =
  { entry  : 
      { ... entries
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
  
    , ... htmlWebpackPlugins

      // inject files into head or body
    , new HtmlWebpackInjector()

    , new InlineChunksPlugin
        ( HtmlWebpackPlugin
        , allInlinedAssetNamess
        )

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

