var express = require('express');
var app = express(); //최초 경로를 만들기 위해
app.use(express.json());
app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.



var router = express.Router();

let cron = require('node-cron');
let count = 0;
//===========================================
//setTimeOut과 다른 것이 없다.


// 1. routes안에 넣고 require하면 정상 작동이 된다.
// 번역할 때 밖으로 나오는 것은 stack으로 쌓이므로 먼저 밖으로 나온 놈이 1번째로 출력된다.
// 즉 그냥 실행하면 stop을 호출해도 start의 1이 나오고 start/2 를 해도 stop의 값이 나와버린다.
// 즉 한 파일에서 작업을 하개되면 이렇게 되어버린다..
// app.use( '/start',
// router.post('/',(req, res, next)=>{ // 번역될 때 밖으로 나간다.
//     console.log(1);
// })
// );

// app.use( '/stop',
// router.post('/',(req, res, next)=>{  // 번역될 때 밖으로 나간다.
//     console.log(2);
// })
// )

app.use( '/start',
router.post('/1',(req, res, next)=>{ // 번역될 때 밖으로 나간다.
    console.log(1);
})
);

app.use( '/stop',
router.post('/2',(req, res, next)=>{  // 번역될 때 밖으로 나간다.
    console.log(2);
})
)



// app.use( '/stop', (req, res, next)=>{
//     console.log('stop');
//     task.stop();
//     res.send('stop')
// });


// cron.schedule(
//     '*/2 * * * * *', ()=>{
//         console.log(++count);
//     },
//     {scheduled:false}
// )


//===========================================
 var port = process.env.PORT || '5000';
 app.listen(port, ()=>{ console.log('listen');}); 


 module.exports = app;



//==============================================

// var express = require('express');
// var app = express(); //최초 경로를 만들기 위해
// app.use(express.json());
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.



// var router = express.Router();

// let cron = require('node-cron');
// let count = 0;
// //===========================================
// //setTimeOut과 다른 것이 없다.
// cron.schedule(
//     '*/2 * * * * *', ()=>{
//         console.log(++count);
//     },
//     {scheduled:false}
// );
// app.use( '/start', (req, res, next)=>{
//     console.log('start');
//     task.start();
//     res.send('start')
// });
// app.use( '/stop', (req, res, next)=>{
//     console.log('stop');
//     task.stop();
//     res.send('stop')
// });


// //===========================================
//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 


//  module.exports = app;

//============================================

// 138p까지
//  // test04가 보낸 데이터를 받는다. #1 
// var express = require('express');
// var app = express(); //최초 경로를 만들기 위해
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.
// var router = express.Router();

// app.use('/api/Swtool',
//     router.post('/',function(rea,res,next){
//         res.send([
//             {id:1,name:'앵무새',salary:100, bonus:10},
//             {id:2,name:'앵무새',salary:100, bonus:10}
//         ])
//     })
// )

// app.use('/save',
//     router.post('/',function(req,res,next){
//         console.log(2);
//         console.log(req.body);
        
//         res.send(
//             'ok'
//         )
//     }),
// )
//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 
// module.exports = app;

// #예제7

// var express = require('express');
// const { append } = require('express/lib/response');
// const MybatisMapper = require('mybatis-mapper');
// var app = express(); //최초 경로를 만들기 위해
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({extended: false})); //한글 인코딩이 안깨지도록.
// var router = express.Router();
// // ----------------------------------------


// app.use(
//     '/api/Swtool',
//     router.post('/', function (req, res, next) {
//         // if(req.query.type == 'list'){
//         //         console.log(1);

//         //     req.body.mapper = 'SwToolsMapper';
//         //     req.body.crud = 'select';
//         //     req.body.mapper_id = 'selectSwToolList';

//         //     router.use('/',require('./dbconnect_Module'))
//         //     next('route');
//         // }
//         // else if(req.query.type=='insert'){
//         //     //스위치가 더 좋다. 
//                 //     router.use('/',require('./dbconnect_Module'))
//         //     next('route');
//         // }

//         console.log(1);

//         req.body.mapper = 'SwToolsMapper';
//         req.body.crud = 'select';
//         req.body.mapper_id = 'selectSwToolList';

//         router.use('/',require('./dbconnect_Module'))
//         next('route');
//     }),
    
// );


// //-----------------------------------------
//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;


//=================

// // #예제6

// var express = require('express');
// const MybatisMapper = require('mybatis-mapper');
// var app = express(); //최초 경로를 만들기 위해
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({extended: false})); //한글 인코딩이 안깨지도록.
// var router = express.Router();
// // ----------------------------------------

// const mysql = require('mysql');

// const con = mysql.createConnection(
//     {host: "localhost", port: "3306", database: "testnode", user: "root", password: '1234'}
// );

// app.use(
//     '/api/Swtool',
//     router.post('/', function (req, res, next) {
//         console.log(1);

//         req.body.mapper = 'SwToolsMapper';
//         req.body.crud = 'select';
//         req.body.mapper_id = 'selectSwToolList';

