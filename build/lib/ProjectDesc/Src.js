const path = require('path')
const Lib = require('./Lib')
const Page = require('./Page')



/**
 * Represents the configuration object detailing source code information.
 * All paths are relative to SrcConfig.root unless explicitly stated
 * otherwise.
 *
 *
 * @typedef {Object} Model
 * @property {sting} root - path to the project source directory.
 * @property {string} pageDir - path to the source pages directory. The
 *   directory that contains the source files for all pages on the site.
 * @property {Lib.Model} lib - represents this project source
 *   global library which contains source files common to all pages and
 *   components.
 * @property {string} componentDir - path to this projects components
 *   directory. The directory that contains a collection of components
 *   used throughout the site.
 * @property {Array<{dirname: string, pageName: string}>} pagesConfig
 *   - an array of strings containing the basename of all the page
 *   directories in the project along with their corresponding page
 *   name.
 * @property {Array<Page.Model>} pages - an array of objects each
 *   representing a page in the "pageNames" array.
 */



/**
 * Configuration object that provides information to create a single
 * Page.Model.
 *
 * @typedef {Object} PageInit
 * @property {string} pageId - unique identifier for this page, this is
 *   used as the chunk name for this pages resources.
 * @property {string} dirname - the basename for the pages directory.
 * @parperty {string} pageName - the page name. This will be displayed
 *   in the browser tab.
 */



/**
 * produce a new SrcConfig
 *
 * @param {string} absolutePathToRoot -
 * @param {Array<PageInit>} pageInits
 * @return {Model}
 */
exports.create
  = ( absolutePathToRoot
    , pageInits
    ) => {
      const libRoot = path.join(absolutePathToRoot, 'lib/')

      const pages
        = pageInits.map
            ( ({pageId, dirname, pageName}) => {
                const pageRoot
                  = path.join(absolutePathToRoot, 'page', dirname)

                return Page.create(pageRoot, pageId, pageName)
              }
            )


      return (
        { root         : absolutePathToRoot
        , pageDir      : 'page/'
        , lib          : Lib.create(libRoot)
        , componentDir : 'component/'
        , pageInits    : pageInits
        , pages        : pages
        }
      )
    }



exports.get_root = srcDesc => srcDesc.root



exports.get_pageDir
  = srcDesc =>  path.join(srcDesc.root, srcDesc.pageDir)



exports.get_lib = srcDesc => srcDesc.lib



exports.get_componentDir
  = srcDesc =>  path.join(srcDesc.root, srcDesc.componentDir)



exports.get_pageNames = srcDesc => srcDesc.pageNames



exports.get_pages = srcDesc => srcDesc.pages

