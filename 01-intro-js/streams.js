// use of streams stems from the need of read,write,duplex(r/w both),transform operations
// we saw how we store the data of files in variables (in fs sync and async examples) however in certain cases, the variables may not be large enough to store the values, which is where streams steps in

// In Node.js, streams are abstract interfaces for working with streaming data, allowing efficient handling of large datasets or continuous data flows without loading everything into memory at once. They process data in sequential chunks, making them ideal for I/O operations and real-time data processing.

const {createReadStream}=require('fs')
const stream=createReadStream('../content/second.txt',{
    highWaterMark:20, // customise the length of buffer for data chunks (default buffer size: 64kb)
    encoding:'utf-8'  // we can also set the encoding here
})

// stream has 'data' event to process the chunks of data inside the buffer
stream.on('data',(res)=>{
    console.log(res);
})

stream.on('error', (err)=>{
    console.log(err);
})