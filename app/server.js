"use strict";
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
// //      한글로 출력이 안되고 있다 이상함 --; 유튜브 강좌에서는 되던데......
//     if( req.url == "/"){
//         res.end("여기는 루트입니다.");
//     } else if(req.url == "/login"){
//         res.end("여기는 로그인입니다.");
//     }
// });

// app.listen(8080, () => {
//     console.log("http로 가동된 서버입니다");
// })
// // http로 하면 소스가 지져분해진다

// 모듈
const express = require('express');
const res = require('express/lib/response');
const app = express();

// 라우팅
const home = require("./src/routes/home");

//앱 셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/", home);  // use -> 미들 웨어를 등록해주는 메서드(여기서는 라우팅으로 연결시킴)

// app.get('/beauty', function(req, res){
//     res.send('뷰티 ㅇㅁㄹㅇㄴㅁㄹㅇㅁㄴ')
// })

//app.get('/', function(req, res){
//    res.sendFile(__dirname + '/write.html')
//    res.send("test입니다");

//app.get('/login', (req, res) => {
    // res.send("여기는 로그인 화면입니다");
//    res.sendFile(__dirname + '/index.html')
//})


// app.get('/', function(req, res){
//     res.render("home/index.ejs");
// });

// app.get('/login', (req, res) => {
//     res.render("home/login");
// });

module.exports = app;