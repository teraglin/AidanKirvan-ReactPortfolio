const LandscapeWarning = () => {
  return (
    <div className="hidden flex-1 w-screen h-screen bg-green text-white fixed top-0 left-0 z-[100] animate-pulse-shadow landscape-show">
      <h1 className="text-center [text-shadow:4px_4px_0px_theme(colors.purple)] animate-twitch">
        You wouldn&apos;t like me when I&apos;m landscape
      </h1>
    </div>
  );
};

export default LandscapeWarning;
