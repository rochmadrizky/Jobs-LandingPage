import React from "react";

const Grafik = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-6">
          <img src="/grafik/group1.png" alt="grafik" />

          <div className="max-w-md text-center lg:text-left">
            <h1 className="font-bold text-[#4E4E4E] text-4xl">
              The content marketing service focused on RESULTS
            </h1>

            <p className="pt-4 lg:pt-10">
              This is your new text content. You can modify this text, add more
              paragraph, change font style or add images by clicking the edit
              button.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-6">
          <div className="max-w-md order-2 lg:order-1 text-center lg:text-left">
            <h1 className="font-bold text-[#4E4E4E] text-4xl">
              What you get with our content marketing for startups service
            </h1>

            <p className="pt-4 lg:pt-10">
              This is your new text content. You can modify this text, add more
              paragraph, change font style or add images by clicking the edit
              button.
            </p>
          </div>

          <img
            src="/grafik/group2.png"
            alt="garfik"
            className=" order-1 lg:order-2"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-6">
          <img src="/grafik/group3.png" alt="grafik" />

          <div className="max-w-md text-center lg:text-left">
            <h1 className="font-bold text-[#4E4E4E] text-4xl">
              Our Content Writing & Marketing Service costs $2,500/month.
            </h1>

            <p className="pt-4 lg:pt-10">
              This is your new text content. You can modify this text, add more
              paragraph, change font style or add images by clicking the edit
              button.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grafik;
