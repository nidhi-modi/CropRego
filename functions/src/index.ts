import * as functions from 'firebase-functions'
import * as _ from 'lodash'
import { google } from 'googleapis'
const sheets = google.sheets('v4')

const spreadsheetId = '1lHrVOneeifrSUJKZJldA_6aXLv6dVBQMzCJ0L6kWojY'

const serviceAccount = require('../serviceAccount.json')

const jwtClient = new google.auth.JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: [ 'https://www.googleapis.com/auth/spreadsheets' ],  // read and write sheets
})
const jwtAuthPromise = jwtClient.authorize()

type Scores = { string: number }

export const copyScoresToSheet = functions.database.ref('/scores').onUpdate(async change => {
    const data: Scores = change.after.val()

    // Sort the scores.  scores is an array of arrays each containing name and score.
    const scores = _.map<Scores, [string, number]>(data, (value, key) => [key, value])
    scores.sort((a,b) => { return b[1] - a[1] })

    await jwtAuthPromise
    await sheets.spreadsheets.values.update({
        auth: jwtClient,
        spreadsheetId: spreadsheetId,
        range: 'Scores!A2:B7',  // update this range of cells
        valueInputOption: 'RAW',
        requestBody: { values: scores }
    }, {})
})
