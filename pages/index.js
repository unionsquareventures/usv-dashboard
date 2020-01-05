import fetch from 'isomorphic-fetch'
import Layout from '../components/Layout'
import Companies from '../components/Companies'
import GoogleDoc from '../components/GoogleDoc'

class Index extends React.Component {
  state = { activeCompany: {}, activeCompanyIndex: 0 }

  static async getInitialProps({ query }) {
    // http://localhost:3000/?q=rebecca
    const name = query.q ? query.q.toLowerCase() : ""

    // fetch the team
    const resTeam = await fetch('https://api.airtable.com/v0/appPHYsJXq2j8dCKC/Team%20for%20Dashboard', { headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` } })
    const jsonTeam = await resTeam.json()

    // fetch the partner's companies
    const resCompanies = await fetch(`https://api.airtable.com/v0/appPHYsJXq2j8dCKC/Organizations?filterByFormula=%7Bpartner_username%7D%3D'${name}'&view=USV+Portfolio+Companies`, { headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` } })
    const jsonCompanies = await resCompanies.json()

    // return as props
    return {
      team: jsonTeam.records,
      companies: jsonCompanies.records.length > 0 ? jsonCompanies.records : null,
      activePartner: name.length > 0 ? name : null
    }
  }

  setActiveCompany = (company, index) => {
    this.setState({ activeCompany: company, activeCompanyIndex: index })
  }

  render() {
    const { team, companies, activePartner } = this.props
    const { activeCompany, activeCompanyIndex } = this.state

    return (
      <div>
        <Layout team={team}>
          {
            companies &&
            <Companies companies={companies} activeCompany={activeCompany} setActiveCompany={this.setActiveCompany} activeCompanyIndex={activeCompanyIndex} />
          }
          <GoogleDoc url={activePartner ? `https://docs.google.com/document/d/1VfDzcGrPgCEtk8nleFqhOneieSinSD7tBysE7LMchA4/edit#heading=${activeCompany.notes_gdoc_heading_id}` : "https://docs.google.com/document/d/1Am1qQ4RMqJgXOtPxZfVOeFdLVjH1IMxhl6Z5GiKDvDE/edit"} />
          <div>
            {
              activeCompany.name &&
                <div className="column column-med">
                  {
                    activeCompany.ceo_faces ? activeCompany.ceo_faces.map(ceo => <img className="img-sml circular margin-right-sml margin-bottom-sml flex-column" src={ceo.url} /> ) : ''
                  }
                  <p><a className="clickable" href={activeCompany.onepager_gdoc_url} target="_blank">One Pager</a></p>
                </div>
            }
          </div>
        </Layout>
      </div>
    )
  }
}

export default Index

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
          // <div>
          //   {
          //     this.props.activeCompany.name &&
          //       <div className="column column-med">
          //         {
          //           this.props.activeCompany.ceo_faces ? this.props.activeCompany.ceo_faces.map(ceo => <img className="img-sml circular margin-right-sml margin-bottom-sml flex-column" src={ceo.url} /> ) : ''
          //         }
          //         <p><a href={this.props.activeCompany.onepager_gdoc_url} target="_blank">One Pager</a></p>
          //       </div>
          //   }
          // </div>
//         </Layout>
//       </div>
//     )
//   }
// }
//
// export default Index
