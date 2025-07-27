import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`Hello, Express`);
});

// error handling in express
app.get("/error", (req, res) => {
  throw new Error("This is test error");
});
app.use((err, req, res, next) => {
  console.log(err);
  res.send(`Internal server error`);
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
