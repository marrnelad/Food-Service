import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';
import apiRoutes from './routes/apiRoutes.js';

const sequelize = new Sequelize('postgres://postgres:Egor-1997@localhost:5432/eda');

const app = express();

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );
app.use('/api', apiRoutes);

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});