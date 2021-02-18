var http = require('http');
var fs = require('fs');
var url = require('url');//url이라는 모듈을 사용할 것이다.

var app = http.createServer(function(request,response){
    var url = request.url;
    var queryData = url.parse(_url,true).query;
    console.log(queryData);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + _url);
    response.end(fs.readFileSync(__dirname + _url));
    //fs.readFileSync(__dirname + url) : node js 기능임.
});
app.listen(3000);

//http:// = protocol
//host = 인터넷에 접속된 각각의 컴퓨터. 주소.
//port = 한대의 컴퓨터 안에 여러서버. 클라이언트가 접속할 때, 어떤 서버와 연결?. 3000번 포트와 연결된 포트와 연결하는것. 3000포트에 우리의 node js를 연결시킨것임. 기본값은 80임.
//path 어느 파일인지 가리킴
//query string = 값을 변경하면 앞에있는 웹 서버에 데이터를 전달할 수 있음. 시작은 ?로 시작하기로. 값과 값은 &로, 값의 이름과 값은 =으로 구분하기로 약속됨.
//우리는 동적으로 생성하는 값을 전달할것임.

