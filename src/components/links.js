import { BiLogoTypescript } from "react-icons/bi";
import {
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaReact,
  FaSquareJs,
  FaWordpress,
  FaGit,
} from "react-icons/fa6";
import { PiFacebookLogo, PiGithubLogo, PiInstagramLogo, PiLinkedinLogo, PiTelegramLogo } from "react-icons/pi";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const MProjects = [
   {
    name: "Qubefyn",
    Type: "next",
    image: "/projects/qubefyn.jpg",
    URL: "https://www.qubefyn.com/",
    code: "https://www.qubefyn.com/",
  },
  {
    name: "3aqarat",
    Type: "next",
    image: "/projects/3aqarat.png",
    URL: "https://3aqarat.vercel.app/",
    code: "https://github.com/MontagabAlHamawy/3aqarat",
  },
  {
    name: "DR-Needs",
    Type: "wordpress",
    image: "/projects/dr-needs.png",
    URL: "https://dr-needs.com/",
    code: "https://dr-needs.com/",
  },
  {
    name: "Dwana",
    Type: "wordpress",
    image: "/projects/dwana.png",
    URL: "https://dwana.net/",
    code: "https://dwana.net/",
  },
  {
    name: "Klinder-Design",
    Type: "wordpress",
    image: "/projects/klinder-design.png",
    URL: "https://klinder-design.com/",
    code: "https://klinder-design.com/",
  },
  {
    name: "Metaverse",
    Type: "next",
    image: "/projects/metaverse.png",
    URL: "https://metaverse.klinder-design.com/",
    code: "https://github.com/MontagabAlHamawy/Metaverse",
  },
  {
    name: "Next-Blog",
    Type: "next",
    image: "/projects/next-blog.png",
    URL: "https://klinder-blog.vercel.app/",
    code: "https://github.com/MontagabAlHamawy/Next-Blog",
  },
  {
    name: "React-Blog",
    Type: "react",
    image: "/projects/react-blog.png",
    URL: "https://montagabalhamawy.github.io/WP-React/",
    code: "https://github.com/MontagabAlHamawy/WP-React",
  },
  {
    name: "Sniper",
    Type: "static",
    image: "/projects/sniper.png",
    URL: "https://montagabalhamawy.github.io/Sniper/",
    code: "https://github.com/MontagabAlHamawy/Sniper",
  },
  {
    name: "Klinder",
    Type: "static",
    image: "/projects/klinder.png",
    URL: "https://montagabalhamawy.github.io/Klinder/",
    code: "https://github.com/MontagabAlHamawy/Klinder",
  },
  {
    name: "X-O Game",
    Type: "static",
    image: "/projects/x-o.png",
    URL: "https://montagabalhamawy.github.io/X-O-Game/",
    code: "https://github.com/MontagabAlHamawy/X-O-Game",
  },
  {
    name: "Notes",
    Type: "static",
    image: "/projects/note.png",
    URL: "https://montagabalhamawy.github.io/Notes/",
    code: "https://github.com/MontagabAlHamawy/Notes",
  },
];

export const ProgramS = [
  { name: "HTML", Experience: 93, icon: <FaHtml5 /> },
  { name: "CSS", Experience: 90, icon: <FaCss3 /> },
  { name: "JS", Experience: 68, icon: <FaSquareJs /> },
  { name: "TS", Experience: 25, icon: <BiLogoTypescript /> },
  { name: "React", Experience: 20, icon: <FaReact /> },
  { name: "Next.js", Experience: 35, icon: <SiNextdotjs /> },
  { name: "Bootstrap", Experience: 55, icon: <FaBootstrap /> },
  { name: "Tailwind", Experience: 67, icon: <SiTailwindcss /> },
  { name: "WordPress", Experience: 40, icon: <FaWordpress /> },
  { name: "Git", Experience: 53, icon: <FaGit /> },
];
export const Languages = [
  { name: "Arabic", Experience: 70, icon: <div>Ar</div> },
  { name: "English", Experience: 1, icon: <div>En</div> },
];

export const HeadData = [
  {
    name: "Facebook",
    path: "https://facebook.com/montagab.alhamawy/",
    icon: <PiFacebookLogo />,
  },
  {
    name: "Instagram",
    path: "https://instagram.com/m0ntagab/",
    icon: <PiInstagramLogo />,
  },
  {
    name: "Telegram",
    path: "https://t.me/M0ntagab/",
    icon: <PiTelegramLogo />,
  },
  {
    name: "Github",
    path: "https://github.com/MontagabAlHamawy/",
    icon: <PiGithubLogo />,
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/montagab-alhamawy/",
    icon: <PiLinkedinLogo />,
  },
];
