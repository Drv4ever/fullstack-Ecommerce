import React from "react";
import { useParams } from "react-router-dom";
interface ProductDetailProps {
  _id: string;
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
    if (!id) {
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Failed to fetch product with id ${id}: ${res.status}`,
          );
        }
        return res.json();
      })
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
          <p>
            <strong>Route id:</strong> {id}
          </p>
          <p>
            <strong>Document _id:</strong> {product._id}
          </p>
        </div>
      </div>
      <a href="/">Go back</a>
    </div>
  );
};
