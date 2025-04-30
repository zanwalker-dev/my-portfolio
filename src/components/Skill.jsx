/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

// Components
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/postgresql-logo-svgrepo-com.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Hard Skills</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Ferramentas e tecnologias que me ajudam a desenvolver soluções no meu
          dia a dia para softwares, sites e aplicações em geral.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
