class GmailBookmark extends React.Component {

	static async getInitialProps({ query, res }) {
	    
	    // http://localhost:3000/gmailbookmark?partner=rebecca
	    const partner = query.partner ? query.partner : ""

	    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_COMPANIES_BASE_ID}/Companies?filterByFormula=Find(%22${partner}%22%2C+partner)`

	    const resCompanies = await fetch(url, { headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` } })
	    const jsonCompanies = await resCompanies.json()

	    // return as props
	    let companies = null
	  	companies = jsonCompanies.records ? jsonCompanies.records : null   

	  	/*
	  	if (res) {
		    res.writeHead(301, {
		      Location: 'https://google.com'
		    });
		    res.end();
		  } 
		*/

	    return {
	    	companies: companies
	    }
	}

  render() {
  	const {companies} = this.props

  	return (
  		<div>
  		{	
  		companies &&
  			<div>
		  	{companies.map((company, index) => (
		  		<div>{company.fields.company_name}</div>
		  	))}
		  	</div>
	  	}
	  	</div>
	)
  }

}

export default GmailBookmark