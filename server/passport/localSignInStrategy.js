const PassportLocalStrategy = require('passport-local').Strategy;

import db from '../models/index.js';

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

            if (userData.password === credentials.password) {
                return done(null, userData)
            }

            return done({
                error: 'Incorrect password'
            })
        })
        .catch(error => done(error));
});