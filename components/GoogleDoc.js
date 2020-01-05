/*
*
*  This component returns a google doc in an iframe with the passed in url as the src url
*
*/

const GoogleDoc = props => {
  return (
    <div className="column">
      <iframe className="fill-available" src={props.url} frameBorder="0"></iframe>
    </div>
  )
}

export default GoogleDoc
