"use client";

import { useState } from "react";
import LandscapeWarning from "@/modules/LandscapeWarning";
import TabletopGame from "@/modules/TabletopGame";
import PageLink from "@/components/PageLink";
import type { GamesData } from "@/lib/types";

interface TabletopPageClientProps {
  gamesData: GamesData;
}

export default function TabletopPageClient({
  gamesData
}: TabletopPageClientProps) {
  const sortedGames = [...gamesData.games].sort((a, b) => a.order - b.order);

  const [carouselPosition, setCarouselPosition] = useState(
    sortedGames.map(() => 0)
  );

  function handleClick(gameIndex: number, direction: "prev" | "next") {
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
      <div className="w-screen text-white relative bg-orange-100 landscape-hide">
        <div className="max-w-360 mx-auto py-14 px-7 pb-21 flex flex-col gap-14 relative 3xl:py-14 3xl:px-14 3xl:pb-28">
          <PageLink alignment="left" color="#000000" background="#958ce1">
            Home Page
          </PageLink>
          <h1 className="text-dark-bg border-b-2 text-lg font-bold md:text-2xl border-dark-bg uppercase px-7 py-3 min:px-14 md:py-7">
            Here are some tabletop games I make for fun:
          </h1>
          <div className="flex flex-col items-center gap-53 mt-37.5 3xl:mt-0 3xl:gap-28">
            {sortedGames.map(
              (game, gameIndex) =>
                !!game.displayOn && (
                  <TabletopGame
                    key={game.id}
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
                    statusColor={gamesData.statusColor[game.status]}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
