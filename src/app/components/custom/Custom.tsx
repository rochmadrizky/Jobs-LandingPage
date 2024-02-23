import React from "react";

const Custom = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center xl:items-start xl:flex-row">
        <img src="/custom/card.png" alt="card" />

        <div className="flex flex-col max-w-md">
          <div className="p-8">
            <div>
              <h1 className="text-4xl font-bold text-[#4E4E4E]">
                Handoff your work smarter now
              </h1>

              <p className="pt-3">
                This is your new text content. You can modify this text, add
                more paragraph, change font style or add images by clicking the
                edit button.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center">
                <img src="/custom/strategi.png" alt="strategi" />

                <div>
                  <h1 className="font-bold text-[#222222] text-xl">
                    Strategic
                  </h1>

                  <p className="pt-3">
                    Suggests that the component spacing between cards and
                    elements.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <img src="/custom/jadwal.png" alt="jadwal" />

                <div>
                  <h1 className="font-bold text-[#222222] text-xl">
                    Work schedule
                  </h1>

                  <p className="pt-3">
                    work schedule is the time an employee is expected to be on
                    the job
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
