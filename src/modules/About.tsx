import CopyBox from "@/components/CopyBox";
import SkillGrid from "@/components/SkillGrid";
import Image from "next/image";
import type { SkillsData, Experience } from "@/lib/types";

interface AboutProps {
  skills: SkillsData;
  experience: Experience[];
}

const About = ({ skills, experience }: AboutProps) => {
  return (
    <div id="about" className="flex flex-col w-full gap-4 scroll-mt-16">
      <h2 className="inline-block border-b-2 border-white p-2 uppercase">
        ABOUT ME
      </h2>

      {/* SHORT BIO WITH PHOTO */}
      <div className="w-full flex flex-col justify-between items-center gap-4 lg:gap-8 lg:flex-row lg:mb-2.5">
        <div className="flex justify-center items-center w-3/4 h-[280px] lg:w-auto lg:h-[200px] xl:h-[230px]">
          <Image
            alt="profile"
            src="https://res.cloudinary.com/djdozfiqv/image/upload/v1765422568/Profpic_fm57d6.jpg"
            width={230}
            height={230}
            className="rounded-full h-full min-w-[280px] min-h-[280px] lg:min-w-[200px] lg:min-h-[200px] xl:min-w-[230px] xl:min-h-[230px] w-auto bg-white"
          />
        </div>
        <CopyBox
          title=">_Hello! I'm Aidan :)"
          copy={[
            <div>
              <p>
                I am a frontend developer with full-stack training, currently
                specialising in <strong>TypeScript</strong> and{" "}
                <strong>Next.js</strong>. I build ecommerce platforms, design
                systems, and component libraries that enhance user engagement
                and streamline development across teams.
              </p>
            </div>
          ]}
          className="lg:w-auto"
        />
      </div>

      {/* EXPERIENCE & SKILLS */}
      <CopyBox
        title=">_RECENT PROFESSIONAL EXPERIENCE"
        copy={experience
          .sort((a, b) => a.order - b.order)
          .map((exp) => (
            <div key={exp.id}>
              <h4 className="font-bold text-lg">
                {exp.jobTitle} at {exp.company}
              </h4>
              <p className="text-sm text-gray-600 mb-2">{exp.dateRange}</p>
              <ul className="text-base list-disc list-inside space-y-1">
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
      />

      {Object.keys(skills).map((key) => {
        const record = skills[key];
        return (
          <SkillGrid
            key={key}
            title={record.title}
            skills={record.skills}
            cols={{ default: record.cols[0], large: record.cols[1] }}
          />
        );
      })}

      {/* RESUME DOWNLOAD */}
      <div className="w-full flex flex-col gap-3 mt-2">
        <h3 className="inline-block p-2 uppercase">RESUME</h3>
        <a
          href="/api/resume"
          className="w-full px-4 py-3 bg-blue text-black font-bold text-center rounded hover:bg-opacity-90 transition-opacity shadow-card"
        >
          Download My Resume (PDF)
        </a>
      </div>
    </div>
  );
};

export default About;
