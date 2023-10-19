import { Info } from "@/types";

export const homeLinks = [
  {
    name: "Leonardo",
    href: "/leonardo",
  },
  {
    name: "Angel",
    href: "/angelmtzr",
  },
] as const;

export const portfolioLinks = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Resume",
    hash: "#about",
  },
] as const;

export const angelInfo: Info = {
  name: "Angel Martinez",
  profession: "Systems Engineer",
  imageUrl: "/angel.jpg",
};

export const leoInfo: Info = {
  name: "Leonardo Lopez",
  profession: "Animation Engineer",
  imageUrl: "/leonardo.jpg",
};

export const angelProjects = [
  {
    title: "Computational Geometry",
    description:
      "A computational geometry package focused on solving common engineering problem applications.",
    tags: ["Python", "Matplotlib"],
    imageUrl: "/geometry.png",
  },
  {
    title: "Visual Threads",
    description:
      "A desktop application that demonstrates in a creative way how computer threads work.",
    tags: ["Java", "Swing"],
    imageUrl: "/threads.jpeg",
  },
  {
    title: "Web Calculator",
    description:
      "A conventional web app calculator with different color themes that can compute basic arithmetic operations.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/web-calculator.png",
  },
];

export const leoProjects = [
  {
    title: "Robot Filter",
    description:
      "An live camera robot filter that reacts in accordance with your facial expressions.",
    tags: ["Instagram", "Image Processing"],
    imageUrl: "/filtro-instagram.png",
  },
  {
    title: "Environment",
    description:
      "A realistic render of a forest and river environment that uses particle generation.",
    tags: ["Maya", "Python"],
    imageUrl: "/render-maya.png",
  },
  {
    title: "Roblox Lobby",
    description:
      "An interactive lobby that interacts with other videogames inside the Roblox platform.",
    tags: ["Roblox", "Lua"],
    imageUrl: "/roblox-game.png",
  },
];
