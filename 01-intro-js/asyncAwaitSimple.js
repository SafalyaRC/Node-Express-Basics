// a more simpler way to implement the same without using the util module is to simply add a '.promise' beside your require('fs') to ensure that once the promise is resolved by using await, we can directly read or write by calling the respective readFile & writeFile functions.

const { readFile, writeFile } = require("fs").promises;

const displayText = async () => {
  try {
    await writeFile(
      "../content/second.txt",
      "appended by asyncAwaitSimple.js",
      { flag: "a" }
    );
    const readSecondFile = await readFile("../content/second.txt", "utf-8");
    console.log(readSecondFile);
  } catch (error) {
    console.log(error);
  }
};
displayText();
