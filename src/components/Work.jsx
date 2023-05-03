import React from "react"
import WorkItem from "./WorkItem";
import '../App.css';



const Work = () => {

    const data = [
        {
            year:"2020-2021",
            title: 'Jr Software Engineer Co-op (Ontario Public Service)',
            duration: "8 Months",
            details: 
            "Developed Test scripts using Java and Selenium to automate the web pages onto different web browsers to test the functionality of the website and used Git for deployment of our code. Researched and Developed a new way in doing load testing to ensure the websites can handle traffic overload and not crash. Improved code work flow by making dynamic test scripts and used SQL for storage of databases"
        },
        {
            year: 2019,
            title: "Web Developer Co-op (Public Services and Procurement Canada)",
            duration: "4 Months",
            details:
            "Worked in a waterfall style project management using Jira with a group of 6 co-workers to deliver the annual financial activities made by the country viewed by millions. Used Adobe Dreamweaver and Cold Fusion to maintain and test the intranet, extranet and internet websites, reducing client frustration by 20%. Communicated effectively with clients by producing clarity and depth responses to significantly reduce turnaround back and forth communication"
        },
        {
            year:2019,
            title: "Senior QA Specialist Co-op (CIBC Digital)",
            duration: "4 Months",
            details:
            "Used Adobe Experience Manager and eBanking platform to test changes made on the CIBC and Simplii website that are viewed by millions. Coordinated with team members through email and on Jira to efficiently and effectively test, send changes, publish to production and retest in production in a span of 1 hour. Effectively tested new pages and variety of change requests varying from 5-50 changes to reduce reopening issues on a daily basis"
        }
    ]
    return (
        <div id="work" class="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="sm:text-5xl text-4xl font-bold"> Work</h1>
            {data.map((work, id) => (
                <WorkItem key={id} year={work.year} title={work.title} duration={work.duration} details={work.details} />
            ))}
        </div>
    );

};

export default Work;

