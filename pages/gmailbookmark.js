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

	  	let redirectString = "https://mail.google.com/mail/u/0/#search/is%3Aimportant+from%3A("

  		for (const i in companies) {
  			if (companies[i].fields.domain) {
	  			redirectString += companies[i].fields.domain + " OR "	
  			}
  			if (companies[i].fields.alternate_domains) {
  				let ads = companies[i].fields.alternate_domains.split(",")
  				for (const j in ads) {
  					redirectString += ads[j] + " OR "	
  				}
  			}
  		}

  		redirectString += ")"

	  	if (res) {
		    res.writeHead(301, {
		      Location: redirectString
		    });
		    res.end();
		  } 

	    return {
	    	companies: companies,
	    	redirectString: redirectString
	    }
	}

  render() {
  	const {companies, redirectString} = this.props

  	return (
  		<div>
	  		<div>{redirectString}</div>
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