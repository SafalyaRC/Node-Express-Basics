// streams are also useful in HTTP scenarios, where we dont wanna send bulky files over the network, rather just send the data in chunks

let http = require("http");
let { createReadStream } = require("fs");

http
  .createServer((req, res) => {
    const fileStream = createReadStream("../content/second.txt", {
      encoding: "utf-8",
    });

    // the 'open' event is used to signify when a file is opened
    fileStream.on("open", () => {
      fileStream.pipe(res); // pipe() method transfers data between a readable stream and a writable stream
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
