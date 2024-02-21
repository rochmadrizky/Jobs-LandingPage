import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="p-4 sticky top-0 left-0 right-0 z-10">
      <div className="container mx-auto pt-8 md:pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href="#" className="flex items-center">
            <h1 className="text-[#FF8F00]">akr</h1>
            <h1 className="text-[#4E4E4E]">123</h1>
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
            <div className=" flex items-center gap-5">
              <Link href="#" className="text-[#2E2E2E]">
                Product
              </Link>
              <Link href="#" className="text-[#2E2E2E]">
                Customer
              </Link>
              <Link href="#" className="text-[#2E2E2E]">
                Pricing
              </Link>
            </div>

            <div className="flex items-center gap-5 pt-2 md:pt-0">
              <button className="bg-[#FF8F01] py-2 px-4 md:py-4 md:px-10 rounded-lg">
                <h1 className="text-[#2E2E2E]">Get Started Free</h1>
              </button>

              <button className="bg-[#565656] py-2 px-4 md:py-4 md:px-10 rounded-lg">
                <h1 className="text-white">Schedule Demo</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
