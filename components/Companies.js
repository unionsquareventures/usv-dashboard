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
