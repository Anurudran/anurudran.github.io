import React from 'react';

const ProjectItem = ({img, title}) => {
    return(
        <div className= "relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <div>
                <img src={img}/>
            </div>
            <div>
                <h3>
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default ProjectItem;

// relative flex items-center justify-center h-auto w-full shadow-xl shadow-grey-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]