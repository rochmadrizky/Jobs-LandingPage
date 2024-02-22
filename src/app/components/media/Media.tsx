import React from "react";

const Media = () => {
  const data = [
    { angka: 2260, deskripsi: "Satisfied Brands" },
    { angka: 1324, deskripsi: "Satisfied Clients" },
    { angka: 3453, deskripsi: "Sponsored" },
    { angka: 9786, deskripsi: "Completed" },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className="h-[484px] w-full flex items-center justify-center bg-center"
        style={{ backgroundImage: `url('/media/bg.png')` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-white text-center p-8">
                <h1 className="text-4xl font-bold">
                  Search through more than 11 million
                </h1>
                <h1 className="text-4xl font-bold">social media profiles</h1>
              </div>

              <div className="text-white text-center px-6 w-full md:px-12 lg:w-[400px]">
                <p>
                  This is your new text content. You can modify this text, add
                  more paragraph, change font style or add images by clicking
                  the edit button.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 p-8 md:pt-10">
              {data.map((nilai, urutan) => (
                <div key={urutan} className="w-[113px] h-[64px]">
                  <div className="text-white text-center">
                    <h1 className="text-4xl font-bold">{nilai.angka}</h1>
                    <p className="text-[14px]">{nilai.deskripsi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
