// Express has a special type of error-handling middleware function which has 4 paramters: (err,req,res,next)=>{...}
// whenever we call next(err) express will know error has occured and skip to this special middleware

import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// handling errors globally to prevent app from crashing:
process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
process.on("unhandledRejection", (reason, promise) => {
  console.log(reason);
});

app.get("/", (req, res) => {
  res.send(`Hello Express`);
});

// synchronous error:
app.get("/sync-error", (req, res, next) => {
  try {
    throw new Error("Sync error occured");
  } catch (error) {
    next(error);
  }
});

// asynchronous error:
app.get("/async-error", async (req, res, next) => {
  try {
    await Promise.reject(new Error("Async error occured"));
  } catch (error) {
    next(error);
  }
});

// special error handling middleware:
app.use((err, req, res, next) => {
  console.error(err.message);
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
