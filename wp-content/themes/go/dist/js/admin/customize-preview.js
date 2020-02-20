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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.dev/assets/admin/js/customize-preview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.dev/assets/admin/js/customize-preview.js":
/*!***************************************************!*\
  !*** ./.dev/assets/admin/js/customize-preview.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customize_preview_design_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize/preview/design-style */ "./.dev/assets/admin/js/customize/preview/design-style.js");
/* harmony import */ var _customize_preview_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customize/preview/header */ "./.dev/assets/admin/js/customize/preview/header.js");
/* harmony import */ var _customize_preview_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customize/preview/footer */ "./.dev/assets/admin/js/customize/preview/footer.js");
/* harmony import */ var _customize_preview_color_schemes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customize/preview/color-schemes */ "./.dev/assets/admin/js/customize/preview/color-schemes.js");
/* harmony import */ var _customize_preview_logo_sizing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customize/preview/logo-sizing */ "./.dev/assets/admin/js/customize/preview/logo-sizing.js");
/* harmony import */ var _customize_preview_page_titles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customize/preview/page-titles */ "./.dev/assets/admin/js/customize/preview/page-titles.js");






Object(_customize_preview_design_style__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_customize_preview_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_customize_preview_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_customize_preview_color_schemes__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_customize_preview_logo_sizing__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_customize_preview_page_titles__WEBPACK_IMPORTED_MODULE_5__["default"])();

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/color-schemes.js":
/*!*****************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/color-schemes.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./.dev/assets/admin/js/customize/util.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var $ = jQuery; // eslint-disable-line

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var selectedDesignStyle;
  /**
   * Set color
   *
   * @param {*} color
   */

  var setColor = function setColor(color, cssVar) {
    var hsl = Object(_util__WEBPACK_IMPORTED_MODULE_0__["hexToHSL"])(color);
    document.querySelector(':root').style.setProperty("".concat(cssVar), "".concat(hsl[0], ", ").concat(hsl[1], "%, ").concat(hsl[2], "%"));
  };
  /**
   * Load the color schemes for the selected design style.
   */


  var loadColorSchemes = function loadColorSchemes(colorScheme) {
    var designStyle = getDesignStyle(selectedDesignStyle);
    colorScheme = colorScheme.replace("".concat(selectedDesignStyle, "-"), '');

    if ('undefined' !== typeof designStyle.color_schemes[colorScheme] && 'undefined' !== typeof wp.customize.settings.controls) {
      var colors = designStyle.color_schemes[colorScheme];
      toggleColorSchemes();
      Object.entries(wp.customize.settings.controls).filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            _control = _ref2[0],
            config = _ref2[1];

        return config.type === 'color';
      }).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            customizerControl = _ref4[0],
            config = _ref4[1];

        var customizerSetting = wp.customize(config.settings.default);
        var color = colors[config.settings.default.replace('_color', '')] || '';
        customizerSetting.set(color);
        wp.customize.control(customizerControl).container.find('.color-picker-hex').data('data-default-color', color).wpColorPicker('defaultColor', color).trigger('change');
      });
    }
  };
  /**
   * Control the visibility of the color schemes selections.
   */


  var toggleColorSchemes = function toggleColorSchemes() {
    $('label[for^=color_scheme_control]').hide();
    $("label[for^=color_scheme_control-".concat(selectedDesignStyle, "-]")).show();
  };
  /**
   * Returns the design style array
   *
   * @param {*} designStyle
   */


  var getDesignStyle = function getDesignStyle(designStyle) {
    if ('undefined' !== typeof GoPreviewData['design_styles'] && 'undefined' !== GoPreviewData['design_styles'][designStyle]) {
      return GoPreviewData['design_styles'][designStyle];
    }

    return false;
  };

  wp.customize.bind('ready', function () {
    return toggleColorSchemes();
  });
  wp.customize('design_style', function (value) {
    selectedDesignStyle = value.get();
    value.bind(function (to) {
      selectedDesignStyle = to;
      loadColorSchemes('one');
      $("#color_scheme_control-".concat(selectedDesignStyle, "-one")).prop('checked', true);
    });
  });
  wp.customize('color_scheme', function (value) {
    value.bind(function (colorScheme) {
      return loadColorSchemes(colorScheme);
    });
  });
  wp.customize('background_color', function (value) {
    value.bind(function (to) {
      return setColor(to, '--theme-color-body-bg');
    });
  });
  wp.customize('primary_color', function (value) {
    value.bind(function (to) {
      return setColor(to, '--theme-color-primary');
    });
  });
  wp.customize('secondary_color', function (value) {
    value.bind(function (to) {
      return setColor(to, '--theme-color-secondary');
    });
  });
  wp.customize('tertiary_color', function (value) {
    value.bind(function (to) {
      return setColor(to, '--theme-color-tertiary');
    });
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/design-style.js":
/*!****************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/design-style.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $ = jQuery; // eslint-disable-line

/* harmony default export */ __webpack_exports__["default"] = (function () {
  wp.customize('design_style', function (value) {
    value.bind(function (to) {
      $('#customize-preview').addClass('is-loading');

      if ('undefined' !== typeof GoPreviewData['design_styles'] && 'undefined' !== GoPreviewData['design_styles'][to]) {
        setTimeout(function () {
          // wp.customize.previewer.refresh();
          var designStyle = GoPreviewData['design_styles'][to];
          $('link[id*="design-style"]').attr('href', designStyle['url']);
          setTimeout(function () {
            $('#customize-preview').removeClass('is-loading');
          }, 500);
        }, 500); // match the .02s transition time from core
      }
    });
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/footer.js":
/*!**********************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/footer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./.dev/assets/admin/js/customize/util.js");

var $ = jQuery; // eslint-disable-line

$(document).ready(setMenuLocationDescription);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  wp.customize('footer_variation', function (value) {
    value.bind(function (to) {
      $('body').removeClass('has-footer-1 has-footer-2 has-footer-3 has-footer-4').addClass('has-' + to);
      setMenuLocationDescription();
    });
  });
  wp.customize('copyright', function (value) {
    value.bind(function (to) {
      $('.copyright').html(to);
    });
  });
  wp.customize('footer_background_color', function (value) {
    value.bind(function (to) {
      var hsl = Object(_util__WEBPACK_IMPORTED_MODULE_0__["hexToHSL"])(to);
      var setTo = to ? "".concat(hsl[0], ", ").concat(hsl[1], "%, ").concat(hsl[2], "%") : undefined;
      document.querySelector(':root').style.setProperty('--theme-footer--bg', setTo); // Add class if a background color is applied.

      if (to) {
        $('body').addClass('has-footer-background');
        $('.site-footer').addClass('has-background');
      } else {
        $('body').removeClass('has-footer-background');
        $('.site-footer').removeClass('has-background');
      }
    });
  });
  wp.customize('social_icon_color', function (value) {
    value.bind(function (to) {
      var hsl = Object(_util__WEBPACK_IMPORTED_MODULE_0__["hexToHSL"])(to);
      var setTo = to ? "".concat(hsl[0], ", ").concat(hsl[1], "%, ").concat(hsl[2], "%") : undefined;
      document.querySelector(':root').style.setProperty('--theme-social--color', setTo);
    });
  });
  wp.customize('footer_text_color', function (value) {
    value.bind(function (to) {
      var hsl = Object(_util__WEBPACK_IMPORTED_MODULE_0__["hexToHSL"])(to);
      var setTo = to ? "".concat(hsl[0], ", ").concat(hsl[1], "%, ").concat(hsl[2], "%") : undefined;
      document.querySelector(':root').style.setProperty('--theme-footer--color', setTo);
      document.querySelector(':root').style.setProperty('--theme-footer-nav--color', setTo);
    });
  });
  wp.customize('footer_heading_color', function (value) {
    value.bind(function (to) {
      var hsl = Object(_util__WEBPACK_IMPORTED_MODULE_0__["hexToHSL"])(to);
      var setTo = to ? "".concat(hsl[0], ", ").concat(hsl[1], "%, ").concat(hsl[2], "%") : null;
      document.querySelector(':root').style.setProperty('--theme-footer-heading--color', setTo);
    });
  });
  wp.customize('social_icon_facebook', function (value) {
    value.bind(function (to) {
      if (to) {
        $('.social-icon-facebook').removeClass('display-none');
      } else {
        $('.social-icon-facebook').addClass('display-none');
      }
    });
  });
  wp.customize('social_icon_twitter', function (value) {
    value.bind(function (to) {
      if (to) {
        $('.social-icon-twitter').removeClass('display-none');
      } else {
        $('.social-icon-twitter').addClass('display-none');
      }
    });
  });
  wp.customize('social_icon_instagram', function (value) {
    value.bind(function (to) {
      if (to) {
        $('.social-icon-instagram').removeClass('display-none');
      } else {
        $('.social-icon-instagram').addClass('display-none');
      }
    });
  });
  wp.customize('social_icon_linkedin', function (value) {
    value.bind(function (to) {
      if (to) {
        $('.social-icon-linkedin').removeClass('display-none');
      } else {
        $('.social-icon-linkedin').addClass('display-none');
      }
    });
  });
  wp.customize('social_icon_pinterest', function (value) {
    value.bind(function (to) {
      if (to) {
        $('.social-icon-pinterest').removeClass('display-none');
      } else {
        $('.social-icon-pinterest').addClass('display-none');
      }
    });
  });
});

function setMenuLocationDescription() {
  var menuLocationsDescription = $('.customize-section-title-menu_locations-description').text(),
      menuLocationCount = ['footer-1', 'footer-2'].includes(wp.customize('footer_variation').get()) ? '2' : '4';
  $('.customize-section-title-menu_locations-description').text(menuLocationsDescription.replace(/[0-9]/g, menuLocationCount));
}

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/header.js":
/*!**********************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/header.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./.dev/assets/admin/js/customize/util.js");

var $ = jQuery; // eslint-disable-line

/* harmony default export */ __webpack_exports__["default"] = (function () {
  wp.customize('header_variation', function (value) {
    value.bind(function (to) {
      $('body').removeClass('has-header-1 has-header-2 has-header-3 has-header-4').addClass('has-' + to);
    });
  });
  wp.customize('header_background_color', function (value) {
    value.bind(function (to) {
      var hsl = Object(_util__WEBPACK_IMPORTED_MODULE_0__["hexToHSL"])(to);
      var setTo = to ? "".concat(hsl[0], ", ").concat(hsl[1], "%, ").concat(hsl[2], "%") : undefined;
      document.querySelector(':root').style.setProperty('--theme-header--bg', setTo); // Add class if a background color is applied.

      if (to) {
        $('.header').addClass('has-background');
      } else {
        $('.header').removeClass('has-background');
      }
    });
  });
  wp.customize('header_text_color', function (value) {
    value.bind(function (to) {
      var hsl = Object(_util__WEBPACK_IMPORTED_MODULE_0__["hexToHSL"])(to);
      var setTo = to ? "".concat(hsl[0], ", ").concat(hsl[1], "%, ").concat(hsl[2], "%") : undefined;
      document.querySelector(':root').style.setProperty('--theme-site-nav--color', setTo);
      document.querySelector(':root').style.setProperty('--theme-site-description--color', setTo);
      document.querySelector(':root').style.setProperty('--theme-search-toggle--color', setTo);
      document.querySelector(':root').style.setProperty('--theme-site-title--color', setTo);
    });
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/logo-sizing.js":
/*!***************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/logo-sizing.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * Set Logo width.
   *
   * @param {*} width
   */
  var setLogoWidth = function setLogoWidth(width) {
    document.documentElement.style.setProperty('--theme-site-logo--width', width ? "".concat(width, "px") : 'none');
  };
  /**
   * Set Logo mobile width.
   *
   * @param {*} width
   */


  var setLogoMobileWidth = function setLogoMobileWidth(width) {
    document.documentElement.style.setProperty('--theme-site-logo--width-mobile', width ? "".concat(width, "px") : 'none');
  };

  wp.customize('logo_width', function (value) {
    value.bind(function (to) {
      return setLogoWidth(to);
    });
  });
  wp.customize('logo_width_mobile', function (value) {
    value.bind(function (to) {
      return setLogoMobileWidth(to);
    });
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/page-titles.js":
/*!***************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/page-titles.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $ = jQuery; // eslint-disable-line

/* harmony default export */ __webpack_exports__["default"] = (function () {
  wp.customize('page_titles', function (value) {
    var selectors = '#content > .entry-header, body.page article .entry-header, body.woocommerce .entry-header';
    value.bind(function (to) {
      if (to) {
        $('body').addClass('has-page-titles');
        $(selectors).removeClass('display-none');
      } else {
        $('body').removeClass('has-page-titles');
        $(selectors).addClass('display-none');
      }
    });
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/util.js":
/*!************************************************!*\
  !*** ./.dev/assets/admin/js/customize/util.js ***!
  \************************************************/
/*! exports provided: hexToHSL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToHSL", function() { return hexToHSL; });
/**
 * Functions to convert hex color to HSL
 * @param {*} H
 */
function hexToHSL(H) {
  // Convert hex to RGB first
  var r = 0,
      g = 0,
      b = 0;

  if (4 == H.length) {
    r = "0x".concat(H[1]).concat(H[1]);
    g = "0x".concat(H[2]).concat(H[2]);
    b = "0x".concat(H[3]).concat(H[3]);
  } else if (7 == H.length) {
    r = "0x".concat(H[1]).concat(H[2]);
    g = "0x".concat(H[3]).concat(H[4]);
    b = "0x".concat(H[5]).concat(H[6]);
  } // Then to HSL


  r /= 255;
  g /= 255;
  b /= 255;
  var cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin;
  var h = 0;
  var s = 0;
  var l = 0;
  if (0 == delta) h = 0;else if (cmax == r) h = (g - b) / delta % 6;else if (cmax == g) h = (b - r) / delta + 2;else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (0 > h) h += 360;
  l = (cmax + cmin) / 2;
  s = 0 == delta ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed();
  l = +(l * 100).toFixed();
  return [h, s, l];
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYWRtaW4vY3VzdG9taXplLXByZXZpZXcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLmRldi9hc3NldHMvYWRtaW4vanMvY3VzdG9taXplLXByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vLmRldi9hc3NldHMvYWRtaW4vanMvY3VzdG9taXplL3ByZXZpZXcvY29sb3Itc2NoZW1lcy5qcyIsIndlYnBhY2s6Ly8vLi8uZGV2L2Fzc2V0cy9hZG1pbi9qcy9jdXN0b21pemUvcHJldmlldy9kZXNpZ24tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vLmRldi9hc3NldHMvYWRtaW4vanMvY3VzdG9taXplL3ByZXZpZXcvZm9vdGVyLmpzIiwid2VicGFjazovLy8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS9wcmV2aWV3L2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi8uZGV2L2Fzc2V0cy9hZG1pbi9qcy9jdXN0b21pemUvcHJldmlldy9sb2dvLXNpemluZy5qcyIsIndlYnBhY2s6Ly8vLi8uZGV2L2Fzc2V0cy9hZG1pbi9qcy9jdXN0b21pemUvcHJldmlldy9wYWdlLXRpdGxlcy5qcyIsIndlYnBhY2s6Ly8vLi8uZGV2L2Fzc2V0cy9hZG1pbi9qcy9jdXN0b21pemUvdXRpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS1wcmV2aWV3LmpzXCIpO1xuIiwiaW1wb3J0IERlc2lnblN0eWxlUHJldmlldyBmcm9tICcuL2N1c3RvbWl6ZS9wcmV2aWV3L2Rlc2lnbi1zdHlsZSc7XG5pbXBvcnQgSGVhZGVyQ29sb3JzUHJldmlldyBmcm9tICcuL2N1c3RvbWl6ZS9wcmV2aWV3L2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyQ29sb3JzUHJldmlldyBmcm9tICcuL2N1c3RvbWl6ZS9wcmV2aWV3L2Zvb3Rlcic7XG5pbXBvcnQgQ29sb3JTY2hlbWVQcmV2aWV3IGZyb20gJy4vY3VzdG9taXplL3ByZXZpZXcvY29sb3Itc2NoZW1lcyc7XG5pbXBvcnQgTG9nb1NpemluZ1ByZXZpZXcgZnJvbSAnLi9jdXN0b21pemUvcHJldmlldy9sb2dvLXNpemluZyc7XG5pbXBvcnQgUGFnZVRpdGxlc1ByZXZpZXcgZnJvbSAnLi9jdXN0b21pemUvcHJldmlldy9wYWdlLXRpdGxlcyc7XG5cbkRlc2lnblN0eWxlUHJldmlldygpO1xuSGVhZGVyQ29sb3JzUHJldmlldygpO1xuRm9vdGVyQ29sb3JzUHJldmlldygpO1xuQ29sb3JTY2hlbWVQcmV2aWV3KCk7XG5Mb2dvU2l6aW5nUHJldmlldygpO1xuUGFnZVRpdGxlc1ByZXZpZXcoKTtcbiIsImltcG9ydCB7IGhleFRvSFNMIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRsZXQgc2VsZWN0ZWREZXNpZ25TdHlsZTtcblxuXHQvKipcblx0ICogU2V0IGNvbG9yXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gY29sb3Jcblx0ICovXG5cdGNvbnN0IHNldENvbG9yID0gKCBjb2xvciwgY3NzVmFyICkgPT4ge1xuXHRcdGNvbnN0IGhzbCA9IGhleFRvSFNMKCBjb2xvciApO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6cm9vdCcgKS5zdHlsZS5zZXRQcm9wZXJ0eSggYCR7Y3NzVmFyfWAsIGAke2hzbFsgMCBdfSwgJHtoc2xbIDEgXX0lLCAke2hzbFsgMiBdfSVgICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIExvYWQgdGhlIGNvbG9yIHNjaGVtZXMgZm9yIHRoZSBzZWxlY3RlZCBkZXNpZ24gc3R5bGUuXG5cdCAqL1xuXHRjb25zdCBsb2FkQ29sb3JTY2hlbWVzID0gKCBjb2xvclNjaGVtZSApID0+IHtcblx0XHRjb25zdCBkZXNpZ25TdHlsZSA9IGdldERlc2lnblN0eWxlKCBzZWxlY3RlZERlc2lnblN0eWxlICk7XG5cdFx0Y29sb3JTY2hlbWUgPSBjb2xvclNjaGVtZS5yZXBsYWNlKCBgJHtzZWxlY3RlZERlc2lnblN0eWxlfS1gLCAnJyApO1xuXG5cdFx0aWYgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGRlc2lnblN0eWxlLmNvbG9yX3NjaGVtZXNbIGNvbG9yU2NoZW1lIF0gJiYgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiB3cC5jdXN0b21pemUuc2V0dGluZ3MuY29udHJvbHMgKSB7XG5cdFx0XHRjb25zdCBjb2xvcnMgPSBkZXNpZ25TdHlsZS5jb2xvcl9zY2hlbWVzWyBjb2xvclNjaGVtZSBdO1xuXHRcdFx0dG9nZ2xlQ29sb3JTY2hlbWVzKCk7XG5cblx0XHRcdE9iamVjdC5lbnRyaWVzKCB3cC5jdXN0b21pemUuc2V0dGluZ3MuY29udHJvbHMgKVxuXHRcdFx0XHQuZmlsdGVyKCAoIFsgX2NvbnRyb2wsIGNvbmZpZyBdICkgPT4gY29uZmlnLnR5cGUgPT09ICdjb2xvcicgKVxuXHRcdFx0XHQuZm9yRWFjaCggKCBbIGN1c3RvbWl6ZXJDb250cm9sLCBjb25maWcgXSApID0+IHtcblx0XHRcdFx0XHRjb25zdCBjdXN0b21pemVyU2V0dGluZyA9IHdwLmN1c3RvbWl6ZSggY29uZmlnLnNldHRpbmdzLmRlZmF1bHQgKTtcblx0XHRcdFx0XHRjb25zdCBjb2xvciA9IGNvbG9yc1sgY29uZmlnLnNldHRpbmdzLmRlZmF1bHQucmVwbGFjZSggJ19jb2xvcicsICcnICkgXSB8fCAnJztcblxuXHRcdFx0XHRcdGN1c3RvbWl6ZXJTZXR0aW5nLnNldCggY29sb3IgKTtcblxuXHRcdFx0XHRcdHdwLmN1c3RvbWl6ZS5jb250cm9sKCBjdXN0b21pemVyQ29udHJvbCApLmNvbnRhaW5lci5maW5kKCAnLmNvbG9yLXBpY2tlci1oZXgnIClcblx0XHRcdFx0XHRcdC5kYXRhKCAnZGF0YS1kZWZhdWx0LWNvbG9yJywgY29sb3IgKVxuXHRcdFx0XHRcdFx0LndwQ29sb3JQaWNrZXIoICdkZWZhdWx0Q29sb3InLCBjb2xvciApXG5cdFx0XHRcdFx0XHQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fSApO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQ29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY29sb3Igc2NoZW1lcyBzZWxlY3Rpb25zLlxuXHQgKi9cblx0Y29uc3QgdG9nZ2xlQ29sb3JTY2hlbWVzID0gKCkgPT4ge1xuXHRcdCQoICdsYWJlbFtmb3JePWNvbG9yX3NjaGVtZV9jb250cm9sXScgKS5oaWRlKCk7XG5cdFx0JCggYGxhYmVsW2Zvcl49Y29sb3Jfc2NoZW1lX2NvbnRyb2wtJHtzZWxlY3RlZERlc2lnblN0eWxlfS1dYCApLnNob3coKTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgZGVzaWduIHN0eWxlIGFycmF5XG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gZGVzaWduU3R5bGVcblx0ICovXG5cdGNvbnN0IGdldERlc2lnblN0eWxlID0gKCBkZXNpZ25TdHlsZSApID0+IHtcblx0XHRpZiAoXG5cdFx0XHQndW5kZWZpbmVkJyAhPT0gdHlwZW9mIEdvUHJldmlld0RhdGFbJ2Rlc2lnbl9zdHlsZXMnXSAmJlxuXHRcdFx0J3VuZGVmaW5lZCcgIT09IEdvUHJldmlld0RhdGFbJ2Rlc2lnbl9zdHlsZXMnXVsgZGVzaWduU3R5bGUgXVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIEdvUHJldmlld0RhdGFbJ2Rlc2lnbl9zdHlsZXMnXVsgZGVzaWduU3R5bGUgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0d3AuY3VzdG9taXplLmJpbmQoICdyZWFkeScsICgpID0+IHRvZ2dsZUNvbG9yU2NoZW1lcygpICk7XG5cblx0d3AuY3VzdG9taXplKCAnZGVzaWduX3N0eWxlJywgKCB2YWx1ZSApID0+IHtcblx0XHRzZWxlY3RlZERlc2lnblN0eWxlID0gdmFsdWUuZ2V0KCk7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdHNlbGVjdGVkRGVzaWduU3R5bGUgPSB0bztcblx0XHRcdGxvYWRDb2xvclNjaGVtZXMoICdvbmUnICk7XG5cdFx0XHQkKCBgI2NvbG9yX3NjaGVtZV9jb250cm9sLSR7c2VsZWN0ZWREZXNpZ25TdHlsZX0tb25lYCApLnByb3AoICdjaGVja2VkJywgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2NvbG9yX3NjaGVtZScsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCBjb2xvclNjaGVtZSApID0+IGxvYWRDb2xvclNjaGVtZXMoIGNvbG9yU2NoZW1lICkgKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2JhY2tncm91bmRfY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiBzZXRDb2xvciggdG8sICctLXRoZW1lLWNvbG9yLWJvZHktYmcnICkgKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ3ByaW1hcnlfY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiBzZXRDb2xvciggdG8sICctLXRoZW1lLWNvbG9yLXByaW1hcnknICkgKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ3NlY29uZGFyeV9jb2xvcicsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHNldENvbG9yKCB0bywgJy0tdGhlbWUtY29sb3Itc2Vjb25kYXJ5JyApICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICd0ZXJ0aWFyeV9jb2xvcicsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHNldENvbG9yKCB0bywgJy0tdGhlbWUtY29sb3ItdGVydGlhcnknICkgKTtcblx0fSApO1xufTtcbiIsImNvbnN0ICQgPSBqUXVlcnk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHR3cC5jdXN0b21pemUoICdkZXNpZ25fc3R5bGUnLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cblx0XHRcdCQoICcjY3VzdG9taXplLXByZXZpZXcnICkuYWRkQ2xhc3MoICdpcy1sb2FkaW5nJyApO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCd1bmRlZmluZWQnICE9PSB0eXBlb2YgR29QcmV2aWV3RGF0YVsnZGVzaWduX3N0eWxlcyddICYmXG5cdFx0XHRcdCd1bmRlZmluZWQnICE9PSBHb1ByZXZpZXdEYXRhWydkZXNpZ25fc3R5bGVzJ11bIHRvIF1cblx0XHRcdCkge1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8vIHdwLmN1c3RvbWl6ZS5wcmV2aWV3ZXIucmVmcmVzaCgpO1xuXHRcdFx0XHRcdGNvbnN0IGRlc2lnblN0eWxlID0gR29QcmV2aWV3RGF0YVsnZGVzaWduX3N0eWxlcyddWyB0byBdO1xuXHRcdFx0XHRcdCQoICdsaW5rW2lkKj1cImRlc2lnbi1zdHlsZVwiXScgKS5hdHRyKCAnaHJlZicsIGRlc2lnblN0eWxlWyd1cmwnXSApO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKCAnI2N1c3RvbWl6ZS1wcmV2aWV3JyApLnJlbW92ZUNsYXNzKCAnaXMtbG9hZGluZycgKTtcblx0XHRcdFx0XHR9LCA1MDAgKTtcblx0XHRcdFx0fSwgNTAwICk7IC8vIG1hdGNoIHRoZSAuMDJzIHRyYW5zaXRpb24gdGltZSBmcm9tIGNvcmVcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcbn07XG4iLCJpbXBvcnQgeyBoZXhUb0hTTCB9IGZyb20gJy4uL3V0aWwnO1xuXG5jb25zdCAkID0galF1ZXJ5OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiQoIGRvY3VtZW50ICkucmVhZHkoIHNldE1lbnVMb2NhdGlvbkRlc2NyaXB0aW9uICk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0d3AuY3VzdG9taXplKCAnZm9vdGVyX3ZhcmlhdGlvbicsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdCQoICdib2R5JyApLnJlbW92ZUNsYXNzKCAnaGFzLWZvb3Rlci0xIGhhcy1mb290ZXItMiBoYXMtZm9vdGVyLTMgaGFzLWZvb3Rlci00JyApXG5cdFx0XHQgICAgICAgICAgIC5hZGRDbGFzcyggJ2hhcy0nICsgdG8gKTtcblx0XHRcdHNldE1lbnVMb2NhdGlvbkRlc2NyaXB0aW9uKCk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnY29weXJpZ2h0JywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhbHVlLmJpbmQoIGZ1bmN0aW9uKCB0byApIHtcblx0XHRcdCQoICcuY29weXJpZ2h0JyApLmh0bWwoIHRvICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnZm9vdGVyX2JhY2tncm91bmRfY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHRjb25zdCBoc2wgPSBoZXhUb0hTTCggdG8gKTtcblx0XHRcdGNvbnN0IHNldFRvID0gdG8gPyBgJHtoc2xbMF19LCAke2hzbFsxXX0lLCAke2hzbFsyXX0lYCA6IHVuZGVmaW5lZDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6cm9vdCcgKS5zdHlsZS5zZXRQcm9wZXJ0eSggJy0tdGhlbWUtZm9vdGVyLS1iZycsIHNldFRvICk7XG5cblx0XHRcdC8vIEFkZCBjbGFzcyBpZiBhIGJhY2tncm91bmQgY29sb3IgaXMgYXBwbGllZC5cblx0XHRcdGlmICggdG8gKSB7XG5cdFx0XHRcdCQoICdib2R5JyApLmFkZENsYXNzKCAnaGFzLWZvb3Rlci1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0XHQkKCAnLnNpdGUtZm9vdGVyJyApLmFkZENsYXNzKCAnaGFzLWJhY2tncm91bmQnICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCAnYm9keScgKS5yZW1vdmVDbGFzcyggJ2hhcy1mb290ZXItYmFja2dyb3VuZCcgKTtcblx0XHRcdFx0JCggJy5zaXRlLWZvb3RlcicgKS5yZW1vdmVDbGFzcyggJ2hhcy1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ3NvY2lhbF9pY29uX2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0Y29uc3QgaHNsID0gaGV4VG9IU0woIHRvICk7XG5cdFx0XHRjb25zdCBzZXRUbyA9IHRvID8gYCR7aHNsWzBdfSwgJHtoc2xbMV19JSwgJHtoc2xbMl19JWAgOiB1bmRlZmluZWQ7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLXRoZW1lLXNvY2lhbC0tY29sb3InLCBzZXRUbyApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2Zvb3Rlcl90ZXh0X2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0Y29uc3QgaHNsID0gaGV4VG9IU0woIHRvICk7XG5cdFx0XHRjb25zdCBzZXRUbyA9IHRvID8gYCR7aHNsWzBdfSwgJHtoc2xbMV19JSwgJHtoc2xbMl19JWAgOiB1bmRlZmluZWQ7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLXRoZW1lLWZvb3Rlci0tY29sb3InLCBzZXRUbyApO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS10aGVtZS1mb290ZXItbmF2LS1jb2xvcicsIHNldFRvICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnZm9vdGVyX2hlYWRpbmdfY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHRjb25zdCBoc2wgPSBoZXhUb0hTTCggdG8gKTtcblx0XHRcdGNvbnN0IHNldFRvID0gdG8gPyBgJHtoc2xbMF19LCAke2hzbFsxXX0lLCAke2hzbFsyXX0lYCA6IG51bGw7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLXRoZW1lLWZvb3Rlci1oZWFkaW5nLS1jb2xvcicsIHNldFRvICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnc29jaWFsX2ljb25fZmFjZWJvb2snLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHRpZiAoIHRvICkge1xuXHRcdFx0XHQkKCAnLnNvY2lhbC1pY29uLWZhY2Vib29rJyApLnJlbW92ZUNsYXNzKCAnZGlzcGxheS1ub25lJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCggJy5zb2NpYWwtaWNvbi1mYWNlYm9vaycgKS5hZGRDbGFzcyggJ2Rpc3BsYXktbm9uZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdzb2NpYWxfaWNvbl90d2l0dGVyJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0aWYgKCB0byApIHtcblx0XHRcdFx0JCggJy5zb2NpYWwtaWNvbi10d2l0dGVyJyApLnJlbW92ZUNsYXNzKCAnZGlzcGxheS1ub25lJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCggJy5zb2NpYWwtaWNvbi10d2l0dGVyJyApLmFkZENsYXNzKCAnZGlzcGxheS1ub25lJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ3NvY2lhbF9pY29uX2luc3RhZ3JhbScsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdGlmICggdG8gKSB7XG5cdFx0XHRcdCQoICcuc29jaWFsLWljb24taW5zdGFncmFtJyApLnJlbW92ZUNsYXNzKCAnZGlzcGxheS1ub25lJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCggJy5zb2NpYWwtaWNvbi1pbnN0YWdyYW0nICkuYWRkQ2xhc3MoICdkaXNwbGF5LW5vbmUnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnc29jaWFsX2ljb25fbGlua2VkaW4nLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHRpZiAoIHRvICkge1xuXHRcdFx0XHQkKCAnLnNvY2lhbC1pY29uLWxpbmtlZGluJyApLnJlbW92ZUNsYXNzKCAnZGlzcGxheS1ub25lJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCggJy5zb2NpYWwtaWNvbi1saW5rZWRpbicgKS5hZGRDbGFzcyggJ2Rpc3BsYXktbm9uZScgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdzb2NpYWxfaWNvbl9waW50ZXJlc3QnLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHRpZiAoIHRvICkge1xuXHRcdFx0XHQkKCAnLnNvY2lhbC1pY29uLXBpbnRlcmVzdCcgKS5yZW1vdmVDbGFzcyggJ2Rpc3BsYXktbm9uZScgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoICcuc29jaWFsLWljb24tcGludGVyZXN0JyApLmFkZENsYXNzKCAnZGlzcGxheS1ub25lJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xufTtcblxuZnVuY3Rpb24gc2V0TWVudUxvY2F0aW9uRGVzY3JpcHRpb24oKSB7XG5cdHZhciBtZW51TG9jYXRpb25zRGVzY3JpcHRpb24gPSAkKCAnLmN1c3RvbWl6ZS1zZWN0aW9uLXRpdGxlLW1lbnVfbG9jYXRpb25zLWRlc2NyaXB0aW9uJyApLnRleHQoKSxcblx0ICAgIG1lbnVMb2NhdGlvbkNvdW50ICAgICAgICA9IFsgJ2Zvb3Rlci0xJywgJ2Zvb3Rlci0yJyBdLmluY2x1ZGVzKCB3cC5jdXN0b21pemUoICdmb290ZXJfdmFyaWF0aW9uJyApLmdldCgpICkgPyAnMicgOiAnNCc7XG5cdCQoICcuY3VzdG9taXplLXNlY3Rpb24tdGl0bGUtbWVudV9sb2NhdGlvbnMtZGVzY3JpcHRpb24nICkudGV4dCggbWVudUxvY2F0aW9uc0Rlc2NyaXB0aW9uLnJlcGxhY2UoIC9bMC05XS9nLCBtZW51TG9jYXRpb25Db3VudCApICk7XG59XG4iLCJpbXBvcnQgeyBoZXhUb0hTTCB9IGZyb20gJy4uL3V0aWwnO1xuXG5jb25zdCAkID0galF1ZXJ5OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0d3AuY3VzdG9taXplKCAnaGVhZGVyX3ZhcmlhdGlvbicsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdCQoICdib2R5JyApLnJlbW92ZUNsYXNzKCAnaGFzLWhlYWRlci0xIGhhcy1oZWFkZXItMiBoYXMtaGVhZGVyLTMgaGFzLWhlYWRlci00JyApXG4gICAgICAgICAgIFx0XHRcdCAgIC5hZGRDbGFzcyggJ2hhcy0nICsgdG8gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdoZWFkZXJfYmFja2dyb3VuZF9jb2xvcicsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdGNvbnN0IGhzbCA9IGhleFRvSFNMKCB0byApO1xuXHRcdFx0Y29uc3Qgc2V0VG8gPSB0byA/IGAke2hzbFswXX0sICR7aHNsWzFdfSUsICR7aHNsWzJdfSVgIDogdW5kZWZpbmVkIDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6cm9vdCcgKS5zdHlsZS5zZXRQcm9wZXJ0eSggJy0tdGhlbWUtaGVhZGVyLS1iZycsIHNldFRvICk7XG5cblx0XHRcdC8vIEFkZCBjbGFzcyBpZiBhIGJhY2tncm91bmQgY29sb3IgaXMgYXBwbGllZC5cblx0XHRcdGlmICggdG8gKSB7XG5cdFx0XHRcdCQoICcuaGVhZGVyJyApLmFkZENsYXNzKCAnaGFzLWJhY2tncm91bmQnICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCAnLmhlYWRlcicgKS5yZW1vdmVDbGFzcyggJ2hhcy1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2hlYWRlcl90ZXh0X2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0Y29uc3QgaHNsID0gaGV4VG9IU0woIHRvICk7XG5cdFx0XHRjb25zdCBzZXRUbyA9IHRvID8gYCR7aHNsWzBdfSwgJHtoc2xbMV19JSwgJHtoc2xbMl19JWAgOiB1bmRlZmluZWQgO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS10aGVtZS1zaXRlLW5hdi0tY29sb3InLCBzZXRUbyApO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS10aGVtZS1zaXRlLWRlc2NyaXB0aW9uLS1jb2xvcicsIHNldFRvICk7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLXRoZW1lLXNlYXJjaC10b2dnbGUtLWNvbG9yJywgc2V0VG8gKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6cm9vdCcgKS5zdHlsZS5zZXRQcm9wZXJ0eSggJy0tdGhlbWUtc2l0ZS10aXRsZS0tY29sb3InLCBzZXRUbyApO1xuXHRcdH0gKTtcblx0fSApO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0LyoqXG5cdCAqIFNldCBMb2dvIHdpZHRoLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHdpZHRoXG5cdCAqL1xuXHRjb25zdCBzZXRMb2dvV2lkdGggPSAoIHdpZHRoICkgPT4ge1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSggJy0tdGhlbWUtc2l0ZS1sb2dvLS13aWR0aCcsIHdpZHRoID8gYCR7d2lkdGh9cHhgIDogJ25vbmUnICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCBMb2dvIG1vYmlsZSB3aWR0aC5cblx0ICpcblx0ICogQHBhcmFtIHsqfSB3aWR0aFxuXHQgKi9cblx0Y29uc3Qgc2V0TG9nb01vYmlsZVdpZHRoID0gKCB3aWR0aCApID0+IHtcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoICctLXRoZW1lLXNpdGUtbG9nby0td2lkdGgtbW9iaWxlJywgd2lkdGggPyBgJHt3aWR0aH1weGAgOiAnbm9uZScgKTtcblx0fTtcblxuXHR3cC5jdXN0b21pemUoICdsb2dvX3dpZHRoJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4gc2V0TG9nb1dpZHRoKCB0byApICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdsb2dvX3dpZHRoX21vYmlsZScsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHNldExvZ29Nb2JpbGVXaWR0aCggdG8gKSApO1xuXHR9ICk7XG59O1xuIiwiY29uc3QgJCA9IGpRdWVyeTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cblx0d3AuY3VzdG9taXplKCAncGFnZV90aXRsZXMnLCAoIHZhbHVlICkgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdG9ycyA9ICcjY29udGVudCA+IC5lbnRyeS1oZWFkZXIsIGJvZHkucGFnZSBhcnRpY2xlIC5lbnRyeS1oZWFkZXIsIGJvZHkud29vY29tbWVyY2UgLmVudHJ5LWhlYWRlcic7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdGlmICggdG8gKSB7XG5cdFx0XHRcdCQoICdib2R5JyApLmFkZENsYXNzKCAnaGFzLXBhZ2UtdGl0bGVzJyApO1xuXHRcdFx0XHQkKCBzZWxlY3RvcnMgKS5yZW1vdmVDbGFzcyggJ2Rpc3BsYXktbm9uZScgKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCggJ2JvZHknICkucmVtb3ZlQ2xhc3MoICdoYXMtcGFnZS10aXRsZXMnICk7XG5cdFx0XHRcdCQoIHNlbGVjdG9ycyApLmFkZENsYXNzKCAnZGlzcGxheS1ub25lJyApO1xuXG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG5cbn07XG4iLCIvKipcbiAqIEZ1bmN0aW9ucyB0byBjb252ZXJ0IGhleCBjb2xvciB0byBIU0xcbiAqIEBwYXJhbSB7Kn0gSFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9IU0woIEggKSB7XG5cdC8vIENvbnZlcnQgaGV4IHRvIFJHQiBmaXJzdFxuXHRsZXQgciA9IDAsXG5cdFx0ZyA9IDAsXG5cdFx0YiA9IDA7XG5cdGlmICggNCA9PSBILmxlbmd0aCApIHtcblx0XHRyID0gYDB4JHsgIEhbMV0gIH0ke0hbMV19YDtcblx0XHRnID0gYDB4JHsgIEhbMl0gIH0ke0hbMl19YDtcblx0XHRiID0gYDB4JHsgIEhbM10gIH0ke0hbM119YDtcblx0fSBlbHNlIGlmICggNyA9PSBILmxlbmd0aCApIHtcblx0XHRyID0gYDB4JHsgIEhbMV0gIH0ke0hbMl19YDtcblx0XHRnID0gYDB4JHsgIEhbM10gIH0ke0hbNF19YDtcblx0XHRiID0gYDB4JHsgIEhbNV0gIH0ke0hbNl19YDtcblx0fVxuXG5cdC8vIFRoZW4gdG8gSFNMXG5cdHIgLz0gMjU1O1xuXHRnIC89IDI1NTtcblx0YiAvPSAyNTU7XG5cblx0Y29uc3QgY21pbiA9IE1hdGgubWluKCByLCBnLCBiICksXG5cdFx0Y21heCA9IE1hdGgubWF4KCByLCBnLCBiICksXG5cdFx0ZGVsdGEgPSBjbWF4IC0gY21pbjtcblxuXHRsZXQgaCA9IDA7XG5cdGxldFx0cyA9IDA7XG5cdGxldCBsID0gMDtcblxuXG5cdGlmICggMCA9PSBkZWx0YSApIGggPSAwO1xuXHRlbHNlIGlmICggY21heCA9PSByICkgaCA9ICggKCBnIC0gYiApIC8gZGVsdGEgKSAlIDY7XG5cdGVsc2UgaWYgKCBjbWF4ID09IGcgKSBoID0gKCBiIC0gciApIC8gZGVsdGEgKyAyO1xuXHRlbHNlIGggPSAoIHIgLSBnICkgLyBkZWx0YSArIDQ7XG5cblx0aCA9IE1hdGgucm91bmQoIGggKiA2MCApO1xuXG5cdGlmICggMCA+IGggKSBoICs9IDM2MDtcblxuXHRsID0gKCBjbWF4ICsgY21pbiApIC8gMjtcblx0cyA9IDAgPT0gZGVsdGEgPyAwIDogZGVsdGEgLyAoIDEgLSBNYXRoLmFicyggMiAqIGwgLSAxICkgKTtcblx0cyA9ICsoIHMgKiAxMDAgKS50b0ZpeGVkKCk7XG5cdGwgPSArKCBsICogMTAwICkudG9GaXhlZCgpO1xuXG5cdHJldHVybiBbaCwgcywgbF07XG59XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==