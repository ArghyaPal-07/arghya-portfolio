export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  status?: "live" | "discontinued" | "building";
  projectBg: string;
};

export const projects: Project[] = [
  {
    id: 0,
    name:"Avela",
    description:"A cycle wellness app for tracking periods, moods, symptoms, and daily journals with personalized insights.",
    image: "/Project/ProjectImages/avela.png",
    link: "https://avela-tracker.vercel.app",
    github: "https://github.com/ArghyaPal-07/Avela",
    status: "live",
    projectBg:"/Project/ProjectBackground/avela.png",
  },
  {
    id: 1,
    name: "Valcerenne",
    description:
      "A multi-category e-commerce platform with product browsing, wishlists, shopping carts, and order management.",
    image: "/Project/ProjectImages/valcerenne.png",
    link: "https://valcerenne.vercel.app",
    github: "https://github.com/ArghyaPal-07/valcerenne",
    status: "live",
    projectBg: "/Project/ProjectBackground/valcerenne.png",
  },
  {
    id: 2,
    name: "Keylilt",
    description:
      "A minimalist typing platform for practicing speed and accuracy through interactive typing tests.",
    image: "/Project/ProjectImages/keylilt.png",
    link: "https://keylilt.vercel.app",
    github: "https://github.com/ArghyaPal-07/keylilt",
      status: "live",
      projectBg:"/Project/ProjectBackground/keylilt.png"
  },
  {
      id: 4,
      name: "Palma",
      description:
        "Interactive hand-tracking visual effects demo built with MediaPipe and browser-based webcam input, featuring animated HUD overlays and real-time gesture-driven visuals.",
      image: "/Project/ProjectImages/palma.png",
      link: "https://palma-effects.vercel.app",
    github: "https://github.com/ArghyaPal-07/palma",
      status: "live",
      projectBg:"/Project/ProjectBackground/palma.png"
  },
    {
      id: 5,
      name: "Readmefy",
      description:
        "Build beautiful, professional GitHub READMEs visually with drag-and-drop blocks, live previews, AI-assisted writing, templates, and one-click GitHub publishing.",
      image: "/Project/ProjectImages/readmefy.png",
      link: "https://readmefy-sand.vercel.app",
    github: "https://github.com/ArghyaPal-07/Readmefy",
      status: "live",
      projectBg:"/Project/ProjectBackground/readmefy.png"
  },
  {
      id: 6,
      name: "Sokoban",
      description:
        "A classic Sokoban puzzle game where players strategically push boxes onto designated target tiles while navigating maze-like levels.",
      image: "/Project/ProjectImages/sokoban.png",
      link: "https://github.com/ArghyaPal-07/sokoban/releases/tag/v1.0.0",
    github: "https://github.com/ArghyaPal-07/sokoban",
      status: "live",
      projectBg:"/Project/ProjectBackground/sokoban.png"
  }
];
