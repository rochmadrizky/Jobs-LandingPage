import React from "react";

const Headline = () => {
  return (
    <div>
      <div
        className="h-[484px] w-full flex items-center justify-center bg-center"
        style={{ backgroundImage: `url('/headline/bg.png')` }}
      ></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="bg-white w-full md:w-[628px] h-[436px] absolute right-0 md:right-10 lg:right-40 -top-56 shadow-xl rounded-md flex items-center justify-center">
          <div className="p-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full lg:w-[412px] h-[198px] md:text-left text-center">
                <h1 className="text-4xl font-bold">Headline</h1>
                <p className="pt-6">
                  This is your new text content. You can modify this text, add
                  more paragraph, change font style or add images by clicking
                  the edit button.
                </p>
              </div>

              <div>
                <button className="px-5 py-2 bg-[#FF8F00] rounded-md">
                  Get Started Free
                </button>

                <button className="px-5 py-2 rounded-md">Schedule Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
