import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full h-full">
        <img src="/hero/hero1.png" alt="hero" className="" />
        <div></div>
      </div>

      <div className="w-full h-full">
        <div></div>
        <img src="/hero/hero2.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
