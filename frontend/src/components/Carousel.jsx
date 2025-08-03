import React, { useState, useEffect, useRef } from 'react';

const images = [
  'https://elearn.apsit.edu.in/moodle/pluginfile.php/1/theme_adaptable/p2/1738158056/banner3.png',
  'https://elearn.apsit.edu.in/moodle/pluginfile.php/1/theme_adaptable/p3/1738158056/IMG-20221018-WA0013.jpg',
  'https://elearn.apsit.edu.in/moodle/pluginfile.php/1/theme_adaptable/p4/1738158056/WhatsApp%20Image%202024-04-25%20at%203.21.23%20PM%20%282%29_1.jpeg',
  'https://elearn.apsit.edu.in/moodle/pluginfile.php/1/theme_adaptable/p1/1738158056/award2_1.jpg',
  'https://elearn.apsit.edu.in/moodle/pluginfile.php/1/theme_adaptable/p2/1738158056/banner3.png',
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-screen h-[80vh] flex items-center justify-center overflow-hidden">
      <button
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white border-none text-3xl px-4 py-2 cursor-pointer z-10 rounded-full hover:bg-opacity-70 transition"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <div className="w-screen h-[80vh] overflow-hidden">
        <div
          className="flex transition-transform duration-[2000ms] ease-in-out"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-screen h-[80vh] object-cover flex-shrink-0 rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
      <button
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white border-none text-3xl px-4 py-2 cursor-pointer z-10 rounded-full hover:bg-opacity-70 transition"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel; 