const http=require('http')

const server=http.createServer( (req,res)=>{
    if(req.url==="/"){
        res.end('Home Page')
    }
    if(req.url==="/about"){
        // write blocking code here
        res.end('About Page')
    }
    res.end('Error, page not found!')
} )

server.listen(5000, ()=>{
    console.log("Listening on port 5000....");
} )