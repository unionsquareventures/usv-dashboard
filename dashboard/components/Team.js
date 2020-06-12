import Link from 'next/link'

export default ({ team, activePartner, reset, menus }) => (

	<div class="row">
		<div class="col-sm-4">
			<Link href="/" >
	          <a onClick={reset}><img id="logo" className="img-sml clickable" src="https://www.usv.com/wp-content/uploads/2019/04/usv_logo.jpg" /></a>
	        </Link>
		</div>
		<div class="col-sm-8">
			<ul className="nav flex-column">
		        <li className="nav-item">
		          <a className="nav-link" href="https://www.notion.so/usv/Monday-Deal-Log-17913432b4ab4649b1835cbbc4b46011" target="_newdeals">New Deals</a>
		        </li>
		        {menus.map(menu => (
		          <li className="nav-item dropdown">
		            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{menu.fields.name}</a>
		              <div className="dropdown-menu">
		                {menu.fields.items.split(',').map(item => (
		                    <Link key={item.trim()} href={`/?t=${menu.fields.type}&q=${item.trim()}`}><a className="dropdown-item">{item}</a></Link>
		                )
		                )}
		              </div>
		            </li>
		          )
		          )}
		          {team.map(person => (
		            <li className="nav-item person">
		            <Link key={person.id} classname="nav-link" href={`/?t=partner&q=${person.fields.name}`}>
		              <a onClick={reset}><img src={person.fields.avatar[0].url} alt={person.fields.name} className={activePartner == person.fields.name ? "img-sml padding-sml clickable person-avatar person-avatar--active" : "img-sml padding-sml clickable person-avatar"} /></a>
		            </Link>
		            </li>
		          )
		        )}
		      </ul>

		</div>
	</div>
)