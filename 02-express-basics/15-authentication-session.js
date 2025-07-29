// workflow of authentication process:
// the user sends login creds --> server verifies creds against a DB --> if valid, server responds with a session cookie or JWT token --> The client stores this session or token for subsequent requests --> for each req, the client sends token/session for verification

import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const PORT = 3000;

const users = [];

app.use(express.json())
app.use(cookieParser());
app.use(
  session({
    secret: "15-sample",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send(`Hello, Express`);
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  users.push({
    username,
    password,
  });
  res.send(`User registered`);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || password !== user.password) {
    return res.send(`User not authorized`);
  }
  req.session.user = user;
  res.send(`User logged-in`);
});

app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    res.send(`User unauthorized`);
  }
  res.send(`Welcome, ${req.session.user.username}`);
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
