
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer} from "../lib/ThreeDPin";
import { projects } from "../data/projects";
import bg from "../assets/bg.png";



const ProjectSection = () => {
  return (
    <div className="py-20">
      <h1 className="heading text-white capitalize text-center text-2xl md:text-3xl lg:text-5xl font-semibold">
        A small section of{" "}
        <span className="text-purple-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="Visit"
              href={item?.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src={bg} alt="bgimg" />
                </div>
                <img
                  src={item.image}
                  alt="cover"
                  className="z-10 absolute bottom-0 pt-2 pl-2 pr-2 overflow-hidden"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1 text-purple-100">
                {item.title}
              </h1>

              <p
                className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item?.iconsImage?.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon?.iconData} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-sm font-medium md:text-xs text-sm text-purple-200">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection
