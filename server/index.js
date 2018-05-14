import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Sequelize from 'sequelize';

import routes from './routes/index.js';

const app = express();

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );
app.use( cors({ origin: '*' }) );

app.use('/api', routes);

const sequelize = new Sequelize('postgres://postgres:pwe123752@localhost:5432/eda');

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});