var Sequelize = require('sequelize');
//대문자 Sequelize를 통해 연결한 결과를 받을 소문자 sequelize 변수를 뒀습니다
//이 이름은 마음껏 지어도 무방합니다.
var sequelize;

//sequelize 변수에 연결 정보를 담습니다.
//연결정보 마저 Sequelize 도구에서 제공해주는 형식 그대로 사용할 뿐입니다.
sequelize = new Sequelize('class101', 'root', '01094207343', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  timezone: '+09:00', //한국 시간 셋팅
  define: {
    //sequelize는 기본적으로 영어 복수이름으로 테이블을 만드는데
    //그 기능을 끄는 옵션입니다.
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true,
  },
});

var db = {};
//객체식으로 데이터베이스 테이블을 구성하고, 직접 해당 테이블에 접속을 할 수 있습니다
//따라서 이런 ORM 방식을 통해, 직접 쿼리를 날리지 않아도 테이블 정보가 담긴 객체를 이용하여
//데이터 조회,생성,변경,삭제를 할 수 있습니다.
db.users = sequelize.import(__dirname + '/users.js');

//추후에 연결된 sequelize 객체를 통해, 직접적으로 데이터베이스에 쿼리도 날릴 수 있습니다
//그래서 앞으로 우리가 사용할 db 객체에 sequelize 객체와 바로 위에서 만든 모델들을 채워 넣습니다.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
