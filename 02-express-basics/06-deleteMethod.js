// DELETE method is used to delete a resource from the server (for eg: deleting an user profile)

import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`Hello, Express!`);
});

app.use(express.json()); // this will add middleware for all the routes, no need for explicitly mentioning a parameter

app.delete("/users/:id",(req,res)=>{
    const userId=req.params.id;
    res.json({
        message:`User with id: ${userId} deleted successfully`
    })
})

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});