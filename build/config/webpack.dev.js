const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')

const webpackCore = require('./webpack.core.js')
const ProjectDesc = require('../lib/ProjectDesc')
const buildConfig = require('./build.config.js')



const projectDesc = ProjectDesc.create(buildConfig)
const srcDesc = ProjectDesc.get_src(projectDesc)



const webpackModule =
  { rules:
      [ { test: /\.s?css$/i
        , use:
            [ 'style-loader'

            , { loader  : 'css-loader'
              , options : { sourceMap: true }
              }

            , { loader  : 'postcss-loader'
              , options : 
                  { sourceMap      : true
                  , postcssOptions :
                    { config: ProjectDesc.get_postCssConfig(projectDesc)
                    }
                  }
              }

            , { loader  : 'resolve-url-loader'
              , options : { sourceMap : true}
              }

            , { loader  : 'sass-loader'
              , options : {sourceMap : true}
              }
            ]
        }
      ]
  }



const distDir
  = ProjectDesc.Dist.get_root
      ( ProjectDesc.get_dist(projectDesc)
      )


const devPublicPath = ProjectDesc.get_devPublicPath(projectDesc)

const devServer =
  { contentBase : distDir
  , publicPath  : devPublicPath
  , openPage    : devPublicPath.replace(/^\//, '') + 'index.html'
  , open        : true
  , hot         : true
  , port        : 8000
  }



const plugins = [ new webpack.HotModuleReplacementPlugin() ]



const devConfig =
  { devtool: 'inline-source-map'
  , module: webpackModule
  , devServer
  , plugins
  }



module.exports = merge(webpackCore, devConfig)
