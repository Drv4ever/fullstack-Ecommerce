import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { connectDB, Product } from "./db.ts"; // Apni db file se import kiya

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // React port allowed!

// Connect Database
connectDB();

// Route 1: Get All Products (React Home Grid ke liye)
app.get("/api/products", async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Route 2: Get Single Product (React Detail Page ke liye)
app.get("/api/products/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
