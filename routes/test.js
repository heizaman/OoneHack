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
	var sql = "SELECT * FROM products WHERE id = ?";

	db.get().query(sql, [id], function(err, result) {
	    if (err) {
	    	console.log(err);
	    	res.json({ status: "failed" });
	    }
	    else {
	    	console.log(result);

	    	if(result.length == 0)
	    		return res.json({ status: "failed" });

	    	var data = {
				id : id,
				name : result[0].name,
				dop : result[0].dop,
				owner : result[0].owner,
				phone : result[0].phone,
				website : result[0].website
			};

			var hissql = "SELECT * FROM pdthistory WHERE id = ? ORDER BY date DESC"

			db.get().query(hissql, [id], function(err, hist) {
		    	if (err) {
		    		console.log(err);
					return res.json({ status: "success", data : data });

			    }
		    	else {
			    	console.log(hist);
    				return res.json({ status: "success", data : data, history : hist });
			    }
			});
	    }
	});
});



module.exports = router;
