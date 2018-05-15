import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

import localSignUpStrategy from './passport/localSignUpStrategy.js';
import localSignInStrategy from './passport/localSignInStrategy.js';

import apiRouter from './routes/apiRouter.js';
import authRouter from './routes/authRouter.js';

const app = express();

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

app.use(passport.initialize());
passport.use('localSignUp', localSignUpStrategy);
passport.use('localSignIn', localSignInStrategy);

app.use('/api', apiRouter);
app.use('/', authRouter);

app.listen( 5000, () => {
    console.log('Server is running on port 5000');
});