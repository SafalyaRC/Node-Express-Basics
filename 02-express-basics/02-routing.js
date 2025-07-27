// Routing in Express.js defines how an application responds to client requests for specific endpoints, which are combinations of a URI (or path) and an HTTP request method (GET, POST, PUT, DELETE, etc.)
// syntax: app.METHOD(PATH, HANDLER) where METHOD is the http method, path is the URL route and HANDLER is a function that runs when the route is accessed

import express from "express";
import { searchController, usernameController } from "./02-controller.js";

const app = express();
const PORT = 5000;

// defining a simple route:
app.get("/", (req, res) => {
  res.send(`Hello Express`);
});

// dynamic routes and query strings are part of GET requests

// dynamic routes: used to capture dynamic values from the URL
// defined using- :parameter_name, for eg: http://localhost:5000/user/safalya (here safalya is the dynamic value)
app.get("/user/:username", usernameController); // we use a controller file for importing the callback logic we use

// query strings: used to pass optional data in the URL after ?
// extracted using: req.query  for eg: http://localhost:5000/search?keyword=dev
app.get("/search", searchController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
