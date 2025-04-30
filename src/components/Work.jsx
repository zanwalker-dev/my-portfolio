/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/project-1.jpg",
    title: "Coming soon",
    tags: ["React", "API", "Development"],
    projectLink: "#",
  },
  {
    imgSrc: "/project-2.jpg",
    title: "Coming soon",
    tags: ["API", "SPA", "Full Stack"],
    projectLink: "#",
  },
  {
    imgSrc: "/project-3.jpg",
    title: "Coming soon",
    tags: ["Development", "Full Stack", "SPA"],
    projectLink: "#",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Alguns projetos</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
