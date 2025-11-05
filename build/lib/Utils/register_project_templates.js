const get_directory_tree = require('directory-tree')
const path = require('path')
const fs = require('fs')
const ProjectDesc = require('../ProjectDesc')

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

    handlebars.registerPartial
      ( { [templateName]: fs.readFileSync(templatePath, 'utf8')
        }
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
    const dirTree = get_directory_tree(dir, {attributes: ['type']})
    if( !dirTree ) { return }

    dirTree
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

    handlebars.registerPartial(
      { [mainTemplateName]: fs.readFileSync(mainTemplatePath, 'utf8') })

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
 * Recursively traverses a directory tree structure and registers all valid
 * HTML template files as Handlebars partials.
 *
 * @param {Handlebars} handlebars - The Handlebars instance to register partials with.
 * @param {string} rootDir - The absolute path to the directory where the
 *   recursion starts (e.g., /path/to/src/lib/template). This is used to calculate
 *   the partial's relative name.
 * @param {string} namespace - The prefix for the partial name (e.g. 'lib',
 *   'component', 'page/home/component').
 * @param {DirTree} dirTree - The directory tree node (from directory-tree)
 *   currently being processed.
 */
function recursivelyRegisterTemplates
  ( handlebars
  , rootDir
  , namespace
  , dirTree
  ) {
    // If the node is not a directory AND not an HTML file, ignore it.
    if( !is_directory_node(dirTree) && !is_html_file_node(dirTree) ) {
      return null
    }

    // If the node is a directory, iterate over its children and call this
    // function recursively for each child.
    if( is_directory_node(dirTree) ) {
      return (
        dirTree.children.forEach
          ( childNode => (
              recursivelyRegisterTemplatesInDirectoryTree
                ( handlebars
                , rootDir
                , namespace
                , childNode
                )
            )
          )
      )
    }

    // At this point, the node is a valid HTML file.
    const templatePath = dirTree.path

    // Create a relative template name by removing the root directory path
    // and normalizing path separators from OS-specific (e.g., '\') to URL-safe
    // ('/').
    // Example:
    //   templatePath: /path/to/src/lib/template/header.template.html
    //   rootDir:      /path/to/src/lib/template
    //   templateName: /header.template.html
    const templateName
      = templatePath
          .replace(rootDir, '')
          .split(path.sep) // Convert '\' to '/'
          .join('/')

    // Combine the namespace and the relative template name.
    // Example: 'lib' + '/' + '/header.template.html' -> 'lib/header.template.html'
    // Note: The logic seems to result in a double slash if rootDir == templatePath,
    // but typically templateName starts with a '/'.
    const namespacedTemplateName = namespace + templateName


    // Register the file content as a Handlebars partial using the
    // namespaced name, so it can be called via {{> lib/header }}
    return handlebars.registerPartial(
      { [namespacedTemplateName]: fs.readFileSync(templatePath, 'utf8') })
  }

/**
 * Register all templates in the projects global library directory.
 * These templates are typically generic components (partials) available to all
 * pages.
 *
 * @param {Handlebars} handlebars - The configured Handlebars instance where
 *   templates will be registered.
 * @param {ProjectDesc} projectDesc - The Project Descriptor object, used to
 *   locate directories.
 * @return {void}
 */
function registerGlobalTemplates
  ( handlebars
  , projectDesc
  ) {
    // Determine the path to the global templates directory
    // (e.g. /src/lib/template).
    const templatesDir
      = ProjectDesc.Lib.get_templateDir(
        ProjectDesc.Src.get_lib(ProjectDesc.get_src(projectDesc)) )

    // Define the namespace under which these templates will be registered
    // (e.g. 'lib/templateName').
    const globalTemplatesNamespace = 'lib'

    // Recursively traverse the directory tree and register each template file found.
    const rootDirTree = get_directory_tree(templatesDir)
    recursivelyRegisterTemplates
      ( handlebars
      , templatesDir
      , globalTemplatesNamespace
      , rootDirTree
      )
  }

/**
 * Register all files withing the project matching the following globs as
 * handlebars template:
 *  - "<project root>/src/lib/template/*.template.html",
 *  - "<project root>/src/component/<*>/index.template.html"
 *  - "<project root>/src/page/<*>/index.template.html"
 *  - "<project root>/src/page/<*>/component/<*>/index.template.html"
 *
 * @param {Handlebars} handlebars - The Handlebars instance to register
 *   templates/partials with.
 * @param {ProjectDesc} projectDesc - The ProjectDesc object containing source
 *   path information.
 * @return {void}
 */
function registerProjectTemplates
  ( handlebars
  , projectDesc
  ) {
    // Register global, shared, or generic templates (e.g., those in
    // src/lib/template/).
    // This function likely handles files that are directly under a known template path.
    registerGlobalTemplates
      ( handlebars
      , projectDesc
      )

    // Retrieve a list of all defined web pages in the project.
    const srcDesc = ProjectDesc.get_src(projectDesc)
    const pages = ProjectDesc.Src.get_pages(srcDesc)

    // Register templates specific to each page. Handles page-level components
    // (i.e. page/<page name>/component/<component name>/index.template.html),
    // and the main page template. (e.i., page/<page name>/index.template.html).
    pages.forEach(pageDesc => register_page_templates(handlebars, pageDesc))

    // Define the namespace for components ('component'), to be used when
    // referencing them in handlebars files. e.g., {{> component/header}}
    const namespace = 'component'

    // Register all subdirectories within the componentsDir as templates allowing
    // all individual component folders to have their templates registered as
    // partials.
    const componentsDir = ProjectDesc.Src.get_componentDir(srcDesc)
    register_subdirectories_as_templates
      ( handlebars
      , namespace
      , componentsDir
      )
  }

module.exports
  = { registerProjectTemplates
    , page_template_name
    }
