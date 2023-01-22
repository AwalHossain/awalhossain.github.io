import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const NotFound = () => {
  return (
    <section>
      <div className="m-5">
        <button className="btn" onClick={() => window.history.back()}>
          <BsArrowLeft className="inline" /> Back
        </button>
      </div>
      <div className="w-2/3 mx-auto">
        <img
          src="https://i.postimg.cc/5tS0BTtY/404-Error-Page-not-Found-with-people-connecting-a-plug-pana.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default NotFound;
