import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import prodigy from "../assets/prodigy.jpg";
import codsoft from "../assets/codesoft.jpg";

export default function TimeLineComp() {
  return (
    <div className='p-3 mt-5 cursor-pointer'>
    <h1 className='text-white capitalize text-center text-2xl md:text-3xl lg:text-5xl font-semibold my-10'><span className='text-purple-600'>Experience</span></h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  #ec4899' }}
    contentStyle={{ background: '#ec4899', color: '#fff' }}
    date="Jan 2025 - Present"
    iconStyle={{ background: '#ec4899', color: '#fff' }}
    icon={
        <img src={prodigy} alt='Prodigy Logo' title='Prodigy Logo' className='w-15 h-15 rounded-full flex items-center justify-center'/>
    }
  >
    <h3 className="vertical-timeline-element-title">Prodigy Infotech</h3>
    <h4 className="vertical-timeline-element-subtitle flex items-center gap-1 text-sm"><FaLocationDot/>Shepetivka, Ukraine</h4>
    <p>
      Role : Blockchain developer<br/>
      Job Type : Freelancer<br/>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  #ec4899' }}
    contentStyle={{ background: '#ec4899', color: '#fff' }}
    date="Feb 2022 - Dec 2024"
    iconStyle={{ background: '#ec4899', color: '#fff' }}
    icon={
        <img src={prodigy} alt='Prodigy Logo' title='Prodigy Logo' className='w-15 h-15 rounded-full flex items-center justify-center'/>
    }
  >
    <h3 className="vertical-timeline-element-title">Prodigy Infotech</h3>
    <h4 className="vertical-timeline-element-subtitle flex items-center gap-1 text-sm"><FaLocationDot/>Shepetivka, Ukraine</h4>
    <p>
      Role : Full Stack Developer<br/>
      Job Type : Employee of Rocking Tech<br/>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  #ef4444' }}
    contentStyle={{ background: '#f97316', color: '#fff' }}
    date="June 2018 - Nov 2021"
    iconStyle={{ background: '#ef4444', color: '#fff' }}
    icon={
        <img src={codsoft} alt='Prodigy Logo' title='CodSoft Logo' className='w-15 h-15 rounded-full flex items-center justify-center'/>
    }
  >
    <h3 className="vertical-timeline-element-title">CodSoft</h3>
    <h4 className="vertical-timeline-element-subtitle flex items-center gap-1 text-sm"><FaLocationDot/>Shepetivka, Ukraine</h4>
    <p>
      Role : Web Developer<br/>
      Job Type : Employee of Qubit Labs<br/>
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  )
}
