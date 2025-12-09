"use client";
import { useEffect, useState } from "react";
export default function PhotoGrid() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/images?folder=App/Delivery-app"
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        setImages(data.images);
        setLoading(false);
      } catch (err) {
        setError("Failed to load images");
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p className="text-white p-4">Loading...</p>;
  if (error) return <p className="text-red-500 p-4">{error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.secure_url}
          alt={`image-${i}`}
          className="w-full h-48 object-cover rounded-xl border shadow-lg"
        />
      ))}
    </div>
  );
}
