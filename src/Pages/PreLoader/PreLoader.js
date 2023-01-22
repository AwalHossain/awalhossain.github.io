import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const PreLoader = () => {
  let [color, setColor] = useState("#4A4A4A");
  return (
    <div className="bg-red-400 h-screen w-screen flex justify-center items-center">
      <HashLoader color={color} size={80} />
    </div>
  );
};

export default PreLoader;
