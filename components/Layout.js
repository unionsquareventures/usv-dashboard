import Team from './Team'
import GoogleDoc from './GoogleDoc'
import Link from 'next/link'

export default ({ menus, team, companies, activePartner, reset, children }) => (
  <div className="row" id="nav">
    <div className="col-sm-1">
      <ul class="nav flex-column">
        <li class="nav-item">
          <Link href="/" >
          <a onClick={reset}><img id="logo" className="img-sml clickable" src="https://www.usv.com/wp-content/uploads/2019/04/usv_logo.jpg" /></a>
        </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://drive.google.com/drive/u/0/folders/0B1KsbxTl9h4lc1dUTm1CbVgxVHc" target="_cashviews">Cash Views</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://airtable.com/tblp3neqOa0qqITHe/viw2A0exyNlw1STMf" target="_newdeals">New Deals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://nick207.typeform.com/to/J5fsGE" target="_typeform">Add a Deal</a>
        </li>
        {menus.map(menu => (
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{menu.fields.name}</a>
              <div class="dropdown-menu">
                {menu.fields.items.split(',').map(item => (
                    <Link href={`/?t=${menu.fields.type}&q=${item.trim()}`}><a class="dropdown-item">{item}</a></Link>
                )
                )}
              </div>
            </li>
          )
          )}
          {team.map(person => (
            <li class="nav-item person">
            <Link key={person.id} classname="nav-link" href={`/?t=partner&q=${person.fields.name}`}>
              <a onClick={reset}><img src={person.fields.avatar[0].url} alt={person.fields.name} className={activePartner == person.fields.name ? "img-sml padding-sml clickable person-avatar person-avatar--active" : "img-sml padding-sml clickable person-avatar"} /></a>
            </Link>
            </li>
          )
        )}
      </ul>
    </div>
    <div className="col-sm-11">
      {children}
    </div>
  </div>
)
