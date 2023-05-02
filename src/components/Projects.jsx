import React from 'react';
import ProjectItem from './ProjectItem';
import pythongamesimg from "../assets/img1.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'React Portfolio',
      description: 'A portfolio website built with React and React Router.',
      link: 'https://google.ca',
    },
    {
      id: 2,
      title: 'Node.js Blog',
      description: 'A simple blog website built with Node.js and Express.',
      link: 'https://google.ca',
    },
  ];

  return (
    <div class="custom-work">
      <h1>My Projects</h1>
      <p class="projects">
        This is some of the projects I have done. To view more projects I have done check out my GitHub account.
      </p>
      <div class="projectitem">
        <ProjectItem img={pythongamesimg} title="Python Games"/>

      </div>
    </div>
  );
};

export default Projects;
// text-center py-8