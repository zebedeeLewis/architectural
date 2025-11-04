const LoaderUtils = require('loader-utils')

/**
 * Compiles a Handlebars template using provided content and a context object.
 * This function is designed to be called using `.call(loaderContext, ...)`
 * from a Webpack loader to allow access to Webpack's utility methods (like
 * emitError).
 *
 * @param {object} options
 * @param {string} options.content - The raw Handlebars template content (HTML
 *   string) to compile.
 * @param {object | undefined} [options.context] - Additional context object for
 *   template data.
 * @param {object} options.handlebars - The configured Handlebars instance with
 *   registered partials and helpers.
 * @return {string} The fully rendered HTML string, or the original content on
 * error.
 */
function templateCompiler
  ( { content
    , context
    , handlebars
    }
  ) {
    // Parse the query parameters from the Webpack resource path (e.g.
    // '?title=Home'). 'this' refers to the Webpack loader context when this
    // function is called via .call().
    const queryOptions = LoaderUtils.parseQuery(this.resourceQuery)

    // Determine the 'title' context variable. Prioritize the query string, then
    // the passed context object, and fall back to a default if neither is
    // provided.
    const title
      =  queryOptions.title
      || (context && context.title ? context.title : 'No Title')

    // Determines the 'nameOfContentPartial' context variable. This is used to
    // tell the main layout template which body partial to render. Prioritize
    // the query string, then the passed context, and fall back to a default.
    const nameOfContentPartial
      =  queryOptions.nameOfContentPartial
      || ( context && context.nameOfContentPartial
            ? context.nameOfContentPartial
            : 'NoContent'
          )

    // Consolidate the derived context variables that will be passed to the
    // Handlebars compilation.
    const appliedContext = {title, nameOfContentPartial}

    let result
    try {
      // 1. Compile the raw template content into a reusable Handlebars template
      //    function.
      // 2. Execute the compiled function immediately, passing the applied context
      //    data, and store the resulting HTML string in 'result'.
      result = handlebars.compile(content)(appliedContext)
    } catch (e) {
      // If Handlebars compilation or execution fails (e.g., missing helper/partial),
      // emit an error via the Webpack loader context.
      this.emitError(e)

      // Return the original, uncompiled content to prevent Webpack from crashing,
      // allowing the build process to continue while logging the error.
      return content
    }

    // Return the successfully compiled and rendered HTML.
    return result
  }

module.exports = templateCompiler
