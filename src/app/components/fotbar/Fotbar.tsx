import React from "react";

const FotBar = () => {
  const Tahun = new Date().getFullYear();

  return (
    <div className="max-w-7xl mx-auto p-4 bottom-0 bg-[#1C1C1D]">
      <h1 className="text-center text-white">
        Copyright &copy; {Tahun} All rights reserved.
      </h1>
    </div>
  );
};

export default FotBar;
