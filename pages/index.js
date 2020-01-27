import fetch from 'isomorphic-fetch'
import Layout from '../components/Layout'
import Companies from '../components/Companies'
import GoogleDoc from '../components/GoogleDoc'
import GoogleLogin from 'react-google-login';

class Index extends React.Component {
  state = { activeCompany: {}, activeCompanyIndex: 0 }

  static async getInitialProps({ query }) {

    // fetch the menus
    const resMenus = await fetch('https://api.airtable.com/v0/appTDiBNIJawBi2l5/Menus?view=viwz9PT3FOx6hhBcA', { headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` } })
    const jsonMenus = await resMenus.json()

    /*
    // fetch the team
    const resTeam = await fetch('https://api.airtable.com/v0/appPHYsJXq2j8dCKC/Team%20for%20Dashboard?view=viwFM5GhIM8H4BCOs', { headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` } })
    const jsonTeam = await resTeam.json()
    */

    // http://localhost:3000/?q=rebecca
    const term = query.q ? query.q.replace('%20', ' ') : ""
    const type = query.t ? query.t : ""

    //const filterByFormula = encodeURIComponent(`Find("${term}",${type})`);

    // fetch the partner's companies
    let view = ""
    if (type == "partner") {
      view = "viwYmeWLfdNELpzD8"
    }
    const url = `https://api.airtable.com/v0/appTDiBNIJawBi2l5/Companies?filterByFormula=Find(%22${term}%22%2C+${type})&view=${view}`
    const resCompanies = await fetch(url, { headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` } })
    const jsonCompanies = await resCompanies.json()

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // return as props
    return {
      menus: jsonMenus.records,
      /*team: shuffle(jsonTeam.records),*/
      team: [],
      companies: jsonCompanies.records ? shuffle(jsonCompanies.records) : null,
      activeQuery: term.length > 0 ? term : null,
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { companies, activeQuery } = props
    const { activeCompanyIndex } = state

    if (companies) {
      return { activeCompany: companies[activeCompanyIndex].fields, activeCompanyIndex: activeCompanyIndex, activeQuery: activeQuery }
    }

    return { activeCompany: {}, activeCompanyIndex: 0 }
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
    var fmt_num = parseFloat(number * 100).toFixed(0)
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
      this.setState({ activeCompany: companies[0].fields, activeCompanyIndex: 0 })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { menus, team, companies, loggedInUser, login } = this.props
    const { activeQuery, activeCompany, activeCompanyIndex } = this.state

    if (!loggedInUser) {
      return (
        <div>
          <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={login}
            onFailure={(res) => console.log("login failed")}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      )
    } else {
      return (
          <Layout menus={menus} team={team} reset={this.reset} >
            <div className="row">
                {
                  companies &&
                  <div className="col-sm-2">
                    <Companies companies={companies} activeQuery={activeQuery} activeCompany={activeCompany} setActiveCompany={this.setActiveCompany} activeCompanyIndex={activeCompanyIndex} />
                  </div>
                }
                <div className="col-sm-10">
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="clearfix">
                        <h2 className="company-name">{activeCompany.name}</h2>
                        <div className="ceo-faces">
                          {
                            activeCompany.ceo_faces ? activeCompany.ceo_faces.map(ceo => <img className="img-md circular margin-right-sml margin-bottom-sml flex-column" src={ceo.url} /> ) : ''
                          }
                        </div>
                      </div>
                      {
                        companies &&
                        <div>
                          <table className="table" id="company-stats">
                          <tbody>
                            <tr className="section-header">
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
                            { activeCompany.latest_revenue_run_rate ? 
                            <tr>
                              <th>Revenue Run Rate</th>
                              <td>{this.accountingFormatMillions(activeCompany.latest_revenue_run_rate)}</td>
                            </tr>
                            : ''
                            }
                            { activeCompany.financing_status ? 
                            <tr>
                              <th>Financing Status</th>
                              <td>{activeCompany.financing_status}</td>
                            </tr>
                            : ''
                            }
                            <tr className="section-header">
                              <th>Ownership</th>
                              <td>as of {activeCompany.latest_valuation_date}</td>
                            </tr>
                            <tr>
                              <th>USV Ownership</th>
                              <td>{this.percentFormat(activeCompany.percent_ownership)}</td>
                            </tr>
                            <tr>
                              <th>Funds</th>
                              <td>{activeCompany.funds ? activeCompany.funds.map(fund => <span className={`badge fund-${fund}`}>{fund}</span>) : '' }</td>
                            </tr>
                            <tr>
                              <th>USV Investment</th>
                              <td>{this.accountingFormatMillions(activeCompany.cumulative_usv_investment)}</td>
                            </tr>
                            <tr>
                              <th>Carrying Value</th>
                              <td>{this.accountingFormatMillions(activeCompany.cumulative_carrying_value)} &nbsp; {this.multipleFormat(activeCompany.multiple)} </td>
                            </tr>
                            <tr>
                              <th>Computed EV</th>
                              <td>{this.accountingFormatMillions(activeCompany.estimated_enterprise_value)}</td>
                            </tr>
                            <tr>
                              <td colspan="2" class="company-edit-buttons">
                                <a className="btn btn-light" href={activeCompany.one_pager_url} target="_blank">One Pager</a> &nbsp;
                                <a className="btn btn-light" href={`https://airtable.com/tblDw6nMnbLsBUyON/viw4ILnizUR2WsxJU/${activeCompany.airtable_id}?blocks=hide`} target="_airtable">Details</a> &nbsp;
                                <a className="btn btn-light" href="https://airtable.com/tblRHx5A9pgEIUNGP/viw5wx0eAbR9Hxc6X?blocks=hide" target="_airtable">Transactions</a> &nbsp;
                                <a className="btn btn-light" href="https://airtable.com/tblwvszzdJFQX8UQP/viwda2fq4V1Hwt52z?blocks=hide" target="_airtable">Valuations</a> &nbsp;
                                <a className="btn btn-light" href="https://airtable.com/tblc8af4nqyxPW29z/viwrbrtQkpti8rEXu?blocks=hide" target="_airtable">Metrics</a>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      }
                    </div>
                  <div className={companies ? "col-sm-7" : "col-sm-12"}>
                    <GoogleDoc url={activeQuery ? `${activeCompany.notes_gdoc_url}` : "https://docs.google.com/document/d/1Am1qQ4RMqJgXOtPxZfVOeFdLVjH1IMxhl6Z5GiKDvDE/edit"} />
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
