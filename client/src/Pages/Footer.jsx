import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-slate-900 p-5">
        <div className="flex flex-col gap-2 md:flex-row justify-between max-w-[1200px] mx-auto font-medium">
        <div className="text-white text-xs md:text-sm">
         Developed By Vitalii using MERN STACK
        </div>
        
        </div>
    </div>
  )
}
