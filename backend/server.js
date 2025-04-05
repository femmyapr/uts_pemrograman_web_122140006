const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Contoh API lokal untuk Wishlist
let wishlist = [];

app.get("/api/wishlist", (req, res) => {
  res.json(wishlist);
});

app.post("/api/wishlist", (req, res) => {
  const product = req.body;
  wishlist.push(product);
  res.status(201).json({ message: "Ditambahkan ke wishlist", product });
});

// Contoh API lokal untuk Cart
let cart = [];

app.get("/api/cart", (req, res) => {
  res.json(cart);
});

app.post("/api/cart", (req, res) => {
  const product = req.body;
  cart.push(product);
  res.status(201).json({ message: "Ditambahkan ke cart", product });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
