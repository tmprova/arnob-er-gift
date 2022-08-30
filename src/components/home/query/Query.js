import React from "react";

const Query = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-7xl font-semibold text-blue-800">
        Why <b className="text-orange-600">Marketing</b>?!?
      </h1>
      <div className="h-[500px]">
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_vno7myug.json"
          background="transparent"
          speed="1"
          loop
          //   controls
          autoplay
        ></lottie-player>
      </div>
      <div className="px-5 text-center">
        <p className="text-gray-500 text-md px-20 mt-10">
          Do you know what your targeted population want? Do you think people
          trust your products? When was the last time you saw netizens hyping
          about your product or service?has it gone viral?is it on the trending
          list?? Was it a complaint or compliment?
        </p>
        <h1 className="text-blue-800 text-4xl font-semibold mt-10 mx-auto text-center">
          The answers to all these questions lie in marketing.
        </h1>
        <p className="text-gray-600 text-md mt-10 px-20">
          How you market your business determines if the enterprise will be
          successful or not. Marketing is a tool used to create and maintain
          demand, relevance, reputation, competition and more. Without it, your
          business is likely to close down due to lack of sales.
        </p>
      </div>
    </div>
  );
};

export default Query;
