'use client';

import Image from "next/image";
import { Icon } from "@iconify/react";
import windowNew from '@iconify-icons/fluent/window-new-20-filled';

interface ProjectsCardProps {
  projectName: string;
  image: string;
  description: string;
  link: string;
}

const ProjectsCard = (props: ProjectsCardProps) => {
  const { projectName, image, description, link } = props;

  return (
    <div className="flex flex-col w-auto bg-white shadow-card overflow-hidden p-0.5 gap-0.5">
      <div className="text-white bg-black px-2 py-1 font-bold font-[family-name:var(--font-source-code-pro)]">
        {">_" + projectName}
      </div>
      <div className="flex flex-col w-full gap-0.5 lg:flex-row">
        <Image
          src={image}
          alt={projectName}
          width={500}
          height={236}
          className="w-auto min-h-[235.48px] lg:w-1/2 lg:min-w-[50%] bg-white"
        />
        <div className="flex flex-col w-full justify-between gap-0.5 p-0.5">
          <p className="p-4 bg-black h-full w-full font-[family-name:var(--font-source-code-pro)]">
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-cyan no-underline inline-block w-full bg-gradient-to-r from-green to-purple group"
          >
            <button className="cursor-pointer border-none w-[calc(100%-4px)] h-[calc(100%-4px)] p-2 text-purple font-bold flex flex-row items-center justify-center gap-2 m-0.5 bg-black transition-colors duration-200 group-hover:text-white group-hover:bg-transparent">
              CLICK HERE TO CHECK IT OUT{" "}
              <Icon
                icon={windowNew}
                style={{ height: 24, width: 24 }}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
