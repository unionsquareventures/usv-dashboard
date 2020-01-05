webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Team */ "./components/Team.js");
/* harmony import */ var _GoogleDoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoogleDoc */ "./components/GoogleDoc.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/danigrant/Projects/usv-dashboard/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Companies from './Companies'

 // import AdditionalCompanyInfo from './AdditionalCompanyInfo'


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var team = _ref.team,
      companies = _ref.companies,
      activePartner = _ref.activePartner,
      children = _ref.children;
  return __jsx("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "column column-sml",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    className: "img-sml clickable",
    src: "https://www.usv.com/wp-content/uploads/2019/04/usv_logo.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), __jsx("div", {
    className: "nav-links-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    className: "clickable",
    href: "https://drive.google.com/drive/u/0/folders/0B1KsbxTl9h4lc1dUTm1CbVgxVHc",
    target: "_cashviews",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Cash Views")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    className: "clickable",
    href: "https://airtable.com/tblp3neqOa0qqITHe/viw2A0exyNlw1STMf",
    target: "_newdeals",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "New Deals"))), __jsx(_Team__WEBPACK_IMPORTED_MODULE_1__["default"], {
    team: team,
    activePartner: activePartner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    className: "clickable",
    href: "https://nick207.typeform.com/to/J5fsGE",
    target: "_typeform",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "+ New Deal"))), __jsx("div", {
    className: "columns column inner-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children));
}); //
//   <div className="layout-wrapper">
//
//     { /* first column */ }
//     <div className="column column-sml">
//       { /* logo */ }
//       <Link href="/">
//         <a>
//           <img id="logo" src="https://www.usv.com/wp-content/uploads/2019/04/usv_logo.jpg" />
//         </a>
//       </Link>
//
//       <p className="menu-links"><a href="https://drive.google.com/drive/u/0/folders/0B1KsbxTl9h4lc1dUTm1CbVgxVHc" target="_cashviews">Cash Views</a></p>
//       <p className="menu-links"><a href="https://airtable.com/tblp3neqOa0qqITHe/viw2A0exyNlw1STMf" target="_newdeals">New Deals</a></p>
//
//       <Team team={team} />
//
//       <p className="menu-links"><a href="https://nick207.typeform.com/to/J5fsGE" target="_typeform">+ New Deal</a></p>
//     </div>
//
//     { /* optional second column for companies */ }
//     <div className="column column-med">
//       { activePartner && <Companies companies={companies}  /> }
//     </div>
//
//     { /* third column */ }
//     <div className="column">
//       { activePartner && <GoogleDoc url={"https://docs.google.com/document/d/12jQecxqh1oIdb2EcNm3qTAanjPJIEG0Zdf0vuusdfh0/edit"}  /> }
//       { !activePartner && <GoogleDoc url={"https://docs.google.com/document/d/12jQecxqh1oIdb2EcNm3qTAanjPJIEG0Zdf0vuusdfh0/edit"} /> }
//     </div>
//
//     { /* optional fourth column for company info */ }
//     <div className="column">
//       { activePartner && <AdditionalCompanyInfo /> }
//     </div>
//   </div>
// )
// /*
// *
// *  This contains all of the parts of the UI that are consistent across views (main view vs partner view)
// *  aka the team photos, the top logo and nav links
// *  Then the other parts of the page from /pages/index.js are inserted where it says {this.props.children}
// *
// */
//
// import PeopleList from '../components/PeopleList'
// import GoogleDoc from '../components/GoogleDoc'
// import { getTeam } from '../utils/Airtable'
//
// class Layout extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       team: []
//     }
//   }
//
//   render() {
//     const { router } = this.props
//     return (
//       <div className="columns">
//         <div className="column column-sml">
//           <img className="img-sml clickable" onClick={this.props.resetDashboard} src="https://www.usv.com/wp-content/uploads/2019/04/usv_logo.jpg" />
//           <div className="nav-links-container">
//             <p><a className="clickable" href="https://drive.google.com/drive/u/0/folders/0B1KsbxTl9h4lc1dUTm1CbVgxVHc" target="_cashviews">Cash Views</a></p>
//             <p><a className="clickable" href="https://airtable.com/tblp3neqOa0qqITHe/viw2A0exyNlw1STMf" target="_newdeals">New Deals</a></p>
//           </div>
//           <PeopleList team={this.state.team} activePartner={this.props.activePartner} changeActivePartner={this.props.changeActivePartner} />
//           <p><a className="clickable" href="https://nick207.typeform.com/to/J5fsGE" target="_typeform">+ New Deal</a></p>
//         </div>
//         <div className="columns column inner-content">
//           {this.props.children}
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Layout

/***/ })

})
//# sourceMappingURL=index.js.9f38585fb1af14f5d5bc.hot-update.js.map