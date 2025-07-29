// JSON Web Token (JWT) based authentication is a stateless auth method that sends a token instead of storing sessions on the server
// JWT flow: user login and receive a token --> the client stores token in local storage/auth. header --> token is sent in every request --> server verifies the token and allows access

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 3000;

const users = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello, Express`);
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({
    username,
    password: hashedPassword,
  });
  res.send(`User registered`);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.send(`User not authorized`);
  }
  const token = jwt.sign({ username: username }, "test#secret"); // (payload data, pvt. key)
  res.json({ token });
});

app.get("/dashboard", (req, res) => {
  try {
    const token = req.header("Auth"); // auth here is the name of the key where we send the token
    const decodedToken = jwt.verify(token, "test#secret");

    if (decodedToken.username) {
      res.send(`Welcome, ${decodedToken.username}`);
    } else {
      res.send(`access denied`);
    }
  } catch (error) {
    res.send(`access denied`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
