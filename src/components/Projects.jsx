import React from 'react';
import ProjectItem from './ProjectItem';
import pythongamesimg from "../assets/img1.png";
import twitterimg from "../assets/img2.png";


const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='sm:text-5xl text-4xl font-bold'>My Projects</h1>
      <p class="projects">
        These are some of the projects I have done. To view more projects you can check out my <a href="https://github.com/Anurudran" class="text-blue-500 underline" target="_blank">GitHub account</a>. Alternatively you can hover each of the projects below, click on "more info" button and can view the source code from there. 
      </p>
      <div class='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={pythongamesimg} title="Python Games" languages="Python" link ="https://github.com/Anurudran/Python-Games"/>
        <ProjectItem img={twitterimg} title="Twitter CRUD App" languages="Java" link ="https://github.com/Anurudran/Java-Projects/tree/main/core_java/twitter"/>
      </div>
    </div>
  );
};

export default Projects;
