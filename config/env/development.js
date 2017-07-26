var port = 3000;

module.exports = {
  port: port,
  db: 'mongodb://SuperAdmin:admin@ds117913.mlab.com:17913/05mean',
  facebook: {
    clientID: 'YOUR APP ID',
    clientSecret: 'YOUR APP SECRET',
    callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
  }
};