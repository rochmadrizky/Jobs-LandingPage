import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto" id="home">
      <div
        className="h-[930px] w-full flex items-center justify-center bg-center bg-no-repeat relative -top-36 md:-top-28 left-0 right-0"
        style={{ backgroundImage: `url('/home/bg.png')` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-32 relative bottom-20 md:-bottom-12 ">
          <div className="w-full lg:w-[559px] h-[132px] p-4 mb-6 md:my-0">
            <div className="flex flex-col items-center md:items-start bg-black bg-opacity-50 p-4 rounded-lg">
              <h1 className="text-white text-4xl font-bold">Personal Goals</h1>

              <div className="max-w-md py-4 md:py-8">
                <p className="text-white text-center md:text-left">
                  Don&apos;t misunderstand: OKR also helps you reach your
                  personal goals. Utilizing OKR allows you to gain personal
                  benefits such as making more effective decisions, being more
                  productive, building stronger bonds with your loved ones, and
                  many more.
                </p>
              </div>

              <button className="text-[#FF8F00] bg-white px-6 py-2 rounded-lg">
                Setup Now
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[559px] h-[132px] p-4 mt-6 md:mt-0">
            <div className="flex flex-col items-center md:items-start bg-black bg-opacity-50 p-4 rounded-lg">
              <div className="flex items-center lg:items-end flex-col lg:flex-row">
                <h1 className="text-white text-4xl font-bold">
                  Organizational
                </h1>
                <h1 className="text-white text-lg">(Business & Non Profit)</h1>
              </div>

              <div className="max-w-md py-4 md:py-8">
                <p className="text-white text-center md:text-left">
                  ONE is a global movement co-founded by Bono-U2 and other
                  activists, campaigning to end extreme poverty and preventable
                  disease by 2030, so that everyone, everywhere can lead a life
                  of dignity and opportunity.
                </p>
              </div>

              <button className="text-[#FF8F00] bg-white px-6 py-2 rounded-lg">
                Setup Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
