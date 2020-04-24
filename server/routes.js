var config = require('./db-config.js');
var mysql = require('mysql');

config.connectionLimit = 10;
var connection = mysql.createPool(config);


function getBusiness(req, res) {
  var query = `
    select name, address, city, state, stars from Business where name = '${req.params.title}' 
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
};


function getSearch(req, res) {
  var query = `
    select name, address, city, state, stars from Business where city = '${req.params.location}' limit 20 
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
};





// The exported functions, which can be accessed in index.js.
module.exports = {
	getBusiness: getBusiness,
  getSearch: getSearch
}