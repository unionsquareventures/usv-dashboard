class Companies extends React.Component {

  incrementActiveCompany = () => {
    const { companies, setActiveCompany, activeCompanyIndex } = this.props

    if (activeCompanyIndex <= companies.length - 1) {
      setActiveCompany(companies[activeCompanyIndex + 1].fields, activeCompanyIndex + 1)
    }
  }

  decrementActiveCompany = () => {
    const { companies, setActiveCompany, activeCompanyIndex } = this.props

    if (activeCompanyIndex > 0) {
      setActiveCompany(companies[activeCompanyIndex - 1].fields, activeCompanyIndex - 1)
    }
  }

  render() {
    const { companies, activeCompany, setActiveCompany, activeCompanyIndex } = this.props

    if (!companies) {
      return (
        <div>
        {/* not a partner */}
        </div>
      )
    } else return (
      <div className="companies-wrapper">
        <div onClick={this.decrementActiveCompany} className="nav-arrow clickable"><i className="material-icons">navigate_before_rounded</i></div>
        <div onClick={this.incrementActiveCompany} className="nav-arrow clickable"><i className="material-icons">navigate_next_rounded</i></div>
        {companies.map((company, index) => (
          <div className="company" key={company.id}>
            <p className={activeCompany.name == company.fields.name || activeCompanyIndex == index ? "clickable companies-wrapper-item companies-wrapper-item--active" : "clickable companies-wrapper-item"} onClick={() => { setActiveCompany(company.fields, index)}}>{company.fields.name}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Companies

// /*
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
