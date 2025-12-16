import React, { ReactNode } from "react";

interface CopyBoxProps {
  title: string;
  copy: ReactNode[];
  className?: string;
}

const CopyBox = ({ title, copy, className }: CopyBoxProps) => {
  return (
    <div
      className={`w-full flex flex-col text-black bg-white border-2 border-white leading-relaxed shadow-card lg:w-auto ${className}`}
    >
      <h3 className="text-xl py-2 px-4 bg-charcoal text-white">{title}</h3>
      <div className="text-base p-4 [&_div:not(:last-child)]:border-b [&_div:not(:last-child)]:border-black [&_div:not(:last-child)]:pb-4 [&_div:not(:last-child)]:mb-4">
        {copy.map((p) => p)}
      </div>
    </div>
  );
};

export default CopyBox;
