import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Portfolio = () => {
  const { project } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://obsio-project-detail-backend-1.onrender.com/api/images/app/${project}`
        );
        if (!res.ok) throw new Error("Failed to fetch images");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (project) fetchImages();
  }, [project]);

  if (loading)
    return (
      <div className="text-center py-10 text-white text-xl">
        Loading images...
      </div>
    );
  if (error)
    return (
      <div className="text-center py-10 text-red-500 text-xl">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto pt-32 pb-20 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img.url)}
            className="group cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
          >
            <img
              src={img.url}
              alt={img.key}
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 pointer-events-none"></div>

          {/* Image Container */}
          <div
            className="relative z-20 p-4 rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="preview"
              className="max-w-5xl w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
            />
          </div>

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-4xl font-bold 
             hover:text-red-500 transition duration-200"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
