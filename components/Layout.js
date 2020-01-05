import Team from './Team'
// import Companies from './Companies'
import GoogleDoc from './GoogleDoc'
// import AdditionalCompanyInfo from './AdditionalCompanyInfo'
import Link from 'next/link'

export default ({ team, companies, activePartner, children }) => (
  <div className="columns">
    <div className="column column-sml">
      <Link href="/">
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


//
//   <div className="layout-wrapper">
//
//     { /* first column */ }
//     <div className="column column-sml">
//       { /* logo */ }
//       <Link href="/">
//         <a>
//           <img id="logo" src="https://www.usv.com/wp-content/uploads/2019/04/usv_logo.jpg" />
//         </a>
//       </Link>
//
//       <p className="menu-links"><a href="https://drive.google.com/drive/u/0/folders/0B1KsbxTl9h4lc1dUTm1CbVgxVHc" target="_cashviews">Cash Views</a></p>
//       <p className="menu-links"><a href="https://airtable.com/tblp3neqOa0qqITHe/viw2A0exyNlw1STMf" target="_newdeals">New Deals</a></p>
//
//       <Team team={team} />
//
//       <p className="menu-links"><a href="https://nick207.typeform.com/to/J5fsGE" target="_typeform">+ New Deal</a></p>
//     </div>
//
//     { /* optional second column for companies */ }
//     <div className="column column-med">
//       { activePartner && <Companies companies={companies}  /> }
//     </div>
//
//     { /* third column */ }
//     <div className="column">
//       { activePartner && <GoogleDoc url={"https://docs.google.com/document/d/12jQecxqh1oIdb2EcNm3qTAanjPJIEG0Zdf0vuusdfh0/edit"}  /> }
//       { !activePartner && <GoogleDoc url={"https://docs.google.com/document/d/12jQecxqh1oIdb2EcNm3qTAanjPJIEG0Zdf0vuusdfh0/edit"} /> }
//     </div>
//
//     { /* optional fourth column for company info */ }
//     <div className="column">
//       { activePartner && <AdditionalCompanyInfo /> }
//     </div>
//   </div>
// )


// /*
// *
// *  This contains all of the parts of the UI that are consistent across views (main view vs partner view)
// *  aka the team photos, the top logo and nav links
// *  Then the other parts of the page from /pages/index.js are inserted where it says {this.props.children}
// *
// */
//
// import PeopleList from '../components/PeopleList'
// import GoogleDoc from '../components/GoogleDoc'
// import { getTeam } from '../utils/Airtable'
//
// class Layout extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       team: []
//     }
//   }
//
//   render() {
//     const { router } = this.props
//     return (
//       <div className="columns">
//         <div className="column column-sml">
//           <img className="img-sml clickable" onClick={this.props.resetDashboard} src="https://www.usv.com/wp-content/uploads/2019/04/usv_logo.jpg" />
//           <div className="nav-links-container">
//             <p><a className="clickable" href="https://drive.google.com/drive/u/0/folders/0B1KsbxTl9h4lc1dUTm1CbVgxVHc" target="_cashviews">Cash Views</a></p>
//             <p><a className="clickable" href="https://airtable.com/tblp3neqOa0qqITHe/viw2A0exyNlw1STMf" target="_newdeals">New Deals</a></p>
//           </div>
//           <PeopleList team={this.state.team} activePartner={this.props.activePartner} changeActivePartner={this.props.changeActivePartner} />
//           <p><a className="clickable" href="https://nick207.typeform.com/to/J5fsGE" target="_typeform">+ New Deal</a></p>
//         </div>
//         <div className="columns column inner-content">
//           {this.props.children}
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Layout
