const express = require('express');
const router = express.Router();
const db = require('../model/db');

// 주소를 만든다
router.get('/', function (req, res) {
  //그림파일 전달
  res.render('index', { title: '메인타이틀' });
});

router.post('/postapi', function (req, res) {
  let body = req.body;
  console.log(body);
  res.send('postAPI');
});

router.get('/data/create', function (req, res) {
  //기본적으로 제공해주는 자바스크립트 Math 도구에서
  //랜덤 소수를 제공해주는 random() 함수를 사용했습니다.
  //랜덤 함수는 소수이기 때문에 결과 값을 정수로 바꾸기 위해 parseInt()라는 정수 변환 함수로 감쌉니다.
  let user_id = parseInt(Math.random() * 10000);
  db.users.create({ user_id: user_id }).then(function (result) {
    res.send({ success: 200 });
  });
});

router.get('/data/read', function (req, res) {
  db.users.findAll().then(function (result) {
    res.send({ success: 200, data: result });
  });
});

router.post('/data/update', function (req, res) {
  let target_id = req.body.target_id;
  db.users.update({ user_id: 9999 }, { where: { user_id: target_id } }).then(function (result) {
    res.send({ success: 200 });
  });
});

router.post('/data/delete', function (req, res) {
  let target_id = req.body.target_id;
  db.users.destroy({ where: { user_id: target_id } }).then(function (result) {
    res.send({ success: 200 });
  });
});

module.exports = router;
