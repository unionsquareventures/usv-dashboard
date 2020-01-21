import Link from 'next/link'

export default ({ team, activePartner, reset }) => (
  <ul className="team-wrapper">
    {team.map(person => (
        <Link key={person.id} href={`/?p=${person.fields.name}`}>
          <a onClick={reset}><img src={person.fields.avatar[0].url} alt={person.fields.name} className={activePartner == person.fields.name ? "img-sml padding-sml clickable person-avatar person-avatar--active" : "img-sml padding-sml clickable person-avatar"} /></a>
        </Link>
      )
    )}
  </ul>
)