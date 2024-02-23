import React from "react";

const Grafik = () => {
  return (
    <div className="px-4" id="product">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-6">
          <div className="flex gap-4 p-4">
            <div className="mb-8">
              <img src="/grafik/grafik2.png" alt="grafik" />
            </div>

            <div className="mt-8">
              <img src="/grafik/grafik1.png" alt="grafik" />
            </div>
          </div>

          <div className="max-w-md text-center lg:text-left">
            <h1 className="font-bold text-[#4E4E4E] md:text-4xl text-3xl">
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
            <h1 className="font-bold text-[#4E4E4E] md:text-4xl text-3xl">
              What you get with our content marketing for startups service
            </h1>

            <p className="pt-4 lg:pt-10">
              This is your new text content. You can modify this text, add more
              paragraph, change font style or add images by clicking the edit
              button.
            </p>
          </div>

          <div className="flex flex-col order-1 lg:order-2 relative p-4">
            <div className="absolute right-0">
              <img src="/grafik/diagram1.png" alt="diagram" />
            </div>
            <div className="relative -left-[76px] -bottom-24">
              <img src="/grafik/diagram2.png" alt="diagram" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-6">
          <div className="flex items-center p-4">
            <div className="flex flex-col">
              <div>
                <img src="/grafik/grafik3729.png" alt="grafik" />
              </div>

              <div>
                <img src="/grafik/simple.png" alt="grafik" />
              </div>
            </div>

            <div>
              <img src="/grafik/3729.png" alt="grafik" />
            </div>
          </div>

          <div className="max-w-md text-center lg:text-left">
            <h1 className="font-bold text-[#4E4E4E] md:text-4xl text-3xl">
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
