import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CardDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2>Yuklanmoqda...</h2>;

  return (
    <div className="flex gap-6 p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-contain border rounded"
      />
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>
      </div>
    </div>
  );
}
