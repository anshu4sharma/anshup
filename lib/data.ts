import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
// 5
import photometa from "@/public/photometa.png";
import swapfry from "@/public/swapfry.png";
import eonstarter from "@/public/eonstarter.png";
import avtarwallet from "@/public/avtarwallet.png";
import bitwallet from "@/public/bitwallet.png";
import cardanogpt from "@/public/cardanogpt.png";
import randomz from "@/public/randomz.png";
import mjcmlm from "@/public/mjcmlm.png";
import bitlocus from "@/public/bitlocus.png";
import bdv from "@/public/bdv.png";
import lagold from "@/public/lagold.png";
import bitcoinverse from "@/public/bitcoinverse.png";
import rijex from "@/public/rijex.png";
import swipekaro from "@/public/swipekaro.png";
import taroverse from "@/public/taroverse.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I worked as a front-end developer for 1 years as a freelancer. My stack includes Html, Css, Javascript, React Js, Bootstrap , Redux Toolkit. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Node js, Express Js, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

let isFullStack = "I had worked as a Full Stack Developer on this project, i had also created admin dashboard for it";
let isReactStack = "I had worked as a Front End Developer on this project , my work was to convert the figma template into React or Next Js Code ";

export const projectsData = [
  {
    title: "Bitlocus",
    description:
      "I had worked as a Front End developer on this crypto project.",
    tags: ["React", "Next.js", "Tailwind", "Typescipt"],
    imageUrl: bitlocus,
  },
  {
    title: "Randomz",
    description: isFullStack,
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Node js",
      "Express Js",
      "Typescipt",
    ],
    imageUrl: randomz,
  },
  {
    title: "Swapfry",
    description: isFullStack,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux",
      "Express Js",
      "Node Js",
      "Typescipt",
    ],
    imageUrl: swapfry,
  },
  {
    title: "Cardanogpt",
    description:
      isReactStack +
      " i had also integrated cardano wallet into this project .",
    tags: ["React", "Cardano Blockchain", "Tailwind", "Web3", "Typescipt"],
    imageUrl: cardanogpt,
  },
  {
    title: "MJC Mlm",
    description: isReactStack,
    tags: ["Next.js", "Mongodb", "Tailwind", "Node Js", "Typescipt"],
    imageUrl: mjcmlm,
  },
  {
    title: "Eonstarter",
    description:
      isReactStack + " also added wallet integration into this project.",
    tags: ["Next.js", "Web3", "Tailwind", "Framer", "Typescipt"],
    imageUrl: eonstarter,
  },
  {
    title: "Tactics Royale",
    description: isReactStack,
    tags: ["React", "Web3", "Tailwind", "Framer", "Typescipt"],
    imageUrl: taroverse,
  },
  {
    title: "Rijex",
    description: isReactStack,
    tags: ["React", "Tailwind", "Redux Toolkit", "Typescipt"],
    imageUrl: rijex,
  },
  {
    title: "Photometa",
    description: isFullStack,
    tags: [
      "React",
      "Next.js",
      "Mongodb",
      "Tailwind",
      "Express Js",
      "Node Js",
      "Nginx",
      "Typescipt",
    ],
    imageUrl: photometa,
  },
  {
    title: "SwipeKaro",
    description: "A Mobile app for collaboration",
    tags: ["React Native", "Typescipt"],
    imageUrl: swipekaro,
  },
  {
    title: "BDV (Ecommerce App)",
    description: isReactStack,
    tags: [
      "Next.js",
      "Tailwind Css",
      "Headless Ui",
      "Framer Motion",
      "Typescipt",
    ],
    imageUrl: bdv,
  },
  {
    title: "Bitcoinverse",
    description: isReactStack,
    tags: ["React", "Tailwind", "Web3", "Typescipt"],
    imageUrl: bitcoinverse,
  },
  {
    title: "La Gold Company",
    description: isReactStack,
    tags: ["Next.js", "Tailwind Css", "Headless Ui", "Framer", "Typescipt"],
    imageUrl: lagold,
  },
  {
    title: "Avtar Wallet",
    description:
      "I had worked as a Full Stack Developer on this project . Avtar wallet is a web3 wallet for binance chain",
    tags: [
      "React",
      "Mongodb",
      "Web3",
      "Node Js",
      "Express Js",
      "Tailwind",
      "Nginx",
      "Typescipt",
    ],
    imageUrl: avtarwallet,
  },
  {
    title: "Bit Wallet",
    description:
      "I had worked as a frontend Developer on this project. Bit Wallet is web3 Wallet for Polygon chain",
    tags: ["React", "Polygon Chain", "Tailwind", "Web3", "Typescipt"],
    imageUrl: bitwallet,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Git",
  "Tailwind",
  "Apollo GraphQL",
  "Prisma",
  "React Native",
  "Redux",
  "Express",
  "Nginx",
  "PostgreSQL",
  "Prisma",
  "Zustand",
  "Framer Motion",
  "Redux Toolkit",
  "Docker",
  "Podman",
  "Aws",
  "Rust",
] as const;
