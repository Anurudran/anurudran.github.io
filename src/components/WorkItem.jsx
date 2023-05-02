import React from "react"

const WorkItem = ({year, title, duration, details}) => {
    return (
        <ul class="workitem">
            <li class="item">
                <p class="work">
                    <span class="tag">{year}</span>
                    <span class="title">{title}</span>
                    <span class="duration">{duration}</span>
                </p>
                <p class="details">{details}</p>
            </li>
        </ul>
    );
};

export default WorkItem;

//inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md