//         next('route');
//     }),
//     router.post('/', function (req, res, next) {
//         let param = req.body;
//         console.log(param);

//         // p363 22번째 라인 해석
//         console.log(param.mapper + '.xml');

//         // p363 18번째 라인 해석
//         const myBatisMapper = require('mybatis-mapper');
//         console.log(typeof myBatisMapper); //오브젝트가 제대로 나왔는 지 확인

//         // 책코드 myBatisMapper.createMapper( [param.mapper+'.xml'] ); 해석되는 코드
//         myBatisMapper.createMapper(['SwToolsMapper.xml']); //배열 등으로 파일 여러 개 로딩 가능

//         // query 문장을 만든다.
//         let query = MybatisMapper.getStatement(

//             'SwToolsMapper',
//             //xml파일에서 맞는 namespace를 찾는다. 1번 인자
//                     'selectOne',
//             { //실행할 쿼리문 id 설정. 2번 인자
//                 id: '6'
//             },
//             { //인수 전달
//                 language: 'sql',
//                 indent: '  '
//             } //indent: 줄 간격을 얼마만큼. 기본은 스페이스바 2번.
//         );
//         // console.log(query);
//         console.log(2);

//         // console.log(req.query.commannd);
//         // console.log(req.body);
//         try {
//             con.query(query, (error, rows, fields) => {
              

//                 console.log(rows);
//                 res.send(rows);
//             });
//         } catch (error) {
//             console.log('error: ', error);
//         }
        

//     }),
    
// );


// //-----------------------------------------
//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;





//=========================================================

// // #예제5

// var express = require('express');
// const MybatisMapper = require('mybatis-mapper');
// var app = express(); //최초 경로를 만들기 위해
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.
// var router = express.Router();
// //----------------------------------------
// // mybatis 설치

// app.use( '/api/Swtool', 
//     router.post( '/', function(req,res,next){
//         console.log(1);

        
//         req.body.mapper = 'SwToolsMapper';
//         req.body.crud = 'select';
//         req.body.mapper_id = 'selectSwToolList';

//         next('route');
//     } ),
//     router.post( '/', function(req,res,next){
//         let param = req.body;
//         console.log(param);

//         // p363 22번째 라인 해석
//         console.log(param.mapper+'.xml');

//         // p363 18번째 라인 해석
//         const myBatisMapper = require('mybatis-mapper');
//         console.log(typeof myBatisMapper);//오브젝트가 제대로 나왔는 지 확인
       
//         // //책코드
//         // myBatisMapper.createMapper( [param.mapper+'.xml'] );

//         //해석되는 코드
//         myBatisMapper.createMapper( ['SwToolsMapper.xml'] ); //배열 등으로 파일 여러 개 로딩 가능
        
//         // query 문장을 만든다.
//         let query = MybatisMapper.getStatement(
            
//             'SwToolsMapper', //xml파일에서 맞는 namespace를 찾는다. 1번 인자
//             'selectSwToolsList', //실행할 쿼리문 id 설정. 2번 인자
//             {}, //인수 전달
//             { language: 'sql', indent: '  ' } //indent: 줄 간격을 얼마만큼. 기본은 스페이스바 2번.
//         );
//         console.log(query);
//         console.log(2);
//     } ),
// );


// //-----------------------------------------
//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;




//================================================

// // #예제4

// var express = require('express');
// var app = express(); //최초 경로를 만들기 위해
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.
// var router = express.Router();
// //----------------------------------------
// // mybatis 설치

// app.use( '/api/Swtool', 
//     router.post( '/', function(req,res,next){
//         console.log(1);

        
//         req.body.mapper = 'SwToolsMapper';
//         req.body.crud = 'select';
//         req.body.mapper_id = 'selectSwToolList';

//         next('route');
//     } ),
//     router.post( '/', function(req,res,next){
//         let param = req.body;
//         console.log(param);

//         // p363 22번째 라인 해석
//         console.log(param.mapper+'.xml');

//         // p363 18번째 라인 해석
//         const myBatisMapper = require('mybatis-mapper');
//         console.log(typeof myBatisMapper);//오브젝트가 제대로 나왔는 지 확인
       
//         // //책코드
//         // myBatisMapper.createMapper( [param.mapper+'.xml'] );

//         //해석되는 코드
//         myBatisMapper.createMapper( ['SwToolsMapper.xml'] ); //배열 등으로 파일 여러 개 로딩 가능
 

//         console.log(2);
//     } ),
// );


// //-----------------------------------------
//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;





//========================================================

// // #예제3

// var express = require('express');
// var app = express(); //최초 경로를 만들기 위해
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.
// var router = express.Router();
// //----------------------------------------
// // mybatis 설치

// app.use( '/api/Swtool', 
//     router.post( '/', function(req,res,next){
//         console.log(1);

        
//         req.body.mapper = 'SwToolsMapper';
//         req.body.crud = 'select';
//         req.body.mapper_id = 'selectSwToolList';

//         next('route');
//     } ),
//     router.post( '/', function(req,res,next){
//         let param = req.body;
//         console.log(param);

