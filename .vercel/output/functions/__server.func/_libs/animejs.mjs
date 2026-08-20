//#region node_modules/animejs/dist/modules/core/consts.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
var isBrowser = typeof window !== "undefined";
/** @typedef {Window & {AnimeJS: Array}|null} AnimeJSWindow

/** @type {AnimeJSWindow} */
var win = isBrowser ? window : null;
/** @type {Document|null} */
var doc = isBrowser ? document : null;
/** @enum {Number} */
var tweenTypes = {
	OBJECT: 0,
	ATTRIBUTE: 1,
	CSS: 2,
	TRANSFORM: 3,
	CSS_VAR: 4
};
/** @enum {Number} */
var valueTypes = {
	NUMBER: 0,
	UNIT: 1,
	COLOR: 2,
	COMPLEX: 3
};
/** @enum {Number} */
var tickModes = {
	NONE: 0,
	AUTO: 1,
	FORCE: 2
};
/** @enum {Number} */
var compositionTypes = {
	replace: 0,
	none: 1,
	blend: 2
};
var isRegisteredTargetSymbol = Symbol();
var isDomSymbol = Symbol();
var isSvgSymbol = Symbol();
var transformsSymbol = Symbol();
var proxyTargetSymbol = Symbol();
var minValue = 1e-11;
var maxValue = 0xe8d4a51000;
var K = 1e3;
var emptyArray = [];
var shortTransforms = /*#__PURE__*/ (() => {
	const map = /* @__PURE__ */ new Map();
	map.set("x", "translateX");
	map.set("y", "translateY");
	map.set("z", "translateZ");
	return map;
})();
var validTransforms = [
	"perspective",
	"translateX",
	"translateY",
	"translateZ",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"scale",
	"scaleX",
	"scaleY",
	"scaleZ",
	"skew",
	"skewX",
	"skewY"
];
var transformsFragmentStrings = /*#__PURE__*/ validTransforms.reduce((a, v) => ({
	...a,
	[v]: v + "("
}), {});
/** @return {void} */
var noop = () => {};
/**
* @template T
* @param  {T} v
* @return {T}
*/
var noopModifier = (v) => v;
var validRgbHslRgx = /\)\s*[-.\d]/;
var hexTestRgx = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i;
var rgbExecRgx = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i;
var rgbaExecRgx = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
var hslExecRgx = /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i;
var hslaExecRgx = /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
var digitWithExponentRgx = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi;
var unitsExecRgx = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i;
var lowerCaseRgx = /([a-z])([A-Z])/g;
var relativeValuesExecRgx = /(\*=|\+=|-=)/;
var cssVariableMatchRgx = /var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;
//#endregion
//#region node_modules/animejs/dist/modules/core/globals.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   DefaultsParams,
*   DOMTarget,
* } from '../types/index.js'
*
* @import {
*   Scope,
* } from '../scope/index.js'
*/
/**
* @typedef {Object} EditorGlobals
* @property {boolean} showPanel
* @property {Function} addAnimation
* @property {Function} addSet
* @property {Function} addTimeline
* @property {Function} addTimelineChild
* @property {Function} addTimelineLabel
* @property {Function} addTimelineCall
* @property {Function} addTimelineSync
* @property {Function} resolveStagger
* @property {Object|null} _head
* @property {Object|null} _tail
*/
/** @type {DefaultsParams} */
var defaults = {
	id: null,
	keyframes: null,
	playbackEase: null,
	playbackRate: 1,
	frameRate: 240,
	loop: 0,
	reversed: false,
	alternate: false,
	autoplay: true,
	persist: false,
	duration: K,
	delay: 0,
	loopDelay: 0,
	ease: "out(2)",
	composition: compositionTypes.replace,
	modifier: noopModifier,
	onBegin: noop,
	onBeforeUpdate: noop,
	onUpdate: noop,
	onLoop: noop,
	onPause: noop,
	onComplete: noop,
	onRender: noop
};
var scope = {
	/** @type {Scope} */
	current: null,
	/** @type {Document|DOMTarget} */
	root: doc
};
var globals = {
	/** @type {DefaultsParams} */
	defaults,
	/** @type {Number} */
	precision: 4,
	/** @type {Number} equals 1 in ms mode, 0.001 in s mode */
	timeScale: 1,
	/** @type {Number} */
	tickThreshold: 200,
	/** @type {EditorGlobals|null} */
	editor: null
};
var globalVersions = {
	version: "4.5.0",
	engine: null
};
if (isBrowser) {
	if (!win.AnimeJS) win.AnimeJS = [];
	win.AnimeJS.push(globalVersions);
}
//#endregion
//#region node_modules/animejs/dist/modules/core/helpers.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Target,
*   DOMTarget,
* } from '../types/index.js'
*/
/**
* @param  {String} str
* @return {String}
*/
var toLowerCase = (str) => str.replace(lowerCaseRgx, "$1-$2").toLowerCase();
/**
* Prioritize this method instead of regex when possible
* @param  {String} str
* @param  {String} sub
* @return {Boolean}
*/
var stringStartsWith = (str, sub) => str.indexOf(sub) === 0;
var now = Date.now;
var isArr = Array.isArray;
/**@param {any} a @return {a is Record<String, any>} */
var isObj = (a) => a && a.constructor === Object;
/**@param {any} a @return {a is Number} */
var isNum = (a) => typeof a === "number" && !isNaN(a);
/**@param {any} a @return {a is String} */
var isStr = (a) => typeof a === "string";
/**@param {any} a @return {a is Function} */
var isFnc = (a) => typeof a === "function";
/**@param {any} a @return {a is undefined} */
var isUnd = (a) => typeof a === "undefined";
/**@param {any} a @return {a is null | undefined} */
var isNil = (a) => isUnd(a) || a === null;
/**@param {any} a @return {a is SVGElement} */
var isSvg = (a) => isBrowser && a instanceof SVGElement;
/**@param {any} a @return {Boolean} */
var isHex = (a) => hexTestRgx.test(a);
/**@param {any} a @return {Boolean} */
var isRgb = (a) => stringStartsWith(a, "rgb");
/**@param {any} a @return {Boolean} */
var isHsl = (a) => stringStartsWith(a, "hsl");
/**@param {any} a @return {Boolean} */ var isCol = (a) => isHex(a) || (isRgb(a) || isHsl(a)) && (a[a.length - 1] === ")" || !validRgbHslRgx.test(a));
/**@param {any} a @return {Boolean} */
var isKey = (a) => !globals.defaults.hasOwnProperty(a);
var svgCssReservedProperties = [
	"opacity",
	"rotate",
	"overflow",
	"color"
];
/**
* @param  {Target} el
* @param  {String} propertyName
* @return {Boolean}
*/
var isValidSVGAttribute = (el, propertyName) => {
	if (svgCssReservedProperties.includes(propertyName)) return false;
	if (el.getAttribute(propertyName) || propertyName in el) {
		if (propertyName === "scale") {
			const elParentNode = el.parentNode;
			return elParentNode && elParentNode.tagName === "filter";
		}
		return true;
	}
};
/**
* @param  {Number|String} str
* @return {Number}
*/
var parseNumber = (str) => isStr(str) ? parseFloat(str) : str;
var pow = Math.pow;
var sqrt = Math.sqrt;
var sin = Math.sin;
var cos = Math.cos;
var abs = Math.abs;
var floor = Math.floor;
var asin = Math.asin;
var PI = Math.PI;
var _round = Math.round;
/**
* Clamps a value between min and max bounds
*
* @param  {Number} v - Value to clamp
* @param  {Number} min - Minimum boundary
* @param  {Number} max - Maximum boundary
* @return {Number}
*/
var clamp = (v, min, max) => v < min ? min : v > max ? max : v;
/**
* Rounds a number to specified decimal places
*
* @param  {Number} v - Value to round
* @param  {Number} decimalLength - Number of decimal places
* @return {Number}
*/
var round = (v, decimalLength) => {
	if (decimalLength < 0) return v;
	if (!decimalLength) return _round(v);
	const p = 10 ** decimalLength;
	return _round(v * p) / p;
};
/**
* Linear interpolation between two values
*
* @param  {Number} start - Starting value
* @param  {Number} end - Ending value
* @param  {Number} factor - Interpolation factor in the range [0, 1]
* @return {Number} The interpolated value
*/
var lerp = (start, end, factor) => factor === 1 ? end : factor === 0 ? start : start + (end - start) * factor;
/**
* Replaces infinity with maximum safe value
*
* @param  {Number} v - Value to check
* @return {Number}
*/
var clampInfinity = (v) => v === Infinity ? maxValue : v === -Infinity ? -maxValue : v;
/**
* Normalizes time value with minimum threshold
*
* @param  {Number} v - Time value to normalize
* @return {Number}
*/
var normalizeTime = (v) => v <= 1e-11 ? minValue : clampInfinity(round(v, 11));
/**
* @template T
* @param    {T[]} a
* @return   {T[]}
*/
var cloneArray = (a) => isArr(a) ? [...a] : a;
/**
* @template T
* @template U
* @param    {T} o1
* @param    {U} o2
* @return   {T & U}
*/
var mergeObjects = (o1, o2) => {
	const merged = { ...o1 };
	for (let p in o2) {
		const o1p = o1[p];
		merged[p] = isUnd(o1p) ? o2[p] : o1p;
	}
	return merged;
};
/**
* @param  {Object} parent
* @param  {Function} callback
* @param  {Boolean} [reverse]
* @param  {String} [prevProp]
* @param  {String} [nextProp]
* @return {void}
*/
var forEachChildren = (parent, callback, reverse, prevProp = "_prev", nextProp = "_next") => {
	let next = parent._head;
	let adjustedNextProp = nextProp;
	if (reverse) {
		next = parent._tail;
		adjustedNextProp = prevProp;
	}
	while (next) {
		const currentNext = next[adjustedNextProp];
		callback(next);
		next = currentNext;
	}
};
/**
* @param  {Object} parent
* @param  {Object} child
* @param  {String} [prevProp]
* @param  {String} [nextProp]
* @return {void}
*/
var removeChild = (parent, child, prevProp = "_prev", nextProp = "_next") => {
	const prev = child[prevProp];
	const next = child[nextProp];
	prev ? prev[nextProp] = next : parent._head = next;
	next ? next[prevProp] = prev : parent._tail = prev;
	child[prevProp] = null;
	child[nextProp] = null;
};
/**
* @param  {Object} parent
* @param  {Object} child
* @param  {Function} [sortMethod]
* @param  {String} prevProp
* @param  {String} nextProp
* @return {void}
*/
var addChild = (parent, child, sortMethod, prevProp = "_prev", nextProp = "_next") => {
	let prev = parent._tail;
	while (prev && sortMethod && sortMethod(prev, child)) prev = prev[prevProp];
	const next = prev ? prev[nextProp] : parent._head;
	prev ? prev[nextProp] = child : parent._head = child;
	next ? next[prevProp] = child : parent._tail = child;
	child[prevProp] = prev;
	child[nextProp] = next;
};
//#endregion
//#region node_modules/animejs/dist/modules/core/transforms.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   DOMTarget,
* } from '../types/index.js'
*/
/**
* @param  {DOMTarget} target
* @param  {String} propName
* @param  {Object} animationInlineStyles
* @return {String}
*/
var parseInlineTransforms = (target, propName, animationInlineStyles) => {
	const inlineTransforms = target.style.transform;
	if (inlineTransforms) {
		const cachedTransforms = target[transformsSymbol];
		let pos = 0;
		const len = inlineTransforms.length;
		let fullTranslateValue;
		while (pos < len) {
			while (pos < len && inlineTransforms.charCodeAt(pos) === 32) pos++;
			if (pos >= len) break;
			const nameStart = pos;
			while (pos < len && inlineTransforms.charCodeAt(pos) !== 40) pos++;
			if (pos >= len) break;
			const name = inlineTransforms.substring(nameStart, pos);
			let depth = 1;
			const valueStart = pos + 1;
			let c1 = -1, c2 = -1;
			pos++;
			while (pos < len && depth > 0) {
				const c = inlineTransforms.charCodeAt(pos);
				if (c === 40) depth++;
				else if (c === 41) depth--;
				else if (c === 44 && depth === 1) {
					if (c1 === -1) c1 = pos;
					else if (c2 === -1) c2 = pos;
				}
				pos++;
			}
			const valueEnd = pos - 1;
			if (name === "translate" || name === "translate3d") {
				if (c1 === -1) cachedTransforms.translateX = inlineTransforms.substring(valueStart, valueEnd).trim();
				else {
					cachedTransforms.translateX = inlineTransforms.substring(valueStart, c1).trim();
					if (c2 === -1) cachedTransforms.translateY = inlineTransforms.substring(c1 + 1, valueEnd).trim();
					else {
						cachedTransforms.translateY = inlineTransforms.substring(c1 + 1, c2).trim();
						cachedTransforms.translateZ = inlineTransforms.substring(c2 + 1, valueEnd).trim();
					}
				}
				fullTranslateValue = inlineTransforms.substring(valueStart, valueEnd);
			} else if (name === "scale" || name === "scale3d") {
				if (c1 === -1) cachedTransforms.scale = inlineTransforms.substring(valueStart, valueEnd).trim();
				else {
					cachedTransforms.scaleX = inlineTransforms.substring(valueStart, c1).trim();
					if (c2 === -1) cachedTransforms.scaleY = inlineTransforms.substring(c1 + 1, valueEnd).trim();
					else {
						cachedTransforms.scaleY = inlineTransforms.substring(c1 + 1, c2).trim();
						cachedTransforms.scaleZ = inlineTransforms.substring(c2 + 1, valueEnd).trim();
					}
				}
			} else cachedTransforms[name] = inlineTransforms.substring(valueStart, valueEnd);
		}
		if (propName === "translate3d" && fullTranslateValue) {
			if (animationInlineStyles) animationInlineStyles[propName] = fullTranslateValue;
			return fullTranslateValue;
		}
		const cached = cachedTransforms[propName];
		if (!isUnd(cached)) {
			if (animationInlineStyles) animationInlineStyles[propName] = cached;
			return cached;
		}
	}
	return propName === "translate3d" ? "0px, 0px, 0px" : propName === "rotate3d" ? "0, 0, 0, 0deg" : stringStartsWith(propName, "scale") ? "1" : stringStartsWith(propName, "rotate") || stringStartsWith(propName, "skew") ? "0deg" : "0px";
};
/**
* Builds a CSS transform string from the target's cached transform properties.
* Iterates validTransforms in order (perspective > translate > rotate > scale > skew > matrix).
* When adjacent axis properties are all present, emits a shorter shorthand (translateX + translateY -> translate(x, y))
* The index is advanced past consumed properties so they are not emitted twice.
* Properties without a grouping partner (e.g. translateY alone, scaleZ alone) emit individually.
*
* @param  {Record<String, String>} props
* @return {String}
*/
var buildTransformString = (props) => {
	let str = "";
	for (let i = 0, l = validTransforms.length; i < l; i++) {
		const key = validTransforms[i];
		const val = props[key];
		if (val !== void 0) {
			if (key === "translateX") {
				const next = props.translateY;
				if (next !== void 0) {
					const next2 = props.translateZ;
					if (next2 !== void 0) {
						str += `translate3d(${val},${next},${next2}) `;
						i += 2;
					} else {
						str += `translate(${val},${next}) `;
						i += 1;
					}
					continue;
				}
			}
			if (key === "scaleX" && props.scale === void 0) {
				const next = props.scaleY;
				if (next !== void 0) {
					const next2 = props.scaleZ;
					if (next2 !== void 0) {
						str += `scale3d(${val},${next},${next2}) `;
						i += 2;
					} else {
						str += `scale(${val},${next}) `;
						i += 1;
					}
					continue;
				}
			}
			str += `${transformsFragmentStrings[key]}${val}) `;
		}
		if (key === "rotateZ") {
			if (props.rotate3d !== void 0) str += `rotate3d(${props.rotate3d}) `;
		}
	}
	if (props.matrix !== void 0) str += `matrix(${props.matrix}) `;
	if (props.matrix3d !== void 0) str += `matrix3d(${props.matrix3d}) `;
	return str;
};
//#endregion
//#region node_modules/animejs/dist/modules/adapters/registry.js
/**
* Anime.js - adapters - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
var adapters = [];
/**
* Internal resolution. Tries every Adapter's target adapters first (in registration order, first match wins), then every Adapter's property resolvers.
*
* @param {any} target
* @param {string} name
* @return {TargetAdapterEntry | null}
*/
function resolveAdapterEntry(target, name) {
	if (!target) return null;
	const al = adapters.length;
	outer: for (let i = 0; i < al; i++) {
		const a = adapters[i];
		if (a.detect && !a.detect(target)) continue;
		const tas = a.targetAdapters;
		for (let j = 0, m = tas.length; j < m; j++) {
			const ta = tas[j];
			if (ta.detect(target)) {
				const entry = ta.props[name];
				if (entry && (!entry.gate || entry.gate(target))) return entry;
				break outer;
			}
		}
	}
	for (let i = 0; i < al; i++) {
		const a = adapters[i];
		if (a.detect && !a.detect(target)) continue;
		const rs = a.propertyResolvers;
		for (let j = 0, m = rs.length; j < m; j++) {
			const entry = rs[j](target, name);
			if (entry) return entry;
		}
	}
	return null;
}
//#endregion
//#region node_modules/animejs/dist/modules/core/colors.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   ColorArray,
* } from '../types/index.js'
*/
/**
* RGB / RGBA Color value string -> RGBA values array
* @param  {String} rgbValue
* @return {ColorArray}
*/
var rgbToRgba = (rgbValue) => {
	const rgba = rgbExecRgx.exec(rgbValue) || rgbaExecRgx.exec(rgbValue);
	const a = !isUnd(rgba[4]) ? +rgba[4] : 1;
	return [
		+rgba[1],
		+rgba[2],
		+rgba[3],
		a
	];
};
/**
* HEX3 / HEX3A / HEX6 / HEX6A Color value string -> RGBA values array
* @param  {String} hexValue
* @return {ColorArray}
*/
var hexToRgba = (hexValue) => {
	const hexLength = hexValue.length;
	const isShort = hexLength === 4 || hexLength === 5;
	return [
		+("0x" + hexValue[1] + hexValue[isShort ? 1 : 2]),
		+("0x" + hexValue[isShort ? 2 : 3] + hexValue[isShort ? 2 : 4]),
		+("0x" + hexValue[isShort ? 3 : 5] + hexValue[isShort ? 3 : 6]),
		hexLength === 5 || hexLength === 9 ? +(+("0x" + hexValue[isShort ? 4 : 7] + hexValue[isShort ? 4 : 8]) / 255).toFixed(3) : 1
	];
};
/**
* @param  {Number} p
* @param  {Number} q
* @param  {Number} t
* @return {Number}
*/
var hue2rgb = (p, q, t) => {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	return t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p;
};
/**
* HSL / HSLA Color value string -> RGBA values array
* @param  {String} hslValue
* @return {ColorArray}
*/
var hslToRgba = (hslValue) => {
	const hsla = hslExecRgx.exec(hslValue) || hslaExecRgx.exec(hslValue);
	const h = +hsla[1] / 360;
	const s = +hsla[2] / 100;
	const l = +hsla[3] / 100;
	const a = !isUnd(hsla[4]) ? +hsla[4] : 1;
	let r, g, b;
	if (s === 0) r = g = b = l;
	else {
		const q = l < .5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = round(hue2rgb(p, q, h + 1 / 3) * 255, 0);
		g = round(hue2rgb(p, q, h) * 255, 0);
		b = round(hue2rgb(p, q, h - 1 / 3) * 255, 0);
	}
	return [
		r,
		g,
		b,
		a
	];
};
/**
* All in one color converter that converts a color string value into an array of RGBA values
* @param  {String} colorString
* @return {ColorArray}
*/
var convertColorStringValuesToRgbaArray = (colorString) => {
	return isRgb(colorString) ? rgbToRgba(colorString) : isHex(colorString) ? hexToRgba(colorString) : isHsl(colorString) ? hslToRgba(colorString) : [
		0,
		0,
		0,
		1
	];
};
//#endregion
//#region node_modules/animejs/dist/modules/core/values.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Target,
*   DOMTarget,
*   Tween,
*   TweenPropValue,
*   TweenDecomposedValue,
*   TargetsArray,
* } from '../types/index.js'
*/
/**
* @template T, D
* @param {T|undefined} targetValue
* @param {D} defaultValue
* @return {T|D}
*/
var setValue = (targetValue, defaultValue) => {
	return isUnd(targetValue) ? defaultValue : targetValue;
};
/**
* Resolve against the target when it's a DOM element, otherwise fall back to :root so non-DOM targets like three.js meshes and custom adapters still pick up CSS variables defined on the document.
*
* @param  {String} value
* @param  {Target} target
* @return {String|Number}
*/
var resolveCssVar = (value, target) => {
	const match = value.match(cssVariableMatchRgx);
	const el = target[isDomSymbol] ? target : document.documentElement;
	let computed = getComputedStyle(el)?.getPropertyValue(match[1]);
	if ((!computed || computed.trim() === "") && match[2]) computed = match[2].trim();
	return computed || 0;
};
/**
* @param  {TweenPropValue} value
* @param  {Target} target
* @param  {Number} index
* @param  {TargetsArray} targets
* @param  {Object|null} store
* @param  {Tween|null} prevTween
* @return {any}
*/
var getFunctionValue = (value, target, index, targets, store, prevTween) => {
	if (isFnc(value)) {
		if (!store) {
			const computed = value(target, index, targets, prevTween);
			return !isNaN(+computed) ? +computed : computed || 0;
		}
		const func = () => {
			const computed = value(target, index, targets, prevTween);
			return !isNaN(+computed) ? +computed : computed || 0;
		};
		store.func = func;
		return func();
	}
	if (isStr(value) && stringStartsWith(value, "var(")) {
		if (!store) return resolveCssVar(value, target);
		const func = () => resolveCssVar(value, target);
		store.func = func;
		return func();
	}
	return value;
};
/**
* @param  {Target} target
* @param  {String} prop
* @return {tweenTypes}
*/
var getTweenType = (target, prop) => {
	return !target[isDomSymbol] ? tweenTypes.OBJECT : target[isSvgSymbol] && isValidSVGAttribute(target, prop) ? tweenTypes.ATTRIBUTE : validTransforms.includes(prop) || shortTransforms.get(prop) ? tweenTypes.TRANSFORM : stringStartsWith(prop, "--") ? tweenTypes.CSS_VAR : prop in target.style ? tweenTypes.CSS : prop in target ? tweenTypes.OBJECT : tweenTypes.ATTRIBUTE;
};
/**
* @param  {DOMTarget} target
* @param  {String} propName
* @param  {Object} animationInlineStyles
* @return {String}
*/
var getCSSValue = (target, propName, animationInlineStyles) => {
	const inlineStyles = target.style[propName];
	if (inlineStyles && animationInlineStyles) animationInlineStyles[propName] = inlineStyles;
	const value = inlineStyles || getComputedStyle(target[proxyTargetSymbol] || target).getPropertyValue(propName);
	return value === "auto" ? "0" : value;
};
/**
* @param {Target} target
* @param {String} propName
* @param {tweenTypes} [tweenType]
* @param {Object|void} [animationInlineStyles]
* @return {String|Number}
*/
var getOriginalAnimatableValue = (target, propName, tweenType, animationInlineStyles) => {
	const type = !isUnd(tweenType) ? tweenType : getTweenType(target, propName);
	const adapterProp = resolveAdapterEntry(target, propName);
	if (adapterProp) {
		const value = adapterProp.get(target);
		if (value && animationInlineStyles) animationInlineStyles[propName] = value;
		return value == null ? 0 : value;
	}
	if (type === tweenTypes.OBJECT) {
		const value = target[propName];
		if (value && animationInlineStyles) animationInlineStyles[propName] = value;
		return value || 0;
	}
	if (type === tweenTypes.ATTRIBUTE) {
		const value = target.getAttribute(propName);
		if (value && animationInlineStyles) animationInlineStyles[propName] = value;
		return value;
	}
	return type === tweenTypes.TRANSFORM ? parseInlineTransforms(target, propName, animationInlineStyles) : type === tweenTypes.CSS_VAR ? getCSSValue(target, propName, animationInlineStyles).trimStart() : getCSSValue(target, propName, animationInlineStyles);
};
/**
* @param  {Number} x
* @param  {Number} y
* @param  {String} operator
* @return {Number}
*/
var getRelativeValue = (x, y, operator) => {
	return operator === "-" ? x - y : operator === "+" ? x + y : x * y;
};
/** @return {TweenDecomposedValue} */
var createDecomposedValueTargetObject = () => {
	return {
		/** @type {valueTypes} */
		t: valueTypes.NUMBER,
		n: 0,
		u: null,
		o: null,
		d: null,
		s: null
	};
};
/**
* @param  {String|Number|Object} rawValue
* @param  {TweenDecomposedValue} targetObject
* @return {TweenDecomposedValue}
*/
var decomposeRawValue = (rawValue, targetObject) => {
	/** @type {valueTypes} */
	targetObject.t = valueTypes.NUMBER;
	targetObject.n = 0;
	targetObject.u = null;
	targetObject.o = null;
	targetObject.d = null;
	targetObject.s = null;
	if (!rawValue) return targetObject;
	const num = +rawValue;
	if (!isNaN(num)) {
		targetObject.n = num;
		return targetObject;
	}
	let str = rawValue;
	if (str[1] === "=") {
		targetObject.o = str[0];
		str = str.slice(2);
	}
	const unitMatch = str.includes(" ") ? false : unitsExecRgx.exec(str);
	if (unitMatch) {
		targetObject.t = valueTypes.UNIT;
		targetObject.n = +unitMatch[1];
		targetObject.u = unitMatch[2];
		return targetObject;
	} else if (targetObject.o) {
		targetObject.n = +str;
		return targetObject;
	} else if (isCol(str)) {
		targetObject.t = valueTypes.COLOR;
		targetObject.d = convertColorStringValuesToRgbaArray(str);
		return targetObject;
	} else {
		const matchedNumbers = str.match(digitWithExponentRgx);
		targetObject.t = valueTypes.COMPLEX;
		targetObject.d = matchedNumbers ? matchedNumbers.map(Number) : [];
		targetObject.s = str.split(digitWithExponentRgx) || [];
		return targetObject;
	}
};
/**
* @param  {Tween} tween
* @param  {TweenDecomposedValue} targetObject
* @return {TweenDecomposedValue}
*/
var decomposeTweenValue = (tween, targetObject) => {
	targetObject.t = tween._valueType;
	targetObject.n = tween._toNumber;
	targetObject.u = tween._unit;
	targetObject.o = null;
	targetObject.d = cloneArray(tween._toNumbers);
	targetObject.s = cloneArray(tween._strings);
	return targetObject;
};
var decomposedOriginalValue = createDecomposedValueTargetObject();
/**
* @param  {Tween} tween
* @param  {Number} progress
* @param  {Number} precision
* @return {String}
*/
var composeComplexValue = (tween, progress, precision) => {
	const mod = tween._modifier;
	const fn = tween._fromNumbers;
	const tn = tween._toNumbers;
	const ts = tween._strings;
	let v = ts[0];
	for (let j = 0, l = tn.length; j < l; j++) {
		const n = mod(round(lerp(fn[j], tn[j], progress), precision));
		const s = ts[j + 1];
		v += `${s ? n + s : n}`;
		tween._numbers[j] = n;
	}
	return v;
};
//#endregion
//#region node_modules/animejs/dist/modules/core/render.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Tickable,
*   Renderable,
*   CallbackArgument,
*   Tween,
*   DOMTarget,
* } from '../types/index.js'
*/
/**
* @import {
*   JSAnimation,
* } from '../animation/animation.js'
*/
/**
* @import {
*   Timeline,
* } from '../timeline/timeline.js'
*/
/**
* @param  {Tickable} tickable
* @param  {Number} time
* @param  {Number} muteCallbacks
* @param  {Number} internalRender
* @param  {tickModes} tickMode
* @return {Number}
*/
var render = (tickable, time, muteCallbacks, internalRender, tickMode) => {
	const parent = tickable.parent;
	const duration = tickable.duration;
	const completed = tickable.completed;
	const iterationDuration = tickable.iterationDuration;
	const iterationCount = tickable.iterationCount;
	const _currentIteration = tickable._currentIteration;
	const _loopDelay = tickable._loopDelay;
	const _reversed = tickable._reversed;
	const _alternate = tickable._alternate;
	const _hasChildren = tickable._hasChildren;
	const tickableDelay = tickable._delay;
	const tickablePrevAbsoluteTime = tickable._currentTime;
	const tickableEndTime = tickableDelay + iterationDuration;
	const tickableAbsoluteTime = time - tickableDelay;
	const tickablePrevTime = clamp(tickablePrevAbsoluteTime, -tickableDelay, duration);
	const tickableCurrentTime = clamp(tickableAbsoluteTime, -tickableDelay, duration);
	const deltaTime = tickableAbsoluteTime - tickablePrevAbsoluteTime;
	const isCurrentTimeAboveZero = tickableCurrentTime > 0;
	const isCurrentTimeEqualOrAboveDuration = tickableCurrentTime >= duration;
	const isSetter = duration <= minValue;
	const forcedTick = tickMode === tickModes.FORCE;
	let isOdd = 0;
	let iterationElapsedTime = tickableAbsoluteTime;
	let hasRendered = 0;
	if (iterationCount > 1) {
		const period = iterationDuration + (isCurrentTimeEqualOrAboveDuration ? 0 : _loopDelay);
		const currentIteration = ~~(tickableCurrentTime / period);
		tickable._currentIteration = clamp(currentIteration, 0, iterationCount);
		if (isCurrentTimeEqualOrAboveDuration) tickable._currentIteration--;
		isOdd = tickable._currentIteration % 2;
		iterationElapsedTime = tickableCurrentTime - currentIteration * period || 0;
	}
	const isReversed = _reversed ^ (_alternate && isOdd);
	const _ease = tickable._ease;
	let iterationTime = isCurrentTimeEqualOrAboveDuration ? isReversed ? 0 : duration : isReversed ? iterationDuration - iterationElapsedTime : iterationElapsedTime;
	if (_ease) iterationTime = iterationDuration * _ease(iterationTime / iterationDuration) || 0;
	const isRunningBackwards = (parent ? parent.backwards : tickableAbsoluteTime < tickablePrevAbsoluteTime) ? !isReversed : !!isReversed;
	tickable._currentTime = tickableAbsoluteTime;
	tickable._iterationTime = iterationTime;
	tickable.backwards = isRunningBackwards;
	if (isCurrentTimeAboveZero && !tickable.began) {
		tickable.began = true;
		if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) tickable.onBegin(tickable);
	} else if (tickableAbsoluteTime <= 0) tickable.began = false;
	if (!muteCallbacks && !_hasChildren && isCurrentTimeAboveZero && tickable._currentIteration !== _currentIteration) tickable.onLoop(tickable);
	if (forcedTick || tickMode === tickModes.AUTO && (time >= (parent && tickableDelay > 0 ? 0 : tickableDelay) && time <= tickableEndTime || time <= tickableDelay && tickablePrevTime > tickableDelay || time >= tickableEndTime && tickablePrevTime !== duration) || iterationTime >= tickableEndTime && tickablePrevTime !== duration || iterationTime <= tickableDelay && tickablePrevTime > 0 && !isCurrentTimeEqualOrAboveDuration || time <= tickablePrevTime && tickablePrevTime === duration && completed || isCurrentTimeEqualOrAboveDuration && !completed && isSetter) {
		if (isCurrentTimeAboveZero) {
			tickable.computeDeltaTime(tickablePrevTime);
			if (!muteCallbacks) tickable.onBeforeUpdate(tickable);
		}
		if (!_hasChildren) {
			const forcedRender = forcedTick || (isRunningBackwards ? deltaTime * -1 : deltaTime) >= globals.tickThreshold;
			const absoluteTime = round(tickable._offset + (parent ? parent._offset : 0) + tickableDelay + iterationTime, 12);
			let tween = tickable._head;
			let tweenTarget;
			let tweenStyle;
			let tweenTargetTransforms;
			let tweenTargetTransformsProperties;
			let tweenTransformsNeedUpdate = 0;
			while (tween) {
				const tweenComposition = tween._composition;
				const tweenCurrentTime = tween._currentTime;
				const tweenChangeDuration = tween._changeDuration;
				const tweenAbsEndTime = tween._absoluteStartTime + tween._changeDuration;
				const tweenNextRep = tween._nextRep;
				const tweenPrevRep = tween._prevRep;
				const tweenHasComposition = tweenComposition !== compositionTypes.none;
				const tweenPrevRepEndTime = tweenPrevRep ? tweenPrevRep._absoluteStartTime + tweenPrevRep._changeDuration : 0;
				const tweenPrevRepIsCrossParent = tweenPrevRep && tweenPrevRep.parent !== tween.parent;
				const tweenNextRepTakeover = !tweenNextRep || tweenNextRep._isOverridden ? tweenAbsEndTime : tweenNextRep.parent === tween.parent ? tweenAbsEndTime + tweenNextRep._delay : tweenNextRep._absoluteStartTime < tweenNextRep._absoluteUpdateStartTime ? tweenNextRep._absoluteStartTime : tweenNextRep._absoluteUpdateStartTime;
				if ((forcedRender || (tweenCurrentTime !== tweenChangeDuration || absoluteTime <= tweenNextRepTakeover || tweenPrevRep && !tweenPrevRepIsCrossParent && (!tweenNextRep || tweenNextRep.parent !== tween.parent)) && (tweenCurrentTime !== 0 || absoluteTime >= tween._absoluteStartTime || tweenPrevRepIsCrossParent && !tween._hasFromValue && !tweenPrevRep._isOverridden && absoluteTime >= tweenPrevRepEndTime || tweenNextRep && !tweenNextRep._isOverridden && tweenNextRep.parent === tween.parent && tweenNextRep._currentTime !== 0 && iterationTime < tweenNextRep._startTime)) && (!tweenPrevRep || tweenPrevRepIsCrossParent || iterationTime >= tween._startTime) && (!tweenHasComposition || !tween._isOverridden && (!tween._isOverlapped || absoluteTime <= tweenAbsEndTime) && (!tweenNextRep || tweenNextRep._isOverridden || absoluteTime <= tweenNextRepTakeover) && (!tweenPrevRep || tweenPrevRep._isOverridden || (!tweenPrevRepIsCrossParent ? absoluteTime >= tweenPrevRepEndTime + tween._delay : absoluteTime >= tween._absoluteStartTime || !tween._hasFromValue && absoluteTime >= tweenPrevRepEndTime)))) {
					const tweenNewTime = tween._currentTime = clamp(iterationTime - tween._startTime, 0, tweenChangeDuration);
					const tweenProgress = tween._ease(tweenNewTime / tween._updateDuration);
					const tweenModifier = tween._modifier;
					const tweenValueType = tween._valueType;
					const tweenType = tween._tweenType;
					const tweenIsObject = tweenType === tweenTypes.OBJECT;
					const tweenIsNumber = tweenValueType === valueTypes.NUMBER;
					const tweenPrecision = tweenIsNumber && tweenIsObject || tweenProgress === 0 || tweenProgress === 1 ? -1 : globals.precision;
					/** @type {String|Number} */
					let value;
					/** @type {Number} */
					let number;
					if (tweenIsNumber) value = number = tweenModifier(round(lerp(tween._fromNumber, tween._toNumber, tweenProgress), tweenPrecision));
					else if (tweenValueType === valueTypes.UNIT) {
						number = tweenModifier(round(lerp(tween._fromNumber, tween._toNumber, tweenProgress), tweenPrecision));
						value = `${number}${tween._unit}`;
					} else if (tweenValueType === valueTypes.COLOR) {
						const ns = tween._numbers;
						const fn = tween._fromNumbers;
						const tn = tween._toNumbers;
						const omt = 1 - tweenProgress;
						const fr = fn[0], fg = fn[1], fb = fn[2];
						const tr = tn[0], tg = tn[1], tb = tn[2];
						ns[0] = tweenModifier(Math.sqrt(fr * fr * omt + tr * tr * tweenProgress));
						ns[1] = tweenModifier(Math.sqrt(fg * fg * omt + tg * tg * tweenProgress));
						ns[2] = tweenModifier(Math.sqrt(fb * fb * omt + tb * tb * tweenProgress));
						ns[3] = tweenModifier(lerp(fn[3], tn[3], tweenProgress));
						if (!tween._setter || internalRender) value = `rgba(${round(ns[0], 0)},${round(ns[1], 0)},${round(ns[2], 0)},${ns[3]})`;
					} else if (tweenValueType === valueTypes.COMPLEX) value = composeComplexValue(tween, tweenProgress, tweenPrecision);
					if (tweenHasComposition) tween._number = number;
					if (!internalRender && tweenComposition !== compositionTypes.blend) {
						const tweenProperty = tween.property;
						tweenTarget = tween.target;
						if (tween._setter) tween._setter(tweenTarget, number, tween);
						else if (tweenIsObject) tweenTarget[tweenProperty] = value;
						else if (tweenType === tweenTypes.ATTRIBUTE)
 /** @type {DOMTarget} */ tweenTarget.setAttribute(tweenProperty, value);
						else {
							tweenStyle = tweenTarget.style;
							if (tweenType === tweenTypes.TRANSFORM) {
								if (tweenTarget !== tweenTargetTransforms) {
									tweenTargetTransforms = tweenTarget;
									tweenTargetTransformsProperties = tweenTarget[transformsSymbol];
								}
								tweenTargetTransformsProperties[tweenProperty] = value;
								tweenTransformsNeedUpdate = 1;
							} else if (tweenType === tweenTypes.CSS) tweenStyle[tweenProperty] = value;
							else if (tweenType === tweenTypes.CSS_VAR) tweenStyle.setProperty(tweenProperty, value);
						}
						if (isCurrentTimeAboveZero) hasRendered = 1;
					} else tween._value = value;
				} else if (tweenCurrentTime && tweenPrevRep && !tweenPrevRepIsCrossParent && iterationTime < tween._startTime) tween._currentTime = 0;
				if (tweenTransformsNeedUpdate && tween._renderTransforms) {
					tweenStyle.transform = buildTransformString(tweenTargetTransformsProperties);
					tweenTransformsNeedUpdate = 0;
				}
				tween = tween._next;
			}
			if (!muteCallbacks && hasRendered)
 /** @type {JSAnimation} */ tickable.onRender(tickable);
		}
		if (!muteCallbacks && isCurrentTimeAboveZero) tickable.onUpdate(tickable);
	}
	if (parent && isSetter) {
		if (!muteCallbacks && (parent.began && !isRunningBackwards && tickableAbsoluteTime > 0 && !completed || isRunningBackwards && tickableAbsoluteTime <= 1e-11 && completed)) {
			tickable.onComplete(tickable);
			tickable.completed = !isRunningBackwards;
		}
	} else if (isCurrentTimeAboveZero && isCurrentTimeEqualOrAboveDuration) {
		if (iterationCount === Infinity) tickable._startTime += tickable.duration;
		else if (tickable._currentIteration >= iterationCount - 1) {
			tickable.paused = true;
			if (!completed && !_hasChildren) {
				tickable.completed = true;
				if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
					tickable.onComplete(tickable);
					tickable._resolve(tickable);
				}
			}
		}
	} else tickable.completed = false;
	return hasRendered;
};
/**
* @param  {Tickable} tickable
* @param  {Number} time
* @param  {Number} muteCallbacks
* @param  {Number} internalRender
* @param  {Number} tickMode
* @return {void}
*/
var tick = (tickable, time, muteCallbacks, internalRender, tickMode) => {
	const _currentIteration = tickable._currentIteration;
	render(tickable, time, muteCallbacks, internalRender, tickMode);
	if (tickable._hasChildren) {
		const tl = tickable;
		const tlIsRunningBackwards = tl.backwards;
		const tlChildrenTime = internalRender ? time : tl._iterationTime;
		const tlCildrenTickTime = now();
		let tlChildrenHasRendered = 0;
		let tlChildrenHaveCompleted = true;
		if (!internalRender && tl._currentIteration !== _currentIteration) {
			const tlIterationDuration = tl.iterationDuration;
			forEachChildren(tl, (child) => {
				if (!tlIsRunningBackwards) {
					if (!child.completed && !child.backwards && child._currentTime < child.iterationDuration) render(child, tlIterationDuration, muteCallbacks, 1, tickModes.FORCE);
					child.began = false;
					child.completed = false;
				} else {
					const childDuration = child.duration;
					const childStartTime = child._offset + child._delay;
					const childEndTime = childStartTime + childDuration;
					if (!muteCallbacks && childDuration <= 1e-11 && (!childStartTime || childEndTime === tlIterationDuration)) child.onComplete(child);
				}
			});
			if (!muteCallbacks) tl.onLoop(tl);
		}
		forEachChildren(tl, (child) => {
			const childTime = round((tlChildrenTime - child._offset) * child._speed, 12);
			if (tlIsRunningBackwards && childTime > child._delay + child.duration) return;
			const childTickMode = child._fps < tl._fps ? child.requestTick(tlCildrenTickTime) : tickMode;
			tlChildrenHasRendered += render(child, childTime, muteCallbacks, internalRender, childTickMode);
			if (!child.completed && tlChildrenHaveCompleted) tlChildrenHaveCompleted = false;
		}, tlIsRunningBackwards);
		if (!muteCallbacks && tlChildrenHasRendered) tl.onRender(tl);
		if ((tlChildrenHaveCompleted || tlIsRunningBackwards) && tl._currentTime >= tl.duration) {
			tl.paused = true;
			if (!tl.completed) {
				tl.completed = true;
				if (!muteCallbacks) {
					tl.onComplete(tl);
					tl._resolve(tl);
				}
			}
		}
	}
};
//#endregion
//#region node_modules/animejs/dist/modules/core/styles.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   JSAnimation,
* } from '../animation/animation.js'
*/
/**
* @import {
*   Target,
*   DOMTarget,
*   Renderable,
*   Tween,
* } from '../types/index.js'
*/
var propertyNamesCache = {};
/**
* @param  {String} propertyName
* @param  {Target} target
* @param  {tweenTypes} tweenType
* @return {String}
*/
var sanitizePropertyName = (propertyName, target, tweenType) => {
	if (tweenType === tweenTypes.TRANSFORM) {
		const t = shortTransforms.get(propertyName);
		return t ? t : propertyName;
	} else if (tweenType === tweenTypes.CSS || tweenType === tweenTypes.ATTRIBUTE && isSvg(target) && propertyName in target.style) {
		const cachedPropertyName = propertyNamesCache[propertyName];
		if (cachedPropertyName) return cachedPropertyName;
		else {
			const lowerCaseName = propertyName ? toLowerCase(propertyName) : propertyName;
			propertyNamesCache[propertyName] = lowerCaseName;
			return lowerCaseName;
		}
	} else return propertyName;
};
/**
* @template {Renderable} T
* @param {T} renderable
* @param {Boolean} [inlineStylesOnly]
* @return {T}
*/
var revertValues = (renderable, inlineStylesOnly = false) => {
	if (renderable._hasChildren) forEachChildren(renderable, (child) => revertValues(child, inlineStylesOnly), true);
	else {
		const animation = renderable;
		animation.pause();
		forEachChildren(animation, (tween) => {
			const tweenProperty = tween.property;
			const tweenTarget = tween.target;
			const tweenType = tween._tweenType;
			const originalInlinedValue = tween._inlineValue;
			const tweenHadNoInlineValue = isNil(originalInlinedValue) || originalInlinedValue === "";
			if (tween._setter) {
				if (!inlineStylesOnly && !tweenHadNoInlineValue) {
					decomposeRawValue(originalInlinedValue, decomposedOriginalValue);
					if (decomposedOriginalValue.d) {
						const src = decomposedOriginalValue.d;
						const dst = tween._numbers;
						for (let i = 0, l = src.length; i < l; i++) dst[i] = src[i];
					} else tween._number = decomposedOriginalValue.n;
					tween._setter(tween.target, tween._number, tween);
				}
			} else if (tweenType === tweenTypes.OBJECT) {
				if (!inlineStylesOnly && !tweenHadNoInlineValue) tweenTarget[tweenProperty] = originalInlinedValue;
			} else if (tweenTarget[isDomSymbol]) {
				if (tweenType === tweenTypes.ATTRIBUTE) {
					if (!inlineStylesOnly) {
						if (tweenHadNoInlineValue)
 /** @type {DOMTarget} */ tweenTarget.removeAttribute(tweenProperty);
						else
 /** @type {DOMTarget} */ tweenTarget.setAttribute(tweenProperty, originalInlinedValue);
					}
				} else {
					const targetStyle = tweenTarget.style;
					if (tweenType === tweenTypes.TRANSFORM) {
						const cachedTransforms = tweenTarget[transformsSymbol];
						if (tweenHadNoInlineValue) delete cachedTransforms[tweenProperty];
						else cachedTransforms[tweenProperty] = originalInlinedValue;
						if (tween._renderTransforms) {
							if (!Object.keys(cachedTransforms).length) targetStyle.removeProperty("transform");
							else targetStyle.transform = buildTransformString(cachedTransforms);
						}
					} else if (tweenHadNoInlineValue) targetStyle.removeProperty(toLowerCase(tweenProperty));
					else targetStyle[tweenProperty] = originalInlinedValue;
				}
			}
			if (tweenTarget[isDomSymbol] && animation._tail === tween) animation.targets.forEach((t) => {
				if (t.getAttribute && t.getAttribute("style") === "") t.removeAttribute("style");
			});
		});
	}
	return renderable;
};
//#endregion
//#region node_modules/animejs/dist/modules/core/clock.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Tickable,
*   Tween,
* } from '../types/index.js'
*/
var Clock = class {
	/** @param {Number} [initTime] */
	constructor(initTime = 0) {
		/** @type {Number} */
		this.deltaTime = 0;
		/** @type {Number} */
		this._currentTime = initTime;
		/** @type {Number} */
		this._lastTickTime = initTime;
		/** @type {Number} */
		this._startTime = initTime;
		/** @type {Number} */
		this._lastTime = initTime;
		/** @type {Number} */
		this._frameDuration = K / 240;
		/** @type {Number} */
		this._fps = 240;
		/** @type {Number} */
		this._speed = 1;
		/** @type {Boolean} */
		this._hasChildren = false;
		/** @type {Tickable|Tween} */
		this._head = null;
		/** @type {Tickable|Tween} */
		this._tail = null;
	}
	get fps() {
		return this._fps;
	}
	set fps(frameRate) {
		const fr = +frameRate;
		const fps = fr < 1e-11 ? minValue : fr;
		const frameDuration = K / fps;
		if (fps > defaults.frameRate) defaults.frameRate = fps;
		this._fps = fps;
		this._frameDuration = frameDuration;
	}
	get speed() {
		return this._speed;
	}
	set speed(playbackRate) {
		const pbr = +playbackRate;
		this._speed = pbr < 1e-11 ? minValue : pbr;
	}
	/**
	* @param  {Number} time
	* @return {tickModes}
	*/
	requestTick(time) {
		const frameDuration = this._frameDuration;
		const elapsed = time - this._lastTickTime;
		const scaled = frameDuration * .25;
		if (elapsed + (scaled < 4 ? scaled : 4) < frameDuration) return tickModes.NONE;
		this._lastTickTime = elapsed >= frameDuration ? time - elapsed % frameDuration : time;
		return tickModes.AUTO;
	}
	/**
	* @param  {Number} time
	* @return {Number}
	*/
	computeDeltaTime(time) {
		const delta = time - this._lastTime;
		this.deltaTime = delta;
		this._lastTime = time;
		return delta;
	}
};
//#endregion
//#region node_modules/animejs/dist/modules/animation/additive.js
/**
* Anime.js - animation - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
var additive = {
	animation: null,
	update: noop
};
/**
* @import {
*   Tween,
*   TweenAdditiveLookups,
* } from '../types/index.js'
*/
/**
* @typedef AdditiveAnimation
* @property {Number} duration
* @property {Number} _offset
* @property {Number} _delay
* @property {Tween} _head
* @property {Tween} _tail
*/
/**
* @param  {TweenAdditiveLookups} lookups
* @return {AdditiveAnimation}
*/
var addAdditiveAnimation = (lookups) => {
	let animation = additive.animation;
	if (!animation) {
		animation = {
			duration: minValue,
			computeDeltaTime: noop,
			_offset: 0,
			_delay: 0,
			_head: null,
			_tail: null
		};
		additive.animation = animation;
		additive.update = () => {
			lookups.forEach((propertyAnimation) => {
				for (let propertyName in propertyAnimation) {
					const tweens = propertyAnimation[propertyName];
					const lookupTween = tweens._head;
					if (lookupTween) {
						const valueType = lookupTween._valueType;
						const additiveValues = valueType === valueTypes.COMPLEX || valueType === valueTypes.COLOR ? cloneArray(lookupTween._fromNumbers) : null;
						let additiveValue = lookupTween._fromNumber;
						let tween = tweens._tail;
						while (tween && tween !== lookupTween) {
							if (additiveValues) for (let i = 0, l = tween._numbers.length; i < l; i++) additiveValues[i] += tween._numbers[i];
							else additiveValue += tween._number;
							tween = tween._prevAdd;
						}
						lookupTween._toNumber = additiveValue;
						lookupTween._toNumbers = additiveValues;
					}
				}
			});
			render(animation, 1, 1, 0, tickModes.FORCE);
		};
	}
	return animation;
};
//#endregion
//#region node_modules/animejs/dist/modules/engine/engine.js
/**
* Anime.js - engine - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   DefaultsParams,
* } from '../types/index.js'
*/
/**
* @import {
*   Tickable,
* } from '../types/index.js'
*/
var engineTickMethod = /*#__PURE__*/ (() => isBrowser ? requestAnimationFrame : setImmediate)();
var engineCancelMethod = /*#__PURE__*/ (() => isBrowser ? cancelAnimationFrame : clearImmediate)();
var Engine = class extends Clock {
	/** @param {Number} [initTime] */
	constructor(initTime) {
		super(initTime);
		this.useDefaultMainLoop = true;
		this.pauseOnDocumentHidden = true;
		/** @type {DefaultsParams} */
		this.defaults = defaults;
		this.paused = true;
		/** @type {Number|NodeJS.Immediate} */
		this.reqId = 0;
	}
	update() {
		const time = this._currentTime = now();
		if (this.requestTick(time)) {
			this.computeDeltaTime(time);
			const engineSpeed = this._speed;
			const engineFps = this._fps;
			let activeTickable = this._head;
			while (activeTickable) {
				const nextTickable = activeTickable._next;
				if (!activeTickable.paused) tick(activeTickable, (time - activeTickable._startTime) * activeTickable._speed * engineSpeed, 0, 0, activeTickable._fps < engineFps ? activeTickable.requestTick(time) : tickModes.AUTO);
				else {
					removeChild(this, activeTickable);
					this._hasChildren = !!this._tail;
					activeTickable._running = false;
					if (activeTickable.completed && !activeTickable._cancelled) activeTickable.cancel();
				}
				activeTickable = nextTickable;
			}
			additive.update();
		}
	}
	wake() {
		if (this.useDefaultMainLoop && !this.reqId) {
			this.requestTick(now());
			this.reqId = engineTickMethod(tickEngine);
		}
		return this;
	}
	pause() {
		if (!this.reqId) return;
		this.paused = true;
		return killEngine();
	}
	resume() {
		if (!this.paused) return;
		this.paused = false;
		forEachChildren(this, (child) => child.resetTime());
		return this.wake();
	}
	get speed() {
		return this._speed * (globals.timeScale === 1 ? 1 : K);
	}
	set speed(playbackRate) {
		const speed = playbackRate * globals.timeScale;
		if (this._speed === speed) return;
		this._speed = speed;
		forEachChildren(this, (child) => child.speed = child._speed);
	}
	get timeUnit() {
		return globals.timeScale === 1 ? "ms" : "s";
	}
	set timeUnit(unit) {
		const secondsScale = .001;
		const isSecond = unit === "s";
		const newScale = isSecond ? secondsScale : 1;
		if (globals.timeScale !== newScale) {
			globals.timeScale = newScale;
			globals.tickThreshold = 200 * newScale;
			const scaleFactor = isSecond ? secondsScale : K;
			/** @type {Number} */
			this.defaults.duration *= scaleFactor;
			this._speed *= scaleFactor;
		}
	}
	get precision() {
		return globals.precision;
	}
	set precision(precision) {
		globals.precision = precision;
	}
};
var engine = /*#__PURE__*/ (() => {
	const engine = new Engine(now());
	if (isBrowser) {
		globalVersions.engine = engine;
		doc.addEventListener("visibilitychange", () => {
			if (!engine.pauseOnDocumentHidden) return;
			doc.hidden ? engine.pause() : engine.resume();
		});
	}
	return engine;
})();
var tickEngine = () => {
	if (engine._head) {
		engine.reqId = engineTickMethod(tickEngine);
		engine.update();
	} else engine.reqId = 0;
};
var killEngine = () => {
	engineCancelMethod(engine.reqId);
	engine.reqId = 0;
	return engine;
};
//#endregion
//#region node_modules/animejs/dist/modules/animation/composition.js
/**
* Anime.js - animation - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   TweenReplaceLookups,
*   TweenAdditiveLookups,
*   TweenPropertySiblings,
*   Tween,
*   Target,
*   TargetsArray,
*   Renderable,
* } from '../types/index.js'
*
* @import {
*   JSAnimation,
* } from '../animation/animation.js'
*/
var lookups = {
	/** @type {TweenReplaceLookups} */
	_rep: /* @__PURE__ */ new WeakMap(),
	/** @type {TweenAdditiveLookups} */
	_add: /* @__PURE__ */ new Map()
};
/**
* @param  {Target} target
* @param  {String} property
* @param  {String} lookup
* @return {TweenPropertySiblings}
*/
var getTweenSiblings = (target, property, lookup = "_rep") => {
	const lookupMap = lookups[lookup];
	let targetLookup = lookupMap.get(target);
	if (!targetLookup) {
		targetLookup = {};
		lookupMap.set(target, targetLookup);
	}
	return targetLookup[property] ? targetLookup[property] : targetLookup[property] = {
		_head: null,
		_tail: null
	};
};
/**
* @param  {Tween} p
* @param  {Tween} c
* @return {Number|Boolean}
*/
var addTweenSortMethod = (p, c) => {
	return p._isOverridden || p._absoluteStartTime > c._absoluteStartTime;
};
/**
* @param {Tween} tween
*/
var overrideTween = (tween) => {
	tween._isOverlapped = 1;
	tween._isOverridden = 1;
	tween._changeDuration = minValue;
	tween._currentTime = minValue;
};
/**
* @param  {Tween} tween
* @param  {TweenPropertySiblings} siblings
* @return {Tween}
*/
var composeTween = (tween, siblings) => {
	const tweenCompositionType = tween._composition;
	if (tweenCompositionType === compositionTypes.replace) {
		const tweenAbsStartTime = tween._absoluteStartTime;
		addChild(siblings, tween, addTweenSortMethod, "_prevRep", "_nextRep");
		const prevSibling = tween._prevRep;
		if (prevSibling) {
			const prevParent = prevSibling.parent;
			const prevAbsEndTime = prevSibling._absoluteEndTime;
			if (tween.parent.id !== prevParent.id && prevParent.iterationCount > 1 && prevAbsEndTime + (prevParent.duration - prevParent.iterationDuration) > tweenAbsStartTime) {
				overrideTween(prevSibling);
				let prevPrevSibling = prevSibling._prevRep;
				while (prevPrevSibling && prevPrevSibling.parent.id === prevParent.id) {
					overrideTween(prevPrevSibling);
					prevPrevSibling = prevPrevSibling._prevRep;
				}
			}
			const absoluteUpdateStartTime = tween._absoluteUpdateStartTime;
			if (prevAbsEndTime > absoluteUpdateStartTime) {
				const prevChangeStartTime = prevSibling._startTime;
				const updatedPrevChangeDuration = round(absoluteUpdateStartTime - (prevAbsEndTime - (prevChangeStartTime + prevSibling._updateDuration)) - prevChangeStartTime, 12);
				prevSibling._changeDuration = updatedPrevChangeDuration;
				prevSibling._currentTime = updatedPrevChangeDuration;
				prevSibling._isOverlapped = 1;
				if (updatedPrevChangeDuration < 1e-11) overrideTween(prevSibling);
			}
			const tweenParentTL = tween.parent.parent;
			if (!tweenParentTL || tweenParentTL !== prevParent.parent) {
				let pausePrevParentAnimation = true;
				forEachChildren(prevParent, (t) => {
					if (!t._isOverlapped) pausePrevParentAnimation = false;
				});
				if (pausePrevParentAnimation) {
					const prevParentTL = prevParent.parent;
					if (prevParentTL) {
						let pausePrevParentTL = true;
						forEachChildren(prevParentTL, (a) => {
							if (a !== prevParent) forEachChildren(a, (t) => {
								if (!t._isOverlapped) pausePrevParentTL = false;
							});
						});
						if (pausePrevParentTL) prevParentTL.cancel();
					} else prevParent.cancel();
				}
			}
		}
	} else if (tweenCompositionType === compositionTypes.blend) {
		const additiveTweenSiblings = getTweenSiblings(tween.target, tween.property, "_add");
		const additiveAnimation = addAdditiveAnimation(lookups._add);
		let lookupTween = additiveTweenSiblings._head;
		if (!lookupTween) {
			lookupTween = { ...tween };
			lookupTween._composition = compositionTypes.replace;
			lookupTween._updateDuration = minValue;
			lookupTween._startTime = 0;
			lookupTween._numbers = cloneArray(tween._fromNumbers);
			lookupTween._number = 0;
			lookupTween._next = null;
			lookupTween._prev = null;
			addChild(additiveTweenSiblings, lookupTween);
			addChild(additiveAnimation, lookupTween);
		}
		const toNumber = tween._toNumber;
		tween._fromNumber = lookupTween._fromNumber - toNumber;
		tween._toNumber = 0;
		tween._numbers = cloneArray(tween._fromNumbers);
		tween._number = 0;
		lookupTween._fromNumber = toNumber;
		if (tween._toNumbers.length) {
			const toNumbers = cloneArray(tween._toNumbers);
			toNumbers.forEach((value, i) => {
				tween._fromNumbers[i] = lookupTween._fromNumbers[i] - value;
				tween._toNumbers[i] = 0;
			});
			lookupTween._fromNumbers = toNumbers;
		}
		addChild(additiveTweenSiblings, tween, null, "_prevAdd", "_nextAdd");
	}
	return tween;
};
/**
* @param  {Tween} tween
* @return {Tween}
*/
var removeTweenSliblings = (tween) => {
	const tweenComposition = tween._composition;
	if (tweenComposition !== compositionTypes.none) {
		const tweenTarget = tween.target;
		const tweenProperty = tween.property;
		const tweenReplaceSiblings = lookups._rep.get(tweenTarget)[tweenProperty];
		removeChild(tweenReplaceSiblings, tween, "_prevRep", "_nextRep");
		if (tweenComposition === compositionTypes.blend) {
			const addTweensLookup = lookups._add;
			const addTargetProps = addTweensLookup.get(tweenTarget);
			if (!addTargetProps) return;
			const additiveTweenSiblings = addTargetProps[tweenProperty];
			const additiveAnimation = additive.animation;
			removeChild(additiveTweenSiblings, tween, "_prevAdd", "_nextAdd");
			const lookupTween = additiveTweenSiblings._head;
			if (lookupTween && lookupTween === additiveTweenSiblings._tail) {
				removeChild(additiveTweenSiblings, lookupTween, "_prevAdd", "_nextAdd");
				removeChild(additiveAnimation, lookupTween);
				let shouldClean = true;
				for (let prop in addTargetProps) if (addTargetProps[prop]._head) {
					shouldClean = false;
					break;
				}
				if (shouldClean) addTweensLookup.delete(tweenTarget);
			}
		}
	}
	return tween;
};
//#endregion
//#region node_modules/animejs/dist/modules/timer/timer.js
/**
* Anime.js - timer - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Callback,
*   TimerParams,
*   Renderable,
*   Tween,
* } from '../types/index.js'
*/
/**
* @import {
*   ScrollObserver,
* } from '../events/scroll.js'
*/
/**
* @import {
*   Timeline,
* } from '../timeline/timeline.js'
*/
/**
* @param  {Timer} timer
* @return {Timer}
*/
var resetTimerProperties = (timer) => {
	timer.paused = true;
	timer.began = false;
	timer.completed = false;
	return timer;
};
/**
* @param  {Timer} timer
* @return {Timer}
*/
var reviveTimer = (timer) => {
	if (!timer._cancelled) return timer;
	if (timer._hasChildren) forEachChildren(timer, reviveTimer);
	else forEachChildren(timer, (tween) => {
		if (tween._composition !== compositionTypes.none) composeTween(tween, getTweenSiblings(tween.target, tween.property));
	});
	timer._cancelled = 0;
	return timer;
};
var timerId = 0;
/** @param {Timer} prev @param {Timer} child */
var sortByPriority = (prev, child) => prev._priority > child._priority;
/**
* Base class used to create Timers, Animations and Timelines
*/
var Timer = class extends Clock {
	/**
	* @param {TimerParams} [parameters]
	* @param {Timeline} [parent]
	* @param {Number} [parentPosition]
	*/
	constructor(parameters = {}, parent = null, parentPosition = 0) {
		super(0);
		++timerId;
		const { id, delay, duration, reversed, alternate, loop, loopDelay, autoplay, frameRate, playbackRate, priority, onComplete, onLoop, onPause, onBegin, onBeforeUpdate, onUpdate } = parameters;
		if (scope.current) scope.current.register(this);
		const timerInitTime = parent ? 0 : engine._lastTickTime;
		const timerDefaults = parent ? parent.defaults : globals.defaults;
		const timerDelay = isFnc(delay) || isUnd(delay) ? timerDefaults.delay : +delay;
		const timerDuration = isFnc(duration) || isUnd(duration) ? Infinity : +duration;
		const timerLoop = setValue(loop, timerDefaults.loop);
		const timerLoopDelay = setValue(loopDelay, timerDefaults.loopDelay);
		let timerIterationCount = timerLoop === true || timerLoop === Infinity || timerLoop < 0 ? Infinity : 
		/** @type {Number} */ timerLoop + 1;
		let offsetPosition = 0;
		if (parent) offsetPosition = parentPosition;
		else {
			if (!engine.reqId) engine.requestTick(now());
			offsetPosition = (engine._lastTickTime - engine._startTime) * globals.timeScale;
		}
		/** @type {String|Number} */
		this.id = !isUnd(id) ? id : timerId;
		/** @type {Timeline} */
		this.parent = parent;
		this.duration = clampInfinity((timerDuration + timerLoopDelay) * timerIterationCount - timerLoopDelay) || 1e-11;
		/** @type {Boolean} */
		this.backwards = false;
		/** @type {Boolean} */
		this.paused = true;
		/** @type {Boolean} */
		this.began = false;
		/** @type {Boolean} */
		this.completed = false;
		/** @type {Callback<this>} */
		this.onBegin = onBegin || timerDefaults.onBegin;
		/** @type {Callback<this>} */
		this.onBeforeUpdate = onBeforeUpdate || timerDefaults.onBeforeUpdate;
		/** @type {Callback<this>} */
		this.onUpdate = onUpdate || timerDefaults.onUpdate;
		/** @type {Callback<this>} */
		this.onLoop = onLoop || timerDefaults.onLoop;
		/** @type {Callback<this>} */
		this.onPause = onPause || timerDefaults.onPause;
		/** @type {Callback<this>} */
		this.onComplete = onComplete || timerDefaults.onComplete;
		/** @type {Number} */
		this.iterationDuration = timerDuration;
		/** @type {Number} */
		this.iterationCount = timerIterationCount;
		/** @type {Boolean|ScrollObserver} */
		this._autoplay = parent ? false : setValue(autoplay, timerDefaults.autoplay);
		/** @type {Number} */
		this._offset = offsetPosition;
		/** @type {Number} */
		this._delay = timerDelay;
		/** @type {Number} */
		this._loopDelay = timerLoopDelay;
		/** @type {Number} */
		this._iterationTime = 0;
		/** @type {Number} */
		this._currentIteration = 0;
		/** @type {Function} */
		this._resolve = noop;
		/** @type {Boolean} */
		this._running = false;
		/** @type {Number} */
		this._reversed = +setValue(reversed, timerDefaults.reversed);
		/** @type {Number} */
		this._reverse = this._reversed;
		/** @type {Number} */
		this._cancelled = 0;
		/** @type {Boolean} */
		this._alternate = setValue(alternate, timerDefaults.alternate);
		/** @type {Renderable} */
		this._prev = null;
		/** @type {Renderable} */
		this._next = null;
		/** @type {Number} */
		this._lastTickTime = timerInitTime;
		/** @type {Number} */
		this._startTime = timerInitTime;
		/** @type {Number} */
		this._lastTime = timerInitTime;
		/** @type {Number} */
		this._fps = setValue(frameRate, timerDefaults.frameRate);
		/** @type {Number} */
		this._speed = setValue(playbackRate, timerDefaults.playbackRate);
		/** @type {Number} */
		this._priority = +setValue(priority, 1);
	}
	get cancelled() {
		return !!this._cancelled;
	}
	set cancelled(cancelled) {
		cancelled ? this.cancel() : this.reset(true).play();
	}
	get currentTime() {
		return clamp(round(this._currentTime, globals.precision), -this._delay, this.duration);
	}
	set currentTime(time) {
		const paused = this.paused;
		this.pause().seek(+time);
		if (!paused) this.resume();
	}
	get iterationCurrentTime() {
		return clamp(round(this._iterationTime, globals.precision), 0, this.iterationDuration);
	}
	set iterationCurrentTime(time) {
		this.currentTime = this.iterationDuration * this._currentIteration + time;
	}
	get progress() {
		return clamp(round(this._currentTime / this.duration, 10), 0, 1);
	}
	set progress(progress) {
		this.currentTime = this.duration * progress;
	}
	get iterationProgress() {
		return clamp(round(this._iterationTime / this.iterationDuration, 10), 0, 1);
	}
	set iterationProgress(progress) {
		const iterationDuration = this.iterationDuration;
		this.currentTime = iterationDuration * this._currentIteration + iterationDuration * progress;
	}
	get currentIteration() {
		return this._currentIteration;
	}
	set currentIteration(iterationCount) {
		this.currentTime = this.iterationDuration * clamp(+iterationCount, 0, this.iterationCount - 1);
	}
	get reversed() {
		return !!this._reversed;
	}
	set reversed(reverse) {
		reverse ? this.reverse() : this.play();
	}
	get speed() {
		return super.speed;
	}
	set speed(playbackRate) {
		super.speed = playbackRate;
		this.resetTime();
	}
	/**
	* @param  {Boolean} [softReset]
	* @return {this}
	*/
	reset(softReset = false) {
		reviveTimer(this);
		if (this._reversed && !this._reverse) this.reversed = false;
		this._iterationTime = this.iterationDuration;
		tick(this, 0, 1, ~~softReset, tickModes.FORCE);
		resetTimerProperties(this);
		if (this._hasChildren) forEachChildren(this, resetTimerProperties);
		return this;
	}
	/**
	* @param  {Boolean} internalRender
	* @return {this}
	*/
	init(internalRender = false) {
		this.fps = this._fps;
		this.speed = this._speed;
		if (!internalRender && this._hasChildren) tick(this, this.duration, 1, ~~internalRender, tickModes.FORCE);
		this.reset(internalRender);
		const autoplay = this._autoplay;
		if (autoplay === true) this.resume();
		else if (autoplay && !isUnd(
			/** @type {ScrollObserver} */
			autoplay.linked
		))
 /** @type {ScrollObserver} */ autoplay.link(this);
		return this;
	}
	/** @return {this} */
	resetTime() {
		const timeScale = 1 / (this._speed * engine._speed);
		this._startTime = now() - (this._currentTime + this._delay) * timeScale;
		return this;
	}
	/** @return {this} */
	pause() {
		if (this.paused) return this;
		this.paused = true;
		this.onPause(this);
		return this;
	}
	/** @return {this} */
	resume() {
		if (!this.paused) return this;
		this.paused = false;
		if (this.duration <= 1e-11 && !this._hasChildren) tick(this, minValue, 0, 0, tickModes.FORCE);
		else {
			if (!this._running) {
				addChild(engine, this, sortByPriority);
				engine._hasChildren = true;
				this._running = true;
			}
			this.resetTime();
			this._startTime -= 12;
			engine.wake();
		}
		return this;
	}
	/** @return {this} */
	restart() {
		return this.reset().resume();
	}
	/**
	* @param  {Number} time
	* @param  {Boolean|Number} [muteCallbacks]
	* @param  {Boolean|Number} [internalRender]
	* @return {this}
	*/
	seek(time, muteCallbacks = 0, internalRender = 0) {
		reviveTimer(this);
		this.completed = false;
		const isPaused = this.paused;
		this.paused = true;
		tick(this, time + this._delay, ~~muteCallbacks, ~~internalRender, tickModes.AUTO);
		return isPaused ? this : this.resume();
	}
	/** @return {this} */
	alternate() {
		const reversed = this._reversed;
		const count = this.iterationCount;
		const duration = this.iterationDuration;
		const iterations = count === Infinity ? floor(maxValue / duration) : count;
		this._reversed = +(this._alternate && !(iterations % 2) ? reversed : !reversed);
		if (count === Infinity) this.iterationProgress = this._reversed ? 1 - this.iterationProgress : this.iterationProgress;
		else this.seek(duration * iterations - this._currentTime);
		this.resetTime();
		return this;
	}
	/** @return {this} */
	play() {
		if (this._reversed) this.alternate();
		return this.resume();
	}
	/** @return {this} */
	reverse() {
		if (!this._reversed) this.alternate();
		return this.resume();
	}
	/** @return {this} */
	cancel() {
		if (this._hasChildren) forEachChildren(this, (child) => child.cancel(), true);
		else forEachChildren(this, removeTweenSliblings);
		this._cancelled = 1;
		return this.pause();
	}
	/**
	* @param  {Number} newDuration
	* @return {this}
	*/
	stretch(newDuration) {
		const currentDuration = this.duration;
		const normlizedDuration = normalizeTime(newDuration);
		if (currentDuration === normlizedDuration) return this;
		const timeScale = newDuration / currentDuration;
		const isSetter = newDuration <= minValue;
		this.duration = isSetter ? minValue : normlizedDuration;
		this.iterationDuration = isSetter ? minValue : normalizeTime(this.iterationDuration * timeScale);
		this._offset *= timeScale;
		this._delay *= timeScale;
		this._loopDelay *= timeScale;
		return this;
	}
	/**
	* Cancels the timer by seeking it back to 0 and reverting the attached scroller if necessary
	* @return {this}
	*/
	revert() {
		tick(this, 0, 1, 0, tickModes.AUTO);
		const ap = this._autoplay;
		if (ap && ap.linked && ap.linked === this) ap.revert();
		return this.cancel();
	}
	/**
	* Imediatly completes the timer, cancels it and triggers the onComplete callback
	* @param  {Boolean|Number} [muteCallbacks]
	* @return {this}
	*/
	complete(muteCallbacks = 0) {
		return this.seek(this.duration, muteCallbacks).cancel();
	}
	/**
	* @typedef {this & {then: null}} ResolvedTimer
	*/
	/**
	* @param  {Callback<ResolvedTimer>} [callback]
	* @return Promise<this>
	*/
	then(callback = noop) {
		const then = this.then;
		const onResolve = () => {
			this.then = null;
			callback(this);
			this.then = then;
			this._resolve = noop;
		};
		return new Promise((r) => {
			this._resolve = () => r(onResolve());
			if (this.completed) this._resolve();
			return this;
		});
	}
};
//#endregion
//#region node_modules/animejs/dist/modules/core/targets.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   DOMTarget,
*   DOMTargetsParam,
*   JSTargetsArray,
*   TargetsParam,
*   JSTargetsParam,
*   TargetsArray,
*   DOMTargetsArray,
* } from '../types/index.js'
*/
/**
* @param  {DOMTargetsParam|TargetsParam} v
* @return {NodeList|HTMLCollection}
*/
function getNodeList(v) {
	const n = isStr(v) ? scope.root.querySelectorAll(v) : v;
	if (n instanceof NodeList || n instanceof HTMLCollection) return n;
}
/**
* @overload
* @param  {DOMTargetsParam} targets
* @return {DOMTargetsArray}
*
* @overload
* @param  {JSTargetsParam} targets
* @return {JSTargetsArray}
*
* @overload
* @param  {TargetsParam} targets
* @return {TargetsArray}
*
* @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
*/
function parseTargets(targets) {
	if (isNil(targets)) return [];
	if (!isBrowser) return isArr(targets) && targets.flat(Infinity) || [targets];
	if (isArr(targets)) {
		const flattened = targets.flat(Infinity);
		/** @type {TargetsArray} */
		const parsed = [];
		for (let i = 0, l = flattened.length; i < l; i++) {
			const item = flattened[i];
			if (!isNil(item)) {
				const nodeList = getNodeList(item);
				if (nodeList) for (let j = 0, jl = nodeList.length; j < jl; j++) {
					const subItem = nodeList[j];
					if (!isNil(subItem)) {
						let isDuplicate = false;
						for (let k = 0, kl = parsed.length; k < kl; k++) if (parsed[k] === subItem) {
							isDuplicate = true;
							break;
						}
						if (!isDuplicate) parsed.push(subItem);
					}
				}
				else {
					let isDuplicate = false;
					for (let j = 0, jl = parsed.length; j < jl; j++) if (parsed[j] === item) {
						isDuplicate = true;
						break;
					}
					if (!isDuplicate) parsed.push(item);
				}
			}
		}
		return parsed;
	}
	const nodeList = getNodeList(targets);
	if (nodeList) return Array.from(nodeList);
	return [targets];
}
/**
* @overload
* @param  {DOMTargetsParam} targets
* @return {DOMTargetsArray}
*
* @overload
* @param  {JSTargetsParam} targets
* @return {JSTargetsArray}
*
* @overload
* @param  {TargetsParam} targets
* @return {TargetsArray}
*
* @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
*/
function registerTargets(targets) {
	const parsedTargetsArray = parseTargets(targets);
	const parsedTargetsLength = parsedTargetsArray.length;
	for (let i = 0; i < parsedTargetsLength; i++) {
		const target = parsedTargetsArray[i];
		if (!target[isRegisteredTargetSymbol]) {
			target[isRegisteredTargetSymbol] = true;
			const isSvgType = isSvg(target);
			if (target.nodeType || isSvgType) {
				target[isDomSymbol] = true;
				target[isSvgSymbol] = isSvgType;
				target[transformsSymbol] = {};
			}
		}
	}
	return parsedTargetsArray;
}
//#endregion
//#region node_modules/animejs/dist/modules/core/units.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
var angleUnitsMap = {
	"deg": 1,
	"rad": 180 / PI,
	"turn": 360
};
var convertedValuesCache = {};
/**
* @import {
*   DOMTarget,
*   TweenDecomposedValue,
* } from '../types/index.js'
*/
/**
* @param  {DOMTarget} el
* @param  {TweenDecomposedValue} decomposedValue
* @param  {String} unit
* @param  {Boolean} [force]
* @return {TweenDecomposedValue}
*/
var convertValueUnit = (el, decomposedValue, unit, force = false) => {
	const currentUnit = decomposedValue.u;
	const currentNumber = decomposedValue.n;
	if (decomposedValue.t === valueTypes.UNIT && currentUnit === unit) return decomposedValue;
	const cachedKey = currentNumber + currentUnit + unit;
	const cached = convertedValuesCache[cachedKey];
	if (!isUnd(cached) && !force) decomposedValue.n = cached;
	else {
		let convertedValue;
		if (currentUnit in angleUnitsMap) convertedValue = currentNumber * angleUnitsMap[currentUnit] / angleUnitsMap[unit];
		else {
			const baseline = 100;
			const tempEl = el.cloneNode();
			const parentNode = el.parentNode;
			const parentEl = parentNode && parentNode !== doc ? parentNode : doc.body;
			parentEl.appendChild(tempEl);
			const elStyle = tempEl.style;
			elStyle.width = baseline + currentUnit;
			const currentUnitWidth = tempEl.offsetWidth || baseline;
			elStyle.width = baseline + unit;
			const factor = currentUnitWidth / (tempEl.offsetWidth || baseline);
			parentEl.removeChild(tempEl);
			convertedValue = factor * currentNumber;
		}
		decomposedValue.n = convertedValue;
		convertedValuesCache[cachedKey] = convertedValue;
	}
	decomposedValue.t, valueTypes.UNIT;
	decomposedValue.u = unit;
	return decomposedValue;
};
//#endregion
//#region node_modules/animejs/dist/modules/easings/none.js
/**
* Anime.js - easings - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   EasingFunction,
* } from '../types/index.js'
*/
/** @type {EasingFunction} */
var none = (t) => t;
//#endregion
//#region node_modules/animejs/dist/modules/easings/eases/parser.js
/**
* Anime.js - easings - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   EasingFunction,
*   EasingFunctionWithParams,
*   EasingParam,
*   BackEasing,
*   ElasticEasing,
*   PowerEasing,
* } from '../../types/index.js'
*/
/** @type {PowerEasing} */
var easeInPower = (p = 1.68) => (t) => pow(t, +p);
/**
* @callback EaseType
* @param {EasingFunction} Ease
* @return {EasingFunction}
*/
/** @type {Record<String, EaseType>} */
var easeTypes = {
	in: (easeIn) => (t) => easeIn(t),
	out: (easeIn) => (t) => 1 - easeIn(1 - t),
	inOut: (easeIn) => (t) => t < .5 ? easeIn(t * 2) / 2 : 1 - easeIn(t * -2 + 2) / 2,
	outIn: (easeIn) => (t) => t < .5 ? (1 - easeIn(1 - t * 2)) / 2 : (easeIn(t * 2 - 1) + 1) / 2
};
/**
* Easing functions adapted and simplified from https://robertpenner.com/easing/
* (c) 2001 Robert Penner
*/
var halfPI = PI / 2;
var doublePI = PI * 2;
/** @type {Record<String, EasingFunctionWithParams|EasingFunction>} */
var easeInFunctions = {
	[""]: easeInPower,
	Quad: easeInPower(2),
	Cubic: easeInPower(3),
	Quart: easeInPower(4),
	Quint: easeInPower(5),
	/** @type {EasingFunction} */
	Sine: (t) => 1 - cos(t * halfPI),
	/** @type {EasingFunction} */
	Circ: (t) => 1 - sqrt(1 - t * t),
	/** @type {EasingFunction} */
	Expo: (t) => t ? pow(2, 10 * t - 10) : 0,
	/** @type {EasingFunction} */
	Bounce: (t) => {
		let pow2, b = 4;
		while (t < ((pow2 = pow(2, --b)) - 1) / 11);
		return 1 / pow(4, 3 - b) - 7.5625 * pow((pow2 * 3 - 2) / 22 - t, 2);
	},
	/** @type {BackEasing} */
	Back: (overshoot = 1.7) => (t) => (+overshoot + 1) * t * t * t - +overshoot * t * t,
	/** @type {ElasticEasing} */
	Elastic: (amplitude = 1, period = .3) => {
		const a = clamp(+amplitude, 1, 10);
		const p = clamp(+period, minValue, 2);
		const s = p / doublePI * asin(1 / a);
		const e = doublePI / p;
		return (t) => t === 0 || t === 1 ? t : -a * pow(2, -10 * (1 - t)) * sin((1 - t - s) * e);
	}
};
/**
* @typedef  {Object} EasesFunctions
* @property {EasingFunction} linear
* @property {EasingFunction} none
* @property {PowerEasing} in
* @property {PowerEasing} out
* @property {PowerEasing} inOut
* @property {PowerEasing} outIn
* @property {EasingFunction} inQuad
* @property {EasingFunction} outQuad
* @property {EasingFunction} inOutQuad
* @property {EasingFunction} outInQuad
* @property {EasingFunction} inCubic
* @property {EasingFunction} outCubic
* @property {EasingFunction} inOutCubic
* @property {EasingFunction} outInCubic
* @property {EasingFunction} inQuart
* @property {EasingFunction} outQuart
* @property {EasingFunction} inOutQuart
* @property {EasingFunction} outInQuart
* @property {EasingFunction} inQuint
* @property {EasingFunction} outQuint
* @property {EasingFunction} inOutQuint
* @property {EasingFunction} outInQuint
* @property {EasingFunction} inSine
* @property {EasingFunction} outSine
* @property {EasingFunction} inOutSine
* @property {EasingFunction} outInSine
* @property {EasingFunction} inCirc
* @property {EasingFunction} outCirc
* @property {EasingFunction} inOutCirc
* @property {EasingFunction} outInCirc
* @property {EasingFunction} inExpo
* @property {EasingFunction} outExpo
* @property {EasingFunction} inOutExpo
* @property {EasingFunction} outInExpo
* @property {EasingFunction} inBounce
* @property {EasingFunction} outBounce
* @property {EasingFunction} inOutBounce
* @property {EasingFunction} outInBounce
* @property {BackEasing} inBack
* @property {BackEasing} outBack
* @property {BackEasing} inOutBack
* @property {BackEasing} outInBack
* @property {ElasticEasing} inElastic
* @property {ElasticEasing} outElastic
* @property {ElasticEasing} inOutElastic
* @property {ElasticEasing} outInElastic
*/
var eases = /*#__PURE__ */ (() => {
	const list = {
		linear: none,
		none
	};
	for (let type in easeTypes) for (let name in easeInFunctions) {
		const easeIn = easeInFunctions[name];
		const easeType = easeTypes[type];
		list[type + name] = name === "" || name === "Back" || name === "Elastic" ? (a, b) => easeType(
			/** @type {EasingFunctionWithParams} */
			easeIn(a, b)
		) : easeType(easeIn);
	}
	return list;
})();
/** @type {Record<String, EasingFunction>} */
var easesLookups = {
	linear: none,
	none
};
/**
* @param  {String} string
* @return {EasingFunction}
*/
var parseEaseString = (string) => {
	if (easesLookups[string]) return easesLookups[string];
	if (string.indexOf("(") <= -1) {
		const parsedFn = easeTypes[string] || string.includes("Back") || string.includes("Elastic") ? eases[string]() : eases[string];
		return parsedFn ? easesLookups[string] = parsedFn : none;
	} else {
		const split = string.slice(0, -1).split("(");
		const parsedFn = eases[split[0]];
		return parsedFn ? easesLookups[string] = parsedFn(...split[1].split(",")) : none;
	}
};
var deprecated = [
	"steps(",
	"irregular(",
	"linear(",
	"cubicBezier("
];
/**
* @param  {EasingParam} ease
* @return {EasingFunction}
*/
var parseEase = (ease) => {
	if (isStr(ease)) {
		for (let i = 0, l = deprecated.length; i < l; i++) if (stringStartsWith(ease, deprecated[i])) {
			console.warn(`String syntax for \`ease: "${ease}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${ease}\``);
			return none;
		}
	}
	return isFnc(ease) ? ease : isStr(ease) ? parseEaseString(ease) : none;
};
//#endregion
//#region node_modules/animejs/dist/modules/animation/animation.js
/**
* Anime.js - animation - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Tween,
*   TweenKeyValue,
*   TweenParamsOptions,
*   TweenValues,
*   DurationKeyframes,
*   PercentageKeyframes,
*   AnimationParams,
*   TweenPropValue,
*   ArraySyntaxValue,
*   TargetsParam,
*   TimerParams,
*   TweenParamValue,
*   DOMTarget,
*   TargetsArray,
*   Callback,
*   EasingFunction,
* } from '../types/index.js'
*
* @import {
*   Timeline,
* } from '../timeline/timeline.js'
*
* @import {
*   Spring,
* } from '../easings/spring/index.js'
*/
var fromTargetObject = createDecomposedValueTargetObject();
var toTargetObject = createDecomposedValueTargetObject();
var inlineStylesStore = {};
var toFunctionStore = { func: null };
var fromFunctionStore = { func: null };
var keyframesTargetArray = [null];
var fastSetValuesArray = [null, null];
/** @type {TweenKeyValue} */
var keyObjectTarget = { to: null };
var tweenId = 0;
var JSAnimationId = 0;
var keyframes;
/** @type {TweenParamsOptions & TweenValues} */
var key;
/**
* @param {DurationKeyframes | PercentageKeyframes} keyframes
* @param {AnimationParams} parameters
* @return {AnimationParams}
*/
var generateKeyframes = (keyframes, parameters) => {
	/** @type {AnimationParams} */
	const properties = {};
	if (isArr(keyframes)) {
		const propertyNames = [].concat(...keyframes.map((key) => Object.keys(key))).filter(isKey);
		for (let i = 0, l = propertyNames.length; i < l; i++) {
			const propName = propertyNames[i];
			properties[propName] = keyframes.map((key) => {
				/** @type {TweenKeyValue} */
				const newKey = {};
				for (let p in key) {
					const keyValue = key[p];
					if (isKey(p)) {
						if (p === propName) newKey.to = keyValue;
					} else newKey[p] = keyValue;
				}
				return newKey;
			});
		}
	} else {
		const totalDuration = setValue(parameters.duration, globals.defaults.duration);
		Object.keys(keyframes).map((key) => {
			return {
				o: parseFloat(key) / 100,
				p: keyframes[key]
			};
		}).sort((a, b) => a.o - b.o).forEach((key) => {
			const offset = key.o;
			const prop = key.p;
			for (let name in prop) if (isKey(name)) {
				let propArray = properties[name];
				if (!propArray) propArray = properties[name] = [];
				const duration = offset * totalDuration;
				let length = propArray.length;
				let prevKey = propArray[length - 1];
				const keyObj = { to: prop[name] };
				let durProgress = 0;
				for (let i = 0; i < length; i++) durProgress += propArray[i].duration;
				if (length === 1) keyObj.from = prevKey.to;
				if (prop.ease) keyObj.ease = prop.ease;
				keyObj.duration = duration - (length ? durProgress : 0);
				propArray.push(keyObj);
			}
			return key;
		});
		for (let name in properties) {
			const propArray = properties[name];
			let prevEase;
			for (let i = 0, l = propArray.length; i < l; i++) {
				const prop = propArray[i];
				const currentEase = prop.ease;
				prop.ease = prevEase ? prevEase : void 0;
				prevEase = currentEase;
			}
			if (!propArray[0].duration) propArray.shift();
		}
	}
	return properties;
};
var JSAnimation = class extends Timer {
	/**
	* @param {TargetsParam} targets
	* @param {AnimationParams} parameters
	* @param {Timeline} [parent]
	* @param {Number} [parentPosition]
	* @param {Boolean} [fastSet=false]
	* @param {Number} [index=0]
	* @param {TargetsArray} [allTargets]
	*/
	constructor(targets, parameters, parent, parentPosition, fastSet = false, index = 0, allTargets) {
		super(parameters, parent, parentPosition);
		/** @type {Tween} */
		this._head;
		/** @type {Tween} */
		this._tail;
		++JSAnimationId;
		const parsedTargets = registerTargets(targets);
		const targetsLength = parsedTargets.length;
		const kfParams = parameters.keyframes;
		const params = kfParams ? mergeObjects(generateKeyframes(kfParams, parameters), parameters) : parameters;
		const { id, delay, duration, ease, playbackEase, modifier, composition, onRender } = params;
		const animDefaults = parent ? parent.defaults : globals.defaults;
		const animEase = setValue(ease, animDefaults.ease);
		const animPlaybackEase = setValue(playbackEase, animDefaults.playbackEase);
		const parsedAnimPlaybackEase = animPlaybackEase ? parseEase(animPlaybackEase) : null;
		const hasSpring = !isUnd(
			/** @type {Spring} */
			animEase.ease
		);
		const tEasing = hasSpring ? animEase.ease : setValue(ease, parsedAnimPlaybackEase ? "linear" : animDefaults.ease);
		const tDuration = hasSpring ? animEase.settlingDuration : setValue(duration, animDefaults.duration);
		const tDelay = setValue(delay, animDefaults.delay);
		const tModifier = modifier || animDefaults.modifier;
		const tComposition = isUnd(composition) && targetsLength >= 1e3 ? compositionTypes.none : !isUnd(composition) ? composition : animDefaults.composition;
		const absoluteOffsetTime = this._offset + (parent ? parent._offset : 0);
		if (hasSpring) /** @type {Spring} */ animEase.parent = this;
		let iterationDuration = NaN;
		let iterationDelay = NaN;
		let animationAnimationLength = 0;
		let shouldTriggerRender = 0;
		for (let targetIndex = 0; targetIndex < targetsLength; targetIndex++) {
			const target = parsedTargets[targetIndex];
			const ti = index || targetIndex;
			const tl = allTargets || parsedTargets;
			let lastTransformGroupIndex = NaN;
			let lastTransformGroupLength = NaN;
			for (let p in params) if (isKey(p)) {
				const tweenType = getTweenType(target, p);
				const adapterProp = resolveAdapterEntry(target, p);
				const propName = sanitizePropertyName(p, target, tweenType);
				let propValue = params[p];
				const isPropValueArray = isArr(propValue);
				if (fastSet && !isPropValueArray) {
					fastSetValuesArray[0] = propValue;
					fastSetValuesArray[1] = propValue;
					propValue = fastSetValuesArray;
				}
				if (isPropValueArray) {
					const arrayLength = propValue.length;
					const isNotObjectValue = !isObj(propValue[0]);
					if (arrayLength === 2 && isNotObjectValue) {
						keyObjectTarget.to = propValue;
						keyframesTargetArray[0] = keyObjectTarget;
						keyframes = keyframesTargetArray;
					} else if (arrayLength > 2 && isNotObjectValue) {
						keyframes = [];
						/** @type {Array.<Number>} */ propValue.forEach((v, i) => {
							if (!i) fastSetValuesArray[0] = v;
							else if (i === 1) {
								fastSetValuesArray[1] = v;
								keyframes.push(fastSetValuesArray);
							} else keyframes.push(v);
						});
					} else keyframes = propValue;
				} else {
					keyframesTargetArray[0] = propValue;
					keyframes = keyframesTargetArray;
				}
				let siblings = null;
				let prevTween = null;
				let firstTweenChangeStartTime = NaN;
				let lastTweenChangeEndTime = 0;
				let tweenIndex = 0;
				for (let l = keyframes.length; tweenIndex < l; tweenIndex++) {
					const keyframe = keyframes[tweenIndex];
					if (isObj(keyframe)) key = keyframe;
					else {
						keyObjectTarget.to = keyframe;
						key = keyObjectTarget;
					}
					toFunctionStore.func = null;
					fromFunctionStore.func = null;
					const computedComposition = getFunctionValue(setValue(key.composition, tComposition), target, ti, tl, null, null);
					const tweenComposition = isNum(computedComposition) ? computedComposition : compositionTypes[computedComposition];
					if (!siblings && tweenComposition !== compositionTypes.none) siblings = getTweenSiblings(target, propName);
					const tailTween = siblings ? siblings._tail : null;
					const prevSiblingTween = parent && tailTween && tailTween.parent.parent === parent ? tailTween : prevTween;
					const computedToValue = getFunctionValue(key.to, target, ti, tl, toFunctionStore, prevSiblingTween);
					let tweenToValue;
					if (isObj(computedToValue) && !isUnd(computedToValue.to)) {
						key = computedToValue;
						tweenToValue = computedToValue.to;
					} else tweenToValue = computedToValue;
					const tweenFromValue = getFunctionValue(key.from, target, ti, tl, fromFunctionStore, prevSiblingTween);
					const easeToParse = key.ease || tEasing;
					const easeFunctionResult = getFunctionValue(easeToParse, target, ti, tl, null, prevSiblingTween);
					const keyEasing = isFnc(easeFunctionResult) || isStr(easeFunctionResult) ? easeFunctionResult : easeToParse;
					const hasSpring = !isUnd(keyEasing) && !isUnd(
						/** @type {Spring} */
						keyEasing.ease
					);
					const tweenEasing = hasSpring ? keyEasing.ease : keyEasing;
					const tweenDuration = hasSpring ? keyEasing.settlingDuration : getFunctionValue(setValue(key.duration, l > 1 ? getFunctionValue(tDuration, target, ti, tl, null, prevSiblingTween) / l : tDuration), target, ti, tl, null, prevSiblingTween);
					const tweenDelay = getFunctionValue(setValue(key.delay, !tweenIndex ? tDelay : 0), target, ti, tl, null, prevSiblingTween);
					const tweenModifier = key.modifier || tModifier;
					const hasFromvalue = !isUnd(tweenFromValue);
					const hasToValue = !isUnd(tweenToValue);
					const isFromToArray = isArr(tweenToValue);
					const isFromToValue = isFromToArray || hasFromvalue && hasToValue;
					const tweenUpdateStartLocal = prevTween ? lastTweenChangeEndTime : 0;
					const tweenStartTime = prevTween ? lastTweenChangeEndTime + tweenDelay : tweenDelay;
					const absoluteStartTime = round(absoluteOffsetTime + tweenStartTime, 12);
					const absoluteUpdateStartTime = round(absoluteOffsetTime + tweenUpdateStartLocal, 12);
					if (!shouldTriggerRender && (hasFromvalue || isFromToArray)) shouldTriggerRender = 1;
					let prevSibling = prevTween;
					if (tweenComposition !== compositionTypes.none) {
						let nextSibling = siblings._head;
						while (nextSibling && nextSibling._absoluteStartTime <= absoluteStartTime) {
							if (!nextSibling._isOverridden) prevSibling = nextSibling;
							nextSibling = nextSibling._nextRep;
							if (nextSibling && nextSibling._absoluteStartTime >= absoluteStartTime) while (nextSibling) {
								overrideTween(nextSibling);
								nextSibling = nextSibling._nextRep;
							}
						}
					}
					if (isFromToValue) {
						decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[0], target, ti, tl, fromFunctionStore, prevSiblingTween) : tweenFromValue, fromTargetObject);
						decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[1], target, ti, tl, toFunctionStore, prevSiblingTween) : tweenToValue, toTargetObject);
						const originalValue = getOriginalAnimatableValue(target, propName, tweenType, inlineStylesStore);
						if (fromTargetObject.t === valueTypes.NUMBER) {
							if (prevSibling) {
								if (prevSibling._valueType === valueTypes.UNIT) {
									fromTargetObject.t = valueTypes.UNIT;
									fromTargetObject.u = prevSibling._unit;
								}
							} else {
								decomposeRawValue(originalValue, decomposedOriginalValue);
								if (decomposedOriginalValue.t === valueTypes.UNIT) {
									fromTargetObject.t = valueTypes.UNIT;
									fromTargetObject.u = decomposedOriginalValue.u;
								}
							}
						}
					} else {
						if (hasToValue) decomposeRawValue(tweenToValue, toTargetObject);
						else if (prevTween) decomposeTweenValue(prevTween, toTargetObject);
						else decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value : getOriginalAnimatableValue(target, propName, tweenType, inlineStylesStore), toTargetObject);
						if (hasFromvalue) decomposeRawValue(tweenFromValue, fromTargetObject);
						else if (prevTween) decomposeTweenValue(prevTween, fromTargetObject);
						else decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value : getOriginalAnimatableValue(target, propName, tweenType, inlineStylesStore), fromTargetObject);
					}
					if (fromTargetObject.o) fromTargetObject.n = getRelativeValue(!prevSibling ? decomposeRawValue(getOriginalAnimatableValue(target, propName, tweenType, inlineStylesStore), decomposedOriginalValue).n : prevSibling._toNumber, fromTargetObject.n, fromTargetObject.o);
					if (toTargetObject.o) toTargetObject.n = getRelativeValue(fromTargetObject.n, toTargetObject.n, toTargetObject.o);
					if (fromTargetObject.t !== toTargetObject.t) {
						if (fromTargetObject.t === valueTypes.COMPLEX || toTargetObject.t === valueTypes.COMPLEX) {
							const complexValue = fromTargetObject.t === valueTypes.COMPLEX ? fromTargetObject : toTargetObject;
							const notComplexValue = fromTargetObject.t === valueTypes.COMPLEX ? toTargetObject : fromTargetObject;
							notComplexValue.t = valueTypes.COMPLEX;
							notComplexValue.s = cloneArray(complexValue.s);
							notComplexValue.d = complexValue.d.map(() => notComplexValue.n);
						} else if (fromTargetObject.t === valueTypes.UNIT || toTargetObject.t === valueTypes.UNIT) {
							const unitValue = fromTargetObject.t === valueTypes.UNIT ? fromTargetObject : toTargetObject;
							const notUnitValue = fromTargetObject.t === valueTypes.UNIT ? toTargetObject : fromTargetObject;
							notUnitValue.t = valueTypes.UNIT;
							notUnitValue.u = unitValue.u;
						} else if (fromTargetObject.t === valueTypes.COLOR || toTargetObject.t === valueTypes.COLOR) {
							const colorValue = fromTargetObject.t === valueTypes.COLOR ? fromTargetObject : toTargetObject;
							const notColorValue = fromTargetObject.t === valueTypes.COLOR ? toTargetObject : fromTargetObject;
							notColorValue.t = valueTypes.COLOR;
							notColorValue.d = colorValue.d.map(() => 0);
						}
					}
					if (fromTargetObject.u !== toTargetObject.u) {
						let valueToConvert = toTargetObject.u ? fromTargetObject : toTargetObject;
						valueToConvert = convertValueUnit(target, valueToConvert, toTargetObject.u ? toTargetObject.u : fromTargetObject.u, false);
					}
					if (toTargetObject.d && fromTargetObject.d && toTargetObject.d.length !== fromTargetObject.d.length) {
						const longestValue = fromTargetObject.d.length > toTargetObject.d.length ? fromTargetObject : toTargetObject;
						const shortestValue = longestValue === fromTargetObject ? toTargetObject : fromTargetObject;
						shortestValue.d = longestValue.d.map((_, i) => isUnd(shortestValue.d[i]) ? 0 : shortestValue.d[i]);
						shortestValue.s = cloneArray(longestValue.s);
					}
					const tweenUpdateDuration = round(+tweenDuration || 1e-11, 12);
					let inlineValue = inlineStylesStore[propName];
					if (!isNil(inlineValue)) inlineStylesStore[propName] = null;
					const tweenSetter = adapterProp ? adapterProp.set : null;
					lastTweenChangeEndTime = round(tweenStartTime + tweenUpdateDuration, 12);
					const fromD = fromTargetObject.d;
					const toD = toTargetObject.d;
					const toS = toTargetObject.s;
					/** @type {Tween} */
					const tween = {
						parent: this,
						id: tweenId++,
						property: propName,
						target,
						_value: null,
						_toFunc: toFunctionStore.func,
						_fromFunc: fromFunctionStore.func,
						_ease: parseEase(tweenEasing),
						_fromNumbers: fromD ? cloneArray(fromD) : emptyArray,
						_toNumbers: toD ? cloneArray(toD) : emptyArray,
						_strings: toS ? cloneArray(toS) : emptyArray,
						_fromNumber: fromTargetObject.n,
						_toNumber: toTargetObject.n,
						_numbers: fromD ? cloneArray(fromD) : emptyArray,
						_number: fromTargetObject.n,
						_unit: toTargetObject.u,
						_modifier: tweenModifier,
						_currentTime: 0,
						_startTime: tweenStartTime,
						_delay: +tweenDelay,
						_updateDuration: tweenUpdateDuration,
						_changeDuration: tweenUpdateDuration,
						_absoluteStartTime: absoluteStartTime,
						_absoluteUpdateStartTime: absoluteUpdateStartTime,
						_absoluteEndTime: round(absoluteOffsetTime + lastTweenChangeEndTime, 12),
						_hasFromValue: hasFromvalue || isFromToArray ? 1 : 0,
						_tweenType: tweenType,
						_setter: tweenSetter,
						_valueType: toTargetObject.t,
						_composition: tweenComposition,
						_isOverlapped: 0,
						_isOverridden: 0,
						_renderTransforms: 0,
						_inlineValue: inlineValue,
						_prevRep: null,
						_nextRep: null,
						_prevAdd: null,
						_nextAdd: null,
						_prev: null,
						_next: null
					};
					if (tweenComposition !== compositionTypes.none) composeTween(tween, siblings);
					const vt = tween._valueType;
					if (vt === valueTypes.COMPLEX) tween._value = composeComplexValue(tween, 1, -1);
					else if (vt === valueTypes.UNIT) tween._value = `${tweenModifier(tween._toNumber)}${tween._unit}`;
					else if (vt === valueTypes.COLOR) {
						const d = toTargetObject.d;
						tween._value = `rgba(${round(d[0], 0)},${round(d[1], 0)},${round(d[2], 0)},${d[3]})`;
					} else tween._value = tweenModifier(tween._toNumber);
					if (isNaN(firstTweenChangeStartTime)) firstTweenChangeStartTime = tween._startTime;
					prevTween = tween;
					animationAnimationLength++;
					addChild(this, tween);
				}
				if (isNaN(iterationDelay) || firstTweenChangeStartTime < iterationDelay) iterationDelay = firstTweenChangeStartTime;
				if (isNaN(iterationDuration) || lastTweenChangeEndTime > iterationDuration) iterationDuration = lastTweenChangeEndTime;
				if (tweenType === tweenTypes.TRANSFORM) {
					lastTransformGroupIndex = animationAnimationLength - tweenIndex;
					lastTransformGroupLength = animationAnimationLength;
				}
			}
			if (!isNaN(lastTransformGroupIndex)) {
				let i = 0;
				forEachChildren(this, (tween) => {
					if (i >= lastTransformGroupIndex && i < lastTransformGroupLength) {
						tween._renderTransforms = 1;
						if (tween._composition === compositionTypes.blend) forEachChildren(additive.animation, (additiveTween) => {
							if (additiveTween.id === tween.id) additiveTween._renderTransforms = 1;
						});
					}
					i++;
				});
			}
		}
		if (!targetsLength) console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
		if (iterationDelay) {
			forEachChildren(this, (tween) => {
				if (!(tween._startTime - tween._delay)) tween._delay -= iterationDelay;
				tween._startTime -= iterationDelay;
			});
			iterationDuration -= iterationDelay;
		} else iterationDelay = 0;
		if (!iterationDuration) {
			iterationDuration = minValue;
			this.iterationCount = 0;
		}
		/** @type {TargetsArray} */
		this.targets = parsedTargets;
		/** @type {String|Number} */
		this.id = !isUnd(id) ? id : JSAnimationId;
		/** @type {Number} */
		this.duration = iterationDuration === 1e-11 ? minValue : clampInfinity((iterationDuration + this._loopDelay) * this.iterationCount - this._loopDelay) || 1e-11;
		/** @type {Callback<this>} */
		this.onRender = onRender || animDefaults.onRender;
		/** @type {EasingFunction} */
		this._ease = parsedAnimPlaybackEase;
		/** @type {Number} */
		this._delay = iterationDelay;
		/** @type {Number} */
		this.iterationDuration = iterationDuration;
		if (!this._autoplay && shouldTriggerRender) this.onRender(this);
	}
	/**
	* @param  {Number} newDuration
	* @return {this}
	*/
	stretch(newDuration) {
		const currentDuration = this.duration;
		if (currentDuration === normalizeTime(newDuration)) return this;
		const timeScale = newDuration / currentDuration;
		forEachChildren(this, (tween) => {
			tween._updateDuration = normalizeTime(tween._updateDuration * timeScale);
			tween._changeDuration = normalizeTime(tween._changeDuration * timeScale);
			tween._currentTime *= timeScale;
			tween._delay *= timeScale;
			tween._startTime *= timeScale;
			tween._absoluteStartTime *= timeScale;
			tween._absoluteUpdateStartTime *= timeScale;
			tween._absoluteEndTime *= timeScale;
		});
		return super.stretch(newDuration);
	}
	/**
	* @return {this}
	*/
	refresh() {
		forEachChildren(this, (tween) => {
			const toFunc = tween._toFunc;
			const fromFunc = tween._fromFunc;
			if (toFunc || fromFunc) {
				if (fromFunc) {
					decomposeRawValue(fromFunc(), fromTargetObject);
					if (fromTargetObject.u !== tween._unit && tween.target[isDomSymbol]) convertValueUnit(tween.target, fromTargetObject, tween._unit, true);
					tween._fromNumbers = cloneArray(fromTargetObject.d);
					tween._fromNumber = fromTargetObject.n;
				} else if (toFunc) {
					decomposeRawValue(getOriginalAnimatableValue(tween.target, tween.property, tween._tweenType), decomposedOriginalValue);
					tween._fromNumbers = cloneArray(decomposedOriginalValue.d);
					tween._fromNumber = decomposedOriginalValue.n;
				}
				if (toFunc) {
					decomposeRawValue(toFunc(), toTargetObject);
					tween._toNumbers = cloneArray(toTargetObject.d);
					tween._strings = cloneArray(toTargetObject.s);
					tween._toNumber = toTargetObject.o ? getRelativeValue(tween._fromNumber, toTargetObject.n, toTargetObject.o) : toTargetObject.n;
				}
			}
		});
		if (this.duration === 1e-11) this.restart();
		return this;
	}
	/**
	* Cancel the animation and revert all the values affected by this animation to their original state
	* @return {this}
	*/
	revert() {
		super.revert();
		return revertValues(this);
	}
	/**
	* @typedef {this & {then: null}} ResolvedJSAnimation
	*/
	/**
	* @param  {Callback<ResolvedJSAnimation>} [callback]
	* @return Promise<this>
	*/
	then(callback) {
		return super.then(callback);
	}
};
/**
* @param {TargetsParam} targets
* @param {AnimationParams} parameters
* @return {JSAnimation}
*/
var animate = (targets, parameters) => {
	if (globals.editor) return globals.editor.addAnimation(targets, parameters);
	else return new JSAnimation(targets, parameters, null, 0, false).init();
};
//#endregion
//#region node_modules/animejs/dist/modules/timeline/position.js
/**
* Anime.js - timeline - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Tickable,
*   TimelinePosition,
* } from '../types/index.js'
*/
/**
* @import {
*   Timeline,
* } from './timeline.js'
*/
/**
* Timeline's children offsets positions parser
* @param  {Timeline} timeline
* @param  {String} timePosition
* @return {Number}
*/
var getPrevChildOffset = (timeline, timePosition) => {
	if (stringStartsWith(timePosition, "<")) {
		const goToPrevAnimationOffset = timePosition[1] === "<";
		const prevAnimation = timeline._tail;
		const prevOffset = prevAnimation ? prevAnimation._offset + prevAnimation._delay : 0;
		return goToPrevAnimationOffset ? prevOffset : prevOffset + prevAnimation.duration;
	}
};
/**
* @param  {Timeline} timeline
* @param  {TimelinePosition} [timePosition]
* @return {Number}
*/
var parseTimelinePosition = (timeline, timePosition) => {
	let tlDuration = timeline.iterationDuration;
	if (tlDuration === 1e-11) tlDuration = 0;
	if (isUnd(timePosition)) return tlDuration;
	if (isNum(+timePosition)) return +timePosition;
	const timePosStr = timePosition;
	const tlLabels = timeline ? timeline.labels : null;
	const hasLabels = !isNil(tlLabels);
	const prevOffset = getPrevChildOffset(timeline, timePosStr);
	const hasSibling = !isUnd(prevOffset);
	const matchedRelativeOperator = relativeValuesExecRgx.exec(timePosStr);
	if (matchedRelativeOperator) {
		const fullOperator = matchedRelativeOperator[0];
		const split = timePosStr.split(fullOperator);
		const labelOffset = hasLabels && split[0] ? tlLabels[split[0]] : tlDuration;
		return getRelativeValue(hasSibling ? prevOffset : hasLabels ? labelOffset : tlDuration, +split[1], fullOperator[0]);
	} else return hasSibling ? prevOffset : hasLabels ? !isUnd(tlLabels[timePosStr]) ? tlLabels[timePosStr] : tlDuration : tlDuration;
};
//#endregion
//#region node_modules/animejs/dist/modules/utils/random.js
/**
* Anime.js - utils - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* Generate a random number between optional min and max (inclusive) and decimal precision
*
* @callback RandomNumberGenerator
* @param    {Number} [min=0] - The minimum value (inclusive)
* @param    {Number} [max=1] - The maximum value (inclusive)
* @param    {Number} [decimalLength=0] - Number of decimal places to round to
* @return   {Number} A random number between min and max
*/
/**
* Generates a random number between min and max (inclusive) with optional decimal precision
*
* @type {RandomNumberGenerator}
*/
var random = (min = 0, max = 1, decimalLength = 0) => {
	const m = 10 ** decimalLength;
	return Math.floor((Math.random() * (max - min + 1 / m) + min) * m) / m;
};
var _seed = 0;
/**
* Creates a seeded pseudorandom number generator function
*
* @param  {Number} [seed] - The seed value for the random number generator
* @param  {Number} [seededMin=0] - The minimum default value (inclusive) of the returned function
* @param  {Number} [seededMax=1] - The maximum default value (inclusive) of the returned function
* @param  {Number} [seededDecimalLength=0] - Default number of decimal places to round to of the returned function
* @return {RandomNumberGenerator} A function to generate a random number between optional min and max (inclusive) and decimal precision
*/
var createSeededRandom = (seed, seededMin = 0, seededMax = 1, seededDecimalLength = 0) => {
	let t = seed === void 0 ? _seed++ : seed;
	return (min = seededMin, max = seededMax, decimalLength = seededDecimalLength) => {
		t += 1831565813;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		const m = 10 ** decimalLength;
		return Math.floor((((t ^ t >>> 14) >>> 0) / 4294967296 * (max - min + 1 / m) + min) * m) / m;
	};
};
/**
* Shuffles an array in-place using the Fisher-Yates algorithm
* Adapted from https://bost.ocks.org/mike/shuffle/
*
* @param  {Array} items - The array to shuffle (will be modified in-place)
* @param  {RandomNumberGenerator} [rnd] - Optional RNG matching the random() signature (defaults to random)
* @return {Array} The same array reference, now shuffled
*/
var shuffle = (items, rnd = random) => {
	let m = items.length, t, i;
	while (m) {
		i = rnd(0, --m);
		t = items[m];
		items[m] = items[i];
		items[i] = t;
	}
	return items;
};
//#endregion
//#region node_modules/animejs/dist/modules/utils/stagger.js
/**
* Anime.js - utils - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   StaggerParams,
*   StaggerFunction,
*   JSTarget,
* } from '../types/index.js'
*/
/**
* @import {
*   Spring,
* } from '../easings/spring/index.js'
*/
/**
* @overload
* @param {Number} val
* @param {StaggerParams} [params]
* @return {StaggerFunction<Number>}
*/
/**
* @overload
* @param {String} val
* @param {StaggerParams} [params]
* @return {StaggerFunction<String>}
*/
/**
* @overload
* @param {[Number, Number]} val
* @param {StaggerParams} [params]
* @return {StaggerFunction<Number>}
*/
/**
* @overload
* @param {[String, String]} val
* @param {StaggerParams} [params]
* @return {StaggerFunction<String>}
*/
/**
* @param {Number|String|[Number, Number]|[String, String]} val The staggered value or range
* @param {StaggerParams} [params] The stagger parameters
* @return {StaggerFunction<Number|String>}
*/
var stagger = (val, params = {}) => {
	let values = [];
	let maxValue = 0;
	let cachedOffset;
	let jitterSamples = null;
	const from = params.from;
	const reversed = params.reversed;
	const ease = params.ease;
	const hasEasing = !isUnd(ease);
	const staggerEase = hasEasing && !isUnd(
		/** @type {Spring} */
		ease.ease
	) ? ease.ease : hasEasing ? parseEase(ease) : null;
	const grid = params.grid;
	const autoGrid = grid === true;
	const axis = params.axis;
	const customTotal = params.total;
	const fromFirst = isUnd(from) || from === 0 || from === "first";
	const fromCenter = from === "center";
	const fromLast = from === "last";
	const fromRandom = from === "random";
	const fromArr = isArr(from);
	const isRange = isArr(val);
	const useProp = params.use;
	const val1 = isRange ? parseNumber(val[0]) : parseNumber(val);
	const val2 = isRange ? parseNumber(val[1]) : 0;
	const unitMatch = unitsExecRgx.exec((isRange ? val[1] : val) + "");
	const start = params.start || 0 + (isRange ? val1 : 0);
	const seed = params.seed;
	const rng = !isUnd(seed) && seed !== false ? createSeededRandom(seed === true ? 0 : seed) : random;
	const jitter = params.jitter;
	const hasJitter = !isUnd(jitter);
	const jitterIsArr = isArr(jitter);
	const jitterStart = jitterIsArr ? jitter[0] : /** @type {Number} */ jitter || 0;
	const jitterEnd = jitterIsArr ? jitter[1] : /** @type {Number} */ jitter || 0;
	let fromIndex = fromFirst ? 0 : isNum(from) ? from : 0;
	return (target, i, t, _, tl) => {
		const [registeredTarget] = registerTargets(target);
		const total = isUnd(customTotal) ? t.length : customTotal;
		const customIndex = !isUnd(useProp) ? isFnc(useProp) ? useProp(registeredTarget, i, total) : getOriginalAnimatableValue(registeredTarget, useProp) : false;
		const customIdx = isNum(customIndex) || isStr(customIndex) && isNum(+customIndex) ? +customIndex : i;
		const staggerIndex = customIdx >= 0 && customIdx < total ? customIdx : i;
		if (fromCenter) fromIndex = (total - 1) / 2;
		if (fromLast) fromIndex = total - 1;
		if (!values.length) {
			if (autoGrid) {
				let hasPositions = true;
				let has3D = false;
				let minPosX = Infinity;
				let minPosY = Infinity;
				let minPosZ = Infinity;
				let maxPosX = -Infinity;
				let maxPosY = -Infinity;
				let maxPosZ = -Infinity;
				const pxArr = [];
				const pyArr = [];
				const pzArr = [];
				for (let index = 0; index < total; index++) {
					const el = t[index];
					let px = 0;
					let py = 0;
					let pz = 0;
					let found = false;
					if (el && isFnc(el.getBoundingClientRect)) {
						const rect = el.getBoundingClientRect();
						px = rect.left + rect.width / 2;
						py = rect.top + rect.height / 2;
						found = true;
					} else {
						const obj = el;
						if (obj && isNum(obj.x) && isNum(obj.y)) {
							px = obj.x;
							py = obj.y;
							if (isNum(obj.z)) {
								pz = obj.z;
								has3D = true;
							}
							found = true;
						}
					}
					if (!found) {
						hasPositions = false;
						break;
					}
					pxArr.push(px);
					pyArr.push(py);
					pzArr.push(pz);
					if (px < minPosX) minPosX = px;
					if (py < minPosY) minPosY = py;
					if (pz < minPosZ) minPosZ = pz;
					if (px > maxPosX) maxPosX = px;
					if (py > maxPosY) maxPosY = py;
					if (pz > maxPosZ) maxPosZ = pz;
				}
				if (hasPositions) {
					let fX = pxArr[0];
					let fY = pyArr[0];
					let fZ = pzArr[0];
					if (fromArr) {
						fX = minPosX + from[0] * (maxPosX - minPosX);
						fY = minPosY + from[1] * (maxPosY - minPosY);
						fZ = has3D ? minPosZ + (from.length >= 3 ? from[2] : .5) * (maxPosZ - minPosZ) : 0;
					} else if (fromCenter) {
						fX = (minPosX + maxPosX) / 2;
						fY = (minPosY + maxPosY) / 2;
						fZ = (minPosZ + maxPosZ) / 2;
					} else if (fromLast) {
						fX = pxArr[total - 1];
						fY = pyArr[total - 1];
						fZ = pzArr[total - 1];
					} else if (isNum(from)) {
						fX = pxArr[from];
						fY = pyArr[from];
						fZ = pzArr[from];
					}
					for (let index = 0; index < total; index++) {
						const distanceX = fX - pxArr[index];
						const distanceY = fY - pyArr[index];
						const distanceZ = fZ - pzArr[index];
						let value = sqrt(distanceX * distanceX + distanceY * distanceY + (has3D ? distanceZ * distanceZ : 0));
						if (axis === "x") value = -distanceX;
						if (axis === "y") value = -distanceY;
						if (axis === "z") value = -distanceZ;
						values.push(value);
					}
					let minDist = Infinity;
					for (let index = 0; index < total; index++) {
						const absVal = abs(values[index]);
						if (absVal > 0 && absVal < minDist) minDist = absVal;
					}
					if (minDist > 0 && minDist < Infinity) for (let index = 0; index < total; index++) values[index] = values[index] / minDist;
				} else for (let index = 0; index < total; index++) values.push(abs(fromIndex - index));
			} else for (let index = 0; index < total; index++) if (!grid) values.push(abs(fromIndex - index));
			else {
				const dims = grid.length;
				const wh = grid[0] * grid[1];
				let fromX, fromY, fromZ;
				if (fromArr) {
					fromX = from[0] * (grid[0] - 1);
					fromY = from[1] * (grid[1] - 1);
					fromZ = dims === 3 ? (from.length >= 3 ? from[2] : .5) * (grid[2] - 1) : 0;
				} else if (fromCenter) {
					fromX = (grid[0] - 1) / 2;
					fromY = (grid[1] - 1) / 2;
					fromZ = dims === 3 ? (grid[2] - 1) / 2 : 0;
				} else {
					fromX = fromIndex % grid[0];
					fromY = floor(fromIndex / grid[0]) % grid[1];
					fromZ = dims === 3 ? floor(fromIndex / wh) : 0;
				}
				const toX = index % grid[0];
				const toY = floor(index / grid[0]) % grid[1];
				const toZ = dims === 3 ? floor(index / wh) : 0;
				const distanceX = fromX - toX;
				const distanceY = fromY - toY;
				const distanceZ = fromZ - toZ;
				let value = sqrt(distanceX * distanceX + distanceY * distanceY + (dims === 3 ? distanceZ * distanceZ : 0));
				if (axis === "x") value = -distanceX;
				if (axis === "y") value = -distanceY;
				if (axis === "z") value = -distanceZ;
				values.push(value);
			}
			maxValue = values[0];
			for (let k = 1; k < total; k++) if (values[k] > maxValue) maxValue = values[k];
			if (staggerEase || reversed) for (let k = 0; k < total; k++) {
				let v = values[k];
				if (staggerEase) v = staggerEase(v / maxValue) * maxValue;
				if (reversed) v = axis ? -v : abs(maxValue - v);
				values[k] = v;
			}
			if (hasJitter) {
				jitterSamples = new Array(total);
				for (let k = 0; k < total; k++) jitterSamples[k] = rng(-1, 1, 4);
			}
			if (fromRandom) values = shuffle(values, rng);
		}
		const spacing = isRange ? (val2 - val1) / maxValue : val1;
		if (isUnd(cachedOffset)) cachedOffset = tl ? parseTimelinePosition(tl, isUnd(params.start) ? tl.iterationDuration : start) : start;
		/** @type {String|Number} */
		let output = cachedOffset + (spacing * round(values[staggerIndex], 2) || 0);
		if (hasJitter) {
			const progress = maxValue ? values[staggerIndex] / maxValue : 0;
			const mag = jitterStart + (jitterEnd - jitterStart) * progress;
			output = output + jitterSamples[staggerIndex] * mag;
		}
		if (params.modifier) output = params.modifier(output);
		if (unitMatch) output = `${output}${unitMatch[2]}`;
		return output;
	};
};
//#endregion
export { animate as n, stagger as t };
