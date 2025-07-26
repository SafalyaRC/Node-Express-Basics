const http=require('http')

// it is essential to send headers in order to let the browser know the metadata of the response we're sending
// here 200 reprsents a successful status code, text/html ensures the text is not plain text rather html
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-type': 'text/html'
    })
    res.write('<h1>Home page</h1>');
    res.end()
})
server.listen(5000)