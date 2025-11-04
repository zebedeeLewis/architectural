const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const { merge } = require('webpack-merge')

const webpackCore = require('./webpack.core.js')
const ProjectDesc = require('../lib/ProjectDesc')
const buildConfig = require('./build.config.js')

const projectDesc = ProjectDesc.create(buildConfig)

const webpackModule = {
  rules: [
    {
      // Matches all CSS/SCSS files
      test: /\.s?css$/i,
      use: [
        // Use MiniCssExtractPlugin loader instead of 'style-loader'
        // This extracts CSS from the JS bundle into a separate physical CSS file.
        MiniCssExtractPlugin.loader,

        // The rest of the loaders (css-loader, postcss-loader,
        // resolve-url-loader, sass-loader) remain the same as dev configuration
        // but ensure they run before extraction.
        { loader: 'css-loader', options: { sourceMap: false } },
        { loader: 'postcss-loader', options: {
            sourceMap: false,
            postcssOptions: {
              // Assumes ProjectDesc provides the postcss config path
              config: ProjectDesc.get_postCssConfig(projectDesc),
            },
          },
        },
        { loader: 'resolve-url-loader', options: { sourceMap: false } },
        { loader: 'sass-loader', options: { sourceMap: true } },
      ],
    },
  ],
}

// Extract CSS into separate files defined by the output path.
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
