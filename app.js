const express = require('express');
const helmet = require('helmet');
const app = express();
const ejs = require('ejs');
const db = require('./model/db');

//html 화면나타냄
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static(__dirname + '/public'));

//보완
app.use(helmet());

//post api 접근
app.use(express.json());
app.use(express.urlencoded());

//미들웨어
const mainRouter = require('./router/mainRouter');
app.use('/', mainRouter);

//스위치 역할
// 먼저 app.listen 함수를 통해 서버가 실행되고 나서 내부에 있는
// 데이터베이스 접속 코드가 실행!
app.listen(3000, function (req, res) {
  //force가 true면 데이터베이스가 서버가 켜질때마다 초기화됩니다. 즉 데이터가 날아갑니다
  db.sequelize.sync({ force: false });
  console.log('서버가 실행되고 있다!');
});
