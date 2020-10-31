"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function is_string(x) {
    return typeof x === "string";
}
function get_asset_name_from_tag(publicPath, tag) {
    return (is_css(tag) && is_string(tag.attributes.href)
        ? tag.attributes.href.replace(publicPath, '') :
        is_js(tag) && is_string(tag.attributes.src)
            ? tag.attributes.src.replace(publicPath, '')
            : '');
}
function is_selected_asset(selectedAssetNames, assetName) {
    return (selectedAssetNames.some(function (targetRegex) { return assetName.match(targetRegex); }));
}
function is_js(tag) {
    return tag.tagName === 'script';
}
function is_css(tag) {
    return ((tag.tagName === 'link')
        && is_string(tag.attributes.rel)
        && tag.attributes.rel === 'stylesheet');
}
function is_external_script_tag(tag) {
    return (is_js(tag)
        && tag.attributes
        && tag.attributes.src
        ? true
        : false);
}
function is_external_style_tag(tag) {
    return (is_css(tag)
        && tag.attributes
        && tag.attributes.href
        ? true
        : false);
}
function add_trailing_forward_slash(path) {
    return (path && !path.endsWith('/')
        ? path + '/'
        : path);
}
function inline_selected_tag(publicPath, assets, tag, selectedAssetNames) {
    var assetName = get_asset_name_from_tag(publicPath, tag);
    var asset = assets[assetName];
    debugger;
    if (!asset
        || !is_selected_asset(selectedAssetNames, assetName)) {
        return tag;
    }
    return (is_external_style_tag(tag)
        ? inline_style_tag(asset, assetName, tag)
        : inline_script_tag(asset, assetName, tag));
}
function inline_style_tag(asset, assetName, tag) {
    var attributes = __assign(__assign({}, tag.attributes), { href: false });
    return ({ tagName: 'style',
        attributes: attributes,
        innerHTML: asset.source(),
        voidTag: false // tag.voidTag 
    });
}
function inline_script_tag(asset, assetName, tag) {
    var attributes = __assign(__assign({}, tag.attributes), { src: false });
    return ({ tagName: 'script',
        attributes: attributes,
        innerHTML: asset.source(),
        voidTag: false // tag.voidTag 
    });
}
var InlineChunksPlugin = /** @class */ (function () {
    function InlineChunksPlugin(htmlWebpackPlugin, selectedAssetNames) {
        this.htmlWebpackPlugin = htmlWebpackPlugin;
        this.selectedAssetNames = selectedAssetNames;
    }
    InlineChunksPlugin.prototype.apply = function (compiler) {
        var _this = this;
        var publicPath = add_trailing_forward_slash(compiler.options.output.publicPath || '');
        var compilation_hook_action = function (compilation) {
            var to_inlined_selected_tag = function (tag) { return (inline_selected_tag(publicPath, compilation.assets, tag, _this.selectedAssetNames)); };
            var alter_asset_tags = function (assets) {
                assets.headTags =
                    assets.headTags.map(to_inlined_selected_tag);
                assets.bodyTags =
                    assets.bodyTags.map(to_inlined_selected_tag);
            };
            var hooks = _this.htmlWebpackPlugin.getHooks(compilation);
            hooks.alterAssetTagGroups.tap('InlineChunksPlugin', alter_asset_tags);
        };
        compiler.hooks.compilation.tap('InlineChunksPlugin', compilation_hook_action);
    };
    return InlineChunksPlugin;
}());
module.exports = InlineChunksPlugin;
