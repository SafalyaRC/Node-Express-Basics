// In Express.js, middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. They act as a bridge between the request and response, allowing you to perform actions like modifying the request or response, ending the request-response cycle, or calling the next middleware in the chain

import express from "express";
import router from "./03-route.js";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`Hello Express!`);
});

app.use("/user", router); // app.use() is a fundamental function used to mount middleware functions at a specified path.

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
