// POST method is used to send data from the client to the server and create a new resource.
// requires middleware Express.JSON() to handle JSON i/p

import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`Hello, Express!`);
});

// use the postman app to test this out
app.post("/users", express.json(), (req, res) => { // usage of express.json() middleware for JSON i/p we send to the server
  const { username, email } = req.body;
  res.json({
    message: `User ${username} with email ${email} is welcome!`,
  });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
