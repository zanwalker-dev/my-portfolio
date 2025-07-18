/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

// node
import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-indigo-50/10 rounded-2xl p-3 hover:ring-1 hover:ring-indigo-400 hover:bg-indigo-400/20 transition-colors group " +
        classes
      }
    >
      <figure className="bg-zinc-700/50 w-12 h-12 p-2 rounded-lg overflow-hidden group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>
      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.PropTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classe: PropTypes.string,
};

export default SkillCard;
