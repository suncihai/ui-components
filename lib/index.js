'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".Button-module_button__2ZuB7 {\n  outline: 0;\n  white-space: nowrap;\n  --icon-size: 32px;\n  --icon-padding: 7px;\n  --sm-icon-size: 24px;\n}\n\n  .Button-module_button__2ZuB7:disabled,\n  .Button-module_button__2ZuB7[disabled] {\n    cursor: default;\n  }\n\n  .Button-module_button__2ZuB7.Button-module_xs__cF6m0 {\n    padding: 7px 14px;\n  }\n\n  .Button-module_button__2ZuB7.Button-module_sm__NhG0g {\n    padding: 7px 24px;\n  }\n\n  .Button-module_button__2ZuB7.Button-module_md__hH4h3 {\n    padding: 9px 27px;\n    --icon-size: 36px;\n    --icon-padding: 9px;\n  }\n\n  .Button-module_button__2ZuB7.Button-module_lg__2plQf {\n    padding: 11px 30px;\n    --icon-size: 40px;\n    --icon-padding: 11px;\n  }\n\n  .Button-module_button__2ZuB7.Button-module_xl__nx4V0 {\n    padding: 11px 30px;\n    --icon-size: 50px;\n    --icon-padding: 11px;\n  }\n\n  .Button-module_button__2ZuB7.Button-module_icon__-43u5 {\n    padding: var(--icon-padding);\n    height: var(--icon-size);\n    width: var(--icon-size);\n  }\n\n  .Button-module_button__2ZuB7.Button-module_smIcon__o0Fjb {\n    padding: var(--icon-padding);\n    height: var(--sm-icon-size);\n    width: var(--sm-icon-size);\n  }\n\n  .Button-module_button__2ZuB7.Button-module_rounded__3BmEw {\n    padding: 8px;\n  }\n\n.Button-module_primary__s1sM6 {\n}\n\n.Button-module_primary__s1sM6.Button-module_disabled__Tl9fh {\n    color: var(--primary-button-disabled-text) !important;\n    background-color: var(--primary-button-disabled) !important;\n  }\n\n.Button-module_secondary__R0waJ {\n}\n\n.Button-module_secondary__R0waJ.Button-module_disabled__Tl9fh {\n    color: var(--secondary-button-disabled-text) !important;\n    background-color: var(--secondary-button-disabled) !important;\n  }\n\n.Button-module_light__vXswG {\n}\n\n.Button-module_pill__lx8lt {\n  height: 35px;\n  font-size: 13px;\n}\n\n.Button-module_plus__-kb3n {\n  background-repeat: repeat-y;\n  background-image: linear-gradient(\n    to right,\n    var(--legacy-blue-3) 0,\n    var(--legacy-blue-3) 33%,\n    var(--legacy-gradient-blue-2) 66%,\n    var(--legacy-blue) 100%\n  );\n  transition-property: background-position, color, background-color, fill;\n  background-position: 99% 0%;\n  background-size: 300% 100%;\n}\n\n.Button-module_plus__-kb3n:hover {\n    background-position: 1% 0%;\n  }\n\n.Button-module_plus__-kb3n.Button-module_disabled__Tl9fh {\n    background-position: 1% 0% !important;\n    color: var(--legacy-white-base) !important;\n  }\n\n.Button-module_tradeapp__opqp6 {\n  background-color: var(--legacy-light-green-text);\n}\n\n.Button-module_tradeapp__opqp6.Button-module_disabled__Tl9fh {\n    background-color: var(--legacy-light-green-bg) !important;\n  }\n\n.Button-module_databox__Btfxv {\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);\n  border-color: transparent;\n  width: 25px !important;\n  height: 25px !important;\n}\n\n.Button-module_databox__Btfxv.Button-module_disabled__Tl9fh {\n    color: var(--legacy-blue-3) !important;\n    background-color: var(--legacy-white-base) !important;\n  }\n\n.Button-module_dark__-G-rE {\n}\n\n.Button-module_underline__BkssC {\n}\n";
var s$1 = {"button":"Button-module_button__2ZuB7 flex items-center justify-center border border-transparent rounded-full text-center font-semibold text-sm leading-4 cursor-pointer w-100","xs":"Button-module_xs__cF6m0","sm":"Button-module_sm__NhG0g","md":"Button-module_md__hH4h3","lg":"Button-module_lg__2plQf","xl":"Button-module_xl__nx4V0","icon":"Button-module_icon__-43u5","smIcon":"Button-module_smIcon__o0Fjb","rounded":"Button-module_rounded__3BmEw","primary":"Button-module_primary__s1sM6 bg-primary-button-background text-primary-button-text hover|bg-primary-button-hover hover|text-primary-button-hover-text","disabled":"Button-module_disabled__Tl9fh","secondary":"Button-module_secondary__R0waJ bg-secondary-button-background text-secondary-button-text hover|bg-secondary-button-hover hover|text-secondary-button-hover-text border border-secondary-button-border","light":"Button-module_light__vXswG bg-inherit text-secondary-button-disabled-text hover|bg-secondary-button-hover hover|text-secondary-button-hover-text","pill":"Button-module_pill__lx8lt Button-module_primary__s1sM6 bg-primary-button-background text-primary-button-text hover|bg-primary-button-hover hover|text-primary-button-hover-text","plus":"Button-module_plus__-kb3n text-white hover|text-legacy-blue-1","tradeapp":"Button-module_tradeapp__opqp6 text-white hover|bg-legacy-dark-green-text","databox":"Button-module_databox__Btfxv bg-watch-button-background text-primary-text hover|bg-watch-button-hover hover|border-light-border","dark":"Button-module_dark__-G-rE text-black bg-white hover|text-white hover|bg-black hover|border-transparent border border-legacy-gray-2","underline":"Button-module_underline__BkssC text-primary-button-text underline font-medium"};
styleInject(css_248z$1);

