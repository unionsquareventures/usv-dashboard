webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Team.js":
/*!****************************!*\
  !*** ./components/Team.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/usv-dashboard/components/Team.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Team = function Team(props) {
  return __jsx("div", {
    className: "people-list-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.team.map(function (person) {
    return __jsx("img", {
      className: props.activePartner == person.fields.name ? "img-xtra-sml padding-sml clickable person-avatar person-avatar--active" : "img-xtra-sml padding-sml clickable person-avatar",
      key: person.fields.name,
      src: person.fields.avatar[0].thumbnails.large.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ })

})
//# sourceMappingURL=index.js.654141aab7bd9d97869b.hot-update.js.map