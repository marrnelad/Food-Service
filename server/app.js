import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Sequelize from 'sequelize';

import routes from './routes/index.js';

const sequelize = new Sequelize('postgres://postgres:Egor-1997@localhost:5432/eda');

const app = express();

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );
app.use( cors({ origin: '*' }) );

app.use('/api', routes);

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});