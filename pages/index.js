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
    const resTeam = await fetch('https://api.airtable.com/v0/appPHYsJXq2j8dCKC/Team%20for%20Dashboard?view=viwFM5GhIM8H4BCOs', { headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` } })
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

  accountingFormatMillions = (number) => {
    if (isNaN(number)) {
      return ""
    }
    var fmt_num = parseFloat(number).toFixed(1)
    if (number<0) {
      fmt_num = "($" + (fmt_num * -1) + "mm)"
    } else {
      if (number>1000) {
        fmt_num = fmt_num / 1000
        fmt_num = fmt_num.toFixed(2)
        fmt_num = "$" + fmt_num + "B"
      } else {
        fmt_num = "$" + fmt_num + "mm"
      }
    }
    return fmt_num
  }

  percentFormat = (number) => {
    if (isNaN(number)) {
      return ""
    }
    var fmt_num = parseFloat(number * 100).toFixed(2)
    return fmt_num + "%"
  }

  multipleFormat = (number) => {
    if (isNaN(number)) {
      return ""
    }
    var fmt_num = parseFloat(number).toFixed(1)
    return "(" + fmt_num + "x)"
  }

  fundsFormat = (funds) => {
    if (typeof funds == "undefined") {
      return ""
    }
    return Object.keys(funds).map(function(k){return funds[k]}).join(", ");
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
              <div class="col-sm-10">
                 <div class="row">
                    <div class="col-sm-5">
                      <div class="clearfix">
                      <h2 class="company-name">{activeCompany.name}</h2>
                        <div class="ceo-faces">
                          {
                              activeCompany.ceo_faces ? activeCompany.ceo_faces.map(ceo => <img className="img-sml circular margin-right-sml margin-bottom-sml flex-column" src={ceo.url} /> ) : ''
                            }
                          </div>
                      </div>
                      <table class="table">
                       <tr class="section-header">
                            <th>Metrics</th>
                            <td>as of {activeCompany.latest_metrics_date}</td>
                          </tr>
                        <tr>
                          <th>Cash on Hand</th>
                          <td>{this.accountingFormatMillions(activeCompany.cash_on_hand)}</td>
                        </tr>
                        <tr>
                          <th>Burn or Earnings</th>
                          <td>{this.accountingFormatMillions(activeCompany.burn_or_earnings)}</td>
                        </tr>
                          <tr class="section-header">
                            <th>Ownership</th>
                            <td>as of {activeCompany.latest_valuation_date}</td>
                          </tr>
                        <tr>
                            <th>USV Ownership</th>
                            <td>{this.percentFormat(activeCompany.percent_ownership)}</td>
                          </tr>
                        <tr>
                            <th>Funds</th>
                            <td>{this.fundsFormat(activeCompany.funds)}</td>
                          </tr>
                        <tr>
                            <th>Cumulative USV Investment</th>
                            <td>{this.accountingFormatMillions(activeCompany.cumulative_usv_investment)}</td>
                          </tr>
                          <tr>
                            <th>Cumulative Carrying Value</th>
                            <td>{this.accountingFormatMillions(activeCompany.cumulative_carrying_value)}
                             &nbsp;{this.multipleFormat(activeCompany.multiple)}
                            </td>
                          </tr>
                          <tr>
                            <th>Estimated Enterprise Value</th>
                            <td>{this.accountingFormatMillions(activeCompany.estimated_enterprise_value)}</td>
                          </tr>
                          <tr>
                            <th></th>
                            <td><a className="clickable" href={activeCompany.one_pager_url} target="_blank">One Pager</a></td>
                          </tr>
                      </table>
                    </div>
                    <div class="col-sm-7">
                      <GoogleDoc url={activePartner ? `${activeCompany.notes_gdoc_url}` : "https://docs.google.com/document/d/1Am1qQ4RMqJgXOtPxZfVOeFdLVjH1IMxhl6Z5GiKDvDE/edit"} />
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
