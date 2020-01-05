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

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var team = _ref.team;
  return __jsx("div", {
    className: "team-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, team.map(function (person) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: person.id,
      href: "/?q=".concat(person.fields.name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("img", {
      src: person.fields.avatar[0].url,
      alt: person.fields.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    })));
  }));
}); // import Link from 'next/link'
//
// const Team = props => {
//   return (
//     <div className="team-wrapper">
//       { props.team.map(person =>
//         <img
//           className={props.activePartner == person.fields.name ? "img-xtra-sml padding-sml clickable person-avatar person-avatar--active" : "img-xtra-sml padding-sml clickable person-avatar"}
//           key={person.fields.name}
//           src={person.fields.avatar[0].thumbnails.large.url}
//         />
//       )}
//     </div>
//   )
// }
//
// export default Team
//
//

/***/ })

})
//# sourceMappingURL=index.js.a308ea1e3b194f5b9397.hot-update.js.map