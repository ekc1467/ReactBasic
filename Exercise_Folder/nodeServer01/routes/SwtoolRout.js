var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    console.log('들어옴1');
    // res.send('호뢍이');
  });

  router.get('/tiger', function(req, res, next) {
    console.log('호랑이');
    console.log(req.query.age);
    // res.send('호뢍이');
    let age = req.query.age;
    if(age==2000){
        console.log(true);
    }
  });
  

module.exports = router;