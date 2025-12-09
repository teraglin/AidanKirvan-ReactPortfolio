"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import previousFilled from '@iconify-icons/carbon/previous-filled';
import previousOutline from '@iconify-icons/carbon/previous-outline';
import nextFilled from '@iconify-icons/carbon/next-filled';
import nextOutline from '@iconify-icons/carbon/next-outline';

interface TabletopGameProps {
  gameIndex: number;
  titleImage: string;
  title: string;
  players: string;
  time: string;
  description: string;
  images: string[];
  carouselPosition: number[];
  handleClick: (gameIndex: number, direction: "prev" | "next") => void;
  status: string;
  statusColor: string;
}

const TabletopGame = (props: TabletopGameProps) => {
  const {
    gameIndex,
    titleImage,
    title,
    players,
    time,
    description,
    images,
    carouselPosition,
    handleClick,
    status,
    statusColor
  } = props;

  return (
    <div
      key={gameIndex}
      className="w-full flex flex-col h-[calc(56px*12)] xs:w-[400px] 3xl:w-full 3xl:flex-row 3xl:h-[calc(56px*6)]"
    >
      {/* Game Title Container */}
      <div className="relative w-full h-1/2 p-0 xs:p-7 3xl:p-14 3xl:w-1/2 3xl:h-full">
        {titleImage !== "" && (
          <div className="absolute top-[-150px] left-0 z-[2] w-full flex flex-col justify-center items-center 3xl:w-auto 3xl:top-[calc(50%-100px)] 3xl:left-0">
            <Image
              src={titleImage}
              alt={`${title} cover art`}
              width={200}
              height={200}
              className="h-[200px] w-auto shadow-title border-2 border-charcoal rounded bg-white"
            />
          </div>
        )}
        <div className="absolute h-full top-0 left-0 w-full p-0 bg-charcoal border border-white [clip-path:polygon(50%_15%,100%_0,100%_100%,50%_100%,0_100%,0%_0%)] flex flex-col justify-start items-center xs:left-[10%] xs:w-4/5 xs:px-7 3xl:justify-center 3xl:w-full 3xl:[clip-path:polygon(0_0,100%_0%,100%_100%,56px_100%)] 3xl:left-14">
          <div className="w-full flex flex-col items-center mt-[74px] 3xl:mt-0">
            <h1 className="text-center px-2 rounded mb-1 bg-white text-charcoal shadow-title">
              {title}
            </h1>
            <p className="text-white text-center w-auto py-1 px-2 rounded">
              {players} players | {time} minutes
            </p>
            <p className="w-[258px] my-4 mx-auto text-black bg-white p-4 shadow-title rounded">
              {description}
            </p>
            <span
              className="py-1 px-2 mt-[-12px] rounded text-charcoal shadow-[−5px_12px_24px_rgba(0,0,0,0.5)] uppercase text-xs font-bold border border-white"
              style={{ background: statusColor }}
            >
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* Game Image Container */}
      <div className="relative w-full h-1/2 3xl:w-1/2 3xl:h-full">
        {/* Ribbon Triangle - only visible on desktop */}
        <div className="hidden absolute top-0 left-[-56px] h-14 w-28 [clip-path:polygon(100%_0,0%_100%,100%_100%)] bg-gradient-to-br from-white from-50% to-gray-300 3xl:block" />

        {images.length > 0 && (
          <>
            <button
              aria-label={`previous button for ${title} images`}
              onClick={() => handleClick(gameIndex, "prev")}
              disabled={carouselPosition[gameIndex] === 0}
              className="absolute text-charcoal bg-orange h-14 w-14 bottom-[-28px] left-4 z-[2] flex justify-center items-center rounded-full border-none cursor-pointer sm:bottom-[calc(50%-28px)] sm:left-[-28px] 3xl:bottom-[-28px] 3xl:left-[-84px]"
            >
              <Icon
                style={{ width: "100%", height: "100%" }}
                icon={
                  carouselPosition[gameIndex] !== 0
                    ? previousFilled
                    : previousOutline
                }
              />
            </button>
            <button
              aria-label={`next button for ${title} images`}
              onClick={() => handleClick(gameIndex, "next")}
              disabled={
                images?.length === 0 ||
                carouselPosition[gameIndex] === images.length - 1
              }
              className="absolute text-charcoal bg-orange h-14 w-14 bottom-[-28px] right-4 z-[2] flex justify-center items-center rounded-full border-none cursor-pointer sm:right-[-28px] sm:bottom-[calc(50%-28px)] 3xl:bottom-[-28px] 3xl:right-[76px]"
            >
              <Icon
                style={{ width: "100%", height: "100%" }}
                icon={
                  images?.length !== 0 &&
                  carouselPosition[gameIndex] !== images.length - 1
                    ? nextFilled
                    : nextOutline
                }
              />
            </button>
          </>
        )}
        <div className="static w-full h-full border border-white bg-charcoal [clip-path:polygon(50%_0,100%_0,100%_100%,50%_85%,0_100%,0%_0%)] flex justify-center items-center overflow-hidden 3xl:[clip-path:polygon(0_0,100%_0%,calc(100%-56px)_100%,0%_100%)] 3xl:absolute 3xl:top-14 3xl:left-[-56px]">
          {images.length > 0 ? (
            images.map(
              (image, imageIndex) =>
                imageIndex === carouselPosition[gameIndex] && (
                  <Image
                    key={imageIndex}
                    src={image}
                    alt={`${title} image ${gameIndex + 1}`}
                    width={500}
                    height={300}
                    className="h-full w-auto ml-0 animate-fade-quick 4xl:h-auto! 4xl:w-[110%]!"
                  />
                )
            )
          ) : (
            <p className="w-full text-center">
              Sorry!
              <span className="block">
                There are no images to share for this design yet...
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabletopGame;
