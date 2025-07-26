const http=require('http')

const server=http.createServer()

// listen to 'request' event and respond to that request
server.on('request', (req,res)=>{
    res.end('Welcome')
})
server.listen(5000)