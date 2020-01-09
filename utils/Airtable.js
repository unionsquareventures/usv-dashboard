/*
*
*  Functions interfacing with data retrival from airtable
*
*/

import fetch from 'isomorphic-unfetch';

// returns team including non-partners
async function getTeam() {
  let res = await fetch('https://api.airtable.com/v0/app9mx7E6xSP1varp/Team%20for%20Dashboard', {
    headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` }
  })

  let json = await res.json()
  return json.records
}

// passes in partner name from airtable Team For Dashboard table name field and returns array of their companies
async function getPartnerCompanies(partnerName) {
  //let name = partnerName.toLowerCase()
  let name = partnerName
  let res = await fetch(`https://api.airtable.com/v0/appTDiBNIJawBi2l5/Companies?filterByFormula=%partner%7D%3D'${name}`, {
    headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` }
  })
  /*let res = await fetch(`https://api.airtable.com/v0/appTDiBNIJawBi2l5/Companies?filterByFormula=%partner%7D%3D'${name}'&view=USV+Portfolio+Companies`, {
    headers: { "Authorization": `Bearer ${process.env.AIRTABLE_KEY}` }
  })*/

  let json = await res.json()
  return json.records
}

module.exports = {
  getTeam,
  getPartnerCompanies
}
