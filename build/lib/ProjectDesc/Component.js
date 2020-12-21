const path = require('path')



/**
 * Component:
 * Represents a directory tree that hold a collection of source files
 * for a single self contained component. All paths are relative to
 * ComponentDesc.root.
 *
 * An example of a single "component" directory represented by a
 * ComponentDesc:
 *
 *   +-+- Component1
 *     +--- __test__/
 *     +--- index.template.html
 *     +--- index.js
 *     +--- index.scss
 *     +--- subcomponent1/
 *     +--- subcomponent2/
 *     +--- ...
 *
 * This is the ComponentDesc object that represents the directory tree
 * above:
 *
 * @example
 *
 * const Component1
 *   = { root       : '<absolute path to parentdir>'/Component1/'
 *     , styleSheet : 'index.scss'
 *     , script     : 'index.js'
 *     , markupFile : 'index.template.html'
 *     , testDir    : '__test__/'
 *     }
 *
 *
 * @typedef {Object} Model
 * @property {string} root - absolute path to the component directory
 * @property {string} styleSheet - path to the main style sheet for the
 *   component. Defaults to "index.scss".
 * @property {string} script - path to the main JavaScript file for the
 *   component. Defaults to "index.js".
 * @property {string} markupFile - path to the main markup template file
 *   for the component. Defaults to "index.template.html".
 */



/**
 * Produce a new ComponentDesc object.
 *
 * @param {string} absolutePathToRoot -
 * @return {Model}
 */
exports.create
  = ( absolutePathToRoot
    ) => (
      { root       : absolutePathToRoot
      , styleSheet : 'index.scss'
      , script     : 'index.js'
      , markupFile : 'index.template.html'
      , testDir    : '__test__/'
      }
    )



exports.get_root
  = componentDesc => componentDesc.root



exports.get_styleSheet
  = componentSrc =>
    path.join(componentSrc.root, componentSrc.styleSheet)



exports.get_script
  = componentSrc =>
    path.join(componentSrc.root, componentSrc.script)



exports.get_markupFile
  = componentSrc =>
    path.join(componentSrc.root, componentSrc.markupFile)



exports.get_testDir
  = componentSrc =>
    path.join(componentSrc.root, componentSrc.testDir)



