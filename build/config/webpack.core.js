const path = require('path')
const handlebars = require('handlebars')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Utils = require('../lib/Utils')
const ProjectDesc = require('../lib/ProjectDesc')
const buildConfig = require('./build.config.js')


const mode = process.env.NODE_ENV



const projectDesc = ProjectDesc.create(buildConfig)
const srcDesc = ProjectDesc.get_src(projectDesc)
const pages = ProjectDesc.Src.get_pages(srcDesc)



Utils.register_project_templates(handlebars, projectDesc)



const entry = pages.reduce(Utils.Webpack.entry_points_from_pages, {})



const distDir
  = ProjectDesc.Dist.get_root
      ( ProjectDesc.get_dist(projectDesc)
      )

const output
  = { filename   : path.join('js', '[name].js')
    , path       : distDir
    , publicPath :
        ( process.env.NODE_ENV === 'development' 
            ? ProjectDesc.get_devPublicPath(projectDesc)
            : ProjectDesc.get_prodPublicPath(projectDesc)
        )
    , environment:
        { arrowFunction : false
        , bigIntLiteral : false
        , const         : false
        , destructuring : false
        , dynamicImport : false
        , forOf         : false
        , module        : false
        }
    }


const preprocessor
  = ( content
    , loaderContext
    ) => (
      Utils.compile_templates.call
        ( loaderContext
        , { content
          , handlebars
          }
        )
    )


const webpackModule
  = { rules:
        [ { test : /\.template\.html$/i
          , use  :
              [ { loader : 'html-loader'
                , options : { preprocessor }
                }
              ]
          }

        , { test      : /\.m?js$/i
          , exclude   : /(node_modules|bower_components)/
          , use       :
              { loader  : 'babel-loader'
              , options :
                  { exclude: 
                      [ /node_modules[\\\/]core-js/
                      , /node_modules[\\\/]webpack[\\\/]buildin/
                      ]
                  }
              }
          }

        , { test: /\.(png|svg|jpg|jpeg|gif)$/i
          , type: 'asset/resource'
          , generator :
              { filename: path.join
                            ( 'images'
                            , '[name]-[contenthash][ext]'
                            )
              }
          }

        , { test: /\.(woff|woff2|eot|ttf|otf)$/i
          , type: 'asset/resource'
          , generator :
              { filename: path.join('fonts', '[name][ext]')
              }
          }
        ]
    }



const plugins
  = [ new CleanWebpackPlugin()
    , ... Utils.Webpack.generate_htmlWebpackPlugins(projectDesc)
    ]



const componentsDir
  = ProjectDesc.Src.get_componentDir(srcDesc)

const srcLibDir
  =  ProjectDesc.Lib.get_root
       ( ProjectDesc.Src.get_lib(srcDesc)
       )

const pagesDir = ProjectDesc.Src.get_pageDir(srcDesc)

const nodeModulesDir
  = path.join(ProjectDesc.get_projectRoot(projectDesc), 'node_modules')

const resolve
  = { extensions : ['.js', '.mjs', '.css', '.scss']
    , alias      :
        { component    : componentsDir
        , lib          : srcLibDir
        , page         : pagesDir
        , node_modules : nodeModulesDir
        }
    }



module.exports
  = { mode
    , entry
    , output
    , module : webpackModule
    , plugins
    , resolve
    }
