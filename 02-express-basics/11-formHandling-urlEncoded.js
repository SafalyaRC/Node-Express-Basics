import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Hello express`);
});

// url-encoded middlware for parsing it
app.use(express.urlencoded({extended:true}))

app.post("/form",(req,res)=>{
  console.log(req.body); // to view the contents of url-encoded form, we must use a middleware to parse it
  res.send("Form received")
})

// choose form-urlencoded option in the body of postman API for this to work

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
