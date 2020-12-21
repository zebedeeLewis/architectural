const path = require('path')



/**
 * Represent thes configuration object detailing the layout and any
 * additional information about the output of the build process.
 *
 *
 * @typedef {Object} Model
 * @property {string} root - path to the project output directory.
 * @property {string} styleDir - path to the styles directory. Relative
 *   to DistDesc.root. Defaults to './css/'.
 * @property {string} scriptDir - path to the script directory. Relative
 *   to DistDesc.root. Defaults to './js/'.
 * @property {string} imageDir - path to the image directory. Relative to
 *   DistCnfig.root. Defaults to './image/'.
 */



/**
 * produce a new DistDesc.
 *
 * @param {string} absolutePathToRoot -
 * @return {Model}
 */
exports.create
  = ( absolutePathToRoot
    ) => (
      { root      : absolutePathToRoot
      , styleDir  : 'css/'
      , scriptDir : 'js/'
      , imageDir  : 'image/'
      }
    )



exports.get_root
  = distDesc => distDesc.root



exports.get_styleDir
  = distDesc =>  path.join(distDesc.root, distDesc.styleDir)



exports.get_scriptDir
  = distDesc =>  path.join(distDesc.root, distDesc.scriptDir)



exports.get_imageDir
  = distDesc =>  path.join(distDesc.root, distDesc.imageDir)

