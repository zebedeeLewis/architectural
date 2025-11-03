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
 * Creat a Webpack entry object from the index.js file found in the PageDesc.
 * This function is to be used with Array.prototype.reduce.
 *
 * @param {Webpack.EntryPoint} entryAccumulator - The accumulating Webpack entry
 *   object (key-value map).
 * @param {ProjectDesc.Page} pageDesc - The current Page description object being
 *   processed.
 * @return {Webpack.EntryPoint} - The updated entry object with the current page's
 *   entry added.
 */
function pageDescriptorsToEntrypoints
  ( entryAccumulator
  , pageDesc
  ) {
    // Extract the unique identifier for the page (e.g., 'about', 'home'). This
    // will become the webpack bundle name.
    const pageId = ProjectDesc.Page.get_id(pageDesc)

    // Extract the absolute path to the main JavaScript entry file for this page
    // (e.g., /<project root>/src/page/home/index.js).
    const pathToIndexJs = ProjectDesc.Page.get_script(pageDesc)


    return (
      // Use the spread syntax to merge the accumulator with the new entry point.
      { ... entryAccumulator
      // Dynamically set the bundle name (pageId) and assign its entry file path
      // (pathToIndexJs). Example:
      // { ..., 'home': '/path/to/src/page/home/index.js' }
      , [pageId] : pathToIndexJs
      }
    )
  }

module.exports =
  { generate_htmlWebpackPlugins
  , pageDescriptorsToEntrypoints
  }

