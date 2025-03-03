import { techImages } from "../data/projects"

export default function TechStack() {
  return (
    <div className="my-16">
        <h1 className="heading text-white capitalize text-center text-2xl md:text-3xl lg:text-5xl font-semibold my-10">
        My Tech{" "}
        <span className="text-purple-500">Skills</span>
      </h1>
      <div className="flex gap-20 flex-wrap items-center justify-center p-2">
        {
            techImages.map((item)=>(
                <div key={item.id} className="flex flex-col gap-2 items-center">
                    <img src={item.image} alt="tech_images"  className="w-10 lg:w-20"/>
                    <span className="font-medium text-purple-200 text-sm uppercase">
                        {item.text}
                    </span>
                </div>
            ))
        }
      </div>
    </div>
  )
}
