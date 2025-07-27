import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`Hello express`);
});

app.use(express.json());

// parameter chaining for multiple dynamic routes

// :id([0-9]{5} here the id has a regular expression(regex) defined inside () which specifies [0-9] numbers used and must be of {5} digits
app.get("users/:username/:id([0-9]{5})", (req, res) => {
  const { username, id } = req.params;
  res.json({
    id,
    username,
  });
});

// handling inavlid routes (404 not found where no resources are present)
app.get('*', (req,res)=>{
    res.send(`Sorry this is an inavlid URL`)
})

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
