const path = require('path')
const Src = require('./Src')
const Dist = require('./Dist')
const Lib = require('./Lib')



const DEFAULT_WRAPPER_TEMPLATE_NAME = 'shell.template.html'
const DEFAULT_FAVICON_NAME = 'favicon.png'



/**
 * Represents main configuration object used to configure a project.
 * This is the object that should be returned from 
 * "config/build.config.js". All paths are relative to
 * Config.projectRoot, unless otherwise specified.
 *
 *
 * @typedef {Object} Model
 * @property {string} projectRoot - absolute path to the project root,
 *   the directory containing the "package.json" file.
 * @property {string} postCssConfig - path to the postCss configuration
 *   file. Relative to Config.buildDir. Defaults to './postcss.config.js'
 * @property {Src} src - represents this project source directory
 *   files configuration.
 * @property {string} dist - represent the project build output directory.
 * @property {string} devPublicPath - the public URI path that serves
 *   as this projects root on the development server.
 * @property {string} prodPublicPath - the public URI path that serves
 *   as this projects root on the production server.
 * @property {string} faviconPath - the absolute path to the favicon
 *   image.
 * @property {string} htmlWrapperPath - the path to the wrapper template.
 *   Absolute path.
 */



/**
 * Arguments to the create function. Properties are same as those on
 * the Config oject.
 *
 * @typedef {Object} Config
 * @property {string} projectRoot - absolute path to project root
 *   directory
 * @property {string} postCssConfig
 * @property {string} srcDir - path to the source directory. Relative
 *   to projectRoot.
 * @property {string} distDir - path to build output directory. Relative
 *   to projectRoot.
 * @property {string} devPublicPath
 * @property {string} prodPublicPath
 * @property {string} faviconPath
 * @property {string} htmlWrapperPath
 * @property {Array<Src.PageInit>} pageInits - an array of strings
 *   containing the basename of all the page directories in the project
 *   along with their corresponding page name.
 */



/**
 * produce a new Config object.
 *
 * @param  {Config}
 * @return {Model}
 */
exports.create
  = ( { projectRoot
      , postCssConfig
      , srcDir
      , distDir
      , devPublicPath
      , prodPublicPath
      , faviconPath
      , htmlWrapperPath
      , pageInits
      }
    ) => {
      const srcRoot = path.join(projectRoot, srcDir)
      const srcDesc = Src.create(srcRoot, pageInits)

      const distRoot = path.join(projectRoot, distDir)
      const distDesc = Dist.create(distRoot)

      const globalLibTemplateDir
        = Lib.get_templateDir
            ( Src.get_lib(srcDesc)
            )

      const appliedHtmlWrapperPath
        =  htmlWrapperPath
        || path.join(globalLibTemplateDir, DEFAULT_WRAPPER_TEMPLATE_NAME)

      const globalLibImageDir
        = Lib.get_imageDir(Src.get_lib(srcDesc))

      const appliedFaviconPath
        =  faviconPath
        || path.join(globalLibImageDir, DEFAULT_FAVICON_NAME)


      return (
        { projectRoot     : projectRoot
        , postCssConfig   : postCssConfig
        , src             : srcDesc
        , dist            : distDesc
        , devPublicPath   : devPublicPath
        , prodPublicPath  : prodPublicPath
        , faviconPath     : appliedFaviconPath
        , htmlWrapperPath : appliedHtmlWrapperPath
        }
      )
    }



exports.get_projectRoot
  = projectDesc => projectDesc.projectRoot



exports.get_postCssConfig
  = projectDesc => projectDesc.postCssConfig



exports.get_src
  = projectDesc => projectDesc.src



exports.get_dist
  = projectDesc => projectDesc.dist



exports.get_devPublicPath
  = projectDesc => projectDesc.devPublicPath



exports.get_prodPublicPath
  = projectDesc => projectDesc.prodPublicPath



exports.get_faviconPath
  = projectDesc => projectDesc.faviconPath



exports.get_htmlWrapperPath
  = projectDesc => projectDesc.htmlWrapperPath



