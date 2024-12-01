import React from "react";

const Hero = () => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8 py-10 relative">
      <div className="relative inline-block">
        <img
          src="/victor.jpeg"
          alt="Victor Ndemo"
          className="rounded-full border border-gray-300 shadow-xl transition-transform hover:scale-105 w-[150px] h-[150px] object-cover"
        />
        <div className="absolute -bottom-2 -right-2 flex items-center bg-white rounded-full pl-1 pr-2 py-1 shadow-md">
          <span className="relative flex h-2.5 w-2.5 mr-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-gray-700">Available</span>
        </div>
      </div>
      <div className="space-y-4 max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800">I'm Victor, <br/> <span className="text-indigo-500"> a Full Stack Developer</span></h1>
        <p className="text-gray-600 leading-relaxed text-base">
          With 3 years of commercial experience and a bachelor's degree in Computer Science, 
          I'm a Full Stack Developer passionate about creating accessible, user-centric interfaces 
          that deliver exceptional user experiences.
        </p>
      </div>
    </div>
  );
};

export default Hero;