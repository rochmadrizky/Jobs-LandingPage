import Image from "next/image";
import React from "react";

const Grafik = () => {
  return (
    <div className="max-w-7xl mx-auto" id="product">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-6">
          <Image
            width={580.09}
            height={252.17}
            src="/grafik/group1.png"
            alt="grafik"
          />

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

          <Image
            width={530.91}
            height={475.99}
            src="/grafik/group2.png"
            alt="garfik"
            className="order-1 lg:order-2 mt-0 md:mt-8"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-6">
          <Image
            width={550}
            height={401}
            src="/grafik/group3.png"
            alt="grafik"
          />

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
