const { readFileSync, writeFileSync } = require("fs");

console.log(readFileSync("../content/first.txt", "utf8"));
console.log(readFileSync("../content/second.txt", "utf8"));
console.log(writeFileSync("../content/newfile.txt", "Hello World!")); // no file named newFile.txt initially, so node creates one and adds the value, if file already exists, node will overwrite it

writeFileSync(
  "../content/first.txt",
  " modifying this file by just appending on it (sync fs)",
  { flag: "a" }
); // use flag:a to append to an existing file instead of over writing on it
