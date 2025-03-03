
import { FloatingNav } from "../lib/FloatingNavbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { AiOutlineProject } from "react-icons/ai";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "hero",
      smooth : true,
      duration:500,
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "contact",
      smooth : true,
      duration:500,
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  
    {
      name: "Project",
      link: "project",
      smooth : true,
      duration:500,
      icon: (
        <AiOutlineProject className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Tech SKills",
      link: "skills",
      smooth : true,
      duration:500,
      icon: (
        <FaCode className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full cursor-pointer">
      <FloatingNav navItems={navItems} />
    </div>
  );
}