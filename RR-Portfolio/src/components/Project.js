import React from "react";
// import ProjectList from '../components/ProjectList.js';
// import { capitalizeFirstLetter } from '../utils/helpers';

function Project({ project }) {
  const { name, description, link, repo } = project;
  return (
    <section className="project" key={name}>
      <img
        src={require(`../assets/projects/${name}.png`)}
        alt={name}
        className="project-bg"
      />
      {/* <h1>{capitalizeFirstLetter(currentCategory.title)}</h1> */}
      {/* <p>{currentCategory.description}</p> */}
      {/* <ProjectList category={currentCategory.title} />     */}
      <div className="project-texts">
        <h3>
          <a href={link}>{name}</a>
          <a href={repo}>Github</a>
        </h3>
        <p>{description}</p>
      </div>
    </section>
  );
}
export default Project;