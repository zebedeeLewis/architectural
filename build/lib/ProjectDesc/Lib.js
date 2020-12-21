const path = require('path')



/**
 * Represents a directory tree that holds a collection of source files
 * The files may or may not have any cohesive relationship to each
 * other.
 *
 * Except for the Lib.root path, all paths are relative to the
 * Lib.root.
 *
 * A visual representation of a directory repreented by a Lib:
 *
 *   -+- src/lib/
 *    +-+- template/
 *      +--- example.template.html
 *      +--- example2.template.html
 *      +--- ...
 *    +-+- scss/
 *      +-- helper1.scss
 *      +-- helper2.scss
 *      +-- ...
 *    +-+- js/
 *      +-- helper1.js
 *      +-- helper2.js
 *      +-- ...
 *    +-+- image/
 *      +-- image.jpg
 *      +-- image2.png
 *      +-- ...
 *
 *
 * @example
 * 
 *   const Lib
 *     = { root        : '<absolute path to parentdir>/lib/'
 *       , templateDir : 'template/'
 *       , styleDir    : 'scss/'
 *       , scriptDir   : 'js/'
 *       , imageDir    : 'image/'
 *       }
 *
 *
 * @typedef {Object} Model
 * @property {string} root - absolute path to the library directory
 * @property {string} templateDir - library of template files used
 *   within the scope of this library.
 * @property {string} styleDir - library of style sheets used within the
 *   scope of this library.
 * @property {string} scriptDir - library of javascript files used
 *   within the scope of this library.
 * @property {string} imageDir - library of images used within the scope
 *   of this library.
 */



/**
 * Produce a new Lib
 *
 * @param {string} absolutePathToRoot
 * @return {Model}
 */
exports.create
  = ( absolutePathToRoot
    ) => (
      { root        : absolutePathToRoot
      , templateDir : 'template/'
      , styleDir    : 'scss/'
      , scriptDir   : 'js/'
      , imageDir    : 'image/'
      }
    )



exports.get_root
  = srcLib => srcLib.root



exports.get_templateDir
  = srcLib => path.join(srcLib.root, srcLib.templateDir)



exports.get_styleDir
  = srcLib => path.join(srcLib.root, srcLib.styleDir)



exports.get_scriptDir
  = srcLib => path.join(srcLib.root, srcLib.scriptDir)



exports.get_imageDir
  = srcLib => path.join(srcLib.root, srcLib.imageDir)



