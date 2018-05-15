import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

import localSignUpStrategy from './passport/localSignUpStrategy.js';
import localSignInStrategy from './passport/localSignInStrategy.js';

import apiRouter from './routes/apiRouter.js';
import authRouter from './routes/authRouter.js';
import models from './models';
const app = express();

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

app.use(passport.initialize());
passport.use('localSignUp', localSignUpStrategy);
passport.use('localSignIn', localSignInStrategy);
process.on('uncaughtException', function (err) {
    console.log(err);
});
app.use('/api', apiRouter);
app.use('/', authRouter);

models.sequelize.sync()
    .then(() => {

        app.listen(5500, () => console.log(`Server is running on port 5500`));
    })
    .catch((err) => console.log(err));