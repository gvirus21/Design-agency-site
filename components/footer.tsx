import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-[50vh] w-screen bg-black pl-32 pt-20">
      <div className="-mt-24">
        <h1 className="text-white text-5xl max-w-[35rem]">Like our work? We build excellent apps and website.</h1>
        <h1 className="text-white text-4xl mt-20">Drop us a message <span className="underline cursor-pointer">here</span></h1>
      </div>
      <div className="py-10">
        <ul className="flex flex-col justify-between h-32 w-[20rem] text-white text-2xl">
          <li className="cursor-pointer">LinkedIn</li>
          <li className="cursor-pointer">Twitter</li>
          <li className="cursor-pointer">Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
