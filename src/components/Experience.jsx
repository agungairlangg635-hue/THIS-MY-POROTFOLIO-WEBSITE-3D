import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #15102a 100%)",
        color: "#fff",
        border: "1px solid rgba(145, 94, 255, 0.2)",
        boxShadow: "0 10px 40px rgba(145, 94, 255, 0.15)",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #915EFF" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px #915EFF, 0 0 20px rgba(145, 94, 255, 0.5)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.institution}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold leading-tight">
          {experience.title}
        </h3>
        <p
          className="text-[#a78bfa] text-[16px] font-semibold mt-1"
          style={{ margin: 0 }}
        >
          {experience.institution}
        </p>
      </div>

      <div className="experience-scroll mt-5 max-h-[280px] overflow-y-auto pr-2">
        <ul className="list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider leading-[1.7] marker:text-[#915EFF]"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

      {experience.link && (
        <div className="mt-5">
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-gradient-to-r from-[#915EFF] to-[#7c3aed] hover:shadow-lg hover:scale-105 transition-all font-bold py-2 px-5 rounded-lg uppercase text-[13px] tracking-wider"
          >
            See More
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <style>{`
        .experience-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .experience-scroll::-webkit-scrollbar-track {
          background: rgba(145, 94, 255, 0.05);
          border-radius: 10px;
        }
        .experience-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #915EFF, #7c3aed);
          border-radius: 10px;
        }
        .experience-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #a78bfa, #915EFF);
        }
        .experience-scroll {
          scrollbar-width: thin;
          scrollbar-color: #915EFF rgba(145, 94, 255, 0.05);
        }
      `}</style>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Project Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(145, 94, 255, 0.3)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");