import { BackgroundBeams } from "../lib/AuroraBackground";
import { Button } from "../lib/MovingBorder";
import resume from "../assets/VITALII-VLASIUK-FlowCV-Resume.pdf";
import { Link } from "react-router-dom";



export default function HeroSection() {
  return (
    <div className="h-[40rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased ">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-2xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hi, I Am <u>VITALII</u><hr/><span className="text-purple-600">FULL STACK</span> DEVELOPER
        </h1>
      <p></p>
        <p className="text-neutral-500 max-w-xl mx-auto my-6 text-sm text-center relative z-10">
          As a passionate MERN stack developer, I specialize in building dynamic
          and responsive web applications. With expertise in 
          <span className="text-purple-600"> Express.js, React, Next, Node.js, MongoDB</span>
         I create seamless and efficient
          solutions tailored to client needs.
        </p>
      
      </div>
      <BackgroundBeams />
      <div className="flex gap-10">
      <Button className="relative z-20">
        <a href={resume} download className="px-10 py-4 cursor-pointer text-white  rounded-md">
         Resume
        </a>
      </Button>
      <Button>
        <Link to={"https://github.com/Alpha-Coder23"}  target="_blank"  className="px-10 py-4 cursor-pointer text-white  rounded-md">Github</Link>
      </Button>
      </div>
    </div>
  );
}
