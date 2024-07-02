import { useState } from "react";

const IMAGE_URLS = [
  "https://s.alicdn.com/@sc04/kf/H8b92917429e046099a56d5aa27c360b9I.jpg",
  "https://s.alicdn.com/@sc04/kf/Ha349a51c40284e0f83f9d1dba94e1841l.jpg",
  "https://s.alicdn.com/@sc04/kf/H3ed53fc664a64d46b3d071e1464aa53bU.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % IMAGE_URLS.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + IMAGE_URLS.length) % IMAGE_URLS.length);
  };

  return (
    <div className="flex flex-row justify-center mt-36">
      <div className="flex w-1/3 justify-center items-center p-6 bg-gray-100 rounded-xl shadow-lg">
        <button
          className="mx-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <img
          alt="Product"
          className="w-64 h-64 object-cover rounded-lg mx-4"
          src={IMAGE_URLS[currentIndex]}
        />
        <button
          className="mx-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
