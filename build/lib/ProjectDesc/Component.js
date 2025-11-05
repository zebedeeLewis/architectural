/**
 * @fileoverview Component Descriptor Model.
 *
 * This module defines the structure and provides utility functions (accessors)
 * for a Component Descriptor object. These descriptors represent an individual
 * reusable UI component (e.g., Header, Button) and map its root path,
 * and associated asset file paths (template, script, style). All relative paths
 * are relative to the "root path".
 *
 * --- Component Directory Structure (Required) ---
 * Components must follow a strict file convention on disk to be discovered:
 *
 * /<project root>/src/component/
 *   └── button/                <-- Component Root Directory (ID is 'button')
 *     ├── index.template.html  <-- Component Template (Markup)
 *     ├── index.js             <-- Component Logic (Script)
 *     ├── index.scss           <-- Component Styles (Style)
 *     ├── subcomponent1/       <-- Components Can have subcomponents
 *     └── subcomponent2/
 *
 * --- Component Descriptor (`ComponentDesc`) Model Definition ---
 * @typedef {object} ComponentDesc
 * 
 * @property {string} root - Absolute path to the component's root directory (e.g.
 * '/project/src/component/button').
 *
 * @property {string} markupFile - relative path to the component's template
 * file defaults to index.template.html.
 *
 * @property {string} script - relative path to the component's JavaScript file
 * defaults to index.js.
 *
 * @property {string} styleSheet - relative path to the component's stylesheet
 * file. defaults to index.scss.
 *
 * --- Example Descriptor Object ---
 * {
 * id: 'button',
 * path: '/src/component/button',
 * markupFile: '/src/component/button/index.template.html',
 * scriptFile: '/src/component/button/index.js',
 * styleFile: '/src/component/button/index.scss',
 * }
 */

const path = require('path')

/**
 * Produce a new ComponentDesc object.
 *
 * @param {string} absolutePathToRoot -
 * @return {Model}
 */

/**
 * Creates a new, immutable component descriptor object.
 *
 * @param {string} absolutePathToRoot - The absolute path to the component's root
 * directory.
 * @returns {ComponentDesc} A Component Descriptor object.
 */
exports.create
  = ( absolutePathToRoot
    ) => (
      { root: absolutePathToRoot
      , styleSheet: 'index.scss'
      , script: 'index.js'
      , markupFile: 'index.template.html'
      , testDir: '__test__/'
      }
    )

exports.getRoot
  = componentDesc => componentDesc.root

exports.getStylesheet
  = componentSrc =>
    path.join(componentSrc.root, componentSrc.styleSheet)

exports.getScript
  = componentSrc =>
    path.join(componentSrc.root, componentSrc.script)

exports.getMarkupFile
  = componentSrc =>
    path.join(componentSrc.root, componentSrc.markupFile)

exports.getTestDir
  = componentSrc =>
    path.join(componentSrc.root, componentSrc.testDir)
