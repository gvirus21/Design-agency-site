import React from "react";
import { TileWrapper, TileBackground, TileContent, Tile } from "./tile";
import Image from "next/image";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./Work";

const Works = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We helped building</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Google&apos;s Maps app
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div className="md:h-[30rem] md:w-[30rem] lg:h-[50rem] lg:w-[30rem]">
                  <img src="/assets/apps/maps.png" 
                  className="object-contain" />
                </div>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We helped building</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Apple&apos;s Music app
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
              <div className="md:h-[30rem] md:w-[30rem] lg:h-[50rem] lg:w-[30rem]">
                  <img src="/assets/apps/apple-music.png" 
                  className="object-contain" />
                </div>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We helped building</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Netfllix&apos;s Player
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
              <div className="md:h-[30rem] md:w-[30rem] lg:h-[50rem] lg:w-[30rem]">
                  <img src="/assets/apps/netflix-app.png" 
                  className="object-contain" />
                </div>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
