import { useState } from "react";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [banner1, banner2, banner3];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="mt-24">
      <div className="carousel w-full border rounded-xl shadow-lg ">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`carousel-item relative w-full  ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

            {/* Image */}
            <img
              src={banner}
              className="w-full h-[570px] object-cover"
              alt={`Banner ${index + 1}`}
            />

            {/* Text */}
            {index === 0 && (
              <h2 className="absolute top-44 px-12 text-7xl font-bold text-white text-center z-20">
                Volunteer today to make a difference, create lasting change, and
                positively impact lives forever.
              </h2>
            )}

            {/* Navigation Buttons */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
              <button onClick={handlePrev} className="btn btn-circle">
                ❮
              </button>
              <button onClick={handleNext} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
