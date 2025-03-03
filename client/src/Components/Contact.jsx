import { SparklesCore } from "../lib/Sparkle";

import { Button } from "../lib/MovingBorder";
import exp1 from "../assets/exp1.svg";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";
import ContactForm from "../Pages/ContactForm";

export function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("vlasiukvitalii54@gmail.com");
    setEmailCopied(true);
    const id = setTimeout(() => {
      setEmailCopied(false);
    }, 4000);
    return () => clearTimeout(id);
  };

  return (
    <div>
      <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="flex flex-col gap-3 items-center justify-center p-2">
          <h1 className="text-white text-center text-2xl md:text-3xl lg:text-5xl font-semibold capitalize">
            <span className="text-purple-500">Ready </span>to take your digital{" "}
            <br /> presence to the{" "}
            <span className="text-purple-500">next level</span> ?
          </h1>
          <span className="text-white capitalize my-3 text-center text-xs sm:text-sm">
            Reach Out to me today and let's discuss how can i help you achieve
            your goals
          </span>
        </div>

        <div className="w-[40rem] h-12 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}

          {/* Radial Gradient to prevent sharp edges */}
          {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
        </div>
      </div>
      {/* contact form and github globe */}

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>

        <div className="flex justify-center p-2 flex-1 mt-5">
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 w-[400px] md:w-[570px] h-[200px] mx-auto"
          >
            <div className="flex gap-10 md:gap-16 items-center p-2">
              <div>
                <img src={exp1} alt="" />
              </div>
              <div>
                <p className="font-semibold text-sm md:text-xl">
                  Do You Want To Start A Project Together
                </p>
                <p
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-3 w-[200px] p-2 text-center rounded-lg mt-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
                >
                  {emailCopied ? (
                    "Email Copied ❤️😶‍🌫️"
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaCopy /> Copy Email Address
                    </span>
                  )}
                </p>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
