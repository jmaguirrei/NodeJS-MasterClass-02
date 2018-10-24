

// Dependencies
const userHandlers = require('./users');
const tokenHandlers = require('./tokens');
const menuHandlers = require('./menu');
const orderHandlers = require('./order');

// notFound
function notFound(data, callback) {
  callback(404);
}


// users
function users(data, callback) {
  const methods = [ 'post', 'get', 'put', 'delete' ];
  if (methods.indexOf(data.method) > -1) {
    userHandlers[data.method](data, callback);
  } else {
    callback(405);
  }
}

// menu
function menu(data, callback) {
  const methods = [ 'get' ];
  if (methods.indexOf(data.method) > -1) {
    menuHandlers[data.method](data, callback);
  } else {
    callback(405);
  }
}

// order
function order(data, callback) {
  const methods = [ 'post' ];
  if (methods.indexOf(data.method) > -1) {
    orderHandlers[data.method](data, callback);
  } else {
    callback(405);
  }
}

// tokens
function tokens(data, callback) {
  const methods = [ 'post', 'get', 'put', 'delete' ];
  if (methods.indexOf(data.method) > -1) {
    tokenHandlers[data.method](data, callback);
  } else {
    callback(405);
  }
}


// Handlers
module.exports = {
  notFound,
  users,
  menu,
  tokens,
  order,
};


