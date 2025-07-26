// we can use the util in-built module in NodeJS 

const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const displayText = async () => {
  try {
    const firstFileText = await readFilePromise(
      "../content/first.txt",
      "utf-8"
    );
    console.log(firstFileText);

    await writeFilePromise(
      "../content/second.txt",
      "appended to second file by asncAwaitNodeNative.js",
      { flag: "a" }
    );
    const secondFileText = await readFilePromise(
      "../content/second.txt",
      "utf-8"
    );
    console.log(secondFileText);
  } catch (error) {
    console.log(error);
  }
};

displayText();
