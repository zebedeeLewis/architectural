const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')

const webpackCore = require('./webpack.core.js')
const ProjectDesc = require('../lib/ProjectDesc')
const buildConfig = require('./build.config.js')

const projectDesc = ProjectDesc.create(buildConfig)
const srcDesc = ProjectDesc.get_src(projectDesc)
const distDir = ProjectDesc.Dist.get_root(ProjectDesc.get_dist(projectDesc))
const devPublicPath = ProjectDesc.get_devPublicPath(projectDesc)

// Define the loader chain for processing .scss and .css files.
const webpackModule =
  { rules:
    [ { // Match all files ending with .css or .scss (case-insensitive).
        test: /\.s?css$/i
      , use: //Loaders are processed from right to left (bottom to top)
        [ // 1. Inject processed CSS into the DOM via a <style> tag at runtime.
          'style-loader'
        , // 2. Interprets @import and url() like requires/imports and resolves them.
          { loader  : 'css-loader'
          , options : { sourceMap: true }
          }
        , // 3. Processes CSS using PostCSS plugins (e.g. autoprefixer).
          { loader  : 'postcss-loader'
          , options :
            { sourceMap      : true
            , // Passes project-specific configuration to PostCSS, allowing
              // it to locate its configuration file
              // (e.g., postcss.config.js).
              postcssOptions :
                { config: ProjectDesc.get_postCssConfig(projectDesc)
                }
            }
          }

        , // 4. Helps resolve relative paths in CSS/SCSS (e.g., for assets like
          // fonts or images). Must be placed *before* sass-loader if
          // sass-loader's source maps are used.
          { loader  : 'resolve-url-loader'
          , options : { sourceMap : true}
          }

        , // 5. Compiles SCSS/Sass into standard CSS. This is the first loader
          // executed.
          { loader  : 'sass-loader'
          , options : {sourceMap : true}
          }
        ]
      }
    ]
  }
  
const devServer =
  { // Directory to serve static content from. In this case, it serves the
    // compiled output (distDir).
    static      : distDir
  ,
    // Automatically open the browser when the server starts.
    open        : { target: [devPublicPath.replace(/^\//, '') + 'index.html'] }
  , // Enable Hot Module Replacement (HMR). This allows changes to be updated
    // in the browser without a full page reload, preserving application state.
    hot         : true
  , // The port number the development server will listen on.
    port        : 8000
  , }

const plugins = [
  // Enable Hot Module Replacement (HMR) during development. Allowing modules to
  // be updated in the running application without a full page reload
  new webpack.HotModuleReplacementPlugin()
]

const stats = {
  // Includes the statistics from all child compilations (e.g., from plugins or
  // asset processing), providing a more detailed and verbose output about the
  // entire build process.
  children: true
}

const devConfig =
  { devtool: 'inline-source-map'
  , module: webpackModule
  , devServer
  , stats
  , plugins
  }

module.exports = merge(webpackCore, devConfig)
