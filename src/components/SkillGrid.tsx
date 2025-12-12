import React from "react";
import { ColumnValue } from "@/data/skills";

interface SkillGridProps {
  title: string;
  skills: string[];
  cols?: {
    default: ColumnValue;
    large: ColumnValue;
  };
}

const SkillGrid = ({ title, skills, cols }: SkillGridProps) => {
  return (
    <>
      <h3 className="inline-block p-2 uppercase">{title}</h3>
      <div
        className={`w-full grid grid-cols-${
          cols?.default || 2
        } gap-2.5 lg:grid-cols-${cols?.large || 3}`}
      >
        {skills.map((skill) => (
          <div className="text-white p-4 bg-dark-bg border border-white rounded shadow-card text-center">
            {skill}
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillGrid;
