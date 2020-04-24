const express = require('express');
// const mysql = require('mysql');
const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')();
const routes = require("./routes.js");
const cors = require('cors');

const app = express();


app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

app.get('/business/:title', routes.getBusiness);
app.get('/search/:location', routes.getSearch);



app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);





