/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

// Node
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 hover:ring-1 hover:ring-indigo-400/50 active:bg-zinc-800 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover mb-4"
        />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center rounded-lg px-3 ring-1 ring-zinc-400/20"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-indigo-500 ring-1 ring-indigo-400">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>
      {console.log(projectLink)}
      <a href={projectLink} target="blank" className="absolute inset-0"></a>
    </div>
  );
};

ProjectCard.PropTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
