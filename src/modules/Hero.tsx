'use client';

import { techIcons } from "@/data/tech-icons";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <div
      id="top"
      className="w-full scroll-mt-16 flex flex-col h-screen items-center justify-center gap-8 lg:justify-between lg:gap-0 lg:flex-row"
    >
      <div className="w-full flex flex-col items-start justify-center lg:w-1/2">
        <div className="flex flex-col mx-auto lg:mx-0">
          <h1 className="inline-block border-2 border-white p-2 uppercase mx-auto text-[32px] xl:text-[42px] max-[699px]:mt-[68px]">
            Aidan Kirvan
          </h1>
          <span className="inline-block bg-white text-charcoal p-2 uppercase mx-auto w-full text-center text-base font-bold">
            Frontend Developer
          </span>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-start gap-6 h-fit max-w-[300px] lg:w-1/2 lg:justify-end lg:max-w-[500px]">
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className="w-16 h-16 rounded-[25%] p-2 aspect-square shadow-icon bg-black border-2 border-white"
          >
            <Icon
              icon={icon.icon}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
