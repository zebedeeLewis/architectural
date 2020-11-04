const path = require('path')



const PUBLIC_PATH = '/architectural/'

const PUBLIC_IMAGES_PATH = path.join(PUBLIC_PATH, 'images')

const DEV_PUBLIC_IMAGES_PATH = 'images'

const BUILD_DIR_PATH = path.resolve(__dirname, '../docs/')

const IMAGES_OUTPUT_DIR_PATH = path.join(BUILD_DIR_PATH, 'images')

const ASSETS_OUTPUT_DIR_PATH = path.join(BUILD_DIR_PATH, 'assets')

const SRC_DIR_PATH =  path.resolve(__dirname, '../src/')

const INDEX_HTML_SRC_PATH = path.join(SRC_DIR_PATH, 'index.html')

const CONTACT_HTML_SRC_PATH = path.join(SRC_DIR_PATH, 'contact.html')

const IMAGES_SRC_DIR_PATH = path.join(SRC_DIR_PATH, 'images')

const SCSS_SRC_DIR_PATH = path.join(SRC_DIR_PATH, 'scss')

const SCRIPTS_SRC_DIR_PATH = path.join(SRC_DIR_PATH, 'scripts')

const INDEX_JS_SRC_PATH = path.join(SCRIPTS_SRC_DIR_PATH, 'index.ts')

const CONTACT_JS_SRC_PATH = path.join(SCRIPTS_SRC_DIR_PATH, 'contact.ts')

const COMMON_SCSS_SRC_PATH =
  path.join(SCSS_SRC_DIR_PATH, 'loader.scss')

const COMMON_JS_SRC_PATH =
  path.join(SCRIPTS_SRC_DIR_PATH, 'common.ts')

const ASSETS_SRC_DIR_PATH = path.join(SRC_DIR_PATH, 'assets')

const CONFIG_DIR_PATH = path.resolve(__dirname)

const POST_CSS_CONFIG_PATH =
  path.join(CONFIG_DIR_PATH, 'postcss.config.js')


module.exports =
  { PUBLIC_PATH
  , PUBLIC_IMAGES_PATH
  , IMAGES_SRC_DIR_PATH
  , IMAGES_OUTPUT_DIR_PATH
  , ASSETS_OUTPUT_DIR_PATH
  , PUBLIC_IMAGES_PATH
  , ASSETS_SRC_DIR_PATH
  , SRC_DIR_PATH
  , BUILD_DIR_PATH
  , CONFIG_DIR_PATH
  , COMMON_SCSS_SRC_PATH
  , COMMON_JS_SRC_PATH
  , INDEX_JS_SRC_PATH
  , CONTACT_JS_SRC_PATH
  , INDEX_HTML_SRC_PATH
  , CONTACT_HTML_SRC_PATH
  , POST_CSS_CONFIG_PATH
  , DEV_PUBLIC_IMAGES_PATH
  }
