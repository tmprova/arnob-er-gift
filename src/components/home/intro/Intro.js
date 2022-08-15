import React from "react";

const Intro = () => {
  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <div className="flex flex-col items-end space-y-10 px-20"> 
        <h1 className="text-8xl font-semibold text-blue-800 mb-2">Marketiers</h1>
        <h2 className="text-5xl font-semibold text-orange-800">One for all</h2> <br/>
        <h2 className="text-4xl font-semi-bold">All for one</h2>
        <button className="px-12 py-4 bg-orange-400 text-xl text-white rounded  hover:bg-blue-600">Have a look</button>
      </div>
      <div className="p-5">
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_4zh4wnhp.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Intro;
