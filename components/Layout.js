import Team from './Team'
// import Companies from './Companies'
import GoogleDoc from './GoogleDoc'
// import AdditionalCompanyInfo from './AdditionalCompanyInfo'
import Link from 'next/link'

export default ({ team, companies, activePartner, children }) => (
  <div className="columns">
    <div className="column column-sml">
      <Link href="/" >
        <a><img className="img-sml clickable" src="https://www.usv.com/wp-content/uploads/2019/04/usv_logo.jpg" /></a>
      </Link>
      <div className="nav-links-container">
        <p><a className="clickable" href="https://drive.google.com/drive/u/0/folders/0B1KsbxTl9h4lc1dUTm1CbVgxVHc" target="_cashviews">Cash Views</a></p>
        <p><a className="clickable" href="https://airtable.com/tblp3neqOa0qqITHe/viw2A0exyNlw1STMf" target="_newdeals">New Deals</a></p>
      </div>
      <Team team={team} activePartner={activePartner} />
      <p><a className="clickable" href="https://nick207.typeform.com/to/J5fsGE" target="_typeform">+ New Deal</a></p>
    </div>
    <div className="columns column inner-content">
      {children}
    </div>
  </div>
)
