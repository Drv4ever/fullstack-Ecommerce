import { Link } from "react-router-dom";
interface ProductCardProps {
  data: {
    _id: string;
    image: string;
    title: string;
    price: number;
  };
  handleAddToCart: () => void;
}

function ProductCard({ data, handleAddToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <Link to={`/product/${data._id}`} className="product-card-link">
        <img src={data.image} alt={data.title} className="product-image" />
      </Link>

      <h4 className="product-title">{data.title}</h4>
      <p className="product-price">${data.price}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
