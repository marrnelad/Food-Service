import db from '../models/index.js';
const bcrypt = require('bcrypt');
const PassportLocalStrategy = require('passport-local').Strategy;

export default new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const credentials = {
    email: email.trim(),
    password: password.trim()
  };

  db.User
    .findOne({
      where: {
        email: credentials.email
      }
    })
    .then(user => {
      if(!user) {
        return done({
          error: 'No user found with such email.'
        })
      }

      const userData = user.dataValues;
      bcrypt.compare(credentials.password, userData.password, function(err, res) {
        if(res) {
          return done(null, userData)
        } else {
          return done(null, false, { message: 'Wrong password' });
        }
      });
    })
    .catch(error => done(error));
});
