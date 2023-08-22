const http = require('http');

const data = {number: [1,2,3,5,8,13]}
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8008);