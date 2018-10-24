

// Dependencies
// const _data = require('../data');
const helpers = require('../helpers');
const tokens = require('./tokens');
const menuItems = require('../../.data/menu/items');


// userHandlers
module.exports = {

  get(data, callback) {
    // only logged user can access data
    const email = helpers.checkAndReturn(data.queryStringObject, 'email');
    if (email) {

      // Get the token from the headers
      const token = typeof data.headers.token === 'string' ? data.headers.token : false;
      tokens.verifyToken(token, email, tokenIsValid => {
        if (tokenIsValid) {
          callback(200, menuItems);
        } else {
          callback(403, { Error: 'Token invalid' });
        }
      });
    } else {
      callback(400, { Error: 'Missing email' });
    }
  },



};

