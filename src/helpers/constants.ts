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
    link: "https://valcerenne.vercel",
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
];
