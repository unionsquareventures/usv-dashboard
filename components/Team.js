import Link from 'next/link'

export default ({ team, activePartner, reset }) => (
  <div className="team-wrapper">
    {team.map(person => (
        <Link key={person.id} href={`/?q=${person.fields.name}`}>
          <a onClick={reset}><img src={person.fields.avatar[0].url} alt={person.fields.name} className={activePartner == person.fields.name ? "img-xtra-sml padding-sml clickable person-avatar person-avatar--active" : "img-xtra-sml padding-sml clickable person-avatar"} /></a>
        </Link>
      )
    )}
  </div>
)


// import Link from 'next/link'
//
// const Team = props => {
//   return (
//     <div className="team-wrapper">
//       { props.team.map(person =>
//         <img
//           className={props.activePartner == person.fields.name ? "img-xtra-sml padding-sml clickable person-avatar person-avatar--active" : "img-xtra-sml padding-sml clickable person-avatar"}
//           key={person.fields.name}
//           src={person.fields.avatar[0].thumbnails.large.url}
//         />
//       )}
//     </div>
//   )
// }
//
// export default Team
//
//
