import React from "react";
import ClientLogos from "./client-logos";

const TrustedBy = () => { 
  return (
    <div className="bg-white min-h-[80vh] flex flex-col justify-center gap-16 md:gap-32">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-semibold md:text-5xl mb-20">Trusted by the apps you use.</h1>
        <ClientLogos />
      </div>
    </div>
  );
};

export default TrustedBy;
