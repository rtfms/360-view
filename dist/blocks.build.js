/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    BlockControls = _wp$blockEditor.BlockControls,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,\n    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,\n    MediaReplaceFlow = _wp$blockEditor.MediaReplaceFlow;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl,\n    RangeControl = _wp$components.RangeControl,\n    SelectControl = _wp$components.SelectControl,\n    ColorPicker = _wp$components.ColorPicker,\n    TextareaControl = _wp$components.TextareaControl,\n    withNotices = _wp$components.withNotices,\n    FocusableIframe = _wp$components.FocusableIframe;\nvar Fragment = wp.element.Fragment;\n\n\nvar locks = [];\n\n/**\n * Prevents the page from being saved when the block parameters are incorrect\n * @param lockId - a unique lock id (unique for each type of error)\n * @param message - the message to show the user when the update is locked or null/false if there is nothing to lock\n */\nfunction lockUpdate(lockId, message) {\n\tif (!!message) {\n\t\tif (!locks[lockId]) {\n\t\t\tlocks[lockId] = true;\n\t\t\twp.data.dispatch('core/editor').lockPostSaving(lockId);\n\t\t\twp.data.dispatch('core/notices').createNotice('error', message, { id: lockId, isDismissible: false, icon: 'admin-site-alt3' });\n\t\t}\n\t} else if (locks[lockId]) {\n\t\tlocks[lockId] = false;\n\t\twp.data.dispatch('core/notices').removeNotice(lockId);\n\t\twp.data.dispatch('core/editor').unlockPostSaving(lockId);\n\t}\n}\n\n/**\n * List of regular expressions used in 360-view-attributes.json\n * @type {{cssDimensionRegex: RegExp, threeNumbersRegex: RegExp, twoNumbersRegex: RegExp}}\n */\nvar attributeValidationRegexps = {\n\tcssDimensionRegex: /^\\-?(\\d*\\.?\\d+)\\s?(px|em|ex|%|in|cn|mm|pt|pc+)$/i,\n\tthreeNumbersRegex: /^\\-?\\d+(\\.\\d+)?\\s+\\-?\\d+(\\.\\d+)?\\s+\\-?\\d+(\\.\\d+)?$/i,\n\ttwoNumbersRegex: /^\\-?\\d+(\\.\\d+)?\\s+\\-?\\d+(\\.\\d+)?$/i,\n\tfourNumbersCss: /^([ ]*((-*\\d+(px|em|%|cm|in|pc|pt|mm|ex)|auto|0|inherit)[ ]*)(!important)*){1,4}$/i\n};\n\n/**\n * List of types used in 360-view-attributes.json\n * @type {{TextControl: string, SelectControl: string, TextareaControl: string, ColorPicker: string, RangeControl: string}}\n */\nvar attributeControlTypes = {\n\tTextControl: TextControl,\n\tRangeControl: RangeControl,\n\tSelectControl: SelectControl,\n\tColorPicker: ColorPicker,\n\tTextareaControl: TextareaControl\n};\n\n// NOTE: am360ViewAttributesTree is passed from PHP\nvar am360ViewAttributes = {}; // flattened version of the attributes tree\nfor (var groupName in am360ViewAttributesTree) {\n\tfor (var fieldName in am360ViewAttributesTree[groupName].items) {\n\t\tam360ViewAttributes[fieldName] = am360ViewAttributesTree[groupName].items[fieldName];\n\t}\n}\n\nfunction get360ViewBlockIframe(props) {\n\tvar extraClass = '';\n\tif (props.attributes.align === 'wide') {\n\t\textraClass = ' alignwide';\n\t}\n\tvar frameAttributes = {\n\t\tonFocus: function onFocus(e) {\n\t\t\te.target.parentElement.parentElement.focus();\n\t\t},\n\t\tclass: 'am360view',\n\t\tsrc: 'about:blank',\n\t\tstyle: {\n\t\t\tborder: '0',\n\t\t\twidth: props.attributes.width,\n\t\t\theight: props.attributes.height,\n\t\t\tmargin: '0 auto'\n\t\t}\n\t};\n\tfor (var k in am360ViewAttributes) {\n\t\tframeAttributes['data-' + k] = props.attributes[k];\n\t}\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{\n\t\t\t'class': 'am360view-wrapper wp-block' + extraClass,\n\t\t\t'data-align': props.attributes.align,\n\t\t\tstyle: { height: props.attributes.height, width: props.attributes.width, margin: props.attributes.margin }\n\t\t},\n\t\tReact.createElement(FocusableIframe, frameAttributes)\n\t);\n};\n\nfunction getShortcodeEquivalent(attrs) {\n\treturn '[360 ' + _.map(_(attrs).omit(['media-id', 'base', 'block-id']), function (v, k) {\n\t\treturn k + '=\"' + v + '\"';\n\t}).join(' ') + ']';\n}\n\nregisterBlockType('am360view/advanced', {\n\ttitle: __('360 View'),\n\tdescription: __('Embed any 360-degree panoramic photos and videos'),\n\tcategory: 'embed',\n\ticon: 'admin-site-alt3',\n\tkeywords: [__('360'), __('panorama'), __('photo'), __('video'), __('360 view'), __('sphere'), __('VR'), __('AR')],\n\tattributes: am360ViewAttributes,\n\t// NOTE: align is intentionally set to false because there are just way too many bugs in Gutenberg dynamic blocks,\n\t// for instance see https://github.com/WordPress/gutenberg/issues/25088, https://github.com/WordPress/gutenberg/issues/8383\n\tsupports: {\n\t\talign: false,\n\t\tmultiple: true,\n\t\tanchor: true\n\t},\n\tedit: withNotices(function (props) {\n\t\tam360view_updateView(props.attributes['block-id'], props.attributes);\n\t\tvar setAttributes = props.setAttributes,\n\t\t    noticeOperations = props.noticeOperations,\n\t\t    noticeUI = props.noticeUI;\n\n\t\tvar ALLOWED_MEDIA_TYPES = ['video', 'image'];\n\t\tsetAttributes({ base: cgbGlobal.pluginDirUrl });\n\t\tif (!props.attributes['block-id']) {\n\t\t\tsetAttributes({ 'block-id': 'am360view_' + _.random(100000, 999999) });\n\t\t}\n\t\tvar onSelectMedia = function onSelectMedia(media) {\n\t\t\tif (!media || !media.url) {\n\t\t\t\tsetAttributes({ src: undefined, 'media-id': undefined });\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tsetAttributes({ src: media.url, 'media-id': media.id });\n\t\t};\n\t\tvar onSelectURL = function onSelectURL(newURL) {\n\t\t\tif (newURL !== url) {\n\t\t\t\tsetAttributes({ src: newURL, 'media-id': undefined });\n\t\t\t}\n\t\t};\n\t\tvar onUploadError = function onUploadError(message) {\n\t\t\tnoticeOperations.removeAllNotices();\n\t\t\tnoticeOperations.createErrorNotice(message);\n\t\t};\n\t\tvar updateAlign = function updateAlign(nextAlign) {\n\t\t\tif (nextAlign === 'full' || nextAlign === 'wide') {\n\t\t\t\tprops.attributes.width = '100%';\n\t\t\t}\n\t\t\tif (nextAlign === 'center' || nextAlign === 'wide' || nextAlign === 'full') {\n\t\t\t\tprops.attributes.margin = '0 auto';\n\t\t\t}\n\t\t\tsetAttributes({ align: nextAlign });\n\t\t};\n\n\t\tvar updateAttributes = function updateAttributes(attributes) {\n\t\t\tsetAttributes(attributes);\n\t\t\t_.each(attributes, function (val, name) {\n\t\t\t\tif (am360ViewAttributes[name] && am360ViewAttributes[name].validationRegexName && am360ViewAttributes[name].validationErrorMessage) {\n\t\t\t\t\tvar error = val.match(attributeValidationRegexps[am360ViewAttributes[name].validationRegexName]) ? false : am360ViewAttributes[name].validationErrorMessage;\n\t\t\t\t\tlockUpdate(name, error);\n\t\t\t\t}\n\t\t\t});\n\t\t\tam360view_updateView(props.attributes['block-id'], props.attributes);\n\t\t};\n\n\t\tvar blockControls = wp.element.createElement(\n\t\t\tBlockControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(BlockAlignmentToolbar, {\n\t\t\t\tvalue: props.attributes.align,\n\t\t\t\tonChange: updateAlign,\n\t\t\t\tisCollapsed: false\n\t\t\t}),\n\t\t\twp.element.createElement(MediaReplaceFlow, {\n\t\t\t\tmediaId: props.attributes['media-id'],\n\t\t\t\tmediaURL: props.attributes.src,\n\t\t\t\tclassName: props.attributes.className,\n\t\t\t\tallowedTypes: ['video', 'image'],\n\t\t\t\taccept: 'video/*, image/*',\n\t\t\t\tonSelect: onSelectMedia,\n\t\t\t\tonSelectURL: onSelectURL,\n\t\t\t\tonError: onUploadError\n\t\t\t})\n\t\t);\n\t\tvar inspectorControls = wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\tObject.keys(am360ViewAttributesTree).map(function (groupKey) {\n\t\t\t\tvar groupItems = Object.keys(am360ViewAttributesTree[groupKey].items).map(function (key) {\n\t\t\t\t\tvar val = am360ViewAttributesTree[groupKey].items[key];\n\t\t\t\t\tif (val.showInSidebar) {\n\t\t\t\t\t\tvar options = {\n\t\t\t\t\t\t\ttype: val.type,\n\t\t\t\t\t\t\tlabel: __(val.label),\n\t\t\t\t\t\t\tvalue: props.attributes[key] !== undefined ? props.attributes[key] : val.default,\n\t\t\t\t\t\t\tplaceholder: val.default,\n\t\t\t\t\t\t\tonChange: function onChange(newValue) {\n\t\t\t\t\t\t\t\treturn updateAttributes(_defineProperty({}, key, newValue));\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\thelp: val.help\n\t\t\t\t\t\t};\n\t\t\t\t\t\tif (val.controlProperties) {\n\t\t\t\t\t\t\t_.extend(options, val.controlProperties);\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn React.createElement(attributeControlTypes[val.control], options);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\treturn React.createElement(PanelBody, {\n\t\t\t\t\ttitle: __(am360ViewAttributesTree[groupKey].title),\n\t\t\t\t\tinitialOpen: am360ViewAttributesTree[groupKey].initialOpen === true\n\t\t\t\t}, groupItems);\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{\n\t\t\t\t\ttitle: 'Shortcode Equivalent',\n\t\t\t\t\tinitialOpen: false\n\t\t\t\t},\n\t\t\t\twp.element.createElement(TextareaControl, {\n\t\t\t\t\trows: '14',\n\t\t\t\t\treadonly: true,\n\t\t\t\t\tvalue: getShortcodeEquivalent(props.attributes)\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t\tvar preview = props.attributes.src ? get360ViewBlockIframe(props) : wp.element.createElement(MediaPlaceholder, {\n\t\t\ticon: 'embed-photo',\n\t\t\tlabels: {\n\t\t\t\ttitle: __('360 Photo or Video'),\n\t\t\t\tinstructions: __('Drag and drop, enter URL or choose media library 360 degree photo or video.')\n\t\t\t},\n\t\t\tonSelect: onSelectMedia,\n\t\t\tonSelectURL: onSelectURL,\n\t\t\taccept: 'video/*, image/*',\n\t\t\tallowedTypes: ALLOWED_MEDIA_TYPES,\n\t\t\tnotices: noticeUI,\n\t\t\tonError: noticeOperations.createErrorNotice\n\t\t});\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\tblockControls,\n\t\t\tinspectorControls,\n\t\t\tpreview\n\t\t);\n\t})\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGJsb2NrRWRpdG9yID0gd3AuYmxvY2tFZGl0b3IsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRibG9ja0VkaXRvci5CbG9ja0NvbnRyb2xzLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGJsb2NrRWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIEJsb2NrQWxpZ25tZW50VG9vbGJhciA9IF93cCRibG9ja0VkaXRvci5CbG9ja0FsaWdubWVudFRvb2xiYXIsXG4gICAgTWVkaWFQbGFjZWhvbGRlciA9IF93cCRibG9ja0VkaXRvci5NZWRpYVBsYWNlaG9sZGVyLFxuICAgIE1lZGlhUmVwbGFjZUZsb3cgPSBfd3AkYmxvY2tFZGl0b3IuTWVkaWFSZXBsYWNlRmxvdztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2wsXG4gICAgUmFuZ2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuUmFuZ2VDb250cm9sLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sLFxuICAgIENvbG9yUGlja2VyID0gX3dwJGNvbXBvbmVudHMuQ29sb3JQaWNrZXIsXG4gICAgVGV4dGFyZWFDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dGFyZWFDb250cm9sLFxuICAgIHdpdGhOb3RpY2VzID0gX3dwJGNvbXBvbmVudHMud2l0aE5vdGljZXMsXG4gICAgRm9jdXNhYmxlSWZyYW1lID0gX3dwJGNvbXBvbmVudHMuRm9jdXNhYmxlSWZyYW1lO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcblxuXG52YXIgbG9ja3MgPSBbXTtcblxuLyoqXG4gKiBQcmV2ZW50cyB0aGUgcGFnZSBmcm9tIGJlaW5nIHNhdmVkIHdoZW4gdGhlIGJsb2NrIHBhcmFtZXRlcnMgYXJlIGluY29ycmVjdFxuICogQHBhcmFtIGxvY2tJZCAtIGEgdW5pcXVlIGxvY2sgaWQgKHVuaXF1ZSBmb3IgZWFjaCB0eXBlIG9mIGVycm9yKVxuICogQHBhcmFtIG1lc3NhZ2UgLSB0aGUgbWVzc2FnZSB0byBzaG93IHRoZSB1c2VyIHdoZW4gdGhlIHVwZGF0ZSBpcyBsb2NrZWQgb3IgbnVsbC9mYWxzZSBpZiB0aGVyZSBpcyBub3RoaW5nIHRvIGxvY2tcbiAqL1xuZnVuY3Rpb24gbG9ja1VwZGF0ZShsb2NrSWQsIG1lc3NhZ2UpIHtcblx0aWYgKCEhbWVzc2FnZSkge1xuXHRcdGlmICghbG9ja3NbbG9ja0lkXSkge1xuXHRcdFx0bG9ja3NbbG9ja0lkXSA9IHRydWU7XG5cdFx0XHR3cC5kYXRhLmRpc3BhdGNoKCdjb3JlL2VkaXRvcicpLmxvY2tQb3N0U2F2aW5nKGxvY2tJZCk7XG5cdFx0XHR3cC5kYXRhLmRpc3BhdGNoKCdjb3JlL25vdGljZXMnKS5jcmVhdGVOb3RpY2UoJ2Vycm9yJywgbWVzc2FnZSwgeyBpZDogbG9ja0lkLCBpc0Rpc21pc3NpYmxlOiBmYWxzZSwgaWNvbjogJ2FkbWluLXNpdGUtYWx0MycgfSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGxvY2tzW2xvY2tJZF0pIHtcblx0XHRsb2Nrc1tsb2NrSWRdID0gZmFsc2U7XG5cdFx0d3AuZGF0YS5kaXNwYXRjaCgnY29yZS9ub3RpY2VzJykucmVtb3ZlTm90aWNlKGxvY2tJZCk7XG5cdFx0d3AuZGF0YS5kaXNwYXRjaCgnY29yZS9lZGl0b3InKS51bmxvY2tQb3N0U2F2aW5nKGxvY2tJZCk7XG5cdH1cbn1cblxuLyoqXG4gKiBMaXN0IG9mIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdXNlZCBpbiAzNjAtdmlldy1hdHRyaWJ1dGVzLmpzb25cbiAqIEB0eXBlIHt7Y3NzRGltZW5zaW9uUmVnZXg6IFJlZ0V4cCwgdGhyZWVOdW1iZXJzUmVnZXg6IFJlZ0V4cCwgdHdvTnVtYmVyc1JlZ2V4OiBSZWdFeHB9fVxuICovXG52YXIgYXR0cmlidXRlVmFsaWRhdGlvblJlZ2V4cHMgPSB7XG5cdGNzc0RpbWVuc2lvblJlZ2V4OiAvXlxcLT8oXFxkKlxcLj9cXGQrKVxccz8ocHh8ZW18ZXh8JXxpbnxjbnxtbXxwdHxwYyspJC9pLFxuXHR0aHJlZU51bWJlcnNSZWdleDogL15cXC0/XFxkKyhcXC5cXGQrKT9cXHMrXFwtP1xcZCsoXFwuXFxkKyk/XFxzK1xcLT9cXGQrKFxcLlxcZCspPyQvaSxcblx0dHdvTnVtYmVyc1JlZ2V4OiAvXlxcLT9cXGQrKFxcLlxcZCspP1xccytcXC0/XFxkKyhcXC5cXGQrKT8kL2ksXG5cdGZvdXJOdW1iZXJzQ3NzOiAvXihbIF0qKCgtKlxcZCsocHh8ZW18JXxjbXxpbnxwY3xwdHxtbXxleCl8YXV0b3wwfGluaGVyaXQpWyBdKikoIWltcG9ydGFudCkqKXsxLDR9JC9pXG59O1xuXG4vKipcbiAqIExpc3Qgb2YgdHlwZXMgdXNlZCBpbiAzNjAtdmlldy1hdHRyaWJ1dGVzLmpzb25cbiAqIEB0eXBlIHt7VGV4dENvbnRyb2w6IHN0cmluZywgU2VsZWN0Q29udHJvbDogc3RyaW5nLCBUZXh0YXJlYUNvbnRyb2w6IHN0cmluZywgQ29sb3JQaWNrZXI6IHN0cmluZywgUmFuZ2VDb250cm9sOiBzdHJpbmd9fVxuICovXG52YXIgYXR0cmlidXRlQ29udHJvbFR5cGVzID0ge1xuXHRUZXh0Q29udHJvbDogVGV4dENvbnRyb2wsXG5cdFJhbmdlQ29udHJvbDogUmFuZ2VDb250cm9sLFxuXHRTZWxlY3RDb250cm9sOiBTZWxlY3RDb250cm9sLFxuXHRDb2xvclBpY2tlcjogQ29sb3JQaWNrZXIsXG5cdFRleHRhcmVhQ29udHJvbDogVGV4dGFyZWFDb250cm9sXG59O1xuXG4vLyBOT1RFOiBhbTM2MFZpZXdBdHRyaWJ1dGVzVHJlZSBpcyBwYXNzZWQgZnJvbSBQSFBcbnZhciBhbTM2MFZpZXdBdHRyaWJ1dGVzID0ge307IC8vIGZsYXR0ZW5lZCB2ZXJzaW9uIG9mIHRoZSBhdHRyaWJ1dGVzIHRyZWVcbmZvciAodmFyIGdyb3VwTmFtZSBpbiBhbTM2MFZpZXdBdHRyaWJ1dGVzVHJlZSkge1xuXHRmb3IgKHZhciBmaWVsZE5hbWUgaW4gYW0zNjBWaWV3QXR0cmlidXRlc1RyZWVbZ3JvdXBOYW1lXS5pdGVtcykge1xuXHRcdGFtMzYwVmlld0F0dHJpYnV0ZXNbZmllbGROYW1lXSA9IGFtMzYwVmlld0F0dHJpYnV0ZXNUcmVlW2dyb3VwTmFtZV0uaXRlbXNbZmllbGROYW1lXTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXQzNjBWaWV3QmxvY2tJZnJhbWUocHJvcHMpIHtcblx0dmFyIGV4dHJhQ2xhc3MgPSAnJztcblx0aWYgKHByb3BzLmF0dHJpYnV0ZXMuYWxpZ24gPT09ICd3aWRlJykge1xuXHRcdGV4dHJhQ2xhc3MgPSAnIGFsaWdud2lkZSc7XG5cdH1cblx0dmFyIGZyYW1lQXR0cmlidXRlcyA9IHtcblx0XHRvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKGUpIHtcblx0XHRcdGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5mb2N1cygpO1xuXHRcdH0sXG5cdFx0Y2xhc3M6ICdhbTM2MHZpZXcnLFxuXHRcdHNyYzogJ2Fib3V0OmJsYW5rJyxcblx0XHRzdHlsZToge1xuXHRcdFx0Ym9yZGVyOiAnMCcsXG5cdFx0XHR3aWR0aDogcHJvcHMuYXR0cmlidXRlcy53aWR0aCxcblx0XHRcdGhlaWdodDogcHJvcHMuYXR0cmlidXRlcy5oZWlnaHQsXG5cdFx0XHRtYXJnaW46ICcwIGF1dG8nXG5cdFx0fVxuXHR9O1xuXHRmb3IgKHZhciBrIGluIGFtMzYwVmlld0F0dHJpYnV0ZXMpIHtcblx0XHRmcmFtZUF0dHJpYnV0ZXNbJ2RhdGEtJyArIGtdID0gcHJvcHMuYXR0cmlidXRlc1trXTtcblx0fVxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdCdkaXYnLFxuXHRcdHtcblx0XHRcdCdjbGFzcyc6ICdhbTM2MHZpZXctd3JhcHBlciB3cC1ibG9jaycgKyBleHRyYUNsYXNzLFxuXHRcdFx0J2RhdGEtYWxpZ24nOiBwcm9wcy5hdHRyaWJ1dGVzLmFsaWduLFxuXHRcdFx0c3R5bGU6IHsgaGVpZ2h0OiBwcm9wcy5hdHRyaWJ1dGVzLmhlaWdodCwgd2lkdGg6IHByb3BzLmF0dHJpYnV0ZXMud2lkdGgsIG1hcmdpbjogcHJvcHMuYXR0cmlidXRlcy5tYXJnaW4gfVxuXHRcdH0sXG5cdFx0UmVhY3QuY3JlYXRlRWxlbWVudChGb2N1c2FibGVJZnJhbWUsIGZyYW1lQXR0cmlidXRlcylcblx0KTtcbn07XG5cbmZ1bmN0aW9uIGdldFNob3J0Y29kZUVxdWl2YWxlbnQoYXR0cnMpIHtcblx0cmV0dXJuICdbMzYwICcgKyBfLm1hcChfKGF0dHJzKS5vbWl0KFsnbWVkaWEtaWQnLCAnYmFzZScsICdibG9jay1pZCddKSwgZnVuY3Rpb24gKHYsIGspIHtcblx0XHRyZXR1cm4gayArICc9XCInICsgdiArICdcIic7XG5cdH0pLmpvaW4oJyAnKSArICddJztcbn1cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2FtMzYwdmlldy9hZHZhbmNlZCcsIHtcblx0dGl0bGU6IF9fKCczNjAgVmlldycpLFxuXHRkZXNjcmlwdGlvbjogX18oJ0VtYmVkIGFueSAzNjAtZGVncmVlIHBhbm9yYW1pYyBwaG90b3MgYW5kIHZpZGVvcycpLFxuXHRjYXRlZ29yeTogJ2VtYmVkJyxcblx0aWNvbjogJ2FkbWluLXNpdGUtYWx0MycsXG5cdGtleXdvcmRzOiBbX18oJzM2MCcpLCBfXygncGFub3JhbWEnKSwgX18oJ3Bob3RvJyksIF9fKCd2aWRlbycpLCBfXygnMzYwIHZpZXcnKSwgX18oJ3NwaGVyZScpLCBfXygnVlInKSwgX18oJ0FSJyldLFxuXHRhdHRyaWJ1dGVzOiBhbTM2MFZpZXdBdHRyaWJ1dGVzLFxuXHQvLyBOT1RFOiBhbGlnbiBpcyBpbnRlbnRpb25hbGx5IHNldCB0byBmYWxzZSBiZWNhdXNlIHRoZXJlIGFyZSBqdXN0IHdheSB0b28gbWFueSBidWdzIGluIEd1dGVuYmVyZyBkeW5hbWljIGJsb2Nrcyxcblx0Ly8gZm9yIGluc3RhbmNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy9pc3N1ZXMvMjUwODgsIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL2lzc3Vlcy84MzgzXG5cdHN1cHBvcnRzOiB7XG5cdFx0YWxpZ246IGZhbHNlLFxuXHRcdG11bHRpcGxlOiB0cnVlLFxuXHRcdGFuY2hvcjogdHJ1ZVxuXHR9LFxuXHRlZGl0OiB3aXRoTm90aWNlcyhmdW5jdGlvbiAocHJvcHMpIHtcblx0XHRhbTM2MHZpZXdfdXBkYXRlVmlldyhwcm9wcy5hdHRyaWJ1dGVzWydibG9jay1pZCddLCBwcm9wcy5hdHRyaWJ1dGVzKTtcblx0XHR2YXIgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIG5vdGljZU9wZXJhdGlvbnMgPSBwcm9wcy5ub3RpY2VPcGVyYXRpb25zLFxuXHRcdCAgICBub3RpY2VVSSA9IHByb3BzLm5vdGljZVVJO1xuXG5cdFx0dmFyIEFMTE9XRURfTUVESUFfVFlQRVMgPSBbJ3ZpZGVvJywgJ2ltYWdlJ107XG5cdFx0c2V0QXR0cmlidXRlcyh7IGJhc2U6IGNnYkdsb2JhbC5wbHVnaW5EaXJVcmwgfSk7XG5cdFx0aWYgKCFwcm9wcy5hdHRyaWJ1dGVzWydibG9jay1pZCddKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgJ2Jsb2NrLWlkJzogJ2FtMzYwdmlld18nICsgXy5yYW5kb20oMTAwMDAwLCA5OTk5OTkpIH0pO1xuXHRcdH1cblx0XHR2YXIgb25TZWxlY3RNZWRpYSA9IGZ1bmN0aW9uIG9uU2VsZWN0TWVkaWEobWVkaWEpIHtcblx0XHRcdGlmICghbWVkaWEgfHwgIW1lZGlhLnVybCkge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgc3JjOiB1bmRlZmluZWQsICdtZWRpYS1pZCc6IHVuZGVmaW5lZCB9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2V0QXR0cmlidXRlcyh7IHNyYzogbWVkaWEudXJsLCAnbWVkaWEtaWQnOiBtZWRpYS5pZCB9KTtcblx0XHR9O1xuXHRcdHZhciBvblNlbGVjdFVSTCA9IGZ1bmN0aW9uIG9uU2VsZWN0VVJMKG5ld1VSTCkge1xuXHRcdFx0aWYgKG5ld1VSTCAhPT0gdXJsKSB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzcmM6IG5ld1VSTCwgJ21lZGlhLWlkJzogdW5kZWZpbmVkIH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0dmFyIG9uVXBsb2FkRXJyb3IgPSBmdW5jdGlvbiBvblVwbG9hZEVycm9yKG1lc3NhZ2UpIHtcblx0XHRcdG5vdGljZU9wZXJhdGlvbnMucmVtb3ZlQWxsTm90aWNlcygpO1xuXHRcdFx0bm90aWNlT3BlcmF0aW9ucy5jcmVhdGVFcnJvck5vdGljZShtZXNzYWdlKTtcblx0XHR9O1xuXHRcdHZhciB1cGRhdGVBbGlnbiA9IGZ1bmN0aW9uIHVwZGF0ZUFsaWduKG5leHRBbGlnbikge1xuXHRcdFx0aWYgKG5leHRBbGlnbiA9PT0gJ2Z1bGwnIHx8IG5leHRBbGlnbiA9PT0gJ3dpZGUnKSB7XG5cdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMud2lkdGggPSAnMTAwJSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAobmV4dEFsaWduID09PSAnY2VudGVyJyB8fCBuZXh0QWxpZ24gPT09ICd3aWRlJyB8fCBuZXh0QWxpZ24gPT09ICdmdWxsJykge1xuXHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLm1hcmdpbiA9ICcwIGF1dG8nO1xuXHRcdFx0fVxuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGFsaWduOiBuZXh0QWxpZ24gfSk7XG5cdFx0fTtcblxuXHRcdHZhciB1cGRhdGVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gdXBkYXRlQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpO1xuXHRcdFx0Xy5lYWNoKGF0dHJpYnV0ZXMsIGZ1bmN0aW9uICh2YWwsIG5hbWUpIHtcblx0XHRcdFx0aWYgKGFtMzYwVmlld0F0dHJpYnV0ZXNbbmFtZV0gJiYgYW0zNjBWaWV3QXR0cmlidXRlc1tuYW1lXS52YWxpZGF0aW9uUmVnZXhOYW1lICYmIGFtMzYwVmlld0F0dHJpYnV0ZXNbbmFtZV0udmFsaWRhdGlvbkVycm9yTWVzc2FnZSkge1xuXHRcdFx0XHRcdHZhciBlcnJvciA9IHZhbC5tYXRjaChhdHRyaWJ1dGVWYWxpZGF0aW9uUmVnZXhwc1thbTM2MFZpZXdBdHRyaWJ1dGVzW25hbWVdLnZhbGlkYXRpb25SZWdleE5hbWVdKSA/IGZhbHNlIDogYW0zNjBWaWV3QXR0cmlidXRlc1tuYW1lXS52YWxpZGF0aW9uRXJyb3JNZXNzYWdlO1xuXHRcdFx0XHRcdGxvY2tVcGRhdGUobmFtZSwgZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGFtMzYwdmlld191cGRhdGVWaWV3KHByb3BzLmF0dHJpYnV0ZXNbJ2Jsb2NrLWlkJ10sIHByb3BzLmF0dHJpYnV0ZXMpO1xuXHRcdH07XG5cblx0XHR2YXIgYmxvY2tDb250cm9scyA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEJsb2NrQ29udHJvbHMsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJsb2NrQWxpZ25tZW50VG9vbGJhciwge1xuXHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5hbGlnbixcblx0XHRcdFx0b25DaGFuZ2U6IHVwZGF0ZUFsaWduLFxuXHRcdFx0XHRpc0NvbGxhcHNlZDogZmFsc2Vcblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhUmVwbGFjZUZsb3csIHtcblx0XHRcdFx0bWVkaWFJZDogcHJvcHMuYXR0cmlidXRlc1snbWVkaWEtaWQnXSxcblx0XHRcdFx0bWVkaWFVUkw6IHByb3BzLmF0dHJpYnV0ZXMuc3JjLFxuXHRcdFx0XHRjbGFzc05hbWU6IHByb3BzLmF0dHJpYnV0ZXMuY2xhc3NOYW1lLFxuXHRcdFx0XHRhbGxvd2VkVHlwZXM6IFsndmlkZW8nLCAnaW1hZ2UnXSxcblx0XHRcdFx0YWNjZXB0OiAndmlkZW8vKiwgaW1hZ2UvKicsXG5cdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdE1lZGlhLFxuXHRcdFx0XHRvblNlbGVjdFVSTDogb25TZWxlY3RVUkwsXG5cdFx0XHRcdG9uRXJyb3I6IG9uVXBsb2FkRXJyb3Jcblx0XHRcdH0pXG5cdFx0KTtcblx0XHR2YXIgaW5zcGVjdG9yQ29udHJvbHMgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdG51bGwsXG5cdFx0XHRPYmplY3Qua2V5cyhhbTM2MFZpZXdBdHRyaWJ1dGVzVHJlZSkubWFwKGZ1bmN0aW9uIChncm91cEtleSkge1xuXHRcdFx0XHR2YXIgZ3JvdXBJdGVtcyA9IE9iamVjdC5rZXlzKGFtMzYwVmlld0F0dHJpYnV0ZXNUcmVlW2dyb3VwS2V5XS5pdGVtcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHR2YXIgdmFsID0gYW0zNjBWaWV3QXR0cmlidXRlc1RyZWVbZ3JvdXBLZXldLml0ZW1zW2tleV07XG5cdFx0XHRcdFx0aWYgKHZhbC5zaG93SW5TaWRlYmFyKSB7XG5cdFx0XHRcdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0XHRcdFx0dHlwZTogdmFsLnR5cGUsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyh2YWwubGFiZWwpLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlc1trZXldICE9PSB1bmRlZmluZWQgPyBwcm9wcy5hdHRyaWJ1dGVzW2tleV0gOiB2YWwuZGVmYXVsdCxcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IHZhbC5kZWZhdWx0LFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3VmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlQXR0cmlidXRlcyhfZGVmaW5lUHJvcGVydHkoe30sIGtleSwgbmV3VmFsdWUpKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0aGVscDogdmFsLmhlbHBcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRpZiAodmFsLmNvbnRyb2xQcm9wZXJ0aWVzKSB7XG5cdFx0XHRcdFx0XHRcdF8uZXh0ZW5kKG9wdGlvbnMsIHZhbC5jb250cm9sUHJvcGVydGllcyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChhdHRyaWJ1dGVDb250cm9sVHlwZXNbdmFsLmNvbnRyb2xdLCBvcHRpb25zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQYW5lbEJvZHksIHtcblx0XHRcdFx0XHR0aXRsZTogX18oYW0zNjBWaWV3QXR0cmlidXRlc1RyZWVbZ3JvdXBLZXldLnRpdGxlKSxcblx0XHRcdFx0XHRpbml0aWFsT3BlbjogYW0zNjBWaWV3QXR0cmlidXRlc1RyZWVbZ3JvdXBLZXldLmluaXRpYWxPcGVuID09PSB0cnVlXG5cdFx0XHRcdH0sIGdyb3VwSXRlbXMpO1xuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiAnU2hvcnRjb2RlIEVxdWl2YWxlbnQnLFxuXHRcdFx0XHRcdGluaXRpYWxPcGVuOiBmYWxzZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dGFyZWFDb250cm9sLCB7XG5cdFx0XHRcdFx0cm93czogJzE0Jyxcblx0XHRcdFx0XHRyZWFkb25seTogdHJ1ZSxcblx0XHRcdFx0XHR2YWx1ZTogZ2V0U2hvcnRjb2RlRXF1aXZhbGVudChwcm9wcy5hdHRyaWJ1dGVzKVxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dmFyIHByZXZpZXcgPSBwcm9wcy5hdHRyaWJ1dGVzLnNyYyA/IGdldDM2MFZpZXdCbG9ja0lmcmFtZShwcm9wcykgOiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFQbGFjZWhvbGRlciwge1xuXHRcdFx0aWNvbjogJ2VtYmVkLXBob3RvJyxcblx0XHRcdGxhYmVsczoge1xuXHRcdFx0XHR0aXRsZTogX18oJzM2MCBQaG90byBvciBWaWRlbycpLFxuXHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCdEcmFnIGFuZCBkcm9wLCBlbnRlciBVUkwgb3IgY2hvb3NlIG1lZGlhIGxpYnJhcnkgMzYwIGRlZ3JlZSBwaG90byBvciB2aWRlby4nKVxuXHRcdFx0fSxcblx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdE1lZGlhLFxuXHRcdFx0b25TZWxlY3RVUkw6IG9uU2VsZWN0VVJMLFxuXHRcdFx0YWNjZXB0OiAndmlkZW8vKiwgaW1hZ2UvKicsXG5cdFx0XHRhbGxvd2VkVHlwZXM6IEFMTE9XRURfTUVESUFfVFlQRVMsXG5cdFx0XHRub3RpY2VzOiBub3RpY2VVSSxcblx0XHRcdG9uRXJyb3I6IG5vdGljZU9wZXJhdGlvbnMuY3JlYXRlRXJyb3JOb3RpY2Vcblx0XHR9KTtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0YmxvY2tDb250cm9scyxcblx0XHRcdGluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0cHJldmlld1xuXHRcdCk7XG5cdH0pXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);