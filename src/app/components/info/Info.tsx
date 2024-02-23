import Image from "next/image";
import React from "react";

const Info = () => {
  const infoPartner = [
    "airbnb.png",
    "amazon.png",
    "fedex.png",
    "microsoft.png",
    "google.png",
    "ola.png",
    "walmart.png",
    "oyo.png",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full md:w-[350px] h-[200px] text-center lg:text-left pt-3">
          <h1 className="text-2xl md:text-4xl font-bold">1,500,000+</h1>
          <p className="text-base md:text-lg text-[#2E2E2E] pt-2">
            This is your new text content. You can modify this text, add more
            paragraph, change font style or add images by clicking the edit
            button.
          </p>
        </div>

        <div className="grid grid-cols-4 pb-3">
          {infoPartner.map((logo, urutan) => (
            <Image
              width={160}
              height={90}
              key={urutan}
              src={`/info/${logo}`}
              alt={logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
