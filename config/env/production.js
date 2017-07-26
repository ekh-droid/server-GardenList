// Required in /app/config/config.js
// Express app environment config for production

var port = process.env.PORT || 27017;

module.exports = {
  port: port,
  db: 'mongodb://SuperAdmin:admin@ds117913.mlab.com:17913/05mean'
};