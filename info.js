/**
 * ------------------------------------------------------------------
 * MYSQL
 * ------------------------------------------------------------------
 *
 * npm install mysql
 * npm install async
 * 
 */


/**
 * app.js file me chhapna hai ye:
 */

var db = require('./db');

// Connect to MySQL on start
db.connect(db.MODE_PRODUCTION, function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.')
    process.exit(1)
  }
});


/**
 * Baaki files jahan bhi db chaiye ho:
 */

var db = require('../db.js');


// sample insert
db.get().query('INSERT INTO comments (user_id, text, date) VALUES(?, ?, ?)', values, function(err, result) {
    if (err) {
    	console.log(err);
    }
    else {
    	console.log(result.insertId);
    }
})


//sample select
db.get().query('SELECT * FROM comments', function (err, rows) {
    if (err) {
    	console.log(err);
    }
    else {
    	console.log(rows);
    }
})

/**
 * Source:
 * https://www.terlici.com/2015/08/13/mysql-node-express.html
 */



/**
 * ------------------------------------------------------------------
 * REQUEST BODY PARSING
 * ------------------------------------------------------------------
 *
 * npm install body-parser
 * 
 */

/**
 * In app.js
 */
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/**
 * In other files
 */

var name = req.body.name;
var password = req.body.password;

















