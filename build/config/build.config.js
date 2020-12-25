const path = require('path')



const projectRoot = path.resolve(__dirname, '../..')

module.exports
  = { projectRoot     : projectRoot
    , srcDir          : 'src'
    , distDir         : 'dist'
    , devPublicPath   : '/architectural/'
    , prodPublicPath  : '/architectural/'
    , pageInits       :
        [ { pageId   : 'index'
          , pageName : 'Home'
          , dirname  : 'index'
          }
        , { pageId   : 'contact'
          , pageName : 'Contact'
          , dirname  : 'contact'
          }
        , { pageId   : 'about'
          , pageName : 'About Us'
          , dirname  : 'about'
          }
        , { pageId   : 'portfolio'
          , pageName : 'Portfolio'
          , dirname  : 'portfolio'
          }
        ]
    }
