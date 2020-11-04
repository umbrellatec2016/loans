const express = require('express')

const bodyParser = require("body-parser");
const app = express();
if (process.env.NODE_ENV!=='production'){
   let env=require('dotenv')
   env.config()
}
const db = require('./database.js')

const port = process.env.SERVICE_PORT || 3000;

const routes = require('./api/routes');


try {
   db.sequelize.authenticate();
   console.log('Connection to Mariadb has been established successfully.');
 } catch (error) {
   console.error('Unable to connect to the database:', error);
 }
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});