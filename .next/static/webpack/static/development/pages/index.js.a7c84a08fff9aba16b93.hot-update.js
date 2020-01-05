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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/Users/danigrant/Projects/usv-dashboard/components/Companies.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

var Companies =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Companies, _React$Component);

  function Companies() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Companies);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Companies)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      activeCompanyIndex: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Companies, [{
    key: "render",
    value: function render() {
      var companies = this.props.companies;

      if (!companies) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        });
      } else return __jsx("div", {
        className: "companies-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("div", {
        onClick: this.decrementActiveCompany,
        className: "nav-arrow clickable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("i", {
        "class": "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "navigate_before_rounded")), __jsx("div", {
        onClick: this.incrementActiveCompany,
        className: "nav-arrow clickable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("i", {
        "class": "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "navigate_next_rounded")), companies.map(function (company) {
        return __jsx("div", {
          className: "company",
          key: company.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, company.fields.name));
      }));
    }
  }]);

  return Companies;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

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

/***/ })

})
//# sourceMappingURL=index.js.a7c84a08fff9aba16b93.hot-update.js.map