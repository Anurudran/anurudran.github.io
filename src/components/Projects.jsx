import React from 'react';

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
    <div>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link}>View on GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
