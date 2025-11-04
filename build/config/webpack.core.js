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

const componentsDir = ProjectDesc.Src.get_componentDir(srcDesc)
const srcLibDir = ProjectDesc.Lib.get_root(ProjectDesc.Src.get_lib(srcDesc))
const pagesDir = ProjectDesc.Src.get_pageDir(srcDesc)
const nodeModulesDir = path.join(ProjectDesc.get_projectRoot(projectDesc), 'node_modules')

const resolve
  = { // extensions: An array of extensions that should be resolved to modules.
      // This allows you to import files without specifying the extension (e.g.
      // import './file' instead of './file.js').
      extensions : ['.js', '.mjs', '.css', '.scss']

      // alias: Create aliases to import modules more easily.
      // This allows using short, absolute paths instead of long, relative paths
      // (e.g., 'import MyComponent from "component/MyComponent"'
      // instead of 'import MyComponent from "../../../components/MyComponent"').
    , alias      :
      { // Aliases the 'component' prefix to the absolute path defined in
        // componentsDir.
        component    : componentsDir
        // Aliases the 'lib' prefix to the absolute path defined in srcLibDir
        // (source library directory).
      , lib          : srcLibDir
        // Aliases the 'page' prefix to the absolute path defined in pagesDir.
      , page         : pagesDir
        // Explicitly aliases node_modules to ensure correct resolution, often
        // used for module isolation or specific path hacks.
      , node_modules : nodeModulesDir
      , }
    , }

// generate the key-value map required by Webpack's 'entry' configuration. where
// the page ID (e.g., 'home', 'about') serve as the key which also becomes the
// bundle name, and the path to the main JavaScript file for that page (the entry
// script) serves as the value. This explicitly tells Webpack which JS files to
// bundle, ensuring that all page-specific scripts and their dependencies are
// correctly processed and loaded on their respective HTML pages.
const entry = pages.reduce(Utils.Webpack.pageDescriptorsToEntrypoints, {})

// Register all templates in the project with the handlebars environ instance.
Utils.registerProjectTemplates(handlebars, projectDesc)

// Get the directory where the production build will be written to.
const distDir = ProjectDesc.Dist.get_root(ProjectDesc.get_dist(projectDesc))

const output
  = { // filename: Defines the naming pattern for the output bundles.
      // [name] is a placeholder that Webpack replaces with the entry point name
      // (e.g., 'home' or 'about'). The files are placed inside a 'js/'
      // subdirectory within the final output path. Example output file:
      // dist/js/home.js
      filename    : path.join('js', '[name].js')

      // path: The absolute directory path where all bundled files will be written
      // (the distribution directory).
    , path      : distDir

      // publicPath: Specifies the public URL address of the output directory when
      // referenced in a browser. This is crucial for correctly loading assets
      // (scripts, styles, images) both locally and after deployment.
    , publicPath :
          process.env.NODE_ENV === 'development'
            ? ProjectDesc.get_devPublicPath(projectDesc)
            : ProjectDesc.get_prodPublicPath(projectDesc)

      // environment: Webpack 5 feature used to configure compatibility settings,
      // allowing you to disable specific modern JavaScript features in the
      // generated output to ensure compatibility with older browsers or runtimes.
    , environment:
        {
          // Disable modern features like arrow functions, const, and dynamic
          // imports forces Webpack to transpile the code down to an older target
          // (often ES5) compatible with the specified minimum browser level.
          arrowFunction : false
        , bigIntLiteral : false
        , const         : false
        , destructuring : false
        , dynamicImport : false
        , forOf         : false
        , module        : false
        , }
    , }

/**
 * Handlebars preprocessor function used by Webpack loaders to compile the
 * template content using the project's pre-configured Handlebars instance.
 *
 * @param {string} content - The raw string content of the Handlebars file being
 *   loaded.
 * @param {object} loaderContext - The Webpack loader context object (`this`) used
 *   for context-aware operations. Provided by Webpack to all loaders.
 * @returns {string} The processed template content, usually ready to be injected
 * into HTML or further processed.
 */
const handlebarsPreprocessor = ( content, loaderContext) =>
  Utils.templateCompiler.call(loaderContext , {content, handlebars })

const webpackModule
  = {
    rules:
      [ // Rule 1: Handlebars Template Files
        { test : /\.template\.html$/i
        , use  :
          [ { loader : 'html-loader'
            , options :
              { // Custom function to compile Handlebars templates before
                // html-loader processes the result.
                preprocessor: handlebarsPreprocessor
              , }
            , }
          , ]
        , }

      , // Rule 2: JavaScript Files (Babel Transpilation)
        { test    : /\.m?js$/i
        , exclude : /(node_modules|bower_components)/
        , use     :
          { loader  : 'babel-loader'
          , options :
            { exclude:
              [ /node_modules[\\\/]core-js/
              , /node_modules[\\\/]webpack[\\\/]buildin/
              ]
            }
          }
        }

      , // Rule 3: Image Assets (png, svg, jpg, jpeg, gif)
        { test: /\.(png|svg|jpg|jpeg|gif)$/i
        , type: 'asset/resource'
        , generator :
          { // Place output images into an 'images' subdirectory, using the
            // original name, a content hash for cache busting, and the original
            // extension.
            filename: path.join('images', '[name]-[contenthash][ext]')
          , }
        , }

      , // Rule 4: Font Assets (woff, woff2, eot, ttf, otf)
        { test: /\.(woff|woff2|eot|ttf|otf)$/i
        , type: 'asset/resource'
        , generator :
          { // Place output fonts into a 'fonts' subdirectory using the original
            // name and extension.
            filename: path.join('fonts', '[name][ext]')
          , }
        , }
      ]
    }

const plugins
  = [ new CleanWebpackPlugin()
    , ... Utils.Webpack.generate_htmlWebpackPlugins(projectDesc)
    ]

module.exports
  = { mode
    , entry
    , output
    , module : webpackModule
    , plugins
    , resolve
    }
