const get_directory_tree = require('directory-tree')
const path = require('path')
const fs = require('fs')
const ProjectDesc = require('../ProjectDesc')



/**
 * Register the file at the given path as a handlebars partial template
 * with the given template name.
 *
 * @param {Handlebars} handlebars - handlebars runtime
 * @param {string} templatePath - absolute path to the template
 * @param {string} templateName - the name that will be assigned to the
 *   handlebars partial.
 */
function register_file_as_handlebars_partial
  ( handlebars
  , templatePath
  , templateName
  ) {
    handlebars.registerPartial
      ( { [templateName]: fs.readFileSync(templatePath, 'utf8')
        }
      )
  }



/**
 * Produce true if the given directory tree node represents a directory.
 *
 * @param {DirTree} dirTree
 * @param {boolean}
 */
function is_directory_node
  ( dirTree
  ) {
    return dirTree && dirTree.type === 'directory'
  }



/**
 * Produce true if the given directory tree node represents a file.
 *
 * @param {DirTree} dirTree
 * @param {boolean}
 */
function is_file_node
  ( dirTree
  ) {
    return dirTree && dirTree.type === 'file'
  }



/**
 * produce a Component from the given DirTree.
 *
 * @param {DirTree} dirTree
 * @return {Component}
 */
function dir_tree_node_to_component_descriptor
  ( dirTree
  ) {
    return ProjectDesc.Component.create(dirTree.path)
  }



/**
 * Register the main template file for a single component descriptor.
 *
 * @param {string} namespace
 * @param {Component} componentDesc
 * @return {void}
 */
function register_component_template
  ( handlebars
  , namespace
  , componentDesc
  ) {
    const componentRoot
      = ProjectDesc.Component.get_root(componentDesc)
    const templatePath
      = ProjectDesc.Component.get_markupFile(componentDesc)
    const templateName = namespace + '/' + path.basename(componentRoot)
        

    register_file_as_handlebars_partial
      ( handlebars
      , templatePath
      , templateName
      )
  }



/**
 * Treat all subdirectories in the given directory as a Component.
 * Register the main template file for each Component in the given
 * directory.
 *
 * Assuptions:
 *   - We assume that the given directory path is an absolute path
 *   - we assume that all child directories of the given directory
 *     are directories that can be represented by a valid Component.
 *   
 *
 * @param {Handlebars}
 * @param {string} namespace
 * @param {string} dir - absolute path to the directory
 * @return {void}
 */
function register_subdirectories_as_templates
  ( handlebars
  , namespace
  , dir
  ) {
    get_directory_tree(dir)
      .children
      .filter(is_directory_node)
      .map(dir_tree_node_to_component_descriptor)
      .forEach
         ( desc =>
             register_component_template(handlebars, namespace, desc)
         )
  }



/**
 * Produce the name to be used as the given pages handlebars partial
 * name.
 *
 *
 * @param {Page} pageDesc
 * @return {string}
 */
function page_template_name
  ( pageDesc
  ) {
    return 'page/' + ProjectDesc.Page.get_id(pageDesc)
  }



/**
 * Register all templates for the given page descriptor.
 *
 * @param {ProjectDesc.Page.Model} pageDesc
 * @param {Handlebars}
 * @return {void}
 */
function register_page_templates
  ( handlebars
  , pageDesc
  ) {
    const mainTemplatePath
      = ProjectDesc.Page.get_markupFile(pageDesc)
    const mainTemplateName = page_template_name(pageDesc)


    register_file_as_handlebars_partial
      ( handlebars
      , mainTemplatePath
      , mainTemplateName
      )


    const componentDir = ProjectDesc.Page.get_componentDir(pageDesc)

    register_subdirectories_as_templates
      ( handlebars
      , mainTemplateName
      , componentDir
      )
  }



/**
 * Produce true if the given directory tree node represents an html file.
 *
 * @param {DirTree} dirTree
 * @param {boolean}
 */
function is_html_file_node
  ( dirTree
  ) {
    return is_file_node(dirTree) && dirTree.extension === '.html'
  }



/**
 * Recursively register all templates in the given directory tree.
 *
 * @param {Handlebars} handlebars
 * @param {string} rootDir - the absolute path to the directory
 *   where the recursion started.
 * @param {string} napmespace - 
 * @param {DirTree} dirTree -
 */
function recursively_register_templates_in_directory_tree
  ( handlebars
  , rootDir
  , namespace
  , dirTree
  ) {
    if( !is_directory_node(dirTree) && !is_html_file_node(dirTree) ) {
      return null
    }


    if( is_directory_node(dirTree) ) {
      return (
        dirTree.children.forEach
          ( childNode => (
              recursively_register_templates_in_directory_tree
                ( handlebars
                , rootDir
                , namespace
                , childNode
                )
            )
          )
      )
    }


    const templatePath = dirTree.path

    const templateName
      = templatePath
          .replace(rootDir, '')
          .split(path.sep)
          .join('/')

    const namespacedTemplateName = namespace + '/' + templateName


    return (
      register_file_as_handlebars_partial
        ( handlebars
        , templatePath
        , namespacedTemplateName
        )
    )
  }



/**
 * Register all templates in the projects global library directory.
 *
 * @param {ProjectDesc} projectDesc
 * @param {Handlebars}
 * @return {void}
 */
function register_global_templates
  ( handlebars
  , projectDesc
  ) {
    const templatesDir
      = ProjectDesc.Lib.get_templateDir
          ( ProjectDesc.Src.get_lib
              ( ProjectDesc.get_src(projectDesc)
              )
          )

    const globalTemplatesNamespace = 'lib'
    const rootDirTree = get_directory_tree(templatesDir)


    recursively_register_templates_in_directory_tree
      ( handlebars
      , templatesDir
      , globalTemplatesNamespace
      , rootDirTree
      )
  }



/**
 * Register the following templates:
 *   - "<project root>/src/lib/template/*.template.html",
 *   - "<project root>/src/component/<*>/index.template.html"
 *   - "<project root>/src/page/<*>/index.template.html"
 *   - "<project root>/src/page/<*>/component/<*>/index.template.html"
 *
 * @param {Handlebars} handlebars
 * @param {ProjectDesc} projectDesc
 * @return {void}
 */
function register_project_templates
  ( handlebars
  , projectDesc
  ) {
    register_global_templates
      ( handlebars
      , projectDesc
      )

    const srcDesc = ProjectDesc.get_src(projectDesc)
    const pages = ProjectDesc.Src.get_pages(srcDesc)

    pages.forEach
      ( pageDesc =>
          register_page_templates
            ( handlebars
            , pageDesc
            )
      )


    const componentsDir = ProjectDesc.Src.get_componentDir(srcDesc)
    const namespace = 'component'

    register_subdirectories_as_templates
      ( handlebars
      , namespace
      , componentsDir
      )
  }



module.exports
  = { register_project_templates
    , page_template_name
    }