/**
 * Primary UI component for user interaction
 */
var Button = function (props) {
    var alt = props.alt, children = props.children, disabled = props.disabled, _a = props.href, href = _a === void 0 ? '/' : _a, icon = props.icon, smIcon = props.smIcon, onClick = props.onClick, _b = props.size, size = _b === void 0 ? 'md' : _b, _c = props.style, style = _c === void 0 ? 'primary' : _c, cypressId = props.cypressId, testId = props.testId, _d = props.type, type = _d === void 0 ? 'button' : _d, _e = props.rounded, rounded = _e === void 0 ? false : _e, target = props.target;
    var className = classNames(s$1.button, s$1[size], s$1[style], disabled && s$1.disabled, props.className, icon && s$1.icon, smIcon && s$1.smIcon, rounded && s$1.rounded);
    return type === 'div' ? (jsxRuntime.jsx("div", __assign({ onClick: onClick, title: alt, "data-cy": cypressId, "data-testid": testId, className: className }, { children: children }))) : type === 'a' ? (jsxRuntime.jsx("a", __assign({ onClick: onClick, title: alt, "data-cy": cypressId, "data-testid": testId, className: className, href: href, target: target }, { children: children }))) : type === 'link' ? (jsxRuntime.jsx("a", __assign({ onClick: onClick, title: alt, "data-cy": cypressId, "data-testid": testId, className: className }, { children: children }))) : (jsxRuntime.jsx("button", __assign({ className: className, onClick: onClick, type: type, title: alt, disabled: disabled, "data-cy": cypressId, "data-testid": testId }, { children: children })));
};

function Flex(props) {
    var _a = props.content, content = _a === void 0 ? 'between' : _a, _b = props.direction, direction = _b === void 0 ? 'row' : _b, _c = props.align, align = _c === void 0 ? 'center' : _c, onClick = props.onClick, children = props.children;
    var className = classNames("flex flex-".concat(direction, " justify-").concat(content, " items-").concat(align), onClick && 'cursor-pointer', props.className);
    return (jsxRuntime.jsx("div", __assign({ className: className, onClick: onClick }, { children: children })));
}

var css_248z = ".Card-module_container__GROyC {\n}\n\n.Card-module_container-default__0wIYe {\n}\n\n.Card-module_container-compact__BIp2u {\n}\n\n.Card-module_mobile__LXoVt {\n}\n\n.Card-module_title__mSgoo {\n  height: 48px;\n}\n\n.Card-module_title-default__vRbzY {\n}\n\n.Card-module_title-default__vRbzY .Card-module_titleText__GK7o5 {\n    font-size: 20px;\n  }\n\n.Card-module_title-compact__bDjyn {\n  color: var(--grey-10);\n}\n\n.Card-module_title-mobile-nav__pYfLP {\n}\n\n.Card-module_icon__jzes9 {\n}\n\n.Card-module_icon-default__AxljA {\n  background: none;\n}\n";
var s = {"container":"Card-module_container__GROyC flex overflow-auto scrollbar-hidden flex-col bg-primary-background text-primary-text rounded-lg max-h-full tabletSm-down|h-screen tabletSm-down|rounded-t-none","container-default":"Card-module_container-default__0wIYe","container-compact":"Card-module_container-compact__BIp2u relative","mobile":"Card-module_mobile__LXoVt w-full h-full","title":"Card-module_title__mSgoo flex items-center justify-between p-3 capitalize font-semibold","title-default":"Card-module_title-default__vRbzY border-b-2 border-secondary-border","titleText":"Card-module_titleText__GK7o5","title-compact":"Card-module_title-compact__bDjyn top-0 right-4 w-4 h-4 z-10 absolute","title-mobile-nav":"Card-module_title-mobile-nav__pYfLP bg-mobile-nav-header-background","icon":"Card-module_icon__jzes9 text-xs tabletSm-down|mt-1.5","icon-default":"Card-module_icon-default__AxljA p-0 border-none outline-none"};
styleInject(css_248z);

function Card(props) {
    var title = props.title, children = props.children, _a = props.type, type = _a === void 0 ? 'compact' : _a, _b = props.className, className = _b === void 0 ? '' : _b;
    return (jsxRuntime.jsxs("div", __assign({ className: classNames(s.container, s["container-".concat(type)], className) }, { children: [jsxRuntime.jsx("div", __assign({ className: classNames(s.title, s["title-".concat(type)]) }, { children: jsxRuntime.jsx("h4", __assign({ className: s.titleText }, { children: type !== 'compact' && title ? title : '' })) })), jsxRuntime.jsx("div", __assign({ className: "h-full" }, { children: children }))] })));
}

exports.Button = Button;
exports.Card = Card;
exports.Flex = Flex;
//# sourceMappingURL=index.js.map
