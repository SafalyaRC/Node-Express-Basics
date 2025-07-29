// RESTful API is a web service that follows REST principles using HTTP methods to perform actions on resources.
// REST principles: https://restfulapi.net/
// RESTful API status codes: https://restfulapi.net/http-status-codes/

import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello express`);
});

// get all products
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "abc", price: 5000 },
    { id: 2, name: "pqr", price: 3000 },
  ];
  res.status(200).json({ products });
});

// get a single product
app.get("/api/products/:id", (req, res) => {
  const products = [
    { id: 1, name: "abc", price: 5000 },
    { id: 2, name: "pqr", price: 3000 },
  ];
  const product = products.find((p) => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }
  res.status(200).json(product);
});

// create a new product (add it in the DB)
app.post("/api/products", (req, res) => {
  const newProduct = req.body;
  newProduct.id = Date.now(); // dynamically assign a product id
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
