/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/project-1.jpg",
    title: "Em breve",
    tags: ["API", "MVC", "Development"],
    projectLink: "#",
  },
  {
    imgSrc: "/project-2.jpg",
    title: "Em breve",
    tags: ["API", "SPA"],
    projectLink: "#",
  },
  {
    imgSrc: "/project-3.jpg",
    title: "Em breve",
    tags: ["Development", "API"],
    projectLink: "#",
  },
  // {
  //   imgSrc: "/project-4.jpg",
  //   title: "Real state website",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee-org/wealthome",
  // },
  // {
  //   imgSrc: "/project-5.jpg",
  //   title: "eCommerce website",
  //   tags: ["eCommerce", "Development"],
  //   projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  // },
  // {
  //   imgSrc: "/project-6.jpg",
  //   title: "vCard Personal portfolio",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  // },
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
