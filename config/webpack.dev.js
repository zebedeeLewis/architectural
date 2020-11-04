const Project = require('./project')
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports =
  merge( common
       , { output :
           { path       : Project.BUILD_DIR_PATH
           , filename   : path.join('js', '[name].js')
           , publicPath : '/'
           }
         , mode                 : 'development'
         , devtool              : 'inline-source-map'
         , devServer            :
           { contentBase        : Project.BUILD_DIR_PATH
           , open               : true
           , compress           : true
           , hot                : true
           , port               : 8000
           }

         , plugins: [ new webpack.HotModuleReplacementPlugin() ]
         , module:
           { rules:
             [ { test : /\.(scss|css)$/
               , use  :
                 [ 'style-loader'
                 , { loader  : 'css-loader'
                   , options : { sourceMap: true, importLoaders: 1 }
                   }
                 , { loader  : 'postcss-loader'
                   , options :
                     { sourceMap: true
                     , postcssOptions :
                       { config: Project.POST_CSS_CONFIG_PATH
                       }
                     }
                   }
                 , { loader  : 'sass-loader'
                   , options : { sourceMap: true }
                   }
                 ]
               }

             , { test         : /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i
               , loader       : 'file-loader'
               , options      :
                 { name       : '[name].[ext]'
                 , outputPath : Project.IMAGES_OUTPUT_DIR_PATH
                 , publicPath : Project.DEV_PUBLIC_IMAGES_PATH
                 , context    : 'src'
                 }
               }
             ]
           }
         }
       )
