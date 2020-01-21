import Team from './Team'
import GoogleDoc from './GoogleDoc'
import Link from 'next/link'

export default ({ menus, companies, activePartner, reset, children }) => (
  <div className="row" id="nav">
    <div className="col-sm-1">
      <Link href="/" >
        <a onClick={reset}><img id="logo" className="img-sml clickable" src="https://www.usv.com/wp-content/uploads/2019/04/usv_logo.jpg" /></a>
      </Link>
      <ul className="nav-links-container">
        <li><a className="clickable" href="https://drive.google.com/drive/u/0/folders/0B1KsbxTl9h4lc1dUTm1CbVgxVHc" target="_cashviews">Cash Views</a></li>
        <li><a className="clickable" href="https://airtable.com/tblp3neqOa0qqITHe/viw2A0exyNlw1STMf" target="_newdeals">New Deals</a></li>
        {menus.map(menu => (
          <li>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {menu.fields.name}
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {menu.fields.items.split(', ').map(item => (
                    <Link href={`/?${menu.fields.symbol}=${item}`}><a class="dropdown-item">{item}</a></Link>
                )
                )}
              </div>
            </div>
            </li>
          )
          )}
      </ul>  



      {/*<Team team={team} reset={reset} activePartner={activePartner} />*/}
      <ul className="nav-links-container">
        <li><a className="clickable" href="https://nick207.typeform.com/to/J5fsGE" target="_typeform">+ New Deal</a></li>
      </ul>
    </div>
    <div className="col-sm-11">
      {children}
    </div>
  </div>
)
