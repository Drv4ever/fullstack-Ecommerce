import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import { ProductDetail } from "./assets/components/ProductDetail";
import ProductGrid from "./assets/components/ProductGrid";

type Product = {
  _id: string;
  image: string;
  title: string;
  price: number;
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  console.log(searchQuery);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <Navbar
        cartCount={cartCount}
        onSearch={(query) => setSearchQuery(query)}
      />
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/"
          element={
            <ProductGrid
              products={filteredProducts}
              handleAddToCart={handleAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
