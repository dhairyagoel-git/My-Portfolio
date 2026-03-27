//Project Preview Images
import covid from "../public/img/projects-preview/covid-19.png";
import instagram from "../public/img/projects-preview/instagram-clone.png";
import ment from "../public/img/projects-preview/ment-ally.png";
import shrinkit from "../public/img/projects-preview/shrinkit.png";
import svaasthy from "../public/img/projects-preview/svaasthy.png";
import whatsapp from "../public/img/projects-preview/whatsapp-clone.png";
import weather from "../public/img/projects-preview/weather.png";
import chess_app from "../public/img/projects-preview/chess.png";
import MernAuth from "../public/img/projects-preview/mernauth.png"
import SimonSaysGame from "../public/img/projects-preview/SimonSaysGame.png"
import FitnessAppLandingPage from "../public/img/projects-preview/FitnessAppLandingPage.png"
import FireGuard from "../public/img/projects-preview/FireGuard.png"
import HomeListings from "../public/img/projects-preview/HomeListingSite.png"
import Home from "../pages";

interface projects_data_type {
  name: string;
  tags: string[];
  description: string;
  github: string;
  demo: string;
  link: any;
}

export const projects_data: projects_data_type[] = [
  {
    name: "MernAuth",
    tags: ["React.js", "Node.js", "Javascript", "Express.js"],
    description:
      "Engineered a MERN stack authentication system leveraging JWT for secure user login, logout, and session management.",
    github: "https://github.com/dhairyagoel-git/MernAuth",
    demo: "",
    link: MernAuth,
  },
  {
    name: "Chess Engine",
    tags: ["React.js", "Javascript"],
    description:
      "Designed and developed a chess application with real-time gameplay, efficient move validation, and a seamless user experience.",
    github: "https://github.com/dhairyagoel-git/chess",
    demo: "",
    link: chess_app ,
  },
  {
    name: "SimonSaysGame",
    tags: ["HTML","CSS",   "Javascript"],
    description:
      "Developed a Simon Says game featuring interactive gameplay, dynamic sequence generation, and responsive user controls.",
    github: "https://github.com/dhairyagoel-git/SimonSaysGame",
    demo: "",
    link: SimonSaysGame ,
  },
  {
    name: "FitnessAppLandingPage",
    tags: ["HTML","CSS","Javascript"],
    description:
      "Developed a responsive fitness app landing page with modern design, clear call-to-actions, and engaging visuals.",
    github: "https://github.com/dhairyagoel-git/Fitness_app_landing_page",
    demo: "",
    link: FitnessAppLandingPage ,
  },
  {
    name: "FireGuard",
    tags: ["React.js", "Node.js", "Javascript", "Express.js"],
    description:
      "FireGuard is a smart fire detection and alert system designed to provide early warnings in case of a fire emergency.",
    github: "https://github.com/dhairyagoel-git/FireGuard-SDG",
    demo: "",
    link: FireGuard ,
  },
  {
    name: "HomeListingWebsite",
    tags: ["React.js", "Node.js", "Javascript", "Express.js"],
    description:
      "FireGuard is a smart fire detection and alert system designed to provide early warnings in case of a fire emergency.",
    github: "https://github.com/dhairyagoel-git/AirBnbClone",
    demo: "",
    link: HomeListings ,
  },
];
