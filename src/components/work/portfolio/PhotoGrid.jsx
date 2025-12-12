import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const { category, project } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Fetch images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://obsio-project-detail-backend-2.onrender.com/api/images/${category}/${project}`
        );
        if (!res.ok) throw new Error("Failed to fetch images");
        const data = await res.json();

        // Preload all images
        const preloadPromises = data.map(
          img =>
            new Promise(resolve => {
              const image = new Image();
              image.src = img.url;
              image.onload = resolve;
              image.onerror = resolve; // continue even if one image fails
            })
        );

        await Promise.all(preloadPromises);
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (project) {
      setLoading(true);
      fetchImages();
    }
  }, [category, project]);

  // Handlers
  const prevImage = useCallback(
    () => setCurrentIndex(i => Math.max(0, i - 1)),
    []
  );
  const nextImage = useCallback(
    () => setCurrentIndex(i => Math.min(images.length - 1, i + 1)),
    [images.length]
  );

  const openImage = useCallback((img, idx) => {
    setSelectedImage(img);
    setCurrentIndex(idx);
  }, []);
  const closeImage = useCallback(() => setSelectedImage(null), []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = e => {
      if (!selectedImage) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, prevImage, nextImage, closeImage]);

  // Loader
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-xl flex flex-col items-center">
          <div className="loader mb-4"></div>
          Loading all images...
        </div>
        <style>{`
          .loader {
            border: 6px solid rgba(255,255,255,0.2);
            border-top: 6px solid white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
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
      {/* Back Button */}
      <div className="absolute top-10 left-10 z-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto pt-32 pb-20 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => openImage(img.url, index)}
            className="group cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={img.url}
              alt={img.key}
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg"
          onClick={closeImage}
        >
          <div
            className="relative z-20 p-4 rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]?.url || selectedImage}
              alt="preview"
              className="max-w-5xl w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
              draggable={false}
            />

            {/* Modal Navigation */}
            <button
              onClick={prevImage}
              disabled={currentIndex === 0}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 disabled:opacity-40"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              disabled={currentIndex === images.length - 1}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 disabled:opacity-40"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-500 transition duration-200"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
