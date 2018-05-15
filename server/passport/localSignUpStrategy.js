const PassportLocalStrategy = require('passport-local').Strategy;

import db from '../models/index.js';

export default new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const { isAdmin, name, phone } = req.body;
    const userData = {
        isAdmin,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        password: password.trim()
    }

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
                    .then(user => done(null))
                    .catch(error => done(error));
            }

            return done({
                error: 'That email is already taken.'
            })
        })
        .catch(error => done(error));
});