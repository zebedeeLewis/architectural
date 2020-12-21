const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const { merge } = require('webpack-merge')

const webpackCore = require('./webpack.core.js')
const ProjectDesc = require('../lib/ProjectDesc')
const buildConfig = require('./build.config.js')



const projectDesc = ProjectDesc.create(buildConfig)

const webpackModule =
  { rules:
      [ { test: /\.s?css$/i
        , use:
            [ MiniCssExtractPlugin.loader
            , 'css-loader'
            , { loader  : 'postcss-loader'
              , options : 
                  { postcssOptions :
                    { config: ProjectDesc.get_postCssConfig(projectDesc)
                    }
                  }
              }
            , 'resolve-url-loader'
            , { loader  : 'sass-loader'
              , options :
                  { sourceMap : true
                  }
              }
            ]
        }
      ]
  }



const plugins =
  [ new MiniCssExtractPlugin
      ( { filename : path.join('css', '[name].css')
        }
      )
  ]



const prodConfig =
  { module: webpackModule
  , plugins
  }



module.exports = merge(webpackCore, prodConfig)
