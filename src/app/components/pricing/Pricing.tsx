import { IconCheck } from "@tabler/icons-react";
import React from "react";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto" id="price">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <div className="px-2 py-1 border-l-4 border-[#FF8F00]">
              <h1 className="text-4xl font-bold ml-4">Pricing</h1>
            </div>

            <div className="p-8 max-w-sm">
              <p>
                This is your new text content. You can modify this text, add
                more paragraph,
              </p>
              <p>
                change font style or add images by clicking the edit button.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-[311px] h-[380px] border shadow-lg rounded-lg">
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p>Advanced</p>
                  </div>

                  <div className="px-4 py-1 bg-[#FF9F1C] rounded-full text-white">
                    Popular
                  </div>
                </div>

                <div className="flex items-end pt-3 gap-3">
                  <h1 className="text-3xl font-bold">$19.99</h1>
                  <p className="text-[#024547]">Per month</p>
                </div>

                <div className="pt-7">
                  <div className="flex items-center gap-1">
                    <IconCheck />
                    <h1>All Features</h1>
                  </div>

                  <div className="flex items-center gap-1 pt-2">
                    <IconCheck />
                    <h1>All Courses</h1>
                  </div>

                  <div className="flex items-center gap-1 pt-2">
                    <IconCheck />
                    <h1>Unlimited Cloud Storage</h1>
                  </div>

                  <div className="flex items-center gap-1 pt-2">
                    <IconCheck />
                    <h1>Flexible Expert Sessions</h1>
                  </div>
                </div>

                <button className="text-white px-6 py-4 bg bg-[#FF9F1C] w-full mt-10 rounded-lg">
                  Buy now
                </button>
              </div>
            </div>

            <div className="w-[311px] h-[380px] border shadow-lg rounded-lg">
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="p-1">
                    <p>Basic</p>
                  </div>
                </div>

                <div className="flex items-end pt-3 gap-3">
                  <h1 className="text-3xl font-bold">$9.99</h1>
                  <p className="text-[#024547]">Per month</p>
                </div>

                <div className="pt-7">
                  <div className="flex items-center gap-1">
                    <IconCheck />
                    <h1>Limited Features</h1>
                  </div>

                  <div className="flex items-center gap-1 pt-2">
                    <IconCheck />
                    <h1>Limited Courses</h1>
                  </div>

                  <div className="flex items-center gap-1 pt-2">
                    <IconCheck />
                    <h1>Limited Cloud Storage</h1>
                  </div>
                </div>

                <button className="text-white px-6 py-4 bg bg-[#FF9F1C] w-full mt-[70px] rounded-lg">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
