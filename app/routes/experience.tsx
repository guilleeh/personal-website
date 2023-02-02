import ExperienceItem from "~/components/ExperienceItem";
import { education, experienceItems, skills } from "~/constants/menus";

export default function ExperiencePage() {
  return (
    <div className="md:flex md:justify-start">
      <main className="p-6 pt-10 lg:pt-0 ">
        <div className="pb-12 mt-5">
          <p className="font-bold text-3xl py-2">Education</p>
          {education.map((item, index) => (
            <ExperienceItem
              key={item.title}
              title={item.title}
              context={item.context}
              showLeftLine={index !== education.length - 1}
            />
          ))}
        </div>
        <div className="pb-12 mt-5">
          <p className="font-bold text-3xl py-2">Experience</p>
          {experienceItems.reverse().map((item, index) => (
            <ExperienceItem
              key={item.title}
              title={item.title}
              context={item.context}
              description={item.description}
              showLeftLine={index !== experienceItems.length - 1}
            />
          ))}
        </div>
        <div className="pb-12 mt-5">
          <p className="font-bold text-3xl py-2">Skills</p>

          <ul className="list-disc md:columns-5 columns-2 mx-6">
            {skills.map((skill) => (
              <li key={skill} className="text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
