import React from "react";
import Bounce from "react-reveal/Bounce";

const BuyCoffe = () => {
  return (
    <Bounce right>
      <div>
        <h1 className="text-center mt-12 mb-6 text-2xl">
          If you like my work, you can{" "}
          <a
            className="text-blue-500 font-semibold hover:underline"
            href="https://github.com/coderboy-raiyan"
            target="_blank"
            rel="noreferrer"
          >
            buy me a coffee
          </a>{" "}
          and share your thoughts 🎉☕
        </h1>
      </div>
    </Bounce>
  );
};

export default BuyCoffe;
