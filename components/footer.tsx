import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-[60vh] lg:h-[50vh] w-screen bg-black px-10 lg:pl-32 pt-40 lg:pt-20">
      <div className="-mt-24">
        <h1 className="text-white text-4xl md:text-5xl md:max-w-[35rem]">Like our work? We build excellent apps and website.</h1>
        <h1 className="text-white text-3xl md:text-4xl mt-20">Drop us a message <span className="underline cursor-pointer">here</span></h1>
      </div>
      <div className="py-10">
        <ul className="flex  lg:flex-col justify-between  lg:h-32 w-[20rem] text-white text-2xl">
          <li className="cursor-pointer">LinkedIn</li>
          <li className="cursor-pointer">Twitter</li>
          <li className="cursor-pointer">Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
