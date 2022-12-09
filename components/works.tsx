import React from "react";
import { TileWrapper, TileBackground, TileContent, Tile } from "./tile";
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
                <div>We built 0</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Pink Panda&apos;s app
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div className="bg-pink-600 h-[30rem] w-[30rem]"></div>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We built 1</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Pink Panda&apos;s app
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div className="bg-pink-600 h-[30rem] w-[30rem]"></div>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We built 3</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Pink Panda&apos;s app
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <div className="bg-pink-600 h-[30rem] w-[30rem]"></div>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;