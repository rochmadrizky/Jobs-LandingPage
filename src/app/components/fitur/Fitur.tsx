import React from "react";

const Fitur = () => {
  const fitur = [
    { judul1: "Mobile", judul2: "Responsive", logo: "/fitur/01.png" },
    { judul1: "User", judul2: "Friendly", logo: "/fitur/02.png" },
    { judul1: "Well Organised", judul2: "Layers", logo: "/fitur/03.png" },
    { judul1: "Easily", judul2: "Customisable", logo: "/fitur/04.png" },
    { judul1: "Better", judul2: "Components", logo: "/fitur/05.png" },
    { judul1: "Multiple", judul2: "Blocks", logo: "/fitur/06.png" },
    { judul1: "Robust", judul2: "Workflow", logo: "/fitur/07.png" },
    { judul1: "Mobile", judul2: "Responsive", logo: "/fitur/08.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div>
          <div className="pb-12 text-center md:text-left">
            <h1 className="text-[#2E2E2E] text-2xl md:text-4xl font-bold">
              Discover the key features
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {fitur.map((isi, urutan) => (
              <div
                key={urutan}
                className="w-full md:w-[255px] h-[200px] rounded-md shadow-xl border"
              >
                <div className="p-2 pb-10">
                  <h1 className="text-2xl text-[#2E2E2E] font-bold">
                    {isi.judul1}
                  </h1>
                  <h1 className="text-2xl text-[#2E2E2E] font-bold">
                    {isi.judul2}
                  </h1>
                </div>

                <div className="p-2 pt-10">
                  <img src={isi.logo} alt="fitur" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
