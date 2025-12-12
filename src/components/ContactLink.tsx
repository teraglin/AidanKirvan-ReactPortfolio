"use client";

import { Icon } from "@iconify/react";
import type { IconifyIcon } from "@iconify/react";
import windowNew from "@iconify-icons/fluent/window-new-20-filled";

interface ContactLinkProps {
  icon: IconifyIcon;
  link: string;
  title: string;
}

const ContactLink = ({ icon, link, title }: ContactLinkProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="flex w-full justify-center bg-gradient-to-r from-green to-purple no-underline shadow-card group"
    >
      <Icon
        style={{
          borderRadius: 10,
          width: 100,
          height: 100,
          minWidth: 100,
          padding: 8
        }}
        icon={icon}
      />
      <span className="text-purple flex w-full justify-center items-center font-bold text-2xl leading-8 p-2 m-1 bg-black gap-2 transition-colors duration-200 group-hover:p-2.5 group-hover:text-white group-hover:bg-transparent lg:text-[32px] lg:leading-[38px]">
        {title} <Icon icon={windowNew} style={{ height: 24, width: 24 }} />
      </span>
    </a>
  );
};

export default ContactLink;
