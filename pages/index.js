import fetch from 'isomorphic-fetch'
import Layout from '../components/Layout'
import Companies from '../components/Companies'
import GoogleDoc from '../components/GoogleDoc'
import GoogleLogin from 'react-google-login';

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
    const { team, companies, activePartner, loggedInUser, login } = this.props
    const { activeCompany, activeCompanyIndex } = this.state

    if (!loggedInUser) {
      return (
        <div>
          <GoogleLogin
            clientId="810380289272-v86e6hkvtaj7280do08emcma1bi79t3b.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={login}
            onFailure={(res) => console.log("login failed")}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      )
    } else {
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
}

export default Index
