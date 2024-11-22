import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-black h-screen w-full">
      <div className="flex ">
        <div className="bg-black hidden md:flex lg:flex xl:flex  md:w-[20%] lg:w-[20%] xl:w-[20%] h-auto text-white px-[20px] py-[40px]">
          <div className="flex flex-col gap-y-2 fixed pt-[100px]">
            <Link to="/home">Home</Link>
            <Link to="/html">HTML5</Link>
            <Link to="/css">CSS</Link>
            <Link to="/javascript">JavaScript</Link>
            <Link to="/react">React</Link>
            <Link to="/frontend">FrontEnd Developer</Link>
          </div>
        </div>

        <div className="bg-black w-full md:w-[80%] lg:w-[80%] xl:w-[80%] h-auto text-white px-[20px] py-[40px]"></div>

      </div>
    </div>
  );
};
