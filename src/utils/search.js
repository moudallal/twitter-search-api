const request = require('request')

const search = (firstName, lastName, callback) => {
  const url = "https://api.twitter.com/1.1/users/search.json?q=" + encodeURIComponent(`${firstName} ${lastName}`)
  const oauth = {
    consumer_key: process.env.CONSUMERKEY,
    consumer_secret: process.env.CONSUMERSECRET,
    token: process.env.ACCESSTOKEN,
    token_secret: process.env.TOKENSECRET
  }
  request({url, oauth, json: true}, (e, res, body) => {
    if (e) {
      callback('Unable to connect to API.');
    } else if (body.length == 0) {
      callback('Cannot find user.');
    } else {
      callback(undefined, {
        full_name: body[0].name,
        screen_name: body[0].screen_name
      });
    }
  })
}

module.exports = search