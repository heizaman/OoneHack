var express = require('express');
var router = express.Router();
var db = require('../db.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('invalid request');
});


router.post('/checkExists', function(req, res, next) {
	var email = req.body.email;
	var data = {
		email : email,
		exists : true
	};
	res.json(data);
});


router.get('/testdb', function(req, res, next) {
	db.get().query('show tables', function(err, result) {
	    if (err) {
	    	console.log(err);
	    	res.json({ status: "failed" });
	    }
	    else {
	    	console.log(result);
	    	res.json({ status: "success" });
	    }
	})
});


router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	var data = {
		id : id,
		email : "blabla@gmail.com"
	};
	res.json(data);
});



module.exports = router;