//         // p363 22번째 라인 해석
//         console.log(param.mapper+'.xml');
//         console.log(2);
//     } ),
// );


// //-----------------------------------------
//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;





//===========================================


// // #예제2

// var express = require('express');
// var app = express(); //최초 경로를 만들기 위해
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.
// var router = express.Router();
// //----------------------------------------


// //실행 코드가 아닌 설정코드기 때문에 이런 식으로 쌓으면 스택에 저장되는 식이다.
// // next()는 스택을 찾는 방식이기 때문에 이 코드가 가능한 것이다. 책은 이 방식을 이용하고 있다.
// app.use( '/api/Swtool', 
//     router.post( '/', function(req,res,next){
//         console.log(1);
//         router.post( '/', function(req,res,next){
//             console.log(2);
//         } )
//         next('route');
//     } ),
// );


// //-----------------------------------------
//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;





////=========================================================

//// #예제1

// var express = require('express');
// var app = express(); //최초 경로를 만들기 위해
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.
// var router = express.Router();
//// ----------------------------------------


// app.use( '/api/Swtool', 
//     router.post( '/', function(req,res,next){
//         console.log(1);
//         next('route');
//     } ),
//     router.post( '/', function(req,res,next){
//         console.log(2);
//     } )
// );


//// -----------------------------------------
//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;





//=======================
// //#6



// var express = require('express');
// var app = express(); //최초 경로를 만들기 위해
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.
// var router = express.Router();


// //send를 보내면 EndPoint로 본다.
// // 실제로는 라우터들을 뽑아내어서 하나의 파일로 만들어 사용한다.
// // 모조건 이 아이를 거치고 간다.
// app.use('/tiger',require('./routes/tiger'));//
// //require은 마치 파일 import해서 변수에 넣고 대입하듯이 가능하네.




//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;



//==============
//#4

// var express = require('express');
// var app = express();
// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.
// var router = express.Router();


// //send를 보내면 EndPoint로 본다.
// // 실제로는 라우터들을 뽑아내어서 하나의 파일로 만들어 사용한다.
// app.use('/tiger',
//     router.get('/',
//     function(req, res, next){
//         if(req.query.value == 1){ //query 같은 경우는 파라미터를 받을 때 사용하는 것이다.
//             console.log(1111);
//             next('route');//route일 경우 다음 라우터로 점프 해버린다.
//         }
//         else{
//             console.log(2222);
//             next();
//         }
// },
//     function(req, res, next){
//         console.log(3333);
//         res.send('앵무새1')
// }
// ),
// router.get('/',function(req,res,next){
//     console.log(4444);
//     res.send('다음 라우터')
// })
// );


//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;


//=============
//#3

// var express = require('express');
// var app = express();


// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.




// var router = express.Router();


// //send를 보내면 EndPoint로 본다.

// app.use('/tiger',
//     router.get('/',(req, res, next)=>{
//     console.log('1');
//     res.send('앵무새1');
// }),
// router.get('/lion',(req, res, next)=>{
//     console.log('1');
//     res.send('앵무새2');
// })

// );


//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;



//===============================

// //#2

// var express = require('express');
// var app = express();


// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.



// //send를 보내면 EndPoint로 본다.
// app.use('/tiger',function(req,res,next){
//     if(req.query.value==1){
//         next(); //다음 함수가서 send 찾아봐라
//     }
//     else{
//         console.log('tiger');
//         res.send('호랑이');
//     }
//     console.log(1);
//     // res.send('호랑이1');
    

// },
// function(req,res,next){
//     console.log(2);
//     //res.send('호랑이2');
//     next(); //다음 함수가서 send 찾아봐라
// },
// function(req,res,next){
//     console.log(3);
//     res.send('호랑이3');
   
// }
// )

//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;
//==============================

//#1
// var express = require('express');
// var app = express();


// app.use(express.json()); // json을 서버에서 받을 수 있게 설정.
// app.use(express.urlencoded({ extended: false })); //한글 인코딩이 안깨지도록.


// // //1차 경로. localhost:5000/users라고 입력하면 들어감
// // app.use( '/users', require('./routes/users') );

// // //위와 같다.
// // // let a = require('./routes/users') 
// // // app.use( '/users',a);


// // //직접 받을 수 있다/..use==뭐든지 다 발을 수 있다.
// // app.use( '/api/swtool', require('./routes/SwtoolRout') );


// //같은 주소라도 먼저 입력한 놈이 나온다. use는 get, post 둘다 된다?
// app.use('/',function(req,res,next){
//     console.log(1);
//     res.send('호랑이');

// })

// app.get('/',function(req,res,next){
//     console.log(1);
//     res.send('호랑이');

// })


// app.post('/',function(req,res,next){
//     console.log(1);
//     res.send('호랑이');

// })

// app.use('/lion', function(req, res, next){
// console.log('use');
// res.send('호랑이');
//     }    );


//  var port = process.env.PORT || '5000';
//  app.listen(port, ()=>{ console.log('listen');}); 

//  module.exports = app;