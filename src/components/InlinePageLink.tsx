"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import arrowRightOutline from "@iconify-icons/ant-design/arrow-right-outline";

interface InlinePageLinkProps {
  href: string;
  children: ReactNode;
}

const InlinePageLink = ({ href, children }: InlinePageLinkProps) => {
  return (
    <Link
      href={href}
      className="flex flex-row justify-center items-center gap-4 shadow shadow-dark-bg/50 rounded text-black w-full py-2 px-4 text-center bg-orange-300"
    >
      {children}
      <Icon icon={arrowRightOutline} />
    </Link>
  );
};

export default InlinePageLink;
