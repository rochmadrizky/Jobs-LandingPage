"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const testi = [
  {
    gambar: "1.png",
    nama: "Miya",
    jabatan: "CEO, ABC Corporation",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab, dignissimos consectetur nesciunt labore deleniti illum quaerat ullam tempore at nobis repellendus laboriosam, quis accusantium qui est! Magni veniam dignissimos, libero distinctio animi placeat, laboriosam voluptate porro recusandae?",
  },
  {
    gambar: "2.png",
    nama: "Bruno",
    jabatan: "Founder, ABC Corporation",
    deskripsi:
      "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
  },
  {
    gambar: "3.png",
    nama: "Layla",
    jabatan: "Partner, ABC Corporation",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab, dignissimos consectetur nesciunt labore deleniti illum quaerat ullam tempore at nobis repellendus laboriosam, quis accusantium qui est! Magni veniam dignissimos, libero distinctio animi placeat, laboriosam voluptate porro recusandae?",
  },
  {
    gambar: "4.png",
    nama: "Paquito",
    jabatan: "CTO, ABC Corporation",
    deskripsi:
      "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
  },
  {
    gambar: "5.png",
    nama: "Nolan",
    jabatan: "Digital Creative, ABC Corporation",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab, dignissimos consectetur nesciunt labore deleniti illum quaerat ullam tempore at nobis repellendus laboriosam, quis accusantium qui est! Magni veniam dignissimos, libero distinctio animi placeat, laboriosam voluptate porro recusandae?",
  },
];

const Testi = () => {
  const [ulasan, ulasanTerpilih] = React.useState(testi[0]);
  const [gambarTerpilih, setGambarTerpilih] = React.useState<number | null>(
    null
  );

  useEffect(() => {
    setGambarTerpilih(0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto" id="customer">
      <div
        className="h-[484px] w-full flex items-center justify-center bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/testi/bg.png')` }}
      >
        <div className="p-4">
          <h1 className="text-4xl font-bold text-[#4E4E4E] text-center">
            Testimoni Klien
          </h1>

          <div className="w-full lg:w-[854px] h-full lg:h-[232px] bg-white rounded-lg shadow-md my-2 md:my-4 flex items-center justify-center">
            <div className="p-6">
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-semibold">
                  {ulasan.nama}
                </h1>
                <h1 className="text-sm md:text-base">{ulasan.jabatan}</h1>
              </div>

              <div className="flex items-start justify-center">
                <Image
                  width={32}
                  height={98}
                  src="/testi/quote.png"
                  alt="testi"
                />

                <div className="max-w-xl mt-3">
                  <p>{ulasan.deskripsi}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-12">
            {testi.map((kata, urutan) => (
              <button
                key={urutan}
                onClick={() => {
                  ulasanTerpilih(kata);
                  setGambarTerpilih(urutan);
                }}
              >
                <Image
                  width={56}
                  height={56}
                  src={`/testi/${kata.gambar}`}
                  className={`border ${
                    gambarTerpilih === urutan
                      ? "w-[68px] h-[68px] rounded-full"
                      : "border-transparent"
                  }`}
                  alt={""}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;
