import React, { useState, useEffect } from "react";

const Textchange = () => {

  const texts = [
    "Hi, I am Habib",
    "Frontend Developer",
    "React Developer",
    "Web Designer"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-amber-600">
        {texts[index]}
      </h1>
    </div>
  );
};

export default Textchange;