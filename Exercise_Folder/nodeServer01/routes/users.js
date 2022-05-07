var express = require('express');
var router = express.Router();

/* GET users listing. */
// 2차 경로. 그냥 /라서 2차 경로가 없는 상태
//ocalhost:5000/users/king
router.get('/king', function(req, res, next) {
  res.send('왕');
});

router.get('/', function(req, res, next) {
  res.send('호랑이');
});

router.get('/2', function(req, res, next) {
  res.send({'message': 'abc'});
});

router.post('/2', function(req, res) {
  console.log(req.body);
  let obj = req.body;
  let {name, age} = req.body;

  console.log(req.body.name);

  req.body.name+= 100;

  res.send(req.body);
});

router.post('/4', function(req, res) {
  let obj = req.body;
  let {name, age} = req.body;
  obj.name += 'abcd';
  obj.age += '1234567';
  res.send(obj);
});
module.exports = router;


