'use client';

import { useState } from "react";
import LandscapeWarning from "@/modules/LandscapeWarning";
import TabletopGame from "@/modules/TabletopGame";
import { tabletopGames } from "@/data/tabletopGames";
import PageLink from "@/components/PageLink";

export default function TabletopPageClient() {
  const [carouselPosition, setCarouselPosition] = useState(
    tabletopGames.games.map(() => 0)
  );

  function handleClick(gameIndex: number, direction: 'prev' | 'next') {
    const arr = [...carouselPosition];

    if (direction === "next") {
      arr[gameIndex]++;
    } else if (direction === "prev") {
      arr[gameIndex]--;
    } else {
      console.error(
        "No valid prev or next value for carousel button at TableTop.js"
      );
    }
    setCarouselPosition(arr);
  }

  return (
    <>
      <LandscapeWarning />
      <div className="w-screen text-white relative bg-orange landscape-hide">
        <div className="max-w-[1440px] mx-auto py-7 px-7 pb-[84px] flex flex-col gap-14 relative 3xl:py-14 3xl:px-14 3xl:pb-28">
          <PageLink
            alignment="left"
            color="#000000"
            background="#958ce1"
          >
            Home Page
          </PageLink>
          <h1 className="text-white bg-charcoal uppercase p-7 min-[600px]:p-14">
            Tabletop game designs by Aidan Kirvan:
          </h1>
          <div className="flex flex-col items-center gap-[212px] mt-[150px] 3xl:mt-0 3xl:gap-28">
            {tabletopGames.games.map(
              (game, gameIndex) =>
                !!game.displayOn && (
                  <TabletopGame
                    key={gameIndex}
                    gameIndex={gameIndex}
                    titleImage={game.titleImage}
                    title={game.title}
                    players={game.players}
                    time={game.time}
                    description={game.description}
                    images={game.images}
                    carouselPosition={carouselPosition}
                    handleClick={handleClick}
                    status={game.status}
                    statusColor={tabletopGames.statusColor[game.status]}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
