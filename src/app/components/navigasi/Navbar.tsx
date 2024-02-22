import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto p-5 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href="#home" className="flex items-center font-semibold">
            <h1 className="text-[#FF8F00]">akr</h1>
            <h1 className="text-[#4E4E4E]">123</h1>
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
            <div className=" flex items-center gap-5 font-semibold">
              <Link href="#product" className="text-[#2E2E2E]">
                Product
              </Link>
              <Link href="#customer" className="text-[#2E2E2E]">
                Customer
              </Link>
              <Link href="#price" className="text-[#2E2E2E]">
                Pricing
              </Link>
            </div>

            <div className="flex items-center gap-5 pt-2 md:pt-0">
              <button className="bg-[#FF8F01] py-2 px-4 md:py-4 md:px-10 rounded-lg">
                <h1 className="text-[#2E2E2E] font-semibold">
                  Get Started Free
                </h1>
              </button>

              <button className="bg-[#565656] py-2 px-4 md:py-4 md:px-10 rounded-lg">
                <h1 className="text-white font-semibold">Schedule Demo</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
