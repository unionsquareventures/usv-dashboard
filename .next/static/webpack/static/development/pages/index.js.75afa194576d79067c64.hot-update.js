webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Companies.js":
/*!*********************************!*\
  !*** ./components/Companies.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/danigrant/Projects/usv-dashboard/components/Companies.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

var Companies =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Companies, _React$Component);

  function Companies() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Companies);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Companies).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Companies, [{
    key: "render",
    value: function render() {
      var companies = this.props.companies;

      if (!companies) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: this
        });
      } else return __jsx("div", {
        className: "companies-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("div", {
        onClick: this.decrementActiveCompany,
        className: "nav-arrow clickable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("i", {
        "class": "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "navigate_before_rounded")), __jsx("div", {
        onClick: this.incrementActiveCompany,
        className: "nav-arrow clickable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("i", {
        "class": "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "navigate_next_rounded")), companies.map(function (company) {
        return __jsx("div", {
          className: "company",
          key: company.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, company.fields.name));
      }));
    }
  }]);

  return Companies;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Companies); // /*
// *
// *  This component displays the list of companies per partner
// *  And manages toggling between them with the arrows
// *  In the constructor, it initiates an activeCompanyIndex which says which item in the array of that partner's companies is currently active
// *  Then when the component mounts, it sets the active company in global state to the one at the 0th index of the array of that partner's companies
// *  The activeCompanyIndex field in state is currently just used locally in this component to know which UI element should be displayed as active
// *
// */
//
// import React from 'react'
//
// class Companies extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { activeCompanyIndex: 0 }
//   }
//   componentDidMount() {
//     this.props.changeActiveCompany(this.props.activePartnerCompanies[this.state.activeCompanyIndex].fields)
//   }
//   incrementActiveCompany = () => {
//     if (this.state.activeCompanyIndex <= this.props.activePartnerCompanies.length - 1) {
//       this.setState({ activeCompanyIndex: this.state.activeCompanyIndex + 1 })
//       this.props.changeActiveCompany(this.props.activePartnerCompanies[this.state.activeCompanyIndex].fields)
//     }
//   }
//   decrementActiveCompany = () => {
//     if (this.state.activeCompanyIndex > 0) {
//       this.setState({ activeCompanyIndex: this.state.activeCompanyIndex -1 })
//       this.props.changeActiveCompany(this.props.activePartnerCompanies[this.state.activeCompanyIndex].fields)
//     }
//   }
//   render() {
//     return (
//       <div className="companies-wrapper">
//         <div onClick={this.decrementActiveCompany}className="nav-arrow clickable"><i class="material-icons">navigate_before_rounded</i></div>
//         <div onClick={this.incrementActiveCompany}className="nav-arrow clickable"><i class="material-icons">navigate_next_rounded</i></div>
//         <div>
//         {
//           this.props.activePartnerCompanies.map((company, index) => {
//             return (
//               <div>
//                 <p className={this.props.activeCompany.name == company.fields.name || this.props.activeCompanyIndex == index ? "clickable companies-wrapper-item companies-wrapper-item--active" : "clickable companies-wrapper-item"} onClick={() => {this.props.changeActiveCompany(company.fields)}}>{company.fields.name}</p>
//               </div>
//             )
//           })
//         }
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Companies

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Companies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Companies */ "./components/Companies.js");







var _jsxFileName = "/Users/danigrant/Projects/usv-dashboard/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          team = _this$props.team,
          companies = _this$props.companies,
          activePartner = _this$props.activePartner;
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        team: team,
        companies: companies,
        activePartner: activePartner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, companies && __jsx(_components_Companies__WEBPACK_IMPORTED_MODULE_10__["default"], {
        companies: companies,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, name, resTeam, jsonTeam, resCompanies, jsonCompanies;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                // http://localhost:3000/?q=rebecca
                name = query.q ? query.q.toLowerCase() : ""; // fetch the team

                _context.next = 4;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default()('https://api.airtable.com/v0/appPHYsJXq2j8dCKC/Team%20for%20Dashboard', {
                  headers: {
                    "Authorization": "Bearer ".concat("keyVM2c7uN5IJ1gn3")
                  }
                });

              case 4:
                resTeam = _context.sent;
                _context.next = 7;
                return resTeam.json();

              case 7:
                jsonTeam = _context.sent;
                _context.next = 10;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default()("https://api.airtable.com/v0/appPHYsJXq2j8dCKC/Organizations?filterByFormula=%7Bpartner_username%7D%3D'".concat(name, "'&view=USV+Portfolio+Companies"), {
                  headers: {
                    "Authorization": "Bearer ".concat("keyVM2c7uN5IJ1gn3")
                  }
                });

              case 10:
                resCompanies = _context.sent;
                _context.next = 13;
                return resCompanies.json();

              case 13:
                jsonCompanies = _context.sent;
                return _context.abrupt("return", {
                  team: jsonTeam.records,
                  companies: jsonCompanies.records.length > 0 ? jsonCompanies.records : null,
                  activePartner: name.length > 0 ? name : null
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index); // import Layout from '../components/Layout'
// import Companies from '../components/Companies'
// import GoogleDoc from '../components/GoogleDoc'
//
// import { getTeam } from '../utils/Airtable'
// import { getPartnerCompanies } from '../utils/Airtable'
//
// class Index extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   resetDashboard = () => {
//     this.props.changeActiveCompany({})
//     this.props.changeActivePartner('')
//   }
//   render() {
//     return (
//       <div>
//         <Layout>
//           {
//             this.props.activePartnerCompanies.length > 0 &&
//             <Companies activePartnerCompanies={this.props.activePartnerCompanies} activeCompany={this.props.activeCompany} changeActiveCompany={this.props.changeActiveCompany} />
//           }
//           <GoogleDoc url={this.props.activeCompany.name ? `https://docs.google.com/document/d/1tan4xBwhVVWcsIVdQpuOOhWDPn5MkO3arrspShOSCGk/edit#heading=${this.props.activeCompany.notes_gdoc_heading_id}` : "https://docs.google.com/document/d/12jQecxqh1oIdb2EcNm3qTAanjPJIEG0Zdf0vuusdfh0/edit"} />
//           <div>
//             {
//               this.props.activeCompany.name &&
//                 <div className="column column-med">
//                   {
//                     this.props.activeCompany.ceo_faces ? this.props.activeCompany.ceo_faces.map(ceo => <img className="img-sml circular margin-right-sml margin-bottom-sml flex-column" src={ceo.url} /> ) : ''
//                   }
//                   <p><a href={this.props.activeCompany.onepager_gdoc_url} target="_blank">One Pager</a></p>
//                 </div>
//             }
//           </div>
//         </Layout>
//       </div>
//     )
//   }
// }
//
// export default Index

/***/ })

})
//# sourceMappingURL=index.js.75afa194576d79067c64.hot-update.js.map