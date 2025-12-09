'use client';

import Link from "next/link";
import { Icon } from "@iconify/react";

interface PageLinkProps {
  href?: string;
  alignment?: 'left' | 'right';
  color?: string;
  background?: string;
  avoidNav?: boolean;
  children?: React.ReactNode;
}

const PageLink = (props: PageLinkProps) => {
  const { href, alignment, color, background, avoidNav, children } = props;

  const isLeft = alignment === 'left';
  const isRight = !alignment || alignment === 'right';

  const linkClasses = `
    no-underline absolute shadow-[0px_0px_12px_rgba(0,0,0,0.5)] z-[9] overflow-hidden
    ${avoidNav ? 'top-12' : 'top-0'}
    ${isRight ? 'right-0 rounded-bl' : 'left-0 rounded-br'}
  `;

  return (
    <Link
      href={href || "/"}
      className={linkClasses}
      style={{ color: color || 'black' }}
    >
      <button
        className="border-none p-2.5 cursor-pointer font-bold flex flex-row justify-center items-center"
        style={{ background: background || 'white', color: color || 'black' }}
      >
        {isRight && children}
        <Icon
          style={{ height: "10px", marginLeft: isRight ? "8px" : undefined, marginRight: isLeft ? "8px" : undefined }}
          icon={`line-md:arrow-${alignment || "right"}`}
        />
        {isLeft && children}
      </button>
    </Link>
  );
};

export default PageLink;
