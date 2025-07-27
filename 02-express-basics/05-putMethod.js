// PUT method is used to update an existing resource (suppose- when an user wants to update their name)
// uses route paramters (req.params) to identify the resource

import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`Hello, Express!`);
});

app.use(express.json()); // this will add middleware for all the routes, no need for explicitly mentioning a parameter

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  res.json({
    message: `User with id-${userId} updated to ${username} with email:${email}`,
  });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
