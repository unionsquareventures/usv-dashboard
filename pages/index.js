import fetch from 'isomorphic-fetch'
import Layout from '../components/Layout'
import Companies from '../components/Companies'
import GoogleDoc from '../components/GoogleDoc'
import GoogleLogin from 'react-google-login';

class Index extends React.Component {
  state = { activeCompany: {}, activeCompanyIndex: 0 }

  static async getInitialProps({ query }) {
    // http://localhost:3000/?q=rebecca
    const name = query.q ? query.q : ""

    // fetch the team
    const resTeam = await fetch('https://api.airtable.com/v0/appPHYsJXq2j8dCKC/Team%20for%20Dashboard', { headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` } })
    const jsonTeam = await resTeam.json()

    // fetch the partner's companies
    const resCompanies = await fetch(`https://api.airtable.com/v0/appTDiBNIJawBi2l5/Companies?filterByFormula=%7Bpartner%7D%3D'${name}'`, { headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` } })
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

  reset = async () => {
    const { companies } = this.props

    try {
      this.setState({ activeCompany: companies[0], activeCompanyIndex: 0 })
    } catch (e) {
      console.log(e)
    }
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
          <Layout team={team} reset={this.reset} >
            <div class="row">
                <div class="col-sm-2">
                  {
                    companies &&
                    <Companies companies={companies} activeCompany={activeCompany} setActiveCompany={this.setActiveCompany} activeCompanyIndex={activeCompanyIndex} />
                  }
                </div>
              {/*<GoogleDoc url={activePartner ? `${activeCompany.notes_gdoc_url}` : "https://docs.google.com/document/d/1Am1qQ4RMqJgXOtPxZfVOeFdLVjH1IMxhl6Z5GiKDvDE/edit"} />*/}
              <div class="col-sm-10">
                 <div class="row">
                    <div class="col-sm-6">
                      <h2>{activeCompany.name}</h2>
                      <table class="table">
                        <tr>
                          <th>Cash on Hand</th>
                          <td>${activeCompany.cash_on_hand}</td>
                        </tr>
                        <tr>
                          <th>Burn or Earnings</th>
                          <td>${activeCompany.burn_or_earnings}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-sm-6">
                      {
                        activeCompany.name &&
                          <div className="">
                            {
                              activeCompany.ceo_faces ? activeCompany.ceo_faces.map(ceo => <img className="img-sml circular margin-right-sml margin-bottom-sml flex-column" src={ceo.url} /> ) : ''
                            }
                            <p><a className="clickable" href={activeCompany.onepager_gdoc_url} target="_blank">One Pager</a></p>
                          </div>
                      }
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                    
                    </div>
                    <div class="col-sm-6">

                    </div>
                  </div>

              </div>
            </div>
          </Layout>
      )
    }
  }
}

export default Index
