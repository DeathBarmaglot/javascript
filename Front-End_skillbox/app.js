const express = require("express");
const bodyParser = require("body-parser");
  
const app = express();
  
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});
app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
  
app.get("/", function(request, response){
    response.send("Главная страница");
});

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

// const http = require('http');
// const url = require('url');
// const { parse } = require('querystring');

// http.createServer((request, response) =>{
// console.log('work');
// if (request.method == 'GET'){
//     let urlRequest = url.parse(request.url, true);

//     console.log(request.method, urlRequest.query.test); // !GETparam
//     if (urlRequest.query.test % 2 == 0){
//         response.end('even');
//     }
//     response.end('odd');
//     // response.end(request.method, urlRequest.query.test);
// }
// else{
//     let body ='';
//     request.on('data', chunk => {
//         body += chunk.toString();
//     });
//     request.on('end', () => {
//         let params = parse(body);
//         response.end(params, params.hi);
//     });
// }
// }).listen(3000);