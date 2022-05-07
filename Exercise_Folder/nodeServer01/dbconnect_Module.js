
var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const con = mysql.createConnection(
    {host: "react200.c8474rhlt0zd.ap-northeast-2.rds.amazonaws.com", port: "3306", database: "react", user: "admin", password: '12341234'}
);



router.post('/', function (req, res, next) {
    let param = req.body;
    console.log(param);

    // p363 22번째 라인 해석
    console.log(param.mapper + '.xml');

    // p363 18번째 라인 해석
    const myBatisMapper = require('mybatis-mapper');
    console.log(typeof myBatisMapper); //오브젝트가 제대로 나왔는 지 확인

    // 책코드 myBatisMapper.createMapper( [param.mapper+'.xml'] ); 해석되는 코드
    myBatisMapper.createMapper(['SwToolsMapper.xml']); //배열 등으로 파일 여러 개 로딩 가능

    // query 문장을 만든다.
    let query = myBatisMapper.getStatement(

        'SwToolsMapper',
        //xml파일에서 맞는 namespace를 찾는다. 1번 인자
                'selectOne',
        { //실행할 쿼리문 id 설정. 2번 인자
            id: '6'
        },
        { //인수 전달
            language: 'sql',
            indent: '  '
        } //indent: 줄 간격을 얼마만큼. 기본은 스페이스바 2번.
    );
    // console.log(query);
    console.log(2);

    // console.log(req.query.commannd);
    // console.log(req.body);
    try {
        con.query(query, (error, rows, fields) => {
            if(error) throw error;
            console.log("들어옴")
            console.log(rows);
            res.send(rows);
        });
    } catch (error) {
        console.log('error: ', error);
    }
    

})

module.exports = router;