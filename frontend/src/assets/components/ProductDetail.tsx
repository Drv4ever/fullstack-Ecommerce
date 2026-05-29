import React from "react";
import { useParams } from "react-router-dom";
interface ProductDetailProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = React.useState<ProductDetailProps | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data: ProductDetailProps) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div className="product-detail-page">
      <h2>Product Detail</h2>
      <div className="product-detail-card">
        <div className="detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="detail-info">
          <h3>{product.title}</h3>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-description">{product.description}</p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      </div>
      <a href="/">Go back</a>
    </div>
  );
};



