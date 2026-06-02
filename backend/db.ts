import mongoose, { Document, Schema } from "mongoose";

export interface IDatabase extends Document {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const productSchema = new Schema<IDatabase>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/Ecommerce", {})
    .then(() => console.log("MongoDB connected"))
    .catch((err: Error) => console.error("MongoDB connection error:", err));
};

// MongoDB connection

export const Product = mongoose.model<IDatabase>("Product", productSchema);
