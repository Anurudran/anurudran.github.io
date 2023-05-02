import React from 'react';
import ProjectItem from './ProjectItem';
import pythongamesimg from "../assets/img1.png";
import twitterimg from "../assets/img2.png";


const Projects = () => {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1>My Projects</h1>
      <p class="projects">
        This is some of the projects I have done. To view more projects I have done check out my <a href="https://github.com/Anurudran" class="text-blue-500 underline">GitHub account</a>.
      </p>
      <div class='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={pythongamesimg} title="Python Games" languages="Python" link ="https://github.com/Anurudran/Python-Games"/>
        <ProjectItem img={twitterimg} title="Twitter CRUD App" languages="Java" link ="https://github.com/Anurudran/Java-Projects/tree/main/core_java/twitter"/>
      </div>
    </div>
  );
};

export default Projects;
// text-center py-8