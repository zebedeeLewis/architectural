const path = require('path')


/**
 * Represents a directory tree that holds a collection of source files
 * (i.e. components, JavaScript, Scss, templates) used by a single page.
 *
 * An example of a single "page" directory represented by a Page:
 *
 *   -+- Home/
 *    +-+- component/
 *      +-+- component1
 *        +-- __test__/
 *        +--- index.template.html
 *        +--- index.js
 *        +--- index.scss
 *      +-+- component2
 *        +-- __test__/
 *        +--- index.template.html
 *        +--- index.js
 *        +--- index.scss
 *      +--- ...
 *    +-+- js/
 *      +-- __test__/
 *      +-- helper1.js
 *      +-- helper2.js
 *      +-- ...
 *    +-+- scss/
 *      +-- helper1.scss
 *      +-- helper2.scss
 *      +-- ...
 *    +-+- image/
 *      +-- image.jpg
 *      +-- image2.png
 *      +-- ...
 *    +--- index.scss
 *    +--- index.js
 *    +--- index.template.html
 *
 *
 *  This is the Page object that represents the directory tree
 *  above:
 *  
 *  @example
 *
 *  const Home
 *    = { id           : 'index'
 *      , name         : 'Home'
 *      , root         : '<absolute path to parentdir>/home/'
 *      , styleSheet   : 'index.scss'
 *      , script       : 'index.js'
 *      , markupFile   : 'index.template.html'
 *      , styleDir     : 'scss/'
 *      , scriptDir    : 'js/'
 *      , componentDir : 'component/'
 *      }
 *
 *
 * @typedef {Oject} Model
 * @property {string} id - a unique identifier for the page, this is
 *   used as the chunk name for this pages resources.
 * @property {string} name - the name of the page.
 * @property {string} root - absolute path to the page directory
 * @property {string} styleSheet - path to the main style sheet for the
 *   page, relative to the Page root. Defaults to "index.scss".
 * @property {string} script - path to the main JavaScript file for the
 *   page. relative to the Page root. Defaults to "index.js".
 * @property {string} markupFile - path to the main markup template file
 *   for the page. Defaults to "index.template.html".
 * @property {string} styleDir - path to the directory containing
 *   additional style sheets needed to support the main style sheet of
 *   this page. Path is relative to the Page root.
 * @property {string} scriptDir - path to the directory containing
 *   additional javascript files needed to support the main script file
 *   for this page. Path is relative to the Page root.
 * @property {string} componentDir - path to the directory containing
 *   additional components needed by this page. See Component.Model for
 *   details on the structure of the subdirectories in this directory.
 * @property {string} imageDir - path to the directory containing
 *   the images used on this page.
 */



/**
 * Produce a new Page object.
 *
 * @param {string} absolutePathToRoot
 * @param {string} pageId
 * @param {string} pageName
 * @return {Model}
 */
exports.create
  = ( absolutePathToRoot
    , pageId
    , pageName
    ) => (
      { root         : absolutePathToRoot
      , id           : pageId
      , name         : pageName
      , styleSheet   : 'index.scss'
      , script       : 'index.js'
      , markupFile   : 'index.template.html'
      , styleDir     : 'scss/'
      , scriptDir    : 'js/'
      , componentDir : 'component/'
      }
    )



exports.get_root = pageDesc => pageDesc.root



exports.get_id = pageDesc => pageDesc.id



exports.get_name = pageDesc => pageDesc.name



exports.get_styleSheet
  = pageDesc =>  path.join(pageDesc.root, pageDesc.styleSheet)



exports.get_script
  = pageDesc => path.join(pageDesc.root, pageDesc.script)



exports.get_markupFile
  = pageDesc => path.join(pageDesc.root, pageDesc.markupFile)



exports.get_styleDir
  = pageDesc => path.join(pageDesc.root, pageDesc.styleDir)



exports.get_scriptDir
  = pageDesc => path.join(pageDesc.root, pageDesc.scriptDir)



exports.get_componentDir
  = pageDesc => path.join(pageDesc.root, pageDesc.componentDir)

