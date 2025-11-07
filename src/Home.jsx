import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/${item.id}`)}
          className="p-4 border rounded-lg cursor-pointer hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-contain mb-3"
          />
          <h2 className="font-semibold text-sm mb-1">{item.title}</h2>
          <p className="text-gray-600">${item.price}</p>
        </div>
      ))}
    </div>
  );
}
