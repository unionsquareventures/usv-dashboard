class GmailBookmark extends React.Component {

	static async getInitialProps({ query, res }) {
	    
	    // http://localhost:3000/gmailbookmark?partner=Rebecca
	    const partner = query.partner ? query.partner : null
	    // console.log(partner)

	    const urlBase = `https://api.airtable.com/v0/${process.env.AIRTABLE_COMPANIES_BASE_ID}/Companies`
	    const url = partner ? urlBase + "?filterByFormula=" + encodeURIComponent('partner="' + partner + '"') : urlBase
	    // console.log(url)

	    const resCompanies = await fetch(url, { headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` } })
	    const jsonCompanies = await resCompanies.json()

	    // return as props
	    let companies = jsonCompanies.records ? jsonCompanies.records : null   

	  	let params = "is:important ("
		let join = ""

  		for (var i in companies) {
  			if (companies[i].fields.company_name) {
	  			params += join + '"' + companies[i].fields.company_name + '"'
                                join = " OR "	
  			}
  		}

  		let redirectString = "https://mail.google.com/mail/u/0/#search/" + encodeURIComponent(params)  + ")"
		// console.log(redirectString)

		/*
	  	if (res) {
		    res.writeHead(301, {
		      Location: redirectString
		    });
		    res.end();
		  }
		*/ 

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
