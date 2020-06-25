import fetch from 'isomorphic-fetch'
import Layout from '../components/Layout'
import Team from '../components/Team'
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
      view = ""
    }
    if (type == "categories") {
      view = "viwRvHr6T6yc5nsRt" // use partner-sorted view for categories.
    }
    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_COMPANIES_BASE_ID}/Companies?filterByFormula=Find(%22${term}%22%2C+${type})&view=${view}`
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
    let companies = null

    if (type == "categories") {
      companies = jsonCompanies.records ? jsonCompanies.records : null
    } else {
      companies = jsonCompanies.records ? shuffle(jsonCompanies.records) : null
    }

    // filter out anything we want to filter out
    let final_companies = null
    if (companies) {
      final_companies = []
      for (var i in companies) {
        if (companies[i].fields.show_in_dash) {
          final_companies.push(companies[i])
        }
      }  
    }
    

    return {
      menus: jsonMenus.records,
      /*team: shuffle(jsonTeam.records),*/
      team: [],
      companies: final_companies,
      activeQuery: term.length > 0 ? term : null,
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { companies, activeQuery } = props
    const { activeCompanyIndex } = state

    if (companies) {
      // if just switched partners, reset company index to 0
      const newActiveCompanyIndex = props.activeQuery !== state.activeQuery ? 0 : activeCompanyIndex
      return { activeCompany: companies[newActiveCompanyIndex].fields, activeCompanyIndex: newActiveCompanyIndex, activeQuery }
    }

    return { activeCompany: {}, activeCompanyIndex: 0 }
  }

  accountingFormatMillions = (number) => {
    if (isNaN(number)) {
      return ""
    }
    number = number / 1000000
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
              <div className="col-sm-2">
                <Team reset={this.reset} menus={menus} team={team} />
                {
                  companies &&
                    <Companies companies={companies} activeQuery={activeQuery} activeCompany={activeCompany} setActiveCompany={this.setActiveCompany} activeCompanyIndex={activeCompanyIndex} />
                }
                </div>
                <div className="col-sm-10">
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="clearfix">
                        <h2 className="company-name">{activeCompany.company_name}</h2>
                        <div className="ceo-faces">
                          {
                            activeCompany.ceo_faces ? activeCompany.ceo_faces.map(ceo => <img className="img-md circular margin-right-sml margin-bottom-sml flex-column" src={ceo.url} /> ) : ''
                          }
                        </div>
                      </div>
                      {
                        companies &&
                        <div>

                          <h3 class="section-header">USV Ownership</h3>

                          <table className="usv-data" id="company-stats">
                            <tbody>
                              <tr>
                                <th>&nbsp;</th>
                                <th>Amount Invested</th>
                                <th>Carrying Value</th>
                                <th>Ownership</th>
                              </tr>
                              {activeCompany.core_fund_investment >0 &&
                              <tr>
                                <th>{activeCompany.core_fund}</th>
                                <td>{this.accountingFormatMillions(activeCompany.core_fund_investment)}</td>
                                <td>
                                  {this.accountingFormatMillions(activeCompany.core_fund_fmv)}&nbsp;({activeCompany.core_fund_multiple})
                                </td>
                                <td>{this.percentFormat(activeCompany.core_fund_ownership)}</td>
                              </tr>
                              }
                              {activeCompany.oppty_fund_investment >0 &&
                              <tr>
                                <th>{activeCompany.oppty_fund}</th>
                                <td>{this.accountingFormatMillions(activeCompany.oppty_fund_investment)}</td>
                                <td>
                                  {this.accountingFormatMillions(activeCompany.oppty_fund_fmv)}&nbsp;({activeCompany.oppty_fund_multiple})
                                </td>
                                <td>{this.percentFormat(activeCompany.oppty_fund_ownership)}</td>
                              </tr>
                              }
                              <tr class="total">
                                <th>Total</th>
                                <td>{this.accountingFormatMillions(activeCompany.total_amount_invested)}</td>
                                <td>{this.accountingFormatMillions(activeCompany.total_carrying_value)} ({activeCompany.multiple})</td>
                                <td>{this.percentFormat(activeCompany.usv_ownership)}</td>
                              </tr>
                            </tbody>
                          </table>

                          <br />

                        <h3 class="section-header">Key Metrics (as of {activeCompany.data_fresh_as_of})</h3>
                          <table class="usv-data">
                           <tr>
                             <th>Financing Status</th>
                              <td colspan="3">{activeCompany.financing_status}</td>
                             </tr>
                             {activeCompany.cash_on_hand &&
                             <tr>
                               <th>Cash on Hand</th>
                               <td>{this.accountingFormatMillions(activeCompany.cash_on_hand)}</td>
                              </tr>
                              } 
                              {activeCompany.burn_or_earnings && 
                              <tr>
                               <th>Burn or Earnings</th>
                                <td>{this.accountingFormatMillions(activeCompany.burn_or_earnings)}</td>
                             </tr>
                             }
                             {activeCompany.debt && 
                              <tr>
                               <th>Debt</th>
                                <td>{this.accountingFormatMillions(activeCompany.debt)}</td>
                             </tr>
                             }
                             {activeCompany.headcount && 
                             <tr>
                               <th>Headcount</th>
                               <td>{activeCompany.headcount}</td>
                             </tr>
                             }
                             {activeCompany.total_amount_raised && 
                            <tr>
                              <th>Total Raised</th>
                              <td>{this.accountingFormatMillions(activeCompany.total_amount_raised)}</td>
                            </tr>
                            }
                            {activeCompany.major_co_investors &&
                            <tr>
                              <th>Major Co-investors</th>
                              <td colspan="2">{activeCompany.major_co_investors}</td>
                            </tr>
                            }
                          </table>

                          <br />
                          <a className="btn btn-light" href={activeCompany.one_pager_url} target="_blank">One Pager</a> &nbsp;
                                <a className="btn btn-light" href={`https://airtable.com/tblUkQWZIrttZ5wDL/viwnet4uSCne1QPmf/${activeCompany.airtable_id}?blocks=hide`} target="_airtable">Details in Airtable</a> &nbsp;

                        </div>
                      }
                    </div>
                  <div className={companies ? "col-sm-7" : "col-sm-12"}>
                    <GoogleDoc url={companies ? `${activeCompany.notes_gdoc_url}` : "https://docs.google.com/document/d/1Am1qQ4RMqJgXOtPxZfVOeFdLVjH1IMxhl6Z5GiKDvDE/edit"} />
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
