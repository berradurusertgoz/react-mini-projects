import { useEffect, useState } from "react";
import "./load.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${count * 20}`,
        );

        const result = await response.json();
        if (result && result.products && result.products.length) {
          setProduct((prev) => [...prev, ...result.products]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchProduct();
  }, [count]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const disabled = product.length >= 100;
  return (
    <div className="loading-container">
      <div className="product-grid">
        {product && product.length
          ? product.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div className="product-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          : null}
      </div>
      <button
        disabled={disabled}
        className={disabled ? "load-more-btn disabled-btn" : "load-more-btn"}
        onClick={() => setCount(count + 1)}
      >
        Load More
      </button>
      {disabled ? <p>You have reached to 100 products</p> : null}
    </div>
  );
}
