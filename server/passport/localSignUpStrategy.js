const PassportLocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
import db from '../models/index.js';

export default new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
  const { name, phone, address } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const userData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      password: bcrypt.hashSync(password.trim(), salt),
      address: address.trim(),
  };
  db.User
      .findOne({
          where: {
            email: userData.email
          }
      })
      .then(user => {
        if (!user) {
          return db.User
              .create(userData)
              .then(user => done(null,user.dataValues))
              .catch(error => done(error));
        }

        return done({
            error: 'That email is already taken.'
        })
      })
      .catch(error => done(error));
});
