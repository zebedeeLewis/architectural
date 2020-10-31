import type * as Webpack from "webpack"
import * as HtmlWebpackPlugin from "html-webpack-plugin"



type TapCallback =
  ( arg0: string
  , arg1: (compilation: Webpack.compilation.Compilation) => void
  ) => void



interface WebpackAsset
  { name   : string
  , source : (...args : any) => any
  }



interface AssetTagGroup
  { headTags   : Array<HtmlWebpackPlugin.HtmlTagObject>
  , bodyTags   : Array<HtmlWebpackPlugin.HtmlTagObject>
  , outputName : string
  , plugin     : HtmlWebpackPlugin
  }



function is_string
  ( x: any
  ) : x is string {
    return typeof x === "string";
  }



function get_asset_name_from_tag
  ( publicPath : string
  , tag        : HtmlWebpackPlugin.HtmlTagObject
  ) : string {
    return (
      is_css(tag) && is_string(tag.attributes.href)
        ? tag.attributes.href.replace(publicPath, '') :

      is_js(tag) && is_string(tag.attributes.src)
        ? tag.attributes.src.replace(publicPath, '')
        : ''
    )
  }



function is_selected_asset
  ( selectedAssetNames : Array<RegExp>
  , assetName          : string
  ) : boolean {
    return (
      selectedAssetNames.some
        ( ( targetRegex ) => assetName.match(targetRegex)
        )
    )
  }



function is_js
  ( tag : HtmlWebpackPlugin.HtmlTagObject
  ) : boolean {
    return tag.tagName === 'script'
  }



function is_css
  ( tag : HtmlWebpackPlugin.HtmlTagObject
  ) : boolean {
    return (
       ( tag.tagName === 'link' )
      && is_string(tag.attributes.rel)
      && tag.attributes.rel === 'stylesheet'
    )
  }



function is_external_script_tag
  ( tag : HtmlWebpackPlugin.HtmlTagObject
  ) : boolean {
    return (
         is_js(tag)
      && tag.attributes
      && tag.attributes.src
        ? true
        : false
    )
  }



function is_external_style_tag
  ( tag : HtmlWebpackPlugin.HtmlTagObject
  ) : boolean {
    return (
         is_css(tag)
      && tag.attributes
      && tag.attributes.href
        ? true
        : false
    )
  }



function add_trailing_forward_slash
  ( path : string
  ) : string {
    return (
      path && !path.endsWith('/')
        ? path + '/'
        : path
    )
  }



function inline_selected_tag
  ( publicPath         : string
  , assets             : { [assetName : string] : WebpackAsset }
  , tag                : HtmlWebpackPlugin.HtmlTagObject
  , selectedAssetNames : Array<RegExp>
  ) : HtmlWebpackPlugin.HtmlTagObject {
    const assetName = get_asset_name_from_tag( publicPath, tag)
    const asset = assets[ assetName ]

    if(  !asset
      || !is_selected_asset(selectedAssetNames, assetName)
      ) {
        return tag
      }

    return (
      is_external_style_tag(tag)
        ? inline_style_tag(asset, assetName, tag)
        : inline_script_tag(asset, assetName, tag)
    )
  }



function inline_style_tag
  ( asset      : WebpackAsset
  , assetName  : string
  , tag        : HtmlWebpackPlugin.HtmlTagObject
  ) : HtmlWebpackPlugin.HtmlTagObject {

    const attributes = 
      { ... tag.attributes
      , href : false
      }

    return (
      { tagName    : 'style'
      , attributes : attributes
      , innerHTML  : asset.source()
      , voidTag    : false
      }
    )
  }



function inline_script_tag
  ( asset      : WebpackAsset
  , assetName  : string
  , tag        : HtmlWebpackPlugin.HtmlTagObject
  ) : HtmlWebpackPlugin.HtmlTagObject {

    const attributes = 
      { ... tag.attributes
      , src : false
      }

    return (
      { tagName    : 'script'
      , attributes : attributes
      , innerHTML  : asset.source()
      , voidTag    : false
      }
    )
  }



class InlineChunksPlugin {
    constructor
      ( private htmlWebpackPlugin  : any
      , private selectedAssetNames : Array<RegExp>
      ) { }


    apply
      ( compiler: Webpack.Compiler
      ) {

        const publicPath = 
          add_trailing_forward_slash
            ( compiler.options.output.publicPath || ''
            )

        const compilation_hook_action =
          ( compilation: Webpack.compilation.Compilation
          ) => {
            const to_inlined_selected_tag =
              ( tag: any
              ) => (
                inline_selected_tag
                  ( publicPath
                  , compilation.assets
                  , tag
                  , this.selectedAssetNames
                  )
              )

            const alter_asset_tags =
              ( assets : AssetTagGroup
              ) => {
                assets.headTags =
                  assets.headTags.map(to_inlined_selected_tag)
                assets.bodyTags =
                  assets.bodyTags.map(to_inlined_selected_tag)
              }

            const hooks = this.htmlWebpackPlugin.getHooks(compilation);

            hooks.alterAssetTagGroups.tap
              ( 'InlineChunksPlugin'
              , alter_asset_tags
              )
          }

        compiler.hooks.compilation.tap
          ( 'InlineChunksPlugin'
          , compilation_hook_action
          )
    }
}



module.exports = InlineChunksPlugin;
