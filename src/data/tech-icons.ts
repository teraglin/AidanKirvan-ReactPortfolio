import type { IconifyIcon } from "@iconify/react";
import html5 from "@iconify-icons/logos/html-5";
import css3 from "@iconify-icons/logos/css-3";
import typescriptIcon from "@iconify-icons/logos/typescript-icon";
import react from "@iconify-icons/logos/react";
import nextjsIcon from "@iconify-icons/logos/nextjs-icon";
import ruby from "@iconify-icons/logos/ruby";
import rails from "@iconify-icons/logos/rails";
import tailwindcssIcon from "@iconify-icons/logos/tailwindcss-icon";
import mui from "@iconify-icons/simple-icons/mui";
import sass from "@iconify-icons/logos/sass";
import graphql from "@iconify-icons/logos/graphql";
import postgresql from "@iconify-icons/logos/postgresql";
import storybookIcon from "@iconify-icons/logos/storybook-icon";
import figma from "@iconify-icons/logos/figma";
import stenciljs from "@iconify-icons/logos/stenciljs-icon";

export interface TechIcon {
  tech: string;
  icon: IconifyIcon;
}

export const techIcons: TechIcon[] = [
  {
    tech: "html",
    icon: html5
  },
  {
    tech: "css",
    icon: css3
  },
  {
    tech: "typescript",
    icon: typescriptIcon
  },
  {
    tech: "react",
    icon: react
  },
  {
    tech: "nextjs",
    icon: nextjsIcon
  },
  {
    tech: "ruby",
    icon: ruby
  },
  {
    tech: "rails",
    icon: rails
  },
  {
    tech: "tailwind",
    icon: tailwindcssIcon
  },
  {
    tech: "mui",
    icon: mui
  },
  {
    tech: "sass",
    icon: sass
  },
  {
    tech: "graphql",
    icon: graphql
  },
  {
    tech: "postgreSQL",
    icon: postgresql
  },
  {
    tech: "storybook",
    icon: storybookIcon
  },
  {
    tech: "stencil",
    icon: stenciljs
  },
  {
    tech: "figma",
    icon: figma
  }
];
