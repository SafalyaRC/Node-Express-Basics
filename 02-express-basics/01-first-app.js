import express from "express";

const app = express();

const PORT = 5000;

// define a simple route
app.get("/", (req, res) => {
  res.send("Hello express");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
