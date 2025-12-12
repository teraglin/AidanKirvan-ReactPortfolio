export type SkillIndex =
  | "keyFrameworksAndTechnologies"
  | "expertise"
  | "creativeBackground";

export type ColumnValue = 1 | 2 | 3;

const keyFrameworksAndTechnologies: string[] = [
  "React / Next.js",
  "TypeScript",
  "React Native",
  "Storybook",
  "Tailwind CSS",
  "GraphQL & PostgreSQL"
];

const expertise: string[] = [
  "Component Libraries & Design Systems",
  "Ecommerce & SAAS Platforms",
  "Accessible UI Design",
  "Responsive Web Development",
  "Planning & Problem Solving",
  "Solution Design (Figma, DrawIO)"
];

const creativeBackground: string[] = [
  "Tabletop Game Design",
  "Illustration (Procreate, Photoshop)",
  "Music Production",
  "Sound Engineering"
];

export const skillsData: Record<
  SkillIndex,
  {
    title: string;
    skills: string[];
    cols: [ColumnValue, ColumnValue];
  }
> = {
  keyFrameworksAndTechnologies: {
    title: "Key Frameworks & Technologies",
    skills: keyFrameworksAndTechnologies,
    cols: [2, 3]
  },
  expertise: {
    title: "Expertise",
    skills: expertise,
    cols: [1, 2]
  },
  creativeBackground: {
    title: "Creative Background",
    skills: creativeBackground,
    cols: [1, 2]
  }
};
