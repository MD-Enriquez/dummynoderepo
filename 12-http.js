const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our about page')
    }
    else{
        res.end(`<h1>O-OH IDIOT DETECTED</h1><p>IDIOT IDIOT</p>`)
    }
})
server.listen(5000)