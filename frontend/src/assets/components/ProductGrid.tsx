import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: {
    id: number;
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
          key={product.id}
          data={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
