import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: {
    _id: string;
    image: string;
    title: string;
    price: number;
  }[];
  handleAddToCart: () => void;
}

function ProductGrid({ products, handleAddToCart }: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          data={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
