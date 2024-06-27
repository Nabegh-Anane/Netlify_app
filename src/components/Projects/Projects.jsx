import React from "react";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  const ReadMoreClick = () => {
    // Handle the download action here
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <Link to={`/projects`}><button className={styles.showMoreBtn} onClick={ReadMoreClick}><span>Show More Projects</span></button></Link>
    </section>
  );
};

export default Projects;
