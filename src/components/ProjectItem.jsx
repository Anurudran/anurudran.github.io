import React from 'react';


const ProjectItem = ({img, title, languages, link}) => {
    return(
        <div className= "relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <img class="rounded-xl group-hover:opacity-10" src={img}/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <h3 class="text-2xl font-bold text-white tracking-wider text-center mx-auto">
                    {title}
                </h3>
                <p class="pb-4 pt-2 text-white text-center">
                    {languages}
                </p>
                <a href={link} target="_blank">
                    <p class="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"> More Info </p>
                </a>
            </div>
        </div>
    );
};

export default ProjectItem;

