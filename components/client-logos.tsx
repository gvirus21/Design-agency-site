import React from "react";
import Image from "next/image";
import LogoSlider, {SliderItem} from "./logoslider";

const ClientLogos: React.FC = () => {
  return (
    <>
      <LogoSlider className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/google.png"
            alt="logo"
            objectFit="contain"
            height={50}
            width={150}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/apple-music.png"
            alt="logo"
            objectFit="cover"
            height={100}
            width={220}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/amazon.png"
            alt="logo"
            objectFit="contain"
            height={50}
            width={150}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/netflix.png"
            alt="logo"
            objectFit="contain"
            height={50}
            width={150}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/youtube.png"
            alt="logo"
            objectFit="contain"
            height={50}
            width={150}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/lg.png"
            alt="logo"
            objectFit="cover"
            height={50}
            width={150}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/marvel.png"
            alt="logo"
            objectFit="contain"
            height={50}
            width={150}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/prime-music.png"
            alt="logo"
            objectFit="contain"
            height={50}
            width={150}
          />
        </SliderItem>
      </LogoSlider>
    </>
  );
};

export default ClientLogos;
