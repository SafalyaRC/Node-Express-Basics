import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`Hello, Express`);
});

// example of router-level:
app.use("/contact", (req, res, next) => {
  console.log(`request received at: ${Date.now()}`);
  next();
});

app.get("/contact", (req, res) => {
  res.send(`Welcome to contact page`);
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
