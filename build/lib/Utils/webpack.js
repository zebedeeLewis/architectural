const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const fs = require('fs')
const ProjectDesc = require('../ProjectDesc')
const { page_template_name } = require('./register_project_templates')



/**
 * Produce true if the given filename maps to a file in the filesystem.
 *
 * @param {string} absolutePathToFile
 * @return {boolean}
 */
function file_exists
  ( absolutePathToFile
  ) {
    try {
      fs.accessSync(absolutePathToFile)
    } catch(e) {
      return false
    }

    return true
  }



/**
 * Produce a single HtmlWebpackPlugin for the given Page.
 *
 * @param {ProjectDesc.Model} projectDesc -
 * @parma {ProjectDesc.Page.Model} pageDescriptor -
 * @return {Array<HtmlWebpackPlugin>}
 */
function html_webpack_plugin_from_page_desc
  ( projectDesc
  , pageDesc
  ) {
    const pathToHtmlWrapper
      = ProjectDesc.get_htmlWrapperPath(projectDesc)


    const nameOfContentPartial = page_template_name(pageDesc)
    const title = ProjectDesc.Page.get_name(pageDesc)


    const template
      = `${pathToHtmlWrapper}`
      + `?title=${title}`
      + `&nameOfContentPartial=${nameOfContentPartial}`


    const pageId = ProjectDesc.Page.get_id(pageDesc)
    const favicon = ProjectDesc.get_faviconPath(projectDesc)
    const chunks = [pageId]


    return new HtmlWebpackPlugin(
      { template : template
      , filename : pageId + '.html'
      , favicon  : favicon
      , chunks   : chunks
      }
    )
  }



/**
 * Produce an array of HtmlWebpackPlugin, one for each page.
 *
 * @param {ProjectDesc.Model} projectDesc
 * @return {Array<HtmlWebpackPlugin>}
 */
function generate_htmlWebpackPlugins
  ( projectDesc
  ) {
    const pageDescriptors
      = ProjectDesc.Src.get_pages
          ( ProjectDesc.get_src(projectDesc)
          )

    const htmlWebpackPlugins
      = pageDescriptors.map
          ( descriptor =>
              html_webpack_plugin_from_page_desc(projectDesc, descriptor)
          )

    return htmlWebpackPlugins
  }



/**
 * Reduce an array of ProjectDesc.Page to a Webpack entry object. This
 * function is to be used with Arra.prototype.reduce.
 *
 * @param {Webpack.EntryPoint} entryAccumulator
 * @param {ProjectDesc.Page} pageDesc
 * @return {Webpack.EntryPoint}
 */
function entry_points_from_pages
  ( entryAccumulator
  , pageDesc
  ) {
    const pageId = ProjectDesc.Page.get_id(pageDesc)
    const pathToIndexJs = ProjectDesc.Page.get_script(pageDesc)
  
  
    return (
      { ... entryAccumulator
      , [pageId] : pathToIndexJs
      }
    )
  }



module.exports =
  { generate_htmlWebpackPlugins
  , entry_points_from_pages
  }

