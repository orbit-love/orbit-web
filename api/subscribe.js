import Airtable from 'airtable'
import * as EmailValidator from 'email-validator'

export default async function (req, res) {
  if (req.method !== 'POST') {
    res.send(404)
    return
  }

  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID)

  try {
    const json = JSON.parse(req.body)
    const name = json.name
    const email = json.email
    const company = json.company
    const projectUrl = json.projectUrl
    const source = json.source
    const sourceUrl = json.sourceUrl
    const originalReferrer = json.originalReferrer
    const originalLandingPage = json.originalLandingPage
    const referrer = json.referrer

    if (!EmailValidator.validate(email)) {
      res.status(403)
      res.json({ err: 'Email address is invalid' })
      return
    }

    await base('subscribers').create([
      {
        fields: {
          Name: name,
          Email: email,
          Company: company,
          'Project URL': projectUrl,
          Source: source,
          'Source URL': sourceUrl,
          'Original Landing Page': originalLandingPage,
          'Original Referrer': originalReferrer,
          Referrer: referrer,
        },
      },
    ])
    res.json({})
  } catch (e) {
    res.status(403)
    res.json({ err: e.message })
  }
}
