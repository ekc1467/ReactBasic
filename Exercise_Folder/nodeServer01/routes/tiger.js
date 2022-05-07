var express = require('express');
var router = express.Router();
//#8
const mysql = require('mysql');

const con = mysql.createConnection(
    {host: "localhost", port: "3306", database: "testnode", user: "root", password: '1234'}
);

//next()는 다음 라우터로 이동할 때 그
router.post('/', function (req, res, next) {
    console.log(req.query.commannd);
    console.log(req.body);
    // try {
    //     con.query('select * from table01', (error, rows, fields) => {
    //         if (error) {
    //             throw error;
    //         }

    //         //console.log(rows);
    //         res.send(rows);
    //     });
    // } catch (error) {
    //     console.log('error: ', error);
    // }
    //res.send('test');
});

module.exports = router;


//===========================
//  var express = require('express');
//  var router = express.Router();

// //총 3가지의 방식이 있다.
// // 1. 쿼리 2. 객체 3.파라미터 전송 방식



//  //라우터를 받아옴
// //#7

//  // client send     >> middle       >>server recv
//  // /?변수=값       app.use()    req.query.변수 
//  router.get('/', function(req, res, next) {
//     // console.log(req.body); // 비어있는 body가 이미 있다.
    
//     // req.body.name = '홍길동'; //**우리가 직접 추가할 수 있다.
//     // req.body.salary = 3000;
//     console.log(req.query.command);
//     res.send(req.body);
//   });


//   //파리미터 전송 방식
//   router.post('/:command', function(req, res, next) {
//     console.log(req.params.command);
//     res.send(req.body);
//   });

// module.exports = router;

//==============================================

// //#5
// var express = require('express');
// var router = express.Router();
// //라우터를 받아옴

// router.get('/', function(req, res, next) {
//     res.send('무궁화');
//   });



//   router.get('/red', function(req, res, next) {
//     res.send('red');
//   });

//   router.get('/blue', function(req, res, next) {
//     res.send('blue');
//   });

// module.exports = router;
