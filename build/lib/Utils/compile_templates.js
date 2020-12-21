const LoaderUtils = require('loader-utils')


function compile_templates
  ( { content
    , context 
    , handlebars
    }
  ) {
    const queryOptions = LoaderUtils.parseQuery(this.resourceQuery)


    const title
      =  queryOptions.title
      || (context && context.title ? context.title : 'No Title')

    const nameOfContentPartial
      =  queryOptions.nameOfContentPartial
      || ( context && context.nameOfContentPartial
             ? context.nameOfContentPartial
             : 'NoContent'
         )


    const appliedContext = {title, nameOfContentPartial}


    let result
    try {
      result = handlebars.compile(content)(appliedContext)
    } catch (e) {
      this.emitError(e)
  
      return content
    }
  

    return result
  }



module.exports = compile_templates
