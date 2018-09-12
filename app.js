const router = require("./router.js");
const http = require('http');
http.createServer(function (request, response){
    router.home(request, response);
    router.user(request, response);
}).listen(1337, '127.0.0.1');
console.log('Running now')