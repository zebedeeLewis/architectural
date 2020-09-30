const paths = require('./paths')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports =
  merge( common
       , { output :
           { path       : paths.build
           , filename   : path.join('js', '[name].js')
           , publicPath : '/architectural/'
           }
         , mode    : 'production'
         , devtool : false
         , plugins :
           [ new MiniCssExtractPlugin(
               { filename : path.join('css', '[name].css') }
             )
           ]
         , module:
           { rules:
             [ { test : /\.(scss|css)$/
               , use  :
                 [ MiniCssExtractPlugin.loader
                 , { loader  : 'css-loader'
                   , options : { importLoaders: 1 }
                   }
                 , { loader  : 'postcss-loader'
                   , options : 
                     { postcssOptions :
                       { config:
                         path.join(paths.config, 'postcss.config.js')
                       }
                     }
                   }
                 , 'sass-loader'
                 ],
               }
             ],
           }

         , optimization:
           { minimizer: 
             [ new TerserJSPlugin({})
             , new OptimizeCSSAssetsPlugin({})
             ]
             // Once your build outputs multiple chunks, this option
             // will ensure they share the webpack runtime instead of
             // having their own. This also helps with long-term
             // caching, since the chunks will only change when actual
             // code changes, not the webpack runtime.
           , runtimeChunk: 'single'
             // This breaks apart commonly shared deps (react, semantic
             // ui, etc) into one shared bundle. React, etc won't change
             // as often as the app code, so this chunk can be cached
             // separately from app code.
           , splitChunks:
             { cacheGroups:
               { vendor:
                 { test:
                   /[\\/]node_modules[\\/](react|react-dom|lodash)[\\/]/
                 , name   : 'vendors'
                 , chunks : 'all'
                 }
               }
             }
           }

         , performance:
           { hints             : false
           , maxEntrypointSize : 512000
           , maxAssetSize      : 512000
           }
         }
       )
