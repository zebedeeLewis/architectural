const Project = require('./project')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInjector = require('html-webpack-injector')
const InlineChunksPlugin =
  require('./plugins/html-webpack-inline-chunks')



const page_descriptors =
  [ { pageTitle      : 'Home'
    , pageSourceFile : Project.INDEX_HTML_SRC_PATH
    , assets :
      { external :
        { index :
          { sourceFile : Project.INDEX_JS_SRC_PATH
          }
        }
      , inline :
        { common_js :
          { sourceFile : Project.COMMON_JS_SRC_PATH
          }
        , common_css :
          { sourceFile : Project.COMMON_SCSS_SRC_PATH
          }
        }
      }
    }
  , { pageTitle      : 'Contact Us'
    , pageSourceFile : Project.CONTACT_HTML_SRC_PATH
    , assets :
      { external :
        { contact :
          { sourceFile : Project.CONTACT_JS_SRC_PATH
          }
        }
      , inline :
        { common_js :
          { sourceFile : Project.COMMON_JS_SRC_PATH
          }
        , common_css :
          { sourceFile : Project.COMMON_SCSS_SRC_PATH
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
          , favicon      : Project.SRC_DIR_PATH + '/images/favicon.png'
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
          [ { from: Project.ASSETS_SRC_DIR_PATH
            , to: Project.ASSETS_OUTPUT_DIR_PATH
            }
          , { from: Project.IMAGES_SRC_DIR_PATH
            , to: Project.IMAGES_OUTPUT_DIR_PATH
            }
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

      ]
    }

  , resolve :
      { extensions : ['.js', '.ts', '.scss', '.css' ]
      }
  }